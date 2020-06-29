const Razorpay = require('razorpay');
const args = require('yargs').argv;
const mailservices = require('tinnat-mailservices')
const { RAZORPAY_PAYMENT_COMPLETE_NOTIFICATION } = require('../lib/constants/logging-constants');
const {
    ENVIRONMENT_PRODUCTION,
    COMPLETED,
    RAZORPAY,
    MAILSERVICE
} = require('../lib/constants')
const InstantPurchaseModal = require('../modals/InstantPurchaseModal');
const errorConstants = require('../lib/constants/error-constants');
const apiMessages = require('../lib/constants/api-messages');
const config = require('../lib/config.json');
const environment = args.env || ENVIRONMENT_PRODUCTION;

const razorpayPaymentComplete = async (req, res) => {
    console.log(RAZORPAY_PAYMENT_COMPLETE_NOTIFICATION, `processing request to complete payment for order id: ${req.params.id}.`);
    console.log(RAZORPAY_PAYMENT_COMPLETE_NOTIFICATION, `razorpay payment complete received: ${JSON.stringify(req.body)}.`);
    const instantPurchaseModal = new InstantPurchaseModal();
    instantPurchaseModal.load(req.params.id);
    if (!instantPurchaseModal.getOrderId()) {
        return res.status(404).send({
            error: errorConstants.ORDER_NOT_FOUND
        });
    }
    if (instantPurchaseModal.getPaymentInformation() &&
        instantPurchaseModal.getPaymentInformation().status === COMPLETED) {
        return res.status(400).send({
            error: errorConstants.PAYMENT_ALREADY_COMPLETED
        });
    }
    const { payment_id, order_id, signature } = req.body;
    if (!payment_id || !order_id || !signature) {
        return res.status(402).send({
            error: errorConstants.RAZORPAY_PAYMENT_FAILED
        });
    }
    const razorPay = new Razorpay({
        key_id: config.razorpay[environment].api_key,
        key_secret: config.razorpay[environment].api_secret
    });
    return razorPay
        .payments
        .fetch(payment_id)
        .then(async response => {
            console.log(RAZORPAY_PAYMENT_COMPLETE_NOTIFICATION, `payment information fetched from razorpay: ${JSON.stringify(response)}`);
            if (response && response.id && response.order_id) {
                await instantPurchaseModal.updatePaymentDetails({
                    status: COMPLETED,
                    transaction_id: payment_id,
                    processor: RAZORPAY,
                    processor_order_id: order_id,
                    others: {
                        signature: signature
                    }
                });
                const service = await mailservices.build(MAILSERVICE.NOREPLY);
                const order = instantPurchaseModal.getOrder();
                const to = instantPurchaseModal.getPersonalInformation() && instantPurchaseModal.getPersonalInformation().email;
                if (to) {
                    service.send(to, 'Payment received', JSON.stringify(order));
                }
                return res.status(200).send({
                    ...apiMessages.PAYMENT_COMPLETED,
                    ...instantPurchaseModal.getOrder(),
                });
            } else {
                return res.status(400).send({
                    ...apiMessages.PAYMENT_FAILED
                });
            }
        })
        .catch(error => {
            console.log(RAZORPAY_PAYMENT_COMPLETE_NOTIFICATION, `error receiving payment information from razorpay: ${JSON.stringify(error)}`);
            return res.status(400).send({
                ...apiMessages.PAYMENT_FAILED
            });
        });
};

module.exports = razorpayPaymentComplete;
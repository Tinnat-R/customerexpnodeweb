(this.webpackJsonpcustomerexpnodeweb=this.webpackJsonpcustomerexpnodeweb||[]).push([[0],{184:function(e,t,a){e.exports=a.p+"static/media/banner.0a9a5ccd.jpg"},186:function(e,t,a){e.exports=a.p+"static/media/tinnat-logo-white.f00ef63f.png"},187:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAALVBMVEX////d3d3e3t76+vrm5ub39/fw8PDq6ur5+fn09PTj4+Po6Ojx8fHt7e3a2toQQ3xJAAADG0lEQVR4nO3c2XabMBRAUesCBjHo/z+3DMYBM2NTuOLsruYpZeVECFsC9/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbu+ZhYfJ7Nl1czJ3JBOf3Tctd+YwUn2Jzi6cFB+YXnHPswsnxU6a0TlCeehLpx/V3SD9itp0+Tkt6S5Oop9KQi3p5uc/YUw66RdEOum/PLDO9OQZZ1nx3cJDZXqSiXHlH0m/WW1rTLed1UzxxYH1pb/K5dt2felB2lvDyu4Jry/9abrEhbsPrC49dd1RFyPJ3gNrSw8GOzb53gNrS08G6XsvdOrSo/umD0f9Nif8I+xf4Y0Eew+sLj3vXeGNyxaPkESjvx196UHa26Jdem1L4lREwpFZoS/9Y7YvzPRCXruaw5WOwvRH9B53J/Plyes7ZeyVQGP6IyjKRasr53w2f7Zb6c2NrD/lVaaX8bYoinzh2h7Jx42bsPcPlKavkaTvc70963vt/qZ/vBIMx93b9LJ8eGtaTGeJ6216NnGD9m/cfU2fKjcmbds9TY+nwjvtfqYXk93yd857mf6cLK/bXTPuPqbnM+Wdc97DdDv7xJXUf6tz3r/0+fLOuHuXPty7m2r3LX1tuXFh2JwdvqSvLq80M8OX9HDT84XiU3q1ibGRL+nNBX5Tvj/pzXTfEK84Pfrcam12Z/xPLye3S5/9Tbpo0wP0WtNtNcLOSNx7tsJumew604POsjzs7s/OLd28SLf1xuN7hLvnfeZWn/MK0+shlza9/ipFe0uietZoZbu+9Dxte99fqhtR8SveejvqSTZWIZ341W9plaXPvl2VuJrzdmW5rvQoNPPv16T63rVvbBSlB8XnXcRBeX03fXRKqE63Y7fSBu3lS50/l7nmJwzm7i3sc/30etRtumlR5k/6AUOuI72oZ7mYjTsRHqTXn0HtfQjgNumHIf2KSCf9XunHll86/cajvn6bzbf04uBRN9f9X6iGH3b5KZfu/QDJfxCFywG7LT1XfrbgQGe3AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKf7By+xMJ47g2q0AAAAAElFTkSuQmCC"},191:function(e,t,a){e.exports=a(418)},210:function(e,t){},212:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},312:function(e,t){},403:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){e.exports=a.p+"static/media/tshirt.9e44ceb5.jpg"},415:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(183),i=a(73),o=a(24),s=a(25),l=a(27),u=a(26),m=a(28),d=a(38),p=a(184),f=a.n(p),A=function(){return c.a.createElement("div",{className:"in-content-wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("img",{width:"100%",src:f.a})))},v=a(185),E=a.n(v),N=a(71),h=a.n(N),b=a(72),g=function(){return E.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){h()({uri:b.production.api.v1_get_featured_products.uri,method:"GET",headers:{"X-TINNAT-SECURITY-CONTEXT":JSON.stringify({userId:"admin",key:"tinnat"})}},(function(t,a,n){n=JSON.parse(n||"{}"),console.log(JSON.stringify(n)),n&&n.featured?e(n.featured):e([])}))})));case 1:case"end":return e.stop()}}))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={featured:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){return e.setState({featured:t})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"in-content-wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content-header"},c.a.createElement("span",{className:"header-large"},"Featured Products")),c.a.createElement("div",{className:"in-content-wrapper"},this.state.featured.map((function(e,t){return c.a.createElement("div",{onClick:function(){return window.open("/product/".concat(e.id))},key:t,className:"l-item"},c.a.createElement("div",{className:"p-widget"},c.a.createElement("img",{src:e.picture_links[0],height:"200px",width:"200px"}),c.a.createElement("div",{className:"p-widget-header"},e.name),c.a.createElement("div",{className:"p-widget-info"},e.cost.currency," ",e.cost.amount)))})),0===this.state.featured.length&&c.a.createElement("div",null," There are no featured products"),c.a.createElement("div",{className:"clear"}))))}}]),t}(n.Component),w=function(){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},c.a.createElement("span",{className:"header-large"},"Welcome to ",c.a.createElement("span",{className:"highlight-text"},"T"),"he ",c.a.createElement("span",{className:"highlight-text"},"INN"),"ovative ",c.a.createElement("span",{className:"highlight-text"},"AT"),"tire")),c.a.createElement("div",{className:"text-content"},"Tinnat.com, a.k.a The Innovative Attire is an innovative e-commerce website built in and for Indian customers with love. Shop for T-shirts, Jeans, Accessories and many other stuffs for the best prices and quality.")))},x=function(){return c.a.createElement("div",null,c.a.createElement(A,null),c.a.createElement(O,null),c.a.createElement(w,null))},y=a(186),T=a.n(y),S=(a(403),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header-content-wrapper"},c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{onClick:function(){return window.location="/"},className:"logo"},c.a.createElement("img",{src:T.a,height:"45px",width:"80px"})),c.a.createElement("div",{className:"menu"},c.a.createElement("div",{onClick:function(){return window.location="/"},className:"menu-item"},"Home"),c.a.createElement("div",{onClick:function(){return window.location="/about"},className:"menu-item"},"About"),c.a.createElement("div",{onClick:function(){return window.location="/products"},className:"menu-item"},"Products"),c.a.createElement("div",{onClick:function(){return window.location="/contact"},className:"menu-item"},"Help"),c.a.createElement("div",{onClick:function(){return window.location="/contact"},className:"menu-item"},"Contact"),c.a.createElement("div",{onClick:function(){return window.location="/contact"},className:"menu-item"},c.a.createElement("i",{className:"material-icons"},"add_shopping_cart"),"\xa0 (0)"),c.a.createElement("div",{className:"clear"})),c.a.createElement("div",{className:"clear"})))}}]),t}(n.Component)),j=(a(404),function(e){return c.a.createElement("div",{className:"footer"},"\xa9 2020 Tinnat Inc. All rights reserved.")}),k=(a(405),function(e){return new Promise((function(t,a){h()({uri:b.production.api.v1_get_product_by_id.uri+e,method:"GET",headers:{"X-TINNAT-SECURITY-CONTEXT":JSON.stringify({userId:"admin",key:"tinnat"})}},(function(e,a,n){n=JSON.parse(n||"{}"),console.log(JSON.stringify(n)),n&&n.error?t(null):t(n)}))}))}),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).selectButton=function(e){for(var t=a.state.buttons,n=0;n<t.length;n++)t[n].key===e?(t[n].selected=!0,a.props.onSelect(t[n].name)):t[n].selected=!1;a.setState({buttons:t})},a.state={buttons:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.defaultButton,t=this.props.buttons.map((function(t,a){return{key:a,name:t,selected:t===e}}));this.setState({buttons:t})}},{key:"render",value:function(){var e=this,t=this.state.buttons;return 0===t.length?c.a.createElement("div",null):c.a.createElement("div",{className:"btn-grp-section"},t.map((function(t,a){return c.a.createElement("button",{key:a,onClick:function(){return e.selectButton(t.key)},className:"btn-group-single ".concat(t.selected?"btn-group-single-selected":"")},t.name)})))}}]),t}(n.Component),_=function(e){var t=e.cost,a=e.discount,n=parseInt(t.amount),r=parseInt(a.value),i=n;return"INSTANT"===a.type&&(i=n-r),"PERCENTAGE"===a.type&&(i=n-n*r/100),c.a.createElement("div",{className:"amount-section"},c.a.createElement("span",{className:"final-amount-text"}," ",t.currency," ",i," "),"\u2002",c.a.createElement("span",{className:"original-amount-text"},t.currency," ",n),"\u2002",c.a.createElement("span",{className:"amount-offer-text"},"\xa0","INSTANT"===a.type?"".concat(t.currency," ").concat(r," off"):"".concat(r,"% off")))},X=a(187),P=a.n(X),J=a(188),B={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,onChange:function(e,t){console.log("slide transition from ".concat(e," to ").concat(t))}},I=function(e){var t=e.images,a=void 0===t?[]:t;return 0===a.length&&a.push(P.a),c.a.createElement("div",null,c.a.createElement(J.Slide,B,a.map((function(e,t){return c.a.createElement("div",{className:"product-image"},c.a.createElement("img",{src:e}))}))))},D=function(e){return c.a.createElement("i",{className:"material-icons"},e.name)},R=function(e){return c.a.createElement("button",{style:{background:e.color},className:"t-large-btn"},c.a.createElement(D,{name:e.icon}),"\u2002",e.name)},L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={productinfo:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.productid;k(t).then((function(t){return e.setState({productinfo:t})}))}},{key:"render",value:function(){var e=this.state.productinfo;return e?c.a.createElement("div",{className:"incontent-wrapper"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content-6 rigid-content-6"},c.a.createElement(I,{images:e.picture_links}),c.a.createElement(R,{name:"ADD TO CART",color:"#2874f0",icon:"add_shopping_cart"}),c.a.createElement(R,{name:"BUY NOW",color:"#fb641b",icon:"trending_up"})),c.a.createElement("div",{className:"content-6 rigid-content-6"},c.a.createElement("div",{className:"t-box"},c.a.createElement("div",{className:"t-h2"},e.name),c.a.createElement("div",{className:"t-h4"},e.description)),c.a.createElement("div",{className:"t-box under-line"},c.a.createElement(_,{cost:e.cost,discount:e.discount})),c.a.createElement("div",{className:"t-box under-line"},c.a.createElement("div",{className:"content-3"},c.a.createElement("span",{className:"t-h4"},"Size")),c.a.createElement(C,{onSelect:function(){},defaultButton:e.default_size,buttons:e.available_sizes}),c.a.createElement("div",{className:"clear"})),c.a.createElement("div",{className:"t-box under-line"},c.a.createElement("div",{className:"content-3"},c.a.createElement("span",{className:"t-h4"},"Color")),c.a.createElement(C,{onSelect:function(){},defaultButton:e.default_color,buttons:e.available_colors}),c.a.createElement("div",{className:"clear"})),c.a.createElement("div",{className:"t-box under-line"},parseInt(e.stock_quantity)>0?c.a.createElement("span",{className:"small-header-text green-text"},c.a.createElement("i",{className:"material-icons"},"done"),"\u2002 IN STOCK"):c.a.createElement("span",{className:"small-header-text red-text"},c.a.createElement("i",{className:"material-icons"},"cancel"),"\u2002 OUT OF STOCK"))),c.a.createElement("div",{className:"clear"}))):c.a.createElement("div",null," Product not found ")}}]),t}(n.Component),Y=(a(415),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,null,c.a.createElement(S,null),c.a.createElement(d.a,{exact:!0,path:"/",component:x}),c.a.createElement(d.a,{path:"/product/:productid",component:L}),c.a.createElement(j,null))}}]),t}(n.Component));Object(r.render)(c.a.createElement(i.a,null,c.a.createElement(Y,null)),document.getElementById("root"))},72:function(e){e.exports=JSON.parse('{"production":{"api":{"v1_get_product_by_id":{"uri":"http://tinnat.com/api/product/"},"v1_get_featured_products":{"uri":"http://tinnat.com/api/products/featured?limit=6"}}},"development":{"api":{"v1_get_product_by_id":{"uri":"http://localhost.paypal.com:2002/api/product/"},"v1_get_featured_products":{"uri":"http://localhost.paypal.com:2002/api/products/featured?limit=6"}}}}')}},[[191,1,2]]]);
//# sourceMappingURL=main.92221a51.chunk.js.map
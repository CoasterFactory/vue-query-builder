!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-query-builder"]=t():e["vue-query-builder"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=86)}([function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){var r=e.exports={version:"2.5.3"};"number"==typeof __e&&(__e=r)},function(e,t,r){e.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(6),o=r(14);e.exports=r(3)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(11),o=r(36),u=r(29),i=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=u(t,!0),n(r),o)try{return i(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(37),o=r(19);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(26)("wks"),o=r(15),u=r(0).Symbol,i="function"==typeof u;(e.exports=function(e){return n[e]||(n[e]=i&&u[e]||(i?u:o)("Symbol."+e))}).store=n},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){var n=r(41),o=r(20);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){var n=r(9);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(0),o=r(2),u=r(57),i=r(5),l=function(e,t,r){var a,s,c,p=e&l.F,f=e&l.G,d=e&l.S,v=e&l.P,y=e&l.B,h=e&l.W,m=f?o:o[t]||(o[t]={}),b=m.prototype,_=f?n:d?n[t]:(n[t]||{}).prototype;f&&(r=t);for(a in r)(s=!p&&_&&void 0!==_[a])&&a in m||(c=s?_[a]:r[a],m[a]=f&&"function"!=typeof _[a]?r[a]:y&&s?u(c,n):h&&_[a]==c?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):v&&"function"==typeof c?u(Function.call,c):c,v&&((m.virtual||(m.virtual={}))[a]=c,e&l.R&&b&&!b[a]&&i(b,a,c)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t){t.f={}.propertyIsEnumerable},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports=function(e,t,r,n,o,u){var i,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,l=e.default);var s="function"==typeof l?l.options:l;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId=o);var c;if(u?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=c):n&&(c=n),c){var p=s.functional,f=p?s.render:s.beforeCreate;p?(s._injectStyles=c,s.render=function(e,t){return c.call(t),f(e,t)}):s.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:l,options:s}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(45),u=n(o),i=r(84),l=n(i),a=r(18),s=n(a),c={matchType:"Match Type",matchTypeAll:"All",matchTypeAny:"Any",addRule:"Add Rule",removeRule:"&times;",addGroup:"Add Group",removeGroup:"&times;",textInputPlaceholder:"value"};t.default={components:{QueryBuilderGroup:l.default},props:{rules:Array,labels:{type:Object,default:function(){return c}},styled:{type:Boolean,default:!0},maxDepth:{type:Number,default:3,validator:function(e){return e>=1}},initialQuery:Object,vuetify:Boolean},data:function(){return{depth:1,query:{logicalOperator:"All",children:[]},ruleTypes:{text:{operators:["equals","contains","does not contain","is empty","is not empty","begins with","ends with"],inputType:"text",id:"text-field"},numeric:{operators:["=","<>","<","<=",">",">="],inputType:"number",id:"number-field"},custom:{operators:[],inputType:"text",id:"custom-field"},radio:{operators:[],choices:[],inputType:"radio",id:"radio-field"},checkbox:{operators:[],choices:[],inputType:"checkbox",id:"checkbox-field"},select:{operators:["=","<>"],choices:[],inputType:"select",id:"select-field"},"multi-select":{operators:["="],choices:[],inputType:"select",id:"multi-select-field"}}}},computed:{mergedLabels:function(){return(0,u.default)({},c,this.labels)},mergedRules:function(){var e=[],t=this;return t.rules.forEach(function(r){void 0!==t.ruleTypes[r.type]?e.push((0,u.default)({},t.ruleTypes[r.type],r)):e.push(r)}),e}},mounted:function(){this.$emit("queryUpdated",(0,s.default)(this.query)),this.$watch("query",function(e){this.$emit("queryUpdated",(0,s.default)(e))},{deep:!0}),void 0!==this.$options.propsData.initialQuery&&(this.query=(0,s.default)(this.$options.propsData.initialQuery))}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(46),u=n(o),i=r(49),l=n(i),a=function e(t){if(Array.isArray(t))return t.map(e);if(t&&"object"===(void 0===t?"undefined":(0,l.default)(t))){for(var r={},n=(0,u.default)(t),o=0,i=n.length;o<i;o++){var a=n[o];r[a]=e(t[a])}return r}return t};e.exports=a},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){e.exports={}},function(e,t){e.exports=!0},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(6).f,o=r(1),u=r(8)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,u)&&n(e,u,{configurable:!0,value:t})}},function(e,t,r){var n=r(26)("keys"),o=r(15);e.exports=function(e){return n[e]||(n[e]=o(e))}},function(e,t,r){var n=r(0),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(19);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(9);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){var n=r(0),o=r(2),u=r(22),i=r(31),l=r(6).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=u?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:i.f(e)})}},function(e,t,r){t.f=r(8)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(85),u=n(o),i=r(18),l=n(i);t.default={name:"query-builder-group",components:{QueryBuilderRule:u.default},props:["ruleTypes","type","query","rules","index","maxDepth","depth","styled","vuetify","labels"],methods:{ruleById:function(e){var t=null;return this.rules.forEach(function(r){if(r.id===e)return t=r,!1}),t},addRule:function(){var e=(0,l.default)(this.query),t={type:"query-builder-rule",query:{rule:this.selectedRule.id,selectedOperator:this.selectedRule.operators[0],selectedOperand:void 0===this.selectedRule.operands?this.selectedRule.label:this.selectedRule.operands[0],value:null}};"multi-select"===this.ruleById(t.query.rule).type&&(t.query.value=[]),e.children.push(t),this.$emit("update:query",e)},addGroup:function(){var e=(0,l.default)(this.query);this.depth<this.maxDepth&&(e.children.push({type:"query-builder-group",query:{logicalOperator:"All",children:[]}}),this.$emit("update:query",e))},remove:function(){this.$emit("child-deletion-requested",this.index)},removeChild:function(e){var t=(0,l.default)(this.query);t.children.splice(e,1),this.$emit("update:query",t)}},data:function(){return{selectedRule:this.rules[0]}},computed:{classObject:function(){var e={"panel panel-default":this.styled};return e["depth-"+this.depth.toString()]=this.styled,e}},watch:{rules:function(e){}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"query-builder-rule",props:["query","index","rule","styled","vuetify","labels"],data:function(){return{menu:!1}},beforeMount:function(){"custom-component"===this.rule.type&&(this.$options.components[this.id]=this.rule.component)},methods:{remove:function(){this.$emit("child-deletion-requested",this.index)},updateQuery:function(e){var t=(0,o.default)(this.query);t.value=e,this.$emit("update:query",t)}},computed:{isMultipleChoice:function(){return["radio","checkbox","select"].indexOf(this.rule.inputType)>=0},isCustomComponent:function(){return"custom-component"===this.rule.type}},mounted:function(){var e=(0,o.default)(this.query);"checkbox"===this.rule.inputType&&(e.value=[],this.$emit("update:query",e)),"select"===this.rule.type&&(e.value=this.rule.choices[0].value,this.$emit("update:query",e)),"custom-component"===this.rule.type&&(e.value=this.rule.default||null,this.$emit("update:query",e))}}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(9),o=r(0).document,u=n(o)&&n(o.createElement);e.exports=function(e){return u?o.createElement(e):{}}},function(e,t,r){e.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(35)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(34);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){"use strict";var n=r(22),o=r(12),u=r(42),i=r(5),l=r(1),a=r(21),s=r(61),c=r(24),p=r(68),f=r(8)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};e.exports=function(e,t,r,y,h,m,b){s(r,t,y);var _,g,x,q=function(e){if(!d&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},O=t+" Iterator",T="values"==h,S=!1,k=e.prototype,w=k[f]||k["@@iterator"]||h&&k[h],j=!d&&w||q(h),C=h?T?q("entries"):j:void 0,P="Array"==t?k.entries||w:w;if(P&&(x=p(P.call(new e)))!==Object.prototype&&x.next&&(c(x,O,!0),n||l(x,f)||i(x,f,v)),T&&w&&"values"!==w.name&&(S=!0,j=function(){return w.call(this)}),n&&!b||!d&&!S&&k[f]||i(k,f,j),a[t]=j,a[O]=v,h)if(_={values:T?j:q("values"),keys:m?j:q("keys"),entries:C},b)for(g in _)g in k||u(k,g,_[g]);else o(o.P+o.F*(d||S),t,_);return _}},function(e,t,r){var n=r(11),o=r(65),u=r(20),i=r(25)("IE_PROTO"),l=function(){},a=function(){var e,t=r(35)("iframe"),n=u.length;for(t.style.display="none",r(59).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),a=e.F;n--;)delete a.prototype[u[n]];return a()};e.exports=Object.create||function(e,t){var r;return null!==e?(l.prototype=n(e),r=new l,l.prototype=null,r[i]=e):r=a(),void 0===t?r:o(r,t)}},function(e,t,r){var n=r(41),o=r(20).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},function(e,t,r){var n=r(1),o=r(7),u=r(56)(!1),i=r(25)("IE_PROTO");e.exports=function(e,t){var r,l=o(e),a=0,s=[];for(r in l)r!=i&&n(l,r)&&s.push(r);for(;t.length>a;)n(l,r=t[a++])&&(~u(s,r)||s.push(r));return s}},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-query-builder",class:{"vue-query-builder-styled":e.styled}},[r("query-builder-group",{attrs:{index:0,query:e.query,ruleTypes:e.ruleTypes,rules:e.mergedRules,maxDepth:e.maxDepth,depth:e.depth,styled:e.styled,labels:e.mergedLabels,type:"query-builder-group",vuetify:e.vuetify},on:{"update:query":function(t){e.query=t}}})],1)},o=[],u={render:n,staticRenderFns:o};t.a=u},function(e,t,r){var n=r(82);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(89)("35570b59",n,!0,{})},function(e,t,r){e.exports={default:r(50),__esModule:!0}},function(e,t,r){e.exports={default:r(51),__esModule:!0}},function(e,t,r){e.exports={default:r(52),__esModule:!0}},function(e,t,r){e.exports={default:r(53),__esModule:!0}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(48),u=n(o),i=r(47),l=n(i),a="function"==typeof l.default&&"symbol"==typeof u.default?function(e){return typeof e}:function(e){return e&&"function"==typeof l.default&&e.constructor===l.default&&e!==l.default.prototype?"symbol":typeof e};t.default="function"==typeof l.default&&"symbol"===a(u.default)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof l.default&&e.constructor===l.default&&e!==l.default.prototype?"symbol":void 0===e?"undefined":a(e)}},function(e,t,r){r(74),e.exports=r(2).Object.assign},function(e,t,r){r(75),e.exports=r(2).Object.keys},function(e,t,r){r(78),r(76),r(79),r(80),e.exports=r(2).Symbol},function(e,t,r){r(77),r(81),e.exports=r(31).f("iterator")},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(){}},function(e,t,r){var n=r(7),o=r(72),u=r(71);e.exports=function(e){return function(t,r,i){var l,a=n(t),s=o(a.length),c=u(i,s);if(e&&r!=r){for(;s>c;)if((l=a[c++])!=l)return!0}else for(;s>c;c++)if((e||c in a)&&a[c]===r)return e||c||0;return!e&&-1}}},function(e,t,r){var n=r(54);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(10),o=r(23),u=r(13);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var i,l=r(e),a=u.f,s=0;l.length>s;)a.call(e,i=l[s++])&&t.push(i);return t}},function(e,t,r){var n=r(0).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(34);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){"use strict";var n=r(39),o=r(14),u=r(24),i={};r(5)(i,r(8)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(i,{next:o(1,r)}),u(e,t+" Iterator")}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,r){var n=r(15)("meta"),o=r(9),u=r(1),i=r(6).f,l=0,a=Object.isExtensible||function(){return!0},s=!r(4)(function(){return a(Object.preventExtensions({}))}),c=function(e){i(e,n,{value:{i:"O"+ ++l,w:{}}})},p=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!u(e,n)){if(!a(e))return"F";if(!t)return"E";c(e)}return e[n].i},f=function(e,t){if(!u(e,n)){if(!a(e))return!0;if(!t)return!1;c(e)}return e[n].w},d=function(e){return s&&v.NEED&&a(e)&&!u(e,n)&&c(e),e},v=e.exports={KEY:n,NEED:!1,fastKey:p,getWeak:f,onFreeze:d}},function(e,t,r){"use strict";var n=r(10),o=r(23),u=r(13),i=r(28),l=r(37),a=Object.assign;e.exports=!a||r(4)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=a({},e)[r]||Object.keys(a({},t)).join("")!=n})?function(e,t){for(var r=i(e),a=arguments.length,s=1,c=o.f,p=u.f;a>s;)for(var f,d=l(arguments[s++]),v=c?n(d).concat(c(d)):n(d),y=v.length,h=0;y>h;)p.call(d,f=v[h++])&&(r[f]=d[f]);return r}:a},function(e,t,r){var n=r(6),o=r(11),u=r(10);e.exports=r(3)?Object.defineProperties:function(e,t){o(e);for(var r,i=u(t),l=i.length,a=0;l>a;)n.f(e,r=i[a++],t[r]);return e}},function(e,t,r){var n=r(13),o=r(14),u=r(7),i=r(29),l=r(1),a=r(36),s=Object.getOwnPropertyDescriptor;t.f=r(3)?s:function(e,t){if(e=u(e),t=i(t,!0),a)try{return s(e,t)}catch(e){}if(l(e,t))return o(!n.f.call(e,t),e[t])}},function(e,t,r){var n=r(7),o=r(40).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return o(e)}catch(e){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==u.call(e)?l(e):o(n(e))}},function(e,t,r){var n=r(1),o=r(28),u=r(25)("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,u)?e[u]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},function(e,t,r){var n=r(12),o=r(2),u=r(4);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*u(function(){r(1)}),"Object",i)}},function(e,t,r){var n=r(27),o=r(19);e.exports=function(e){return function(t,r){var u,i,l=String(o(t)),a=n(r),s=l.length;return a<0||a>=s?e?"":void 0:(u=l.charCodeAt(a),u<55296||u>56319||a+1===s||(i=l.charCodeAt(a+1))<56320||i>57343?e?l.charAt(a):u:e?l.slice(a,a+2):i-56320+(u-55296<<10)+65536)}}},function(e,t,r){var n=r(27),o=Math.max,u=Math.min;e.exports=function(e,t){return e=n(e),e<0?o(e+t,0):u(e,t)}},function(e,t,r){var n=r(27),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t,r){"use strict";var n=r(55),o=r(62),u=r(21),i=r(7);e.exports=r(38)(Array,"Array",function(e,t){this._t=i(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),u.Arguments=u.Array,n("keys"),n("values"),n("entries")},function(e,t,r){var n=r(12);n(n.S+n.F,"Object",{assign:r(64)})},function(e,t,r){var n=r(28),o=r(10);r(69)("keys",function(){return function(e){return o(n(e))}})},function(e,t){},function(e,t,r){"use strict";var n=r(70)(!0);r(38)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){"use strict";var n=r(0),o=r(1),u=r(3),i=r(12),l=r(42),a=r(63).KEY,s=r(4),c=r(26),p=r(24),f=r(15),d=r(8),v=r(31),y=r(30),h=r(58),m=r(60),b=r(11),_=r(9),g=r(7),x=r(29),q=r(14),O=r(39),T=r(67),S=r(66),k=r(6),w=r(10),j=S.f,C=k.f,P=T.f,M=n.Symbol,R=n.JSON,A=R&&R.stringify,E=d("_hidden"),$=d("toPrimitive"),L={}.propertyIsEnumerable,N=c("symbol-registry"),D=c("symbols"),F=c("op-symbols"),I=Object.prototype,G="function"==typeof M,B=n.QObject,H=!B||!B.prototype||!B.prototype.findChild,U=u&&s(function(){return 7!=O(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=j(I,t);n&&delete I[t],C(e,t,r),n&&e!==I&&C(I,t,n)}:C,Q=function(e){var t=D[e]=O(M.prototype);return t._k=e,t},V=G&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},W=function(e,t,r){return e===I&&W(F,t,r),b(e),t=x(t,!0),b(r),o(D,t)?(r.enumerable?(o(e,E)&&e[E][t]&&(e[E][t]=!1),r=O(r,{enumerable:q(0,!1)})):(o(e,E)||C(e,E,q(1,{})),e[E][t]=!0),U(e,t,r)):C(e,t,r)},J=function(e,t){b(e);for(var r,n=h(t=g(t)),o=0,u=n.length;u>o;)W(e,r=n[o++],t[r]);return e},K=function(e,t){return void 0===t?O(e):J(O(e),t)},z=function(e){var t=L.call(this,e=x(e,!0));return!(this===I&&o(D,e)&&!o(F,e))&&(!(t||!o(this,e)||!o(D,e)||o(this,E)&&this[E][e])||t)},X=function(e,t){if(e=g(e),t=x(t,!0),e!==I||!o(D,t)||o(F,t)){var r=j(e,t);return!r||!o(D,t)||o(e,E)&&e[E][t]||(r.enumerable=!0),r}},Y=function(e){for(var t,r=P(g(e)),n=[],u=0;r.length>u;)o(D,t=r[u++])||t==E||t==a||n.push(t);return n},Z=function(e){for(var t,r=e===I,n=P(r?F:g(e)),u=[],i=0;n.length>i;)!o(D,t=n[i++])||r&&!o(I,t)||u.push(D[t]);return u};G||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(r){this===I&&t.call(F,r),o(this,E)&&o(this[E],e)&&(this[E][e]=!1),U(this,e,q(1,r))};return u&&H&&U(I,e,{configurable:!0,set:t}),Q(e)},l(M.prototype,"toString",function(){return this._k}),S.f=X,k.f=W,r(40).f=T.f=Y,r(13).f=z,r(23).f=Z,u&&!r(22)&&l(I,"propertyIsEnumerable",z,!0),v.f=function(e){return Q(d(e))}),i(i.G+i.W+i.F*!G,{Symbol:M});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)d(ee[te++]);for(var re=w(d.store),ne=0;re.length>ne;)y(re[ne++]);i(i.S+i.F*!G,"Symbol",{for:function(e){return o(N,e+="")?N[e]:N[e]=M(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){H=!0},useSimple:function(){H=!1}}),i(i.S+i.F*!G,"Object",{create:K,defineProperty:W,defineProperties:J,getOwnPropertyDescriptor:X,getOwnPropertyNames:Y,getOwnPropertySymbols:Z}),R&&i(i.S+i.F*(!G||s(function(){var e=M();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(_(t)||void 0!==e)&&!V(e))return m(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,A.apply(R,n)}}),M.prototype[$]||r(5)(M.prototype,$,M.prototype.valueOf),p(M,"Symbol"),p(Math,"Math",!0),p(n.JSON,"JSON",!0)},function(e,t,r){r(30)("asyncIterator")},function(e,t,r){r(30)("observable")},function(e,t,r){r(73);for(var n=r(0),o=r(5),u=r(21),i=r(8)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<l.length;a++){var s=l[a],c=n[s],p=c&&c.prototype;p&&!p[i]&&o(p,i,s),u[s]=u.Array}},function(e,t,r){t=e.exports=r(83)(),t.push([e.i,".vue-query-builder-styled .vqb-group .rule-actions{margin-bottom:20px}.vue-query-builder-styled .vqb-rule{margin-top:15px;margin-bottom:15px;background-color:#f5f5f5;border-color:#ddd;padding:15px}.vue-query-builder-styled .vqb-rule label{margin-right:10px}.vue-query-builder-styled .vqb-group.depth-1 .vqb-rule,.vue-query-builder-styled .vqb-group.depth-2{border-left:2px solid #8bc34a}.vue-query-builder-styled .vqb-group.depth-2 .vqb-rule,.vue-query-builder-styled .vqb-group.depth-3{border-left:2px solid #00bcd4}.vue-query-builder-styled .vqb-group.depth-3 .vqb-rule,.vue-query-builder-styled .vqb-group.depth-4{border-left:2px solid #ff5722}.vue-query-builder-styled .close{opacity:1;color:#969696}@media (min-width:768px){.vue-query-builder-styled .vqb-rule.form-inline .form-group{display:block}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(n[u]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(32),o=r.n(n);for(var u in n)["default","default"].indexOf(u)<0&&function(e){r.d(t,e,function(){return n[e]})}(u);var i=r(87),l=r(16),a=l(o.a,i.a,!1,null,null,null);t.default=a.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(33),o=r.n(n);for(var u in n)["default","default"].indexOf(u)<0&&function(e){r.d(t,e,function(){return n[e]})}(u);var i=r(88),l=r(16),a=l(o.a,i.a,!1,null,null,null);t.default=a.exports},function(e,t,r){"use strict";function n(e){r(44)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(17),u=r.n(o);for(var i in o)["default","default"].indexOf(i)<0&&function(e){r.d(t,e,function(){return o[e]})}(i);var l=r(43),a=r(16),s=n,c=a(u.a,l.a,!1,s,null,null);t.default=c.exports},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e.vuetify?r("v-card",{attrs:{color:"grey lighten-4"}},[r("v-toolbar",{attrs:{color:"white",light:"",dense:""}},[r("h3",{staticClass:"pr-3"},[e._v(e._s(e.labels.matchType))]),e._v(" "),r("v-select",{attrs:{id:"vqb-match-type",items:[e.labels.matchTypeAll,e.labels.matchTypeAny],autocomplete:""},model:{value:e.query.logicalOperator,callback:function(t){e.$set(e.query,"logicalOperator",t)},expression:"query.logicalOperator"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-spacer"),e._v(" "),this.depth>1?r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},domProps:{innerHTML:e._s(e.labels.removeGroup)},on:{click:e.remove}}):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"py-0"},[r("v-select",{attrs:{items:e.rules,"item-text":"label",autocomplete:"","cache-items":""},model:{value:e.selectedRule,callback:function(t){e.selectedRule=t},expression:"selectedRule"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},domProps:{innerHTML:e._s(e.labels.addRule)},on:{click:e.addRule}}),e._v(" "),this.depth<this.maxDepth?r("v-btn",{attrs:{color:"primary"},domProps:{innerHTML:e._s(e.labels.addGroup)},on:{click:e.addGroup}}):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-text",{staticClass:"pt-0"},[r("div",{staticClass:"children"},e._l(e.query.children,function(t,n){return r(t.type,{key:n,tag:"component",attrs:{type:t.type,query:t.query,ruleTypes:e.ruleTypes,rules:e.rules,rule:e.ruleById(t.query.rule),index:n,maxDepth:e.maxDepth,depth:e.depth+1,styled:e.styled,vuetify:e.vuetify,labels:e.labels},on:{"update:query":function(r){e.$set(t,"query",r)},"child-deletion-requested":e.removeChild}})}))])],1):r("div",{staticClass:"vqb-group",class:e.classObject},[r("div",{staticClass:"vqb-group-heading",class:{"panel-heading":e.styled}},[r("div",{staticClass:"match-type-container",class:{"form-inline":e.styled}},[r("div",{class:{"form-group":e.styled}},[r("label",{attrs:{for:"vqb-match-type"}},[e._v(e._s(e.labels.matchType))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query.logicalOperator,expression:"query.logicalOperator"}],class:{"form-control":e.styled},attrs:{id:"vqb-match-type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"logicalOperator",t.target.multiple?r:r[0])}}},[r("option",[e._v(e._s(e.labels.matchTypeAll))]),e._v(" "),r("option",[e._v(e._s(e.labels.matchTypeAny))])])]),e._v(" "),this.depth>1?r("button",{class:{"close pull-right":e.styled},domProps:{innerHTML:e._s(e.labels.removeGroup)},on:{click:e.remove}}):e._e()])]),e._v(" "),r("div",{staticClass:"vqb-group-body",class:{"panel-body":e.styled}},[r("div",{staticClass:"rule-actions",class:{"form-inline":e.styled}},[r("div",{class:{"form-group":e.styled}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedRule,expression:"selectedRule"}],class:{"form-control":e.styled},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedRule=t.target.multiple?r:r[0]}}},e._l(e.rules,function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v(e._s(t.label))])})),e._v(" "),r("button",{class:{"btn btn-default":e.styled},domProps:{innerHTML:e._s(e.labels.addRule)},on:{click:e.addRule}}),e._v(" "),this.depth<this.maxDepth?r("button",{class:{"btn btn-default":e.styled},domProps:{innerHTML:e._s(e.labels.addGroup)},on:{click:e.addGroup}}):e._e()])]),e._v(" "),r("div",{staticClass:"children"},e._l(e.query.children,function(t,n){return r(t.type,{key:n,tag:"component",attrs:{type:t.type,query:t.query,ruleTypes:e.ruleTypes,rules:e.rules,rule:e.ruleById(t.query.rule),index:n,maxDepth:e.maxDepth,depth:e.depth+1,styled:e.styled,vuetify:e.vuetify,labels:e.labels},on:{"update:query":function(r){e.$set(t,"query",r)},"child-deletion-requested":e.removeChild}})}))])])],1)},o=[],u={render:n,staticRenderFns:o};t.a=u},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e.vuetify?r("v-card",[r("v-card-title",{staticClass:"py-0"},[r("h3",{staticClass:"pr-3"},[e._v(e._s(e.rule.label))]),e._v(" "),void 0!==e.rule.operands?r("v-select",{attrs:{items:e.rule.operands,autocomplete:""},model:{value:e.query.selectedOperand,callback:function(t){e.$set(e.query,"selectedOperand",t)},expression:"query.selectedOperand"}}):e._e(),e._v(" "),e.isMultipleChoice?e._e():r("v-select",{attrs:{items:e.rule.operators,autocomplete:""},model:{value:e.query.selectedOperator,callback:function(t){e.$set(e.query,"selectedOperator",t)},expression:"query.selectedOperator"}}),e._v(" "),"text"===e.rule.inputType?r("v-text-field",{attrs:{type:"text",placeholder:e.labels.textInputPlaceholder},model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}):e._e(),e._v(" "),"number"===e.rule.inputType?r("v-text-field",{attrs:{type:"number"},model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}):e._e(),e._v(" "),e.isCustomComponent?[r(e.rule.component,e._b({tag:"component",attrs:{value:e.query.value},on:{input:e.updateQuery}},"component",e.rule.props,!1))]:e._e(),e._v(" "),e._l(e.rule.choices,function(t){return"checkbox"===e.rule.inputType?r("v-checkbox",{key:t.label+t.value,attrs:{"true-value":t.value,label:t.label},model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}):e._e()}),e._v(" "),"radio"===e.rule.inputType?r("v-radio-group",{model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}},e._l(e.rule.choices,function(e){return r("v-radio",{key:e.label+e.value,attrs:{value:e.value,label:e.label}})})):e._e(),e._v(" "),"select"===e.rule.inputType?r("v-select",{attrs:{multiple:"multi-select"===e.rule.type,items:e.rule.choices,"item-text":"label",autocomplete:""},model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}):e._e(),e._v(" "),"date"===e.rule.inputType?r("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","full-width":"","nudge-right":40,"nudge-bottom":50,"max-width":"290px","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-text-field",{attrs:{slot:"activator","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}}),e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.save,o=t.cancel;return[r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:o}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:n}},[e._v("OK")])],1)]}}]),model:{value:e.query.value,callback:function(t){e.$set(e.query,"value",t)},expression:"query.value"}})],1):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"},domProps:{innerHTML:e._s(e.labels.removeRule)},on:{click:e.remove}})],2)],1):r("div",{staticClass:"vqb-rule",class:{"panel panel-default form-inline":e.styled}},[r("div",{class:{"form-group":e.styled}},[r("label",[e._v(e._s(e.rule.label))]),e._v(" "),void 0!==e.rule.operands?r("select",{directives:[{name:"model",rawName:"v-model",value:e.query.selectedOperand,expression:"query.selectedOperand"}],class:{"form-control":e.styled},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"selectedOperand",t.target.multiple?r:r[0])}}},e._l(e.rule.operands,function(t){return r("option",[e._v(e._s(t))])})):e._e(),e._v(" "),e.isMultipleChoice?e._e():r("select",{directives:[{name:"model",rawName:"v-model",value:e.query.selectedOperator,expression:"query.selectedOperator"}],class:{"form-control":e.styled},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"selectedOperator",t.target.multiple?r:r[0])}}},e._l(e.rule.operators,function(t){return r("option",{domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])})),e._v(" "),"text"===e.rule.inputType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.value,expression:"query.value"}],class:{"form-control":e.styled},attrs:{type:"text",placeholder:e.labels.textInputPlaceholder},domProps:{value:e.query.value},on:{input:function(t){t.target.composing||e.$set(e.query,"value",t.target.value)}}}):e._e(),e._v(" "),"number"===e.rule.inputType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.value,expression:"query.value"}],class:{"form-control":e.styled},attrs:{type:"number"},domProps:{value:e.query.value},on:{input:function(t){t.target.composing||e.$set(e.query,"value",t.target.value)}}}):e._e(),e._v(" "),e.isCustomComponent?[r(e.rule.component,e._b({tag:"component",attrs:{value:e.query.value},on:{input:e.updateQuery}},"component",e.rule.props,!1))]:e._e(),e._v(" "),"checkbox"===e.rule.inputType?r("div",{staticClass:"checkbox"},e._l(e.rule.choices,function(t){return r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.value,expression:"query.value"}],attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(e.query.value)?e._i(e.query.value,t.value)>-1:e.query.value},on:{change:function(r){var n=e.query.value,o=r.target,u=!!o.checked;if(Array.isArray(n)){var i=t.value,l=e._i(n,i);o.checked?l<0&&(e.query.value=n.concat([i])):l>-1&&(e.query.value=n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.query,"value",u)}}}),e._v(" "+e._s(t.label)+"\n        ")])})):e._e(),e._v(" "),"radio"===e.rule.inputType?r("div",{staticClass:"radio"},e._l(e.rule.choices,function(t){return r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.value,expression:"query.value"}],attrs:{type:"radio"},domProps:{value:t.value,checked:e._q(e.query.value,t.value)},on:{change:function(r){e.$set(e.query,"value",t.value)}}}),e._v(" "+e._s(t.label)+"\n        ")])})):e._e(),e._v(" "),"select"===e.rule.inputType?r("select",{directives:[{name:"model",rawName:"v-model",value:e.query.value,expression:"query.value"}],class:{"form-control":e.styled},attrs:{multiple:"multi-select"===e.rule.type},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.query,"value",t.target.multiple?r:r[0])}}},e._l(e.rule.choices,function(t){return r("option",{domProps:{value:t.value}},[e._v(e._s(t.label))])})):e._e(),e._v(" "),r("button",{class:{"close pull-right":e.styled},domProps:{innerHTML:e._s(e.labels.removeRule)},on:{click:e.remove}})],2)])],1)},o=[],u={render:n,staticRenderFns:o};t.a=u},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=c[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(u(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(u(r.parts[o]));c[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function u(e){var t,r,n=document.querySelector("style["+m+'~="'+e.id+'"]');if(n){if(v)return y;n.parentNode.removeChild(n)}if(b){var u=d++;n=f||(f=o()),t=i.bind(null,n,u,!1),r=i.bind(null,n,u,!0)}else n=o(),t=l.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function l(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(m,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=r(90),c={},p=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,v=!1,y=function(){},h=null,m="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,o){v=r,h=o||{};var u=s(e,t);return n(u),function(t){for(var r=[],o=0;o<u.length;o++){var i=u[o],l=c[i.id];l.refs--,r.push(l)}t?(u=s(e,t),n(u)):u=[];for(var o=0;o<r.length;o++){var l=r[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete c[l.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var u=t[o],i=u[0],l=u[1],a=u[2],s=u[3],c={id:e+":"+o,css:l,media:a,sourceMap:s};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}}])});
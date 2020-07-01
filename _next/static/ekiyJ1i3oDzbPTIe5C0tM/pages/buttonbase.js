(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,f=s["".concat(c,".").concat(p)]||s[p]||d[p]||a;return n?o.a.createElement(f,l(l({ref:t},i),{},{components:n})):o.a.createElement(f,l({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[p]="string"===typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},dPkj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),l=n("ZVZ0"),b=(c.a.createElement,{}),i="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(i,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"ButtonBase"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ButtonBase")," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating a button."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import ButtonBase from '@trendmicro/react-styled-ui/ButtonBase';\n// or\nimport { ButtonBase } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonBase>Click Me</ButtonBase>\n")),Object(l.b)("h3",null,"Attributes"),Object(l.b)("p",null,"Standard button attributes are supported, e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"type"),", ",Object(l.b)("inlineCode",{parentName:"p"},"disabled"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"disabled")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonBase\n  disabled\n  _disabled={{\n    opacity: 0.28, // dark: 0.28, light: 0.3\n    cursor: 'not-allowed',\n  }}\n>\n  Button is disabled\n</ButtonBase>\n")),Object(l.b)("h3",null,"Icon button"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),"const IconButton = (props) => {\n  const { colorMode } = useColorMode();\n  const color = {\n    dark: 'white:secondary',\n    light: 'black:secondary',\n  }[colorMode];\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const activeColor = color;\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = 'blue:60';\n\n  return (\n    <ButtonBase\n      border={1}\n      borderColor=\"transparent\"\n      color={color}\n      transition=\"all .2s\"\n      lineHeight={1}\n      width=\"8x\"\n      height=\"8x\"\n      _hover={{\n        color: hoverColor,\n      }}\n      _active={{\n        color: activeColor,\n      }}\n      _focus={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusColor,\n      }}\n      _focusHover={{\n        color: focusHoverColor,\n      }}\n      _focusActive={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusActiveColor,\n      }}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  return (\n    <IconButton>\n      <TMIcon name=\"close\" />\n    </IconButton>\n  );\n}\n\nrender(<Example />);\n")),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ButtonBase")," composes ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"./pseudobox"}),Object(l.b)("inlineCode",{parentName:"a"},"PseudoBox")),". You can override the default styles with style props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"disabled"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the button will be disabled. This sets ",Object(l.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(l.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")))))}u.isMDXComponent=!0},zPCL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buttonbase",function(){return n("dPkj")}])}},[["zPCL",0,1]]]);
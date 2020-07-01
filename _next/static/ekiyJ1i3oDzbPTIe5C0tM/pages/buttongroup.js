(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+wNj":function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return o}))},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("+wNj");function r(t,e){if(null==t)return{};var n,r,a=Object(o.a)(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},Km8e:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},Rk6E:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n("cxan"),r=n("HbGN"),a=n("ERkP"),u=n.n(a),c=n("ZVZ0"),i=(u.a.createElement,{}),p="wrapper";function b(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.b)(p,Object(o.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ButtonGroup"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," is used to group related buttons."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import ButtonGroup from '@trendmicro/react-styled-ui/ButtonGroup';\n// or\nimport { ButtonGroup } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("h3",null,"Basic button group"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonGroup>\n  <Button>One</Button>\n  <Button>Two</Button>\n  <Button>Three</Button>\n</ButtonGroup>\n")),Object(c.b)("h3",null,"Group variants"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of every button in a group. You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"emphasis"),", ",Object(c.b)("inlineCode",{parentName:"p"},"primary"),", ",Object(c.b)("inlineCode",{parentName:"p"},"default"),", ",Object(c.b)("inlineCode",{parentName:"p"},"secondary")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ghost"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="3x">\n  <ButtonGroup variant="default">\n    <Button>One</Button>\n    <Button>Two</Button>\n    <Button>Three</Button>\n  </ButtonGroup>\n  <ButtonGroup variant="secondary">\n    <Button>One</Button>\n    <Button>Two</Button>\n    <Button>Three</Button>\n  </ButtonGroup>\n  <ButtonGroup variant="ghost">\n    <Button>One</Button>\n    <Button>Two</Button>\n    <Button>Three</Button>\n  </ButtonGroup>\n</Stack>\n')),Object(c.b)("h3",null,"Group sizes"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup"),". You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(c.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="3x">\n  <ButtonGroup size="sm">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <ButtonGroup size="md">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n  <ButtonGroup size="lg">\n    <Button>Left</Button>\n    <Button>Middle</Button>\n    <Button>Right</Button>\n  </ButtonGroup>\n</Stack>\n')),Object(c.b)("h3",null,"Group orientation"),Object(c.b)("p",null,"Make a set of buttons appear vertically stacked rather than horizontally, by adding ",Object(c.b)("inlineCode",{parentName:"p"},"vertical")," to the ",Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," component."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="4x">\n  <Stack spacing="4x" alignItems="center">\n    <ButtonGroup>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n    <ButtonGroup vertical>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n  </Stack>\n  <Stack spacing="4x" alignItems="center">\n    <ButtonGroup variant="secondary">\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n    <ButtonGroup variant="secondary" vertical>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n  </Stack>\n  <Stack spacing="4x" alignItems="center">\n    <ButtonGroup variant="ghost">\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n    <ButtonGroup variant="ghost" vertical>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n  </Stack>\n</Stack>\n')),Object(c.b)("h3",null,"Button states"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="3x">\n  <Stack direction="row" spacing="3x">\n    <ButtonGroup>\n      <Button><TMIcon name="chart-pie" /></Button>\n      <Button selected><TMIcon name="chart-line" /></Button>\n      <Button disabled><TMIcon name="chart-bar" /></Button>\n    </ButtonGroup>\n    <ButtonGroup>\n      <Button>Normal</Button>\n      <Button selected>Selected</Button>\n      <Button disabled>Disabled</Button>\n    </ButtonGroup>\n  </Stack>\n  <Stack direction="row" spacing="3x">\n    <ButtonGroup variant="secondary">\n      <Button><TMIcon name="chart-pie" /></Button>\n      <Button selected><TMIcon name="chart-line" /></Button>\n      <Button disabled><TMIcon name="chart-bar" /></Button>\n    </ButtonGroup>\n    <ButtonGroup variant="secondary">\n      <Button>Normal</Button>\n      <Button selected>Selected</Button>\n      <Button disabled>Disabled</Button>\n    </ButtonGroup>\n  </Stack>\n</Stack>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," composes the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The size for all buttons in the group. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"variant"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"'default'"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The variant of all buttons in the group. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'emphasis'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'primary'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'default'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'secondary'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'ghost'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"vertical"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"Make the set of Buttons appear vertically stacked.")))))}b.isMDXComponent=!0},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var o=n("ERkP"),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),b=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"===typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=b(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},s="mdxType",O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},B=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),l=b(n),s=o,B=l["".concat(u,".").concat(s)]||l[s]||O[s]||a;return n?r.a.createElement(B,c(c({ref:e},p),{},{components:n})):r.a.createElement(B,c({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"===typeof t||o){var a=n.length,u=new Array(a);u[0]=B;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[s]="string"===typeof t?t:o,u[1]=c;for(var p=2;p<a;p++)u[p]=n[p];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}B.displayName="MDXCreateElement"},cxan:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))},xlyI:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buttongroup",function(){return n("Rk6E")}])}},[["xlyI",0,1]]]);
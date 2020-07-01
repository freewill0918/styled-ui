(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+r8+":function(e,t,o){"use strict";var r=o("HbGN"),n=o("ERkP"),a=o.n(n),c=o("oR8H"),l=o("/rYo"),b=o("vUXE"),i=a.a.createElement;t.a=function(e){var t=e.theme,o=e.mode,n=(Object(r.a)(e,["theme","mode"]),Object(c.useTheme)()),a=Object(l.b)(o),p=n[t]||a[t];if(!p)return"Theme field not found";var d=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(p,!!o);return i(b.a,null,o?"export const ".concat(o," = {\n  ").concat(t,":").concat(d," \n}"):"export const ".concat(t," = ").concat(d))}},"s4G/":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return o("yjKP")}])},yjKP:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return k}));var r=o("cxan"),n=o("HbGN"),a=o("ERkP"),c=o.n(a),l=o("ZVZ0"),b=o("zygG"),i=o("oR8H"),p=o("/rYo"),d=c.a.createElement,m=function(e){return e.split(":")},u=function(e,t){return Object.keys(t).find((function(o){return t[o]===e}))},s=function(e){var t=e.token,o=e.color,a=Object(n.a)(e,["token","color"]),c=m(t),l=Object(b.a)(c,2),p=l[0],u=l[1],s={justify:"space-between",fontSize:"sm",width:"300px",height:"12x",py:"3x",px:"4x",lineHeight:"lg",fontFamily:"mono",color:u<=50?"black":"white",backgroundColor:o};return d(i.Flex,Object(r.a)({},s,a),d(i.Box,null,"".concat(p.charAt(0).toUpperCase()).concat(p.slice(1))," ",u),d(i.Box,null,o))},h=function(e){var t=e.hue,o=Object(i.useTheme)(),r=RegExp(t,"g"),n=Object.keys(o.colors).filter((function(e){return e.match(r)})).reduce((function(e,t){return e[t]=o.colors[t],e}),{});return d(i.Flex,{align:"center"},d(i.Stack,{direction:"column"},Object.keys(n).map((function(e){return d(s,{key:e,token:"".concat(e),color:"".concat(n[e])})}))))},j=function(e){return d(i.Grid,Object(r.a)({gap:"6x",templateColumns:"repeat(auto-fit, 300px)"},e))},O=function(e){var t=e.mode,o=Object(n.a)(e,["mode"]),a=Object(i.useColorMode)().colorMode,c=t&&{light:{bg:"white",border:1,borderColor:"gray:20"},dark:{bg:"gray:100",border:1,borderColor:"gray:70"}}[null!==t&&void 0!==t?t:a];return d(i.Grid,Object(r.a)({px:"14x",py:"10x",rowGap:"8x",columnGap:"6x",templateColumns:"repeat(auto-fit, 120px)",maxWidth:"1242px"},c,o))},x=function(e){var t,o=e.mode,a=e.palette,c=e.type,l=e.color,p=(Object(n.a)(e,["mode","palette","type","color"]),Object(i.useColorMode)().colorMode),s=Object(i.useTheme)(),h={fontSize:"sm",mt:"2x",color:{dark:"white:primary",light:"black:primary"}[null!==o&&void 0!==o?o:p]},j={fontSize:"xs",lineHeight:"sm",color:{dark:"white:secondary",light:"black:secondary"}[null!==o&&void 0!==o?o:p]};if("gradient"===a){t=l.match(/#\w+/g).map((function(e){var t=m(u(e,s.colors)),o=Object(b.a)(t,2),n=o[0],a=o[1];return d(i.Box,Object(r.a)({key:e},j),"".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))," ",a," ",e)}))}else{var O=m(u(l,s.colors)),x=Object(b.a)(O,2),y=x[0],f=x[1];t="text"===a&&["black","white"].includes(y)?d(i.Box,j,l):d(i.Box,j,"".concat(y.charAt(0).toUpperCase()).concat(y.slice(1))," ",f," ",l)}return d(i.Box,null,d(i.Box,Object(r.a)({background:l},{width:"80px",height:"80px"})),d(i.Box,h,a,".",c),t)},y=function(e){var t=e.mode,o=e.palette,r=(Object(n.a)(e,["mode","palette"]),Object(p.b)(t).get(o));return d(O,{mode:t},Object.keys(r).map((function(e){return d(x,{key:e,mode:t,palette:o,type:e,color:"".concat(r[e])})})))},f=o("+r8+"),g=(c.a.createElement,{}),C="wrapper";function k(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)(C,Object(r.a)({},g,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Colors"),Object(l.b)("p",null,"Add a ",Object(l.b)("inlineCode",{parentName:"p"},"theme.colors")," object to provide colors for your project. By default these\ncolors can be referenced by the ",Object(l.b)("inlineCode",{parentName:"p"},"color"),", ",Object(l.b)("inlineCode",{parentName:"p"},"borderColor"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"backgroundColor"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"fill"),", ",Object(l.b)("inlineCode",{parentName:"p"},"stroke"),", styles."),Object(l.b)("p",null,"We recommend adding palette that go from ",Object(l.b)("inlineCode",{parentName:"p"},"10")," - ",Object(l.b)("inlineCode",{parentName:"p"},"100"),". The ",Object(l.b)("inlineCode",{parentName:"p"},"10")," being the lightest color and the ",Object(l.b)("inlineCode",{parentName:"p"},"100")," being the darkest color. We could communicate via the naming such as Red 10 or Red 70 to easily understand Red 10 is a light red, Red 70 is a dark red."),Object(l.b)("p",null,"The color palette both define for Light Theme and Dark Theme, ",Object(l.b)("inlineCode",{parentName:"p"},"10")," - ",Object(l.b)("inlineCode",{parentName:"p"},"50")," are pass AA contrast with black text, ",Object(l.b)("inlineCode",{parentName:"p"},"60")," - ",Object(l.b)("inlineCode",{parentName:"p"},"100")," are pass AA contrast with white text,"),Object(l.b)(f.a,{theme:"colors",mdxType:"ThemeParser"}),Object(l.b)("h3",null,"Base Color Palettes"),Object(l.b)(j,{mdxType:"ColorWrapper"},Object(l.b)(h,{hue:"red",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"magenta",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"purple",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"blue",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"green",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"teal",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"cyan",mdxType:"ColorPalettes"}),Object(l.b)(h,{hue:"gray",mdxType:"ColorPalettes"})),Object(l.b)("h3",null,"Text Color"),Object(l.b)(f.a,{mode:"light",theme:"text",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"text",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Functional Color"),Object(l.b)(f.a,{mode:"light",theme:"risk",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"risk",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Chart Color"),Object(l.b)(f.a,{mode:"light",theme:"chart",mdxType:"ThemeParser"}),Object(l.b)(f.a,{mode:"dark",theme:"chart",mdxType:"ThemeParser"}),Object(l.b)(y,{mode:"light",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(l.b)(y,{mode:"dark",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h3",null,"Gradient Color"),Object(l.b)(f.a,{theme:"gradient",mdxType:"ThemeParser"}),Object(l.b)(y,{palette:"gradient",mdxType:"FunctionalColorPalettes"}),Object(l.b)("h2",null,"Configuration Reference"),Object(l.b)("p",null,"Except for breakpoints, colors, and spacing, all of the keys in the theme object\nmap to one of our core theme. All of these keys can be replaced or\nextended."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"full reference\ntable")," of properties."))}k.isMDXComponent=!0}},[["s4G/",0,1,5,3,4,2,6]]]);
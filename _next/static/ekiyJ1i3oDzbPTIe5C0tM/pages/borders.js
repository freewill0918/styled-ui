(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+r8+":function(e,t,r){"use strict";var n=r("HbGN"),o=r("ERkP"),a=r.n(o),c=r("oR8H"),b=r("/rYo"),i=r("vUXE"),d=a.a.createElement;t.a=function(e){var t=e.theme,r=e.mode,o=(Object(n.a)(e,["theme","mode"]),Object(c.useTheme)()),a=Object(b.b)(r),h=o[t]||a[t];if(!h)return"Theme field not found";var l=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(h,!!r);return d(i.a,null,r?"export const ".concat(r," = {\n  ").concat(t,":").concat(l," \n}"):"export const ".concat(t," = ").concat(l))}},OEST:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("cxan"),o=r("HbGN"),a=r("ERkP"),c=r.n(a),b=r("ZVZ0"),i=(r("oR8H"),r("+r8+")),d=(c.a.createElement,{}),h="wrapper";function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(b.b)(h,Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Borders"),Object(b.b)("p",null,"The border theme object is around the following scales:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"borders")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"borderWidths")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"radii")," (Radius)")),Object(b.b)("p",null,"which is based on the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://styled-system.com/theme-specification"}),"Styled System Theme Specification")),Object(b.b)("h2",null,"Border"),Object(b.b)(i.a,{theme:"borders",mdxType:"ThemeParser"}),Object(b.b)(i.a,{theme:"borderWidths",mdxType:"ThemeParser"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="1rem">\n  <Stack direction="row" spacing=".5rem">\n    <Box border={1} width="12x" height="12x" bg="gray:70"/>\n    <Box borderTop={1} width="12x" height="12x" bg="gray:70"/>\n    <Box borderRight={1} width="12x" height="12x" bg="gray:70"/>\n    <Box borderBottom={1} width="12x" height="12x" bg="gray:70"/>\n    <Box borderLeft={1} width="12x" height="12x" bg="gray:70"/>\n  </Stack>\n  <Stack direction="row" spacing=".5rem">\n    <Box border={2} width="12x" height="12x" bg="gray:70"/>\n    <Box borderTop={2} width="12x" height="12x" bg="gray:70"/>\n    <Box borderRight={2} width="12x" height="12x" bg="gray:70"/>\n    <Box borderBottom={2} width="12x" height="12x" bg="gray:70"/>\n    <Box borderLeft={2} width="12x" height="12x" bg="gray:70"/>\n  </Stack>\n</Stack>\n')),Object(b.b)("h2",null,"Border Radius"),Object(b.b)(i.a,{theme:"radii",mdxType:"ThemeParser"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing=".5rem">\n  <Box border={1} borderRadius="circle" width="12x" height="12x" bg="gray:70"/>\n  <Box border={1} borderRadius="sm" width="12x" height="12x" bg="gray:70"/>\n  <Box border={1} borderRadius="md" width="12x" height="12x" bg="gray:70"/>\n  <Box border={1} borderRadius="lg" width="12x" height="12x" bg="gray:70"/>\n</Stack>\n')),Object(b.b)("h2",null,"Configuration Reference"),Object(b.b)("p",null,"Except for breakpoints, colors, and spacing, all of the keys in the theme object\nmap to one of our core theme. All of these keys can be replaced or\nextended."),Object(b.b)("p",null,"See the ",Object(b.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"full reference\ntable")," of properties."))}l.isMDXComponent=!0},x5Aa:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/borders",function(){return r("OEST")}])}},[["x5Aa",0,1,5,3,4,2,6]]]);
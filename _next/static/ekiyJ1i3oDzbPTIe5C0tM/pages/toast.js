(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"+wNj":function(t,n,e){"use strict";function o(t,n){if(null==t)return{};var e,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}e.d(n,"a",(function(){return o}))},HbGN:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("+wNj");function a(t,n){if(null==t)return{};var e,a,i=Object(o.a)(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},Km8e:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},ZVZ0:function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return f}));var o=e("ERkP"),a=e.n(o);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=a.a.createContext({}),b=function(t){var n=a.a.useContext(s),e=n;return t&&(e="function"===typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=b(t.components);return a.a.createElement(s.Provider,{value:n},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=b(e),u=o,d=p["".concat(r,".").concat(u)]||p[u]||m[u]||i;return e?a.a.createElement(d,l(l({ref:n},s),{},{components:e})):a.a.createElement(d,l({ref:n},s))}));function f(t,n){var e=arguments,o=n&&n.mdxType;if("string"===typeof t||o){var i=e.length,r=new Array(i);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=t,l[u]="string"===typeof t?t:o,r[1]=l;for(var s=2;s<i;s++)r[s]=e[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},cxan:function(t,n,e){"use strict";function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return o}))},"kEL/":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return b}));var o=e("cxan"),a=e("HbGN"),i=e("ERkP"),r=e.n(i),l=e("ZVZ0"),c=(r.a.createElement,{}),s="wrapper";function b(t){var n=t.components,e=Object(a.a)(t,["components"]);return Object(l.b)(s,Object(o.a)({},c,e,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Toast"),Object(l.b)("p",null,"A toast notification is a small message that shows up in a box at one side of the screen and disappears on its own after few seconds. It is a simple feedback about an operation in which current activity remains visibility and interactive. Basically it is to inform the user of something that is not critical and that does not require specific attention and does not prevent the user from using the app."),Object(l.b)("p",null,"If you're looking for a toast that offers severity levels, such as ",Object(l.b)("inlineCode",{parentName:"p"},"success"),", ",Object(l.b)("inlineCode",{parentName:"p"},"info"),", ",Object(l.b)("inlineCode",{parentName:"p"},"warning"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"error"),", just to check out the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"./alerttoast"}),Object(l.b)("inlineCode",{parentName:"a"},"AlertToast"))," component."),Object(l.b)("h3",null,"Prerequisite"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Toast")," component should work with the ",Object(l.b)("inlineCode",{parentName:"p"},"useToast")," Hook to trigger a toast notification."),Object(l.b)("p",null,"Learn more about the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"./usetoast"}),Object(l.b)("inlineCode",{parentName:"a"},"useToast"))," Hook."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import Toast from '@trendmicro/react-styled-ui/Toast';\n// or\nimport { Toast } from '@trendmicro/react-styled-ui';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("h3",null,"Layouts"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Increase the vertical padding space to ",Object(l.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(l.b)("inlineCode",{parentName:"li"},"1rem"),") for a multiline paragraph."),Object(l.b)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",Object(l.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(l.b)("inlineCode",{parentName:"li"},"1rem"),") before the close button."),Object(l.b)("li",{parentName:"ul"},"Set the minimum horizontal margin space to ",Object(l.b)("inlineCode",{parentName:"li"},"4x")," (or ",Object(l.b)("inlineCode",{parentName:"li"},"1rem"),") between the icon and the content."),Object(l.b)("li",{parentName:"ul"},"Apply vertical margin space with ",Object(l.b)("inlineCode",{parentName:"li"},"2x")," (or ",Object(l.b)("inlineCode",{parentName:"li"},".5rem"),") between title and its content."),Object(l.b)("li",{parentName:"ul"},"Apply vertical margin space with ",Object(l.b)("inlineCode",{parentName:"li"},"6x")," (or ",Object(l.b)("inlineCode",{parentName:"li"},"1.5rem"),") between the end of the content and the action button (or action link).")),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const ToastSimple = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose}>\n    <Text>This is a toast notification.</Text>\n  </Toast>\n);\n\nconst ToastWithIcon = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Flex align="flex-start">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithTitle = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Heading fontWeight="bold">Notification Title</Heading>\n    </Box>\n    <Box mr={-36}>\n      <Text>This is a toast notification.</Text>\n    </Box>\n  </Toast>\n);\n\nconst ToastWithActionButton = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithActionLink = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="6x">\n      <Text>This is a toast notification.</Text>\n    </Box>\n    <Flex justify="flex-end" mr={-36}>\n      <Link>Action Link</Link>\n    </Flex>\n  </Toast>\n);\n\nconst ToastWithAllTogether = ({ onClose }) => (\n  <Toast isCloseButtonVisible onClose={onClose} py="4x">\n    <Box mb="2x">\n      <Heading fontWeight="bold">Notification Title</Heading>\n    </Box>\n    <Flex align="flex-start" mb="6x">\n      <Box\n        bg="gray:40"\n        height={48}\n        minWidth={48}\n      />\n      <Space minWidth="4x" />\n      <Text>This is a toast notification.</Text>\n    </Flex>\n    <Flex justify="flex-end" mr={-36}>\n      <FlatButton variant="outline" color="black:primary" size="sm">\n        Action Button\n      </FlatButton>\n    </Flex>\n  </Toast>\n);\n\nconst ToastLayout = (props) => {\n  const { colorMode } = useColorMode();\n  const boxShadow = {\n    dark: \'dark.sm\',\n    light: \'light.sm\',\n  }[colorMode];\n\n  return (\n    <Box\n      fontSize="sm"\n      lineHeight="sm"\n      textAlign="left"\n      boxShadow={boxShadow}\n      width={320}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const toast = useToast();\n  const handleClickBy = (ToastNotification) => () => {\n    toast.notify({\n      position: \'bottom-right\',\n      duration: 5000,\n      render: ({ onClose, position }) => {\n        const styleProps = {\n          \'top-left\': { mt: \'2x\', mx: \'4x\' },\n          \'top\': { mt: \'2x\', mx: \'4x\' },\n          \'top-right\': { mt: \'2x\', mx: \'4x\' },\n          \'bottom-left\': { mb: \'2x\', mx: \'4x\' },\n          \'bottom\': { mb: \'2x\', mx: \'4x\' },\n          \'bottom-right\': { mb: \'2x\', mx: \'4x\' },\n        }[position];\n\n        return (\n          <ToastLayout {...styleProps}>\n            <ToastNotification onClose={onClose} />\n          </ToastLayout>\n        );\n      },\n    });\n  };\n\n  return (\n    <>\n      <Stack direction="column" spacing="6x">\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastSimple)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastSimple />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithIcon)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithIcon />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithTitle)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithTitle />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionButton)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionButton />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithActionLink)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithActionLink />\n          </ToastLayout>\n        </Box>\n        <Box>\n          <Button\n            variant="secondary"\n            onClick={handleClickBy(ToastWithAllTogether)}\n          >\n            Show\n          </Button>\n          <ToastLayout mt="4x">\n            <ToastWithAllTogether />\n          </ToastLayout>\n        </Box>\n      </Stack>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Toast")," composes the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"./box"}),Object(l.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Default"),Object(l.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"isCloseButtonVisible"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"onClose"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"function"),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"A callback called when the close button is clicked.")))))}b.isMDXComponent=!0},q87K:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toast",function(){return e("kEL/")}])}},[["q87K",0,1]]]);
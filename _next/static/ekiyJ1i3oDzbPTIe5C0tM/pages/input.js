(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"+wNj":function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},"254t":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/input",function(){return t("gXbB")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("+wNj");function r(e,n){if(null==e)return{};var t,r,l=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}},Km8e:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t("ERkP"),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return t?r.a.createElement(m,i(i({ref:n},p),{},{components:t})):r.a.createElement(m,i({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"===typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},gXbB:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a=t("cxan"),r=t("HbGN"),l=t("ERkP"),o=t.n(l),i=t("ZVZ0"),c=(o.a.createElement,{}),p="wrapper";function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Input"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Input")," component is used to get user input in a text field."),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Input from '@trendmicro/react-styled-ui/Input';\n// or\nimport { Input } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<>\n  <TextLabel mb="1x">Label:</TextLabel>\n  <Input placeholder="Basic example" />\n  <Text size="xs" mt="1x">Help text for the text input</Text>\n</>\n')),Object(i.b)("h3",null,"Sizes"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(i.b)("inlineCode",{parentName:"p"},"Input"),". You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <Box>\n    <TextLabel mb="1x" size="sm">Label:</TextLabel>\n    <Input size="sm" placeholder="Small size (24px)" />\n  </Box>\n  <Box>\n    <TextLabel mb="1x" size="md">Label:</TextLabel>\n    <Input size="md" placeholder="Default size (32px)" />\n  </Box>\n  <Box>\n    <TextLabel mb="1x" size="lg">Label:</TextLabel>\n    <Input size="lg" placeholder="Large size (40px)" />\n  </Box>\n</Stack>\n')),Object(i.b)("h3",null,"Variants"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Input")," component comes in 3 variants: ",Object(i.b)("inlineCode",{parentName:"p"},"outline"),", ",Object(i.b)("inlineCode",{parentName:"p"},"filled"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",Object(i.b)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"outline")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input variant="outline" placeholder="John Doe" />\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"filled")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input variant="filled" placeholder="John Doe" />\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"unstyled")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input variant="unstyled" placeholder="John Doe" />\n')),Object(i.b)("h3",null,"Attributes"),Object(i.b)("p",null,"Standard input attributes are supported, e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", ",Object(i.b)("inlineCode",{parentName:"p"},"disabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"readOnly"),", ",Object(i.b)("inlineCode",{parentName:"p"},"required"),", etc."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"type")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Grid\n  templateColumns="min-content auto"\n  columnGap="3x"\n  rowGap="3x"\n>\n  <Grid>\n    <TextLabel>Name:</TextLabel>\n  </Grid>\n  <Grid>\n    <Input type="text" placeholder="John Doe" />\n  </Grid>\n  <Grid>\n    <TextLabel>Password:</TextLabel>\n  </Grid>\n  <Grid>\n    <Input type="password" placeholder="Password" />\n  </Grid>\n</Grid>\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"disabled")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <Input disabled placeholder="Placeholder text" />\n  <Input disabled placeholder="Placeholder text" defaultValue="Disabled" />\n</Stack>\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"readOnly")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <Input readOnly placeholder="Placeholder text" />\n  <Input readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n</Stack>\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"required")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input required placeholder="Placeholder text" />\n')),Object(i.b)("h3",null,"Adornments"),Object(i.b)("p",null,"Input adornments can be used to add a prefix, a suffix or an action to an input. For instance, you can use an icon button to hide or reveal the password."),Object(i.b)("p",null,"First, you may have to create your input adornment components for convenience. Note that you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"z-index")," value as mentioned below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled",disabled:!0}),'const InputAdornmentPrepend = (props) => (\n  <Flex\n    align="center"\n    position="absolute"\n    left={0}\n    height="100%"\n    px="3x"\n    // The z-index value should be at least 3 for the prepeneded input adornment\n    zIndex={3}\n    {...props}\n  />\n);\n\nconst InputAdornmentAppend = (props) => (\n  <Flex\n    align="center"\n    position="absolute"\n    right={0}\n    height="100%"\n    px="3x"\n    // The z-index value should be at least 2 for the appended input adornment\n    zIndex={2}\n    {...props}\n  />\n);\n')),Object(i.b)("p",null,"Take a look at the following examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const InputAdornmentPrepend = (props) => (\n  <Flex\n    align="center"\n    position="absolute"\n    left={0}\n    px="3x"\n    // The z-index value should be at least 3 for the prepeneded input adornment\n    zIndex={3}\n    {...props}\n  />\n);\n\nconst InputAdornmentAppend = (props) => (\n  <Flex\n    align="center"\n    position="absolute"\n    right={0}\n    px="3x"\n    // The z-index value should be at least 2 for the appended input adornment\n    zIndex={2}\n    {...props}\n  />\n);\n\nfunction Example() {\n  const [view, setView] = React.useState(false);\n  const toggleView = () => setView(view => !view);\n  const { colorMode } = useColorMode();\n  const adornmentColor = {\n    dark: \'white:tertiary\',\n    light: \'black:tertiary\',\n  }[colorMode];\n  const adornmentIconName = view ? \'view\' : \'view-off\';\n  const inputType = view ? \'text\' : \'password\';\n\n  return (\n    <Stack direction="column" spacing="4x">\n      <Flex position="relative" alignItems="center">\n        <InputAdornmentPrepend>\n          <TMIcon name="mobile" color={adornmentColor} />\n        </InputAdornmentPrepend>\n        <Input\n          placeholder="Mobile phone number"\n          px="10x"\n        />\n      </Flex>\n      <Flex position="relative" alignItems="center">\n        <InputAdornmentPrepend>\n          <Text width="4x" textAlign="center" color={adornmentColor}>$</Text>\n        </InputAdornmentPrepend>\n        <Input\n          placeholder="Enter the amount"\n          px="10x"\n        />\n        <InputAdornmentAppend>\n          <TMIcon name="check" color="green:50" />\n        </InputAdornmentAppend>\n      </Flex>\n      <Flex position="relative" alignItems="center">\n        <Input\n          type={inputType}\n          defaultValue="Revealed Password"\n          placeholder="Password"\n          pr="10x"\n        />\n        <InputAdornmentAppend>\n          <ButtonBase onClick={toggleView}>\n            <TMIcon name={adornmentIconName} color={adornmentColor} />\n          </ButtonBase>\n        </InputAdornmentAppend>\n      </Flex>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h3",null,"Validation"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"isInvalid")," attribute to indicate that the value entered into an input field does not conform to the format expected by the application. ",Object(i.b)("inlineCode",{parentName:"p"},"isInvalid")," can also be used to indicate that a required field has not been filled in."),Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},"isInvalid")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," on the fields that have failed validation, otherwise set it to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," if no errors detected."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const InlineError = (props) => (\n  <Text fontSize="sm" lineHeight="sm" color="red:50" {...props} />\n);\n\nconst InputField = ({\n  value,\n  onChange,\n  ...props\n}) => {\n  const isInvalid = (value === \'\');\n  let invalidInputStyle = {};\n  if (isInvalid) {\n    invalidInputStyle = {\n      isInvalid: true,\n      pr: \'10x\',\n    };\n  }\n\n  return (\n    <>\n      <Flex position="relative" alignItems="center" mb="1x">\n        <Input\n          placeholder="Enter your name here"\n          value={value}\n          onChange={onChange}\n          {...invalidInputStyle}\n        />\n        {isInvalid && (\n          <Box position="absolute" right={0}>\n            <TMIcon name="warning-circle" px="3x" color="red:50" />\n          </Box>\n        )}\n      </Flex>\n      <Box>\n        {isInvalid && (\n          <InlineError>This is a required field.</InlineError>\n        )}\n      </Box>\n    </>\n  );\n};\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <InputField value={value} onChange={onChange} />\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Input")," composes the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./inputbase"}),Object(i.b)("inlineCode",{parentName:"a"},"InputBase"))," component."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"size"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The visual size of the ",Object(i.b)("inlineCode",{parentName:"td"},"input")," element. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variant"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'outline'"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The variant of the input style to use. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'outline'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'filled'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'unstyled'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"disabled"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control. This sets ",Object(i.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(i.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"readOnly"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isInvalid"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the input will indicate an error. You can style this state by passing the ",Object(i.b)("inlineCode",{parentName:"td"},"_invalid")," prop.")))))}b.isMDXComponent=!0}},[["254t",0,1]]]);
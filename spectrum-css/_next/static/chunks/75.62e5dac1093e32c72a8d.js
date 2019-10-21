(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"M+I1":function(e,r){const t=[{name:"Text Field",status:"Verified",description:"A Spectrum text field",SpectrumSiteSlug:"https://spectrum.adobe.com/page/text-field/",examples:[{id:"textfield",name:"Standard",markup:'<input type="text" placeholder="Enter your name" name="field" value="" class="spectrum-Textfield">\n\n<input type="text" placeholder="Enter your name" name="field" value="" class="spectrum-Textfield" disabled>\n\n<input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield is-valid" pattern="[\\w\\s]+" required>\n\n<input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield is-valid" pattern="[\\w\\s]+" required disabled>\n\n<input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield" pattern="[\\d]+" required>\n\n<input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield is-invalid" disabled>\n'},{id:"textfield-quiet",name:"Text Field - Quiet",description:"A Spectrum text field - quiet",markup:'<input type="text" placeholder="Enter your name" name="field" value="" class="spectrum-Textfield spectrum-Textfield--quiet">\n\n<input type="text" placeholder="Enter your name" name="field" value="" class="spectrum-Textfield spectrum-Textfield--quiet" disabled>\n\n<input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield spectrum-Textfield--quiet is-valid" pattern="[\\w\\s]+" required>\n\n<input type="text" placeholder="Enter your name" name="field" value="A valid input" class="spectrum-Textfield spectrum-Textfield--quiet is-valid" pattern="[\\w\\s]+" required disabled>\n\n<input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield spectrum-Textfield--quiet" pattern="[\\d]+" required>\n\n<input type="text" placeholder="Enter your name" name="field" value="Not a valid input" class="spectrum-Textfield spectrum-Textfield--quiet is-invalid" disabled>\n'}],packageSlug:"textfield",indexCSS:".spectrum-Textfield {\n  box-sizing: border-box;\n  border: var(--spectrum-textfield-border-size, var(--spectrum-alias-border-size-thin)) solid;\n  border-radius: var(--spectrum-textfield-border-radius, var(--spectrum-alias-border-radius-regular));\n  padding: 3px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) 5px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150));\n  text-indent: 0;\n\n  min-width: var(--spectrum-textfield-min-width, var(--spectrum-global-dimension-size-600));\n  height: var(--spectrum-textfield-height, var(--spectrum-alias-single-line-height));\n  width: var(--spectrum-alias-single-line-width, var(--spectrum-global-dimension-size-2400));\n\n  vertical-align: top;\n  margin: 0;\n  overflow: visible;\n  font-family: adobe-clean, Helvetica, Arial, sans-serif;\n  font-size: var(--spectrum-textfield-text-size, var(--spectrum-alias-font-size-default));\n  line-height: var(--spectrum-textfield-text-line-height, var(--spectrum-alias-body-text-line-height));\n  text-overflow: ellipsis;\n\n  transition: border-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n\n  outline: none;\n\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n\n.spectrum-Textfield::placeholder {\n    font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    font-style: var(--spectrum-textfield-placeholder-text-font-style, var(--spectrum-global-font-style-italic));\n    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n    opacity: 1;\n  }\n\n.spectrum-Textfield::-ms-input-placeholder {\n    font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    font-style: var(--spectrum-textfield-placeholder-text-font-style, var(--spectrum-global-font-style-italic));\n    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n    opacity: 1;\n  }\n\n.spectrum-Textfield:lang(ja)::placeholder, .spectrum-Textfield:lang(zh)::placeholder, .spectrum-Textfield:lang(ko)::placeholder {\n       font-style: normal;\n    }\n\n.spectrum-Textfield:lang(ja)::-ms-input-placeholder, .spectrum-Textfield:lang(zh)::-ms-input-placeholder, .spectrum-Textfield:lang(ko)::-ms-input-placeholder {\n       font-style: normal;\n    }\n\n.spectrum-Textfield:hover::placeholder {\n      font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    }\n\n.spectrum-Textfield:disabled {\n    opacity: 1;\n  }\n\n.spectrum-Textfield:disabled::placeholder {\n      font-weight: var(--spectrum-textfield-placeholder-text-font-weight, var(--spectrum-global-font-weight-regular));\n    }\n\n.spectrum-Textfield::-ms-clear {\n    width: 0;\n    height: 0;\n  }\n\n.spectrum-Textfield::-webkit-inner-spin-button,\n  .spectrum-Textfield::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n.spectrum-Textfield:-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid,\n  .spectrum-Textfield.is-valid {\n    background-repeat: no-repeat;\n  }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid {\n    background-size: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225)) var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n    background-position: calc(100% - var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150))) 50%;\n    padding-right: calc(var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) + var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225)) + var(--spectrum-textfield-icon-margin-left, var(--spectrum-global-dimension-size-150)));\n  }\n\n.spectrum-Textfield.is-valid {\n    background-size: var(--spectrum-icon-checkmark-medium-width) var(--spectrum-icon-checkmark-medium-width);\n    background-position: calc(100% - var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150))) 50%;\n    padding-right: calc(var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-textfield-icon-margin-left, var(--spectrum-global-dimension-size-150)));\n  }\n\n.spectrum-Textfield--multiline {\n  height: auto;\n  min-height: var(--spectrum-global-dimension-size-700);\n  padding: 3px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150)) 5px var(--spectrum-textfield-padding-x, var(--spectrum-global-dimension-size-150));\n  overflow: auto;\n}\n\n.spectrum-Textfield--multiline.is-invalid,\n  .spectrum-Textfield--multiline:invalid,\n  .spectrum-Textfield--multiline.is-valid {\n    background-position: calc(100% - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2) calc(100% - var(--spectrum-textfield-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Textfield--quiet {\n  border-radius: 0;\n  border-width: 0 0 var(--spectrum-textfield-quiet-border-size, var(--spectrum-alias-border-size-thin)) 0;\n  padding-left: var(--spectrum-textfield-quiet-padding-x, 0);\n  padding-right: var(--spectrum-textfield-quiet-padding-x, 0);\n  resize: none;\n  overflow-y: hidden;\n}\n\n.spectrum-Textfield--quiet.is-invalid,\n  .spectrum-Textfield--quiet:invalid,\n  .spectrum-Textfield--quiet.is-valid {\n    background-position: 100% 50%;\n  }\n\n.spectrum-Textfield {\n  background-color: var(--spectrum-textfield-background-color, var(--spectrum-global-color-gray-50));\n  border-color: var(--spectrum-textfield-border-color, var(--spectrum-global-color-gray-300));\n  color: var(--spectrum-textfield-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Textfield::placeholder {\n    color: var(--spectrum-textfield-placeholder-text-color, var(--spectrum-alias-placeholder-text-color));\n  }\n\n.spectrum-Textfield:hover {\n    border-color: var(--spectrum-textfield-border-color-hover, var(--spectrum-global-color-gray-400));\n    box-shadow: none;\n  }\n\n.spectrum-Textfield:hover::placeholder {\n      color: var(--spectrum-textfield-placeholder-text-color-hover, var(--spectrum-alias-placeholder-text-color-hover));\n    }\n\n.spectrum-Textfield:focus {\n    border-color: var(--spectrum-textfield-border-color-down, var(--spectrum-alias-border-color-down));\n  }\n\n.spectrum-Textfield.focus-ring:not(:active) {\n      border-color: var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n      box-shadow: 0 0 0 1px var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-Textfield[disabled] {\n    background-color: var(--spectrum-textfield-background-color-disabled, var(--spectrum-global-color-gray-200));\n    border-color: var(--spectrum-textfield-border-color-disabled, var(--spectrum-alias-border-color-transparent));\n    color: var(--spectrum-textfield-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    -webkit-text-fill-color: var(--spectrum-textfield-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Textfield[disabled]::placeholder {\n      color: var(--spectrum-textfield-placeholder-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n    }\n\n.spectrum-Textfield.is-invalid,\n  .spectrum-Textfield:invalid {\n    border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='18' viewBox='0 0 18 18' width='18'%3E%3Cpath style='fill:var%28--spectrum-alert-error-border-color%2C var%28--spectrum-semantic-negative-color-border%29%29' d='M8.564 1.289L.2 16.256A.5.5 0 0 0 .636 17h16.728a.5.5 0 0 0 .5-.5.494.494 0 0 0-.064-.244L9.436 1.289a.5.5 0 0 0-.872 0zM10 14.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25zm0-3a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25z'/%3E%3C/svg%3E\");\n  }\n\n.spectrum-Textfield.is-invalid.focus-ring:not(:active), .spectrum-Textfield:invalid.focus-ring:not(:active) {\n        border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n        box-shadow: 0 0 0 1px var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n      }\n\n.spectrum-Textfield.is-valid {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 12 12' width='12'%3E%3Cpath style='fill:var%28--spectrum-alert-success-icon-color%2C var%28--spectrum-semantic-positive-color-icon%29%29' d='M4.5 10a1.023 1.023 0 0 1-.8-.384l-2.488-3a1 1 0 0 1 1.577-1.233L4.5 7.376l4.712-5.991a1 1 0 1 1 1.576 1.23l-5.511 7A.977.977 0 0 1 4.5 10z'/%3E%3C/svg%3E\");\n  }\n\n.spectrum-Textfield--quiet {\n  background-color: var(--spectrum-textfield-quiet-background-color, var(--spectrum-alias-background-color-transparent));\n  border-color: var(--spectrum-textfield-quiet-border-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-Textfield--quiet:hover {\n    border-color: var(--spectrum-textfield-quiet-border-color-hover, var(--spectrum-global-color-gray-400));\n  }\n\n.spectrum-Textfield--quiet:active {\n    border-color: var(--spectrum-textfield-quiet-border-color-down, var(--spectrum-alias-border-color-down));\n  }\n\n.spectrum-Textfield--quiet:focus {\n    border-color: var(--spectrum-textfield-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    box-shadow: 0 1px 0 var(--spectrum-textfield-quiet-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n  }\n\n.spectrum-Textfield--quiet.focus-ring:not(:active) {\n      border-color: var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n      box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-key-focus, var(--spectrum-alias-border-color-focus));\n    }\n\n.spectrum-Textfield--quiet:disabled {\n    background-color: var(--spectrum-textfield-quiet-background-color-disabled, var(--spectrum-alias-background-color-transparent));\n    border-color:  var(--spectrum-textfield-quiet-border-color-disabled, var(--spectrum-alias-border-color-mid));\n  }\n\n.spectrum-Textfield--quiet.is-invalid,\n  .spectrum-Textfield--quiet:invalid {\n    border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n  }\n\n.spectrum-Textfield--quiet.is-invalid:focus, .spectrum-Textfield--quiet:invalid:focus {\n      box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n    }\n\n.spectrum-Textfield--quiet.is-invalid.focus-ring:not(:active), .spectrum-Textfield--quiet:invalid.focus-ring:not(:active) {\n        border-color: var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n        box-shadow: 0 1px 0 var(--spectrum-textfield-border-color-error, var(--spectrum-global-color-red-500));\n      }\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/textfield",peerCSS:""}];e.exports=t.length<=1?t[0]:t}}]);
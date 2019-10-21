(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{Z27D:function(t,s){const e=[{name:"Status Light",SpectrumSiteSlug:"https://spectrum.adobe.com/page/status-light/",examples:[{id:"statuslight",name:"Colors",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--celery">Celery Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--yellow">Yellow Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--fuchsia">Fuchsia Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--indigo">Indigo Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--seafoam">Seafoam Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--chartreuse">Chartreuse Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--magenta">Magenta Status</div>\n<div class="spectrum-StatusLight spectrum-StatusLight--purple">Purple Status</div>'},{id:"statuslight-neutral",name:"Neutral",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--neutral">Paused</div>\n'},{id:"statuslight-info",name:"Info",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--info">Active</div>\n'},{id:"statuslight-positive",name:"Positive",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--positive">Approved</div>\n'},{id:"statuslight-notice",name:"Notice",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--notice">Needs Approval</div>\n'},{id:"statuslight-negative",name:"Negative",status:"Verified",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--negative">Rejected</div>\n'},{id:"statuslight",name:"Disabled",status:"Verified",description:"The disabled state of Status Light.",markup:'<div class="spectrum-StatusLight is-disabled">Disabled</div>\n'},{id:"statuslight-active",name:"Active",status:"Deprecated",details:"Use the `info` variant instead",description:"The active variant of Status Light",markup:'<div class="spectrum-StatusLight spectrum-StatusLight--active">Active</div>\n'}],packageSlug:"statuslight",indexCSS:".spectrum-StatusLight {\n  min-height: var(--spectrum-statuslight-height, var(--spectrum-alias-single-line-height));\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: start;\n      align-items: flex-start;\n\n  padding: var(--spectrum-global-dimension-size-75) 0px;\n  box-sizing: border-box;\n\n  font-size: var(--spectrum-statuslight-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-statuslight-text-font-weight, var(--spectrum-alias-body-text-font-weight));\n}\n\n.spectrum-StatusLight::before {\n    content: '';\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    display: inline-block;\n    width: var(--spectrum-statuslight-dot-size, var(--spectrum-global-dimension-size-100));\n    height: var(--spectrum-statuslight-dot-size, var(--spectrum-global-dimension-size-100));\n    border-radius: 50%;\n    margin: var(--spectrum-global-dimension-size-75) var(--spectrum-statuslight-text-gap, var(--spectrum-global-dimension-size-150));\n  }\n\n.spectrum-StatusLight--neutral {\n  font-style: italic;\n}\n\n.spectrum-StatusLight {\n  color: var(--spectrum-statuslight-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-StatusLight[disabled],\n  .spectrum-StatusLight.is-disabled {\n    color: var(--spectrum-statuslight-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-StatusLight[disabled]::before, .spectrum-StatusLight.is-disabled::before {\n      background-color: var(--spectrum-statuslight-dot-color-disabled, var(--spectrum-global-color-gray-400));\n    }\n\n.spectrum-StatusLight--negative::before {\n  background-color: var(--spectrum-statuslight-negative-dot-color, var(--spectrum-semantic-negative-color-status));\n}\n\n.spectrum-StatusLight--notice::before {\n  background-color: var(--spectrum-statuslight-notice-dot-color, var(--spectrum-semantic-notice-color-status));\n}\n\n.spectrum-StatusLight--positive::before {\n  background-color: var(--spectrum-statuslight-positive-dot-color, var(--spectrum-semantic-positive-color-status));\n}\n\n.spectrum-StatusLight--info::before,\n/** @depreacted */.spectrum-StatusLight--active::before {\n  background-color: var(--spectrum-statuslight-info-dot-color, var(--spectrum-semantic-informative-color-status));\n}\n\n.spectrum-StatusLight--neutral {\n  color: var(--spectrum-statuslight-neutral-text-color, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-StatusLight--neutral::before {\n    background-color: var(--spectrum-statuslight-neutral-dot-color, var(--spectrum-global-color-gray-500));\n  }\n\n.spectrum-StatusLight--celery::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-celery, var(--spectrum-global-color-celery-400));\n}\n\n.spectrum-StatusLight--yellow::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-yellow, var(--spectrum-global-color-yellow-400));\n}\n\n.spectrum-StatusLight--fuchsia::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-fuchsia, var(--spectrum-global-color-fuchsia-400));\n}\n\n.spectrum-StatusLight--indigo::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-indigo, var(--spectrum-global-color-indigo-400));\n}\n\n.spectrum-StatusLight--seafoam::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-seafoam, var(--spectrum-global-color-seafoam-400));\n}\n\n.spectrum-StatusLight--chartreuse::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-chartreuse, var(--spectrum-global-color-chartreuse-400));\n}\n\n.spectrum-StatusLight--magenta::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-magenta, var(--spectrum-global-color-magenta-400));\n}\n\n.spectrum-StatusLight--purple::before {\n  background-color: var(--spectrum-statuslight-dot-color-label-purple, var(--spectrum-global-color-purple-400));\n}\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/statuslight",peerCSS:""}];t.exports=e.length<=1?e[0]:e}}]);
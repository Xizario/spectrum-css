(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Jjse:function(r,e){const n=[{name:"Circle Loader",status:"Verified",SpectrumSiteSlug:"https://spectrum.adobe.com/page/circle-loader/",examples:[{id:"circleloader-small",name:"Standard",markup:'<div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;" id="standard-loaders">\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--small">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="spectrum-CircleLoader">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--large">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},{id:"circleloader-small-over-background",name:"Over Background",markup:'<div style="width: 250px; height: 150px; background-color: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: space-around;" id="ob-loaders">\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--small spectrum-CircleLoader--overBackground">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--overBackground">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--large spectrum-CircleLoader--overBackground">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},{id:"circleloader-small",name:"Indeterminate",markup:'<div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;">\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--indeterminate spectrum-CircleLoader--small">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--indeterminate">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="spectrum-CircleLoader spectrum-CircleLoader--indeterminate spectrum-CircleLoader--large">\n    <div class="spectrum-CircleLoader-track"></div>\n    <div class="spectrum-CircleLoader-fills">\n      <div class="spectrum-CircleLoader-fillMask1">\n        <div class="spectrum-CircleLoader-fillSubMask1">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n      <div class="spectrum-CircleLoader-fillMask2">\n        <div class="spectrum-CircleLoader-fillSubMask2">\n          <div class="spectrum-CircleLoader-fill"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'}],packageSlug:"circleloader",indexCSS:".spectrum-CircleLoader--indeterminate-fill-submask-2 {\n  animation: 1s infinite linear spectrum-fill-mask-2;\n}\n\n@keyframes spectrum-fill-mask-1 {\n  0% {\n    transform: rotate(90deg);\n  }\n\n  1.69% {\n    transform: rotate(72.3deg);\n  }\n\n  3.39% {\n    transform: rotate(55.5deg);\n  }\n\n  5.08% {\n    transform: rotate(40.3deg);\n  }\n\n  6.78% {\n    transform: rotate(25deg);\n  }\n\n  8.47% {\n    transform: rotate(10.6deg);\n  }\n\n  10.17% {\n    transform: rotate(0deg);\n  }\n\n  11.86% {\n    transform: rotate(0deg);\n  }\n\n  13.56% {\n    transform: rotate(0deg);\n  }\n\n  15.25% {\n    transform: rotate(0deg);\n  }\n\n  16.95% {\n    transform: rotate(0deg);\n  }\n\n  18.64% {\n    transform: rotate(0deg);\n  }\n\n  20.34% {\n    transform: rotate(0deg);\n  }\n\n  22.03% {\n    transform: rotate(0deg);\n  }\n\n  23.73% {\n    transform: rotate(0deg);\n  }\n\n  25.42% {\n    transform: rotate(0deg);\n  }\n\n  27.12% {\n    transform: rotate(0deg);\n  }\n\n  28.81% {\n    transform: rotate(0deg);\n  }\n\n  30.51% {\n    transform: rotate(0deg);\n  }\n\n  32.2% {\n    transform: rotate(0deg);\n  }\n\n  33.9% {\n    transform: rotate(0deg);\n  }\n\n  35.59% {\n    transform: rotate(0deg);\n  }\n\n  37.29% {\n    transform: rotate(0deg);\n  }\n\n  38.98% {\n    transform: rotate(0deg);\n  }\n\n  40.68% {\n    transform: rotate(0deg);\n  }\n\n  42.37% {\n    transform: rotate(5.3deg);\n  }\n\n  44.07% {\n    transform: rotate(13.4deg);\n  }\n\n  45.76% {\n    transform: rotate(20.6deg);\n  }\n\n  47.46% {\n    transform: rotate(29deg);\n  }\n\n  49.15% {\n    transform: rotate(36.5deg);\n  }\n\n  50.85% {\n    transform: rotate(42.6deg);\n  }\n\n  52.54% {\n    transform: rotate(48.8deg);\n  }\n\n  54.24% {\n    transform: rotate(54.2deg);\n  }\n\n  55.93% {\n    transform: rotate(59.4deg);\n  }\n\n  57.63% {\n    transform: rotate(63.2deg);\n  }\n\n  59.32% {\n    transform: rotate(67.2deg);\n  }\n\n  61.02% {\n    transform: rotate(70.8deg);\n  }\n\n  62.71% {\n    transform: rotate(73.8deg);\n  }\n\n  64.41% {\n    transform: rotate(76.2deg);\n  }\n\n  66.1% {\n    transform: rotate(78.7deg);\n  }\n\n  67.8% {\n    transform: rotate(80.6deg);\n  }\n\n  69.49% {\n    transform: rotate(82.6deg);\n  }\n\n  71.19% {\n    transform: rotate(83.7deg);\n  }\n\n  72.88% {\n    transform: rotate(85deg);\n  }\n\n  74.58% {\n    transform: rotate(86.3deg);\n  }\n\n  76.27% {\n    transform: rotate(87deg);\n  }\n\n  77.97% {\n    transform: rotate(87.7deg);\n  }\n\n  79.66% {\n    transform: rotate(88.3deg);\n  }\n\n  81.36% {\n    transform: rotate(88.6deg);\n  }\n\n  83.05% {\n    transform: rotate(89.2deg);\n  }\n\n  84.75% {\n    transform: rotate(89.2deg);\n  }\n\n  86.44% {\n    transform: rotate(89.5deg);\n  }\n\n  88.14% {\n    transform: rotate(89.9deg);\n  }\n\n  89.83% {\n    transform: rotate(89.7deg);\n  }\n\n  91.53% {\n    transform: rotate(90.1deg);\n  }\n\n  93.22% {\n    transform: rotate(90.2deg);\n  }\n\n  94.92% {\n    transform: rotate(90.1deg);\n  }\n\n  96.61% {\n    transform: rotate(90deg);\n  }\n\n  98.31% {\n    transform: rotate(89.8deg);\n  }\n\n  100% {\n    transform: rotate(90deg);\n  }\n}\n\n@keyframes spectrum-fill-mask-2 {\n  0% {\n    transform: rotate(180deg);\n  }\n\n  1.69% {\n    transform: rotate(180deg);\n  }\n\n  3.39% {\n    transform: rotate(180deg);\n  }\n\n  5.08% {\n    transform: rotate(180deg);\n  }\n\n  6.78% {\n    transform: rotate(180deg);\n  }\n\n  8.47% {\n    transform: rotate(180deg);\n  }\n\n  10.17% {\n    transform: rotate(179.2deg);\n  }\n\n  11.86% {\n    transform: rotate(164deg);\n  }\n\n  13.56% {\n    transform: rotate(151.8deg);\n  }\n\n  15.25% {\n    transform: rotate(140.8deg);\n  }\n\n  16.95% {\n    transform: rotate(130.3deg);\n  }\n\n  18.64% {\n    transform: rotate(120.4deg);\n  }\n\n  20.34% {\n    transform: rotate(110.8deg);\n  }\n\n  22.03% {\n    transform: rotate(101.6deg);\n  }\n\n  23.73% {\n    transform: rotate(93.5deg);\n  }\n\n  25.42% {\n    transform: rotate(85.4deg);\n  }\n\n  27.12% {\n    transform: rotate(78.1deg);\n  }\n\n  28.81% {\n    transform: rotate(71.2deg);\n  }\n\n  30.51% {\n    transform: rotate(89.1deg);\n  }\n\n  32.2% {\n    transform: rotate(105.5deg);\n  }\n\n  33.9% {\n    transform: rotate(121.3deg);\n  }\n\n  35.59% {\n    transform: rotate(135.5deg);\n  }\n\n  37.29% {\n    transform: rotate(148.4deg);\n  }\n\n  38.98% {\n    transform: rotate(161deg);\n  }\n\n  40.68% {\n    transform: rotate(173.5deg);\n  }\n\n  42.37% {\n    transform: rotate(180deg);\n  }\n\n  44.07% {\n    transform: rotate(180deg);\n  }\n\n  45.76% {\n    transform: rotate(180deg);\n  }\n\n  47.46% {\n    transform: rotate(180deg);\n  }\n\n  49.15% {\n    transform: rotate(180deg);\n  }\n\n  50.85% {\n    transform: rotate(180deg);\n  }\n\n  52.54% {\n    transform: rotate(180deg);\n  }\n\n  54.24% {\n    transform: rotate(180deg);\n  }\n\n  55.93% {\n    transform: rotate(180deg);\n  }\n\n  57.63% {\n    transform: rotate(180deg);\n  }\n\n  59.32% {\n    transform: rotate(180deg);\n  }\n\n  61.02% {\n    transform: rotate(180deg);\n  }\n\n  62.71% {\n    transform: rotate(180deg);\n  }\n\n  64.41% {\n    transform: rotate(180deg);\n  }\n\n  66.1% {\n    transform: rotate(180deg);\n  }\n\n  67.8% {\n    transform: rotate(180deg);\n  }\n\n  69.49% {\n    transform: rotate(180deg);\n  }\n\n  71.19% {\n    transform: rotate(180deg);\n  }\n\n  72.88% {\n    transform: rotate(180deg);\n  }\n\n  74.58% {\n    transform: rotate(180deg);\n  }\n\n  76.27% {\n    transform: rotate(180deg);\n  }\n\n  77.97% {\n    transform: rotate(180deg);\n  }\n\n  79.66% {\n    transform: rotate(180deg);\n  }\n\n  81.36% {\n    transform: rotate(180deg);\n  }\n\n  83.05% {\n    transform: rotate(180deg);\n  }\n\n  84.75% {\n    transform: rotate(180deg);\n  }\n\n  86.44% {\n    transform: rotate(180deg);\n  }\n\n  88.14% {\n    transform: rotate(180deg);\n  }\n\n  89.83% {\n    transform: rotate(180deg);\n  }\n\n  91.53% {\n    transform: rotate(180deg);\n  }\n\n  93.22% {\n    transform: rotate(180deg);\n  }\n\n  94.92% {\n    transform: rotate(180deg);\n  }\n\n  96.61% {\n    transform: rotate(180deg);\n  }\n\n  98.31% {\n    transform: rotate(180deg);\n  }\n\n  100% {\n    transform: rotate(180deg);\n  }\n}\n\n@keyframes spectrum-fills-rotate {\n  0% {transform: rotate(-90deg)}\n  100% {transform: rotate(270deg)}\n}\n\n.spectrum-CircleLoader {\n  display: inline-block;\n  width: var(--spectrum-loader-circle-medium-width, var(--spectrum-global-dimension-static-size-400));\n  height: var(--spectrum-loader-circle-medium-height, var(--spectrum-global-dimension-static-size-400));\n  position: relative;\n  direction: ltr;\n}\n\n.spectrum-CircleLoader-track {\n  box-sizing: border-box;\n  width: var(--spectrum-loader-circle-medium-width, var(--spectrum-global-dimension-static-size-400));\n  height: var(--spectrum-loader-circle-medium-height, var(--spectrum-global-dimension-static-size-400));\n  border-style: solid;\n  border-width: var(--spectrum-loader-circle-medium-border-size);\n  border-radius: var(--spectrum-loader-circle-medium-width, var(--spectrum-global-dimension-static-size-400));\n}\n\n.spectrum-CircleLoader-fills {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.spectrum-CircleLoader-fill {\n  box-sizing: border-box;\n  width: var(--spectrum-loader-circle-medium-width, var(--spectrum-global-dimension-static-size-400));\n  height: var(--spectrum-loader-circle-medium-height, var(--spectrum-global-dimension-static-size-400));\n  border-style: solid;\n  border-width: var(--spectrum-loader-circle-medium-border-size);\n  border-radius: var(--spectrum-loader-circle-medium-width, var(--spectrum-global-dimension-static-size-400));\n}\n\n.spectrum-CircleLoader-fillMask1,\n.spectrum-CircleLoader-fillMask2 {\n  width: 50%;\n  height: 100%;\n  transform-origin: 100% center;\n  transform: rotate(180deg);\n  overflow: hidden;\n  position: absolute;\n}\n\n.spectrum-CircleLoader-fillSubMask1,\n.spectrum-CircleLoader-fillSubMask2 {\n  width: 100%;\n  height: 100%;\n  transform-origin: 100% center;\n  overflow: hidden;\n  transform: rotate(-180deg);\n}\n\n.spectrum-CircleLoader-fillMask2 {\n  transform: rotate(0deg);\n}\n\n.spectrum-CircleLoader--small {\n  width: var(--spectrum-loader-circle-small-width, var(--spectrum-global-dimension-static-size-200));\n  height: var(--spectrum-loader-circle-small-height, var(--spectrum-global-dimension-static-size-200));\n}\n\n.spectrum-CircleLoader--small .spectrum-CircleLoader-track {\n    width: var(--spectrum-loader-circle-small-width, var(--spectrum-global-dimension-static-size-200));\n    height: var(--spectrum-loader-circle-small-height, var(--spectrum-global-dimension-static-size-200));\n    border-style: solid;\n    border-width: var(--spectrum-loader-circle-small-border-size);\n    border-radius: var(--spectrum-loader-circle-small-width, var(--spectrum-global-dimension-static-size-200));\n  }\n\n.spectrum-CircleLoader--small .spectrum-CircleLoader-fill {\n    width: var(--spectrum-loader-circle-small-width, var(--spectrum-global-dimension-static-size-200));\n    height: var(--spectrum-loader-circle-small-height, var(--spectrum-global-dimension-static-size-200));\n    border-style: solid;\n    border-width: var(--spectrum-loader-circle-small-border-size);\n    border-radius: var(--spectrum-loader-circle-small-width, var(--spectrum-global-dimension-static-size-200));\n  }\n\n.spectrum-CircleLoader--large {\n  width: var(--spectrum-loader-circle-large-width, var(--spectrum-global-dimension-size-800));\n  height: var(--spectrum-loader-circle-large-height, var(--spectrum-global-dimension-size-800));\n}\n\n.spectrum-CircleLoader--large .spectrum-CircleLoader-track {\n    width: var(--spectrum-loader-circle-large-width, var(--spectrum-global-dimension-size-800));\n    height: var(--spectrum-loader-circle-large-height, var(--spectrum-global-dimension-size-800));\n    border-style: solid;\n    border-width: var(--spectrum-loader-circle-large-border-size, var(--spectrum-global-dimension-size-50));\n    border-radius: var(--spectrum-loader-circle-large-width, var(--spectrum-global-dimension-size-800));\n  }\n\n.spectrum-CircleLoader--large .spectrum-CircleLoader-fill {\n    width: var(--spectrum-loader-circle-large-width, var(--spectrum-global-dimension-size-800));\n    height: var(--spectrum-loader-circle-large-height, var(--spectrum-global-dimension-size-800));\n    border-style: solid;\n    border-width: var(--spectrum-loader-circle-large-border-size, var(--spectrum-global-dimension-size-50));\n    border-radius: var(--spectrum-loader-circle-large-width, var(--spectrum-global-dimension-size-800));\n  }\n\n.spectrum-CircleLoader--indeterminate .spectrum-CircleLoader-fills {\n    will-change: transform;\n    transform: translateZ(0);\n    animation: 1s infinite cubic-bezier(.25,.78,.48,.89) spectrum-fills-rotate;\n    transform-origin: center;\n  }\n\n.spectrum-CircleLoader--indeterminate .spectrum-CircleLoader-fillSubMask1 {\n    will-change: transform;\n    transform: translateZ(0);\n    animation: 1s infinite linear spectrum-fill-mask-1;\n  }\n\n.spectrum-CircleLoader--indeterminate .spectrum-CircleLoader-fillSubMask2 {\n    will-change: transform;\n    transform: translateZ(0);\n    animation: 1s infinite linear spectrum-fill-mask-2;\n  }\n\n.spectrum-CircleLoader-track {\n  border-color: var(--spectrum-loader-circle-medium-track-color, var(--spectrum-alias-track-color-default));\n}\n\n.spectrum-CircleLoader-fill {\n  border-color: var(--spectrum-loader-circle-medium-track-fill-color, var(--spectrum-global-color-blue-500));\n}\n\n.spectrum-CircleLoader--overBackground .spectrum-CircleLoader-track {\n    border-color: var(--spectrum-loader-circle-medium-over-background-track-color, var(--spectrum-alias-track-color-over-background));\n  }\n\n.spectrum-CircleLoader--overBackground .spectrum-CircleLoader-fill {\n    border-color: var(--spectrum-loader-circle-medium-over-background-track-fill-color, var(--spectrum-global-color-static-white));\n  }\n\n.spectrum-CircleLoader--indeterminate.spectrum-CircleLoader--overBackground .spectrum-CircleLoader-track {\n    border-color: var(--spectrum-loader-circle-medium-over-background-track-color, var(--spectrum-alias-track-color-over-background));\n  }\n\n.spectrum-CircleLoader--indeterminate.spectrum-CircleLoader--overBackground .spectrum-CircleLoader-fill {\n    border-color: var(--spectrum-loader-circle-medium-over-background-track-fill-color, var(--spectrum-global-color-static-white));\n  }\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/circleloader",peerCSS:""}];r.exports=n.length<=1?n[0]:n}}]);
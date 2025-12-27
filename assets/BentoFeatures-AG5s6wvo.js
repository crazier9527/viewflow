import{c as x,u as f,r as u,i as v,p as j,m as h,g as N,j as e}from"./index-BkysSdqV.js";import{u as w}from"./use-in-view-3DUAnw2Q.js";import{G as F,T as z}from"./tv-S60XM4WQ.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=x("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=x("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=x("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=x("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function $(){const{language:d}=f(),t=N(d),m=u.useRef(null),o=w(m,{once:!0,margin:"-100px"}),[a,p]=u.useState(!1),[s,y]=u.useState(!1),[i,b]=u.useState(!1);u.useEffect(()=>{p(v()),y(j());const g=navigator.userAgent;b(/^((?!chrome|android).)*safari/i.test(g))},[]);const n=i?0:a||s?.3:.5,r=i?"div":h.div,l=[{title:t.bentoFeatures.remoteControl,description:t.bentoFeatures.remoteControlDesc,icon:F,size:"large"},{title:t.bentoFeatures.smartScaling,description:t.bentoFeatures.smartScalingDesc,icon:M,size:"medium"},{title:t.bentoFeatures.hotContent,description:t.bentoFeatures.hotContentDesc,icon:D,size:"medium"},{title:t.bentoFeatures.lightningFast,description:t.bentoFeatures.lightningFastDesc,icon:S,size:"small"},{title:t.bentoFeatures.privacyFirst,description:t.bentoFeatures.privacyFirstDesc,icon:k,size:"small"},{title:t.bentoFeatures.privateBrowsing,description:t.bentoFeatures.privateBrowsingDesc,icon:z,size:"small"}];return e.jsx("section",{className:"py-32 relative overflow-hidden",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs(r,{ref:m,...i?{}:{initial:{opacity:0,y:50},animate:o?{opacity:1,y:0}:{},transition:{duration:n}},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-4",children:e.jsx("span",{className:"bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent",children:t.bentoFeatures.title})}),e.jsx("p",{className:"text-xl text-slate-400 max-w-2xl mx-auto",children:t.bentoFeatures.subtitle})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto",children:[e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.05:.1}},className:"md:col-span-2 md:row-span-2 group",children:e.jsx(c,{feature:l[0],large:!0,isMobile:a,reducedMotion:s,isSafariBrowser:i})}),e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.1:.2}},className:"md:col-span-2 group",children:e.jsx(c,{feature:l[1],isMobile:a,reducedMotion:s,isSafariBrowser:i})}),e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.15:.3}},className:"group",children:e.jsx(c,{feature:l[3],isMobile:a,reducedMotion:s,isSafariBrowser:i})}),e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.2:.4}},className:"group",children:e.jsx(c,{feature:l[4],isMobile:a,reducedMotion:s,isSafariBrowser:i})}),e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.25:.5}},className:"md:col-span-2 group",children:e.jsx(c,{feature:l[2],isMobile:a,reducedMotion:s,isSafariBrowser:i})}),e.jsx(r,{...i?{}:{initial:{opacity:0,scale:.9},animate:o?{opacity:1,scale:1}:{},transition:{duration:n,delay:a||s?.3:.6}},className:"md:col-span-2 group",children:e.jsx(c,{feature:l[5],isMobile:a,reducedMotion:s,isSafariBrowser:i})})]})]})})}function c({feature:d,large:t=!1,isMobile:m=!1,reducedMotion:o=!1,isSafariBrowser:a=!1}){const p=d.icon,s=a?"div":h.div;return e.jsxs("div",{className:`
        relative h-full rounded-3xl p-8 backdrop-blur-xl
        bg-gradient-to-br from-slate-900/50 to-slate-800/30
        border border-slate-700/50
        overflow-hidden
        transition-all duration-500
        group-hover:border-cyan-400/50
        group-hover:shadow-2xl group-hover:shadow-cyan-500/20
        ${t?"min-h-[400px]":"min-h-[200px]"}
      `,children:[e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-400 to-blue-600 transition-opacity duration-500"}),e.jsxs("div",{className:"relative z-10 h-full flex flex-col",children:[e.jsx("div",{className:"mb-6",children:e.jsx(s,{...a?{}:{whileHover:!m&&!o?{scale:1.1}:{}},className:`
              inline-flex items-center justify-center
              rounded-full
              border-2 border-cyan-400/30
              bg-cyan-400/5
              backdrop-blur-sm
              ${t?"w-20 h-20":"w-16 h-16"}
              group-hover:border-cyan-400/60
              group-hover:bg-cyan-400/10
              group-hover:shadow-lg group-hover:shadow-cyan-500/50
              transition-all duration-500
            `,children:e.jsx(p,{className:`${t?"w-10 h-10":"w-8 h-8"} text-cyan-400 stroke-[1.5]`})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:`${t?"text-3xl md:text-4xl":"text-2xl"} font-bold mb-3 text-white`,children:d.title}),e.jsx("p",{className:`${t?"text-lg":"text-base"} text-slate-300`,children:d.description})]}),e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-3xl"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-2xl"})]}),e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 blur-3xl -z-10 transition-opacity duration-500"})]})}export{$ as BentoFeatures,$ as default};
//# sourceMappingURL=BentoFeatures-AG5s6wvo.js.map

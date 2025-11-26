import{c as t,r as i,i as x,p as u,j as e,m as n}from"./index-DQuLoIVE.js";import{u as y}from"./use-in-view-DIuvsfOu.js";import{T as h,G as b}from"./tv-eekKGDLB.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=t("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("MousePointer",[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w=[{problem:"Hard-to-read tiny text",solution:"Smart auto-scaling for perfect readability",problemIcon:N,solutionIcon:h},{problem:"Traditional remote-control input offers an unsatisfying browsing experience.",solution:"A phone-based touchpad provides highly accurate navigation.",problemIcon:f,solutionIcon:b},{problem:"Privacy concerns & hidden trackers",solution:"Privacy-first with built-in tracking protection",problemIcon:v,solutionIcon:j}];function T(){const l=i.useRef(null),c=y(l,{once:!0,margin:"-100px"}),[a,p]=i.useState(!1),[s,m]=i.useState(!1);i.useEffect(()=>{p(x()),m(u())},[]);const d=a||s?.3:.6;return e.jsxs("section",{ref:l,className:"py-32 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"}),e.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[e.jsxs(n.div,{initial:{opacity:0,y:30},animate:c?{opacity:1,y:0}:{},transition:{duration:d},className:"text-center mb-20 will-change-transform",children:[e.jsx("h2",{className:"text-5xl md:text-6xl font-bold mb-4",children:e.jsx("span",{className:"bg-gradient-to-r from-red-400 via-white to-cyan-400 bg-clip-text text-transparent",children:"Traditional Browsers Weren't Built for TVs"})}),e.jsx("p",{className:"text-xl text-slate-400 max-w-3xl mx-auto",children:"We fixed everything that's broken about browsing on the big screen"})]}),e.jsx("div",{className:"space-y-8 max-w-5xl mx-auto",children:w.map((o,r)=>e.jsx(n.div,{initial:{opacity:0,x:a||s?0:r%2===0?-50:50},animate:c?{opacity:1,x:0}:{},transition:{duration:d,delay:a||s?r*.1:r*.2},children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs(n.div,{whileHover:!a&&!s?{scale:1.02}:{},className:"relative p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-slate-900/50 border border-red-500/30 backdrop-blur-sm group",children:[e.jsx("div",{className:"absolute top-4 right-4",children:e.jsx("div",{className:"w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center",children:e.jsx(k,{className:"w-5 h-5 text-red-400"})})}),e.jsx("div",{className:"text-4xl mb-4",children:e.jsx(o.problemIcon,{className:"w-10 h-10 text-red-500"})}),e.jsx("p",{className:"text-lg text-slate-300 line-through decoration-red-500/50",children:o.problem}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"})]}),e.jsxs(n.div,{whileHover:!a&&!s?{scale:1.02}:{},className:"relative p-8 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900/50 border border-cyan-400/30 backdrop-blur-sm group",children:[e.jsx("div",{className:"absolute top-4 right-4",children:e.jsx("div",{className:"w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center",children:e.jsx(g,{className:"w-5 h-5 text-cyan-400"})})}),e.jsx("div",{className:"text-4xl mb-4",children:e.jsx(o.solutionIcon,{className:"w-10 h-10 text-cyan-500"})}),e.jsx("p",{className:"text-lg text-white font-medium",children:o.solution}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"})]})]})},r))})]})]})}export{T as ProblemSolution,T as default};
//# sourceMappingURL=ProblemSolution-DNiuFUF9.js.map

const ar=()=>{};var ft={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sr=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],s=e[n++],o=e[n++],c=((i&7)<<18|(a&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|s&63)}}return t.join("")},Kt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],s=i+1<e.length,o=s?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,f=a>>2,u=(a&3)<<4|o>>4;let d=(o&15)<<2|l>>6,E=l&63;c||(E=64,s||(d=64)),r.push(n[f],n[u],n[d],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sr(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||o==null||l==null||u==null)throw new or;const d=a<<2|o>>4;if(r.push(d),l!==64){const E=o<<4&240|l>>2;if(r.push(E),u!==64){const U=l<<6&192|u;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class or extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cr=function(e){const t=Gt(e);return Kt.encodeByteArray(t,!0)},Xt=function(e){return cr(e).replace(/\./g,"")},lr=function(e){try{return Kt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=()=>ur().__FIREBASE_DEFAULTS__,dr=()=>{if(typeof process>"u"||typeof ft>"u")return;const e=ft.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&lr(e[1]);return t&&JSON.parse(t)},pr=()=>{try{return ar()||fr()||dr()||hr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yt=()=>{var e;return(e=pr())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Jt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function fe(){try{return typeof indexedDB=="object"}catch{return!1}}function de(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)==null?void 0:a.message)||"")}}catch(n){t(n)}})}function We(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirebaseError";class $ extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mr,Object.setPrototypeOf(this,$.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Z.prototype.create)}}class Z{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],s=a?br(a,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new $(i,o,r)}}function br(e,t){return e.replace(Er,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Er=/\{\$([^}]+)}/g;function se(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],s=t[i];if(dt(a)&&dt(s)){if(!se(a,s))return!1}else if(a!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=1e3,yr=2,Tr=14400*1e3,_r=.5;function ht(e,t=Ir,n=yr){const r=t*Math.pow(n,e),i=Math.round(_r*r*(Math.random()-.5)*2);return Math.min(Tr,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return e&&e._delegate?e._delegate:e}class w{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new gr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sr(t))try{this.getOrInitializeService({instanceIdentifier:P})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=P){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=P){return this.instances.has(t)}getOptions(t=P){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);r===o&&s.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&t(a,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=P){return this.component?this.component.multipleInstances?t:P:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wr(e){return e===P?void 0:e}function Sr(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new vr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const Cr={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},Mr=h.INFO,Rr={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Dr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Rr[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ge{constructor(t){this.name=t,this._logLevel=Mr,this._logHandler=Dr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const Nr=(e,t)=>t.some(n=>e instanceof n);let pt,gt;function Or(){return pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pr(){return gt||(gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qt=new WeakMap,Oe=new WeakMap,Zt=new WeakMap,Ee=new WeakMap,Ke=new WeakMap;function Fr(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",s)},a=()=>{n(M(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Qt.set(n,e)}).catch(()=>{}),Ke.set(t,e),t}function kr(e){if(Oe.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",s),e.removeEventListener("abort",s)},a=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",s),e.addEventListener("abort",s)});Oe.set(e,t)}let Pe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Oe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lr(e){Pe=e(Pe)}function Br(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ie(this),t,...n);return Zt.set(r,t.sort?t.sort():[t]),M(r)}:Pr().includes(e)?function(...t){return e.apply(Ie(this),t),M(Qt.get(this))}:function(...t){return M(e.apply(Ie(this),t))}}function $r(e){return typeof e=="function"?Br(e):(e instanceof IDBTransaction&&kr(e),Nr(e,Or())?new Proxy(e,Pe):e)}function M(e){if(e instanceof IDBRequest)return Fr(e);if(Ee.has(e))return Ee.get(e);const t=$r(e);return t!==e&&(Ee.set(e,t),Ke.set(t,e)),t}const Ie=e=>Ke.get(e);function en(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=M(s);return r&&s.addEventListener("upgradeneeded",c=>{r(M(s.result),c.oldVersion,c.newVersion,M(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Ur=["get","getKey","getAll","getAllKeys","count"],xr=["put","add","delete","clear"],ye=new Map;function mt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ye.get(t))return ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=xr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ur.includes(n)))return;const a=async function(s,...o){const c=this.transaction(s,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ye.set(t,a),a}Lr(e=>({...e,get:(t,n,r)=>mt(t,n)||e.get(t,n,r),has:(t,n)=>!!mt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fe="@firebase/app",bt="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Ge("@firebase/app"),jr="@firebase/app-compat",Hr="@firebase/analytics-compat",qr="@firebase/analytics",Wr="@firebase/app-check-compat",Gr="@firebase/app-check",Kr="@firebase/auth",Xr="@firebase/auth-compat",Yr="@firebase/database",Jr="@firebase/data-connect",Qr="@firebase/database-compat",Zr="@firebase/functions",ei="@firebase/functions-compat",ti="@firebase/installations",ni="@firebase/installations-compat",ri="@firebase/messaging",ii="@firebase/messaging-compat",ai="@firebase/performance",si="@firebase/performance-compat",oi="@firebase/remote-config",ci="@firebase/remote-config-compat",li="@firebase/storage",ui="@firebase/storage-compat",fi="@firebase/firestore",di="@firebase/ai",hi="@firebase/firestore-compat",pi="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="[DEFAULT]",gi={[Fe]:"fire-core",[jr]:"fire-core-compat",[qr]:"fire-analytics",[Hr]:"fire-analytics-compat",[Gr]:"fire-app-check",[Wr]:"fire-app-check-compat",[Kr]:"fire-auth",[Xr]:"fire-auth-compat",[Yr]:"fire-rtdb",[Jr]:"fire-data-connect",[Qr]:"fire-rtdb-compat",[Zr]:"fire-fn",[ei]:"fire-fn-compat",[ti]:"fire-iid",[ni]:"fire-iid-compat",[ri]:"fire-fcm",[ii]:"fire-fcm-compat",[ai]:"fire-perf",[si]:"fire-perf-compat",[oi]:"fire-rc",[ci]:"fire-rc-compat",[li]:"fire-gcs",[ui]:"fire-gcs-compat",[fi]:"fire-fst",[hi]:"fire-fst-compat",[di]:"fire-vertex","fire-js":"fire-js",[pi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Map,mi=new Map,Le=new Map;function Et(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e){const t=e.name;if(Le.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;Le.set(t,e);for(const n of oe.values())Et(n,e);for(const n of mi.values())Et(n,e);return!0}function ee(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},R=new Z("app","Firebase",bi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw R.create("app-deleted",{appName:this._name})}}function tn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ke,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw R.create("bad-app-name",{appName:String(i)});if(n||(n=Yt()),!n)throw R.create("no-options");const a=oe.get(i);if(a){if(se(n,a.options)&&se(r,a.config))return a;throw R.create("duplicate-app",{appName:i})}const s=new Ar(i);for(const c of Le.values())s.addComponent(c);const o=new Ei(n,r,s);return oe.set(i,o),o}function nn(e=ke){const t=oe.get(e);if(!t&&e===ke&&Yt())return tn();if(!t)throw R.create("no-app",{appName:e});return t}function v(e,t,n){let r=gi[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${r}" with version "${t}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(s.join(" "));return}D(new w(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="firebase-heartbeat-database",yi=1,Q="firebase-heartbeat-store";let Te=null;function rn(){return Te||(Te=en(Ii,yi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Q)}catch(n){console.warn(n)}}}}).catch(e=>{throw R.create("idb-open",{originalErrorMessage:e.message})})),Te}async function Ti(e){try{const n=(await rn()).transaction(Q),r=await n.objectStore(Q).get(an(e));return await n.done,r}catch(t){if(t instanceof $)S.warn(t.message);else{const n=R.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});S.warn(n.message)}}}async function It(e,t){try{const r=(await rn()).transaction(Q,"readwrite");await r.objectStore(Q).put(t,an(e)),await r.done}catch(n){if(n instanceof $)S.warn(n.message);else{const r=R.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});S.warn(r.message)}}}function an(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1024,vi=30;class wi{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ai(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=yt();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(s=>s.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>vi){const s=Ci(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){S.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yt(),{heartbeatsToSend:r,unsentEntries:i}=Si(this._heartbeatsCache.heartbeats),a=Xt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return S.warn(n),""}}}function yt(){return new Date().toISOString().substring(0,10)}function Si(e,t=_i){const n=[];let r=e.slice();for(const i of e){const a=n.find(s=>s.agent===i.agent);if(a){if(a.dates.push(i.date),Tt(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ai{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fe()?de().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ti(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return It(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return It(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Tt(e){return Xt(JSON.stringify({version:2,heartbeats:e})).length}function Ci(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){D(new w("platform-logger",t=>new zr(t),"PRIVATE")),D(new w("heartbeat",t=>new wi(t),"PRIVATE")),v(Fe,bt,e),v(Fe,bt,"esm2020"),v("fire-js","")}Mi("");var Ri="firebase",Di="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */v(Ri,Di,"app");const sn="@firebase/installations",Xe="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=1e4,cn=`w:${Xe}`,ln="FIS_v2",Ni="https://firebaseinstallations.googleapis.com/v1",Oi=3600*1e3,Pi="installations",Fi="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},L=new Z(Pi,Fi,ki);function un(e){return e instanceof $&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn({projectId:e}){return`${Ni}/projects/${e}/installations`}function dn(e){return{token:e.token,requestStatus:2,expiresIn:Bi(e.expiresIn),creationTime:Date.now()}}async function hn(e,t){const r=(await t.json()).error;return L.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Li(e,{refreshToken:t}){const n=pn(e);return n.append("Authorization",$i(t)),n}async function gn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Bi(e){return Number(e.replace("s","000"))}function $i(e){return`${ln} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=fn(e),i=pn(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={fid:n,authVersion:ln,appId:e.appId,sdkVersion:cn},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await gn(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:dn(l.authToken)}}else throw await hn("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=/^[cdef][\w-]{21}$/,Be="";function Vi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ji(e);return zi.test(n)?n:Be}catch{return Be}}function ji(e){return xi(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Map;function En(e,t){const n=he(e);In(n,t),Hi(n,t)}function In(e,t){const n=bn.get(e);if(n)for(const r of n)r(t)}function Hi(e,t){const n=qi();n&&n.postMessage({key:e,fid:t}),Wi()}let F=null;function qi(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=e=>{In(e.data.key,e.data.fid)}),F}function Wi(){bn.size===0&&F&&(F.close(),F=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="firebase-installations-database",Ki=1,B="firebase-installations-store";let _e=null;function Ye(){return _e||(_e=en(Gi,Ki,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),_e}async function ce(e,t){const n=he(e),i=(await Ye()).transaction(B,"readwrite"),a=i.objectStore(B),s=await a.get(n);return await a.put(t,n),await i.done,(!s||s.fid!==t.fid)&&En(e,t.fid),t}async function yn(e){const t=he(e),r=(await Ye()).transaction(B,"readwrite");await r.objectStore(B).delete(t),await r.done}async function pe(e,t){const n=he(e),i=(await Ye()).transaction(B,"readwrite"),a=i.objectStore(B),s=await a.get(n),o=t(s);return o===void 0?await a.delete(n):await a.put(o,n),await i.done,o&&(!s||s.fid!==o.fid)&&En(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e){let t;const n=await pe(e.appConfig,r=>{const i=Xi(r),a=Yi(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===Be?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Xi(e){const t=e||{fid:Vi(),registrationStatus:0};return Tn(t)}function Yi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ji(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Qi(e)}:{installationEntry:t}}async function Ji(e,t){try{const n=await Ui(e,t);return ce(e.appConfig,n)}catch(n){throw un(n)&&n.customData.serverCode===409?await yn(e.appConfig):await ce(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Qi(e){let t=await _t(e.appConfig);for(;t.registrationStatus===1;)await mn(100),t=await _t(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Je(e);return r||n}return t}function _t(e){return pe(e,t=>{if(!t)throw L.create("installation-not-found");return Tn(t)})}function Tn(e){return Zi(e)?{fid:e.fid,registrationStatus:0}:e}function Zi(e){return e.registrationStatus===1&&e.registrationTime+on<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea({appConfig:e,heartbeatServiceProvider:t},n){const r=ta(e,n),i=Li(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const s={installation:{sdkVersion:cn,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},c=await gn(()=>fetch(r,o));if(c.ok){const l=await c.json();return dn(l)}else throw await hn("Generate Auth Token",c)}function ta(e,{fid:t}){return`${fn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t=!1){let n;const r=await pe(e.appConfig,a=>{if(!_n(a))throw L.create("not-registered");const s=a.authToken;if(!t&&ia(s))return a;if(s.requestStatus===1)return n=na(e,t),a;{if(!navigator.onLine)throw L.create("app-offline");const o=sa(a);return n=ra(e,o),o}});return n?await n:r.authToken}async function na(e,t){let n=await vt(e.appConfig);for(;n.authToken.requestStatus===1;)await mn(100),n=await vt(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qe(e,t):r}function vt(e){return pe(e,t=>{if(!_n(t))throw L.create("not-registered");const n=t.authToken;return oa(n)?{...t,authToken:{requestStatus:0}}:t})}async function ra(e,t){try{const n=await ea(e,t),r={...t,authToken:n};return await ce(e.appConfig,r),n}catch(n){if(un(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yn(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await ce(e.appConfig,r)}throw n}}function _n(e){return e!==void 0&&e.registrationStatus===2}function ia(e){return e.requestStatus===2&&!aa(e)}function aa(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Oi}function sa(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function oa(e){return e.requestStatus===1&&e.requestTime+on<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e){const t=e,{installationEntry:n,registrationPromise:r}=await Je(t);return r?r.catch(console.error):Qe(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(e,t=!1){const n=e;return await ua(n),(await Qe(n,t)).token}async function ua(e){const{registrationPromise:t}=await Je(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e){if(!e||!e.options)throw ve("App Configuration");if(!e.name)throw ve("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ve(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ve(e){return L.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="installations",da="installations-internal",ha=e=>{const t=e.getProvider("app").getImmediate(),n=fa(t),r=ee(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pa=e=>{const t=e.getProvider("app").getImmediate(),n=ee(t,vn).getImmediate();return{getId:()=>ca(n),getToken:i=>la(n,i)}};function ga(){D(new w(vn,ha,"PUBLIC")),D(new w(da,pa,"PRIVATE"))}ga();v(sn,Xe);v(sn,Xe,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="analytics",ma="firebase_id",ba="origin",Ea=60*1e3,Ia="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ze="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new Ge("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},y=new Z("analytics","Analytics",ya);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(e){if(!e.startsWith(Ze)){const t=y.create("invalid-gtag-resource",{gtagURL:e});return m.warn(t.message),""}return e}function wn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function _a(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function va(e,t){const n=_a("firebase-js-sdk-policy",{createScriptURL:Ta}),r=document.createElement("script"),i=`${Ze}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function wa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Sa(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const c=(await wn(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(o){m.error(o)}e("config",i,a)}async function Aa(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const o=await wn(n);for(const c of s){const l=o.find(u=>u.measurementId===c),f=l&&t[l.appId];if(f)a.push(f);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){m.error(a)}}function Ca(e,t,n,r){async function i(a,...s){try{if(a==="event"){const[o,c]=s;await Aa(e,t,n,o,c)}else if(a==="config"){const[o,c]=s;await Sa(e,t,n,r,o,c)}else if(a==="consent"){const[o,c]=s;e("consent",o,c)}else if(a==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(a==="set"){const[o]=s;e("set",o)}else e(a,...s)}catch(o){m.error(o)}}return i}function Ma(e,t,n,r,i){let a=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Ca(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function Ra(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ze)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=30,Na=1e3;class Oa{constructor(t={},n=Na){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Sn=new Oa;function Pa(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Fa(e){var s;const{appId:t,apiKey:n}=e,r={method:"GET",headers:Pa(n)},i=Ia.replace("{app-id}",t),a=await fetch(i,r);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();(s=c.error)!=null&&s.message&&(o=c.error.message)}catch{}throw y.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function ka(e,t=Sn,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw y.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw y.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new $a;return setTimeout(async()=>{o.abort()},Ea),An({appId:r,apiKey:i,measurementId:a},s,o,t)}async function An(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Sn){var o;const{appId:a,measurementId:s}=e;try{await La(r,t)}catch(c){if(s)return m.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:s};throw c}try{const c=await Fa(e);return i.deleteThrottleMetadata(a),c}catch(c){const l=c;if(!Ba(l)){if(i.deleteThrottleMetadata(a),s)return m.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:s};throw c}const f=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?ht(n,i.intervalMillis,Da):ht(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,u),m.debug(`Calling attemptFetch again in ${f} millis`),An(e,u,r,i)}}function La(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ba(e){if(!(e instanceof $)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $a{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ua(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,s={...r,send_to:a};e("event",n,s)}}async function xa(e,t,n,r){{const i=await t;e("config",i,{update:!0,screen_name:n})}}async function za(e,t,n,r){if(r&&r.global){const i={};for(const a of Object.keys(n))i[`user_properties.${a}`]=n[a];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(){if(fe())try{await de()}catch(e){return m.warn(y.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return m.warn(y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ja(e,t,n,r,i,a,s){const o=ka(e);o.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&m.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>m.error(d)),t.push(o);const c=Va().then(d=>{if(d)return r.getId()}),[l,f]=await Promise.all([o,c]);Ra(a)||va(a,l.measurementId),i("js",new Date);const u=(s==null?void 0:s.config)??{};return u[ba]="firebase",u.update=!0,f!=null&&(u[ma]=f),i("config",l.measurementId,u),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.app=t}_delete(){return delete k[this.app.options.appId],Promise.resolve()}}let k={},wt=[];const St={};let we="dataLayer",qa="gtag",At,ge,Ct=!1;function Wa(){const e=[];if(Jt()&&e.push("This is a browser extension environment."),We()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=y.create("invalid-analytics-context",{errorInfo:t});m.warn(n.message)}}function Ga(e,t,n){Wa();const r=e.options.appId;if(!r)throw y.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)m.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw y.create("no-api-key");if(k[r]!=null)throw y.create("already-exists",{id:r});if(!Ct){wa(we);const{wrappedGtag:a,gtagCore:s}=Ma(k,wt,St,we,qa);ge=a,At=s,Ct=!0}return k[r]=ja(e,wt,St,t,At,we,n),new Ha(e)}function Ka(e=nn()){e=G(e);const t=ee(e,le);return t.isInitialized()?t.getImmediate():Xa(e)}function Xa(e,t={}){const n=ee(e,le);if(n.isInitialized()){const i=n.getImmediate();if(se(t,n.getOptions()))return i;throw y.create("already-initialized")}return n.initialize({options:t})}async function Ya(){if(Jt()||!We()||!fe())return!1;try{return await de()}catch{return!1}}function Ja(e,t,n){e=G(e),xa(ge,k[e.app.options.appId],t).catch(r=>m.error(r))}function Qa(e,t,n){e=G(e),za(ge,k[e.app.options.appId],t,n).catch(r=>m.error(r))}function et(e,t,n,r){e=G(e),Ua(ge,k[e.app.options.appId],t,n,r).catch(i=>m.error(i))}const Mt="@firebase/analytics",Rt="0.10.19";function Za(){D(new w(le,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ga(r,i,n)},"PUBLIC")),D(new w("analytics-internal",e,"PRIVATE")),v(Mt,Rt),v(Mt,Rt,"esm2020");function e(t){try{const n=t.getProvider(le).getImmediate();return{logEvent:(r,i,a)=>et(n,r,i,a),setUserProperties:(r,i)=>Qa(n,r,i)}}catch(n){throw y.create("interop-component-reg-failed",{reason:n})}}}Za();var $e,Dt,me=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},Cn=function(e){if(document.readyState==="loading")return"loading";var t=me();if(t){if(e<t.domInteractive)return"loading";if(t.domContentLoadedEventStart===0||e<t.domContentLoadedEventStart)return"dom-interactive";if(t.domComplete===0||e<t.domComplete)return"dom-content-loaded"}return"complete"},es=function(e){var t=e.nodeName;return e.nodeType===1?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},tt=function(e,t){var n="";try{for(;e&&e.nodeType!==9;){var r=e,i=r.id?"#"+r.id:es(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch{}return n},Mn=-1,ts=function(){return Mn},te=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Mn=t.timeStamp,e(t))}),!0)},nt=function(){var e=me();return e&&e.activationStart||0},N=function(e,t){var n=me(),r="navigate";return ts()>=0?r="back-forward-cache":n&&(document.prerendering||nt()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},K=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(i){Promise.resolve().then((function(){t(i.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch{}},O=function(e,t,n,r){var i,a;return function(s){t.value>=0&&(s||r)&&((a=t.value-(i||0))||i===void 0)&&(i=t.value,t.delta=a,t.rating=(function(o,c){return o>c[1]?"poor":o>c[0]?"needs-improvement":"good"})(t.value,n),e(t))}},rt=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},be=function(e){document.addEventListener("visibilitychange",(function(){document.visibilityState==="hidden"&&e()}))},it=function(e){var t=!1;return function(){t||(e(),t=!0)}},V=-1,Nt=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ue=function(e){document.visibilityState==="hidden"&&V>-1&&(V=e.type==="visibilitychange"?e.timeStamp:0,ns())},Ot=function(){addEventListener("visibilitychange",ue,!0),addEventListener("prerenderingchange",ue,!0)},ns=function(){removeEventListener("visibilitychange",ue,!0),removeEventListener("prerenderingchange",ue,!0)},Rn=function(){return V<0&&(V=Nt(),Ot(),te((function(){setTimeout((function(){V=Nt(),Ot()}),0)}))),{get firstHiddenTime(){return V}}},at=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},Pt=[1800,3e3],rs=function(e,t){t=t||{},at((function(){var n,r=Rn(),i=N("FCP"),a=K("paint",(function(s){s.forEach((function(o){o.name==="first-contentful-paint"&&(a.disconnect(),o.startTime<r.firstHiddenTime&&(i.value=Math.max(o.startTime-nt(),0),i.entries.push(o),n(!0)))}))}));a&&(n=O(e,i,Pt,t.reportAllChanges),te((function(s){i=N("FCP"),n=O(e,i,Pt,t.reportAllChanges),rt((function(){i.value=performance.now()-s.timeStamp,n(!0)}))})))}))},Ft=[.1,.25],is=function(e,t){(function(n,r){r=r||{},rs(it((function(){var i,a=N("CLS",0),s=0,o=[],c=function(f){f.forEach((function(u){if(!u.hadRecentInput){var d=o[0],E=o[o.length-1];s&&u.startTime-E.startTime<1e3&&u.startTime-d.startTime<5e3?(s+=u.value,o.push(u)):(s=u.value,o=[u])}})),s>a.value&&(a.value=s,a.entries=o,i())},l=K("layout-shift",c);l&&(i=O(n,a,Ft,r.reportAllChanges),be((function(){c(l.takeRecords()),i(!0)})),te((function(){s=0,a=N("CLS",0),i=O(n,a,Ft,r.reportAllChanges),rt((function(){return i()}))})),setTimeout(i,0))})))})((function(n){var r=(function(i){var a,s={};if(i.entries.length){var o=i.entries.reduce((function(l,f){return l&&l.value>f.value?l:f}));if(o&&o.sources&&o.sources.length){var c=(a=o.sources).find((function(l){return l.node&&l.node.nodeType===1}))||a[0];c&&(s={largestShiftTarget:tt(c.node),largestShiftTime:o.startTime,largestShiftValue:o.value,largestShiftSource:c,largestShiftEntry:o,loadState:Cn(o.startTime)})}}return Object.assign(i,{attribution:s})})(n);e(r)}),t)},Dn=0,Se=1/0,ne=0,as=function(e){e.forEach((function(t){t.interactionId&&(Se=Math.min(Se,t.interactionId),ne=Math.max(ne,t.interactionId),Dn=ne?(ne-Se)/7+1:0)}))},Nn=function(){return $e?Dn:performance.interactionCount||0},ss=function(){"interactionCount"in performance||$e||($e=K("event",as,{type:"event",buffered:!0,durationThreshold:0}))},_=[],X=new Map,On=0,os=function(){var e=Math.min(_.length-1,Math.floor((Nn()-On)/50));return _[e]},Pn=[],cs=function(e){if(Pn.forEach((function(i){return i(e)})),e.interactionId||e.entryType==="first-input"){var t=_[_.length-1],n=X.get(e.interactionId);if(n||_.length<10||e.duration>t.latency){if(n)e.duration>n.latency?(n.entries=[e],n.latency=e.duration):e.duration===n.latency&&e.startTime===n.entries[0].startTime&&n.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};X.set(r.id,r),_.push(r)}_.sort((function(i,a){return a.latency-i.latency})),_.length>10&&_.splice(10).forEach((function(i){return X.delete(i.id)}))}}},st=function(e){var t=self.requestIdleCallback||self.setTimeout,n=-1;return e=it(e),document.visibilityState==="hidden"?e():(n=t(e),be(e)),n},kt=[200,500],ls=function(e,t){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(t=t||{},at((function(){var n;ss();var r,i=N("INP"),a=function(o){st((function(){o.forEach(cs);var c=os();c&&c.latency!==i.value&&(i.value=c.latency,i.entries=c.entries,r())}))},s=K("event",a,{durationThreshold:(n=t.durationThreshold)!==null&&n!==void 0?n:40});r=O(e,i,kt,t.reportAllChanges),s&&(s.observe({type:"first-input",buffered:!0}),be((function(){a(s.takeRecords()),r(!0)})),te((function(){On=Nn(),_.length=0,X.clear(),i=N("INP"),r=O(e,i,kt,t.reportAllChanges)})))})))},j=[],C=[],Ue=0,ot=new WeakMap,H=new Map,xe=-1,us=function(e){j=j.concat(e),Fn()},Fn=function(){xe<0&&(xe=st(fs))},fs=function(){H.size>10&&H.forEach((function(s,o){X.has(o)||H.delete(o)}));var e=_.map((function(s){return ot.get(s.entries[0])})),t=C.length-50;C=C.filter((function(s,o){return o>=t||e.includes(s)}));for(var n=new Set,r=0;r<C.length;r++){var i=C[r];kn(i.startTime,i.processingEnd).forEach((function(s){n.add(s)}))}var a=j.length-1-50;j=j.filter((function(s,o){return s.startTime>Ue&&o>a||n.has(s)})),xe=-1};Pn.push((function(e){e.interactionId&&e.target&&!H.has(e.interactionId)&&H.set(e.interactionId,e.target)}),(function(e){var t,n=e.startTime+e.duration;Ue=Math.max(Ue,e.processingEnd);for(var r=C.length-1;r>=0;r--){var i=C[r];if(Math.abs(n-i.renderTime)<=8){(t=i).startTime=Math.min(e.startTime,t.startTime),t.processingStart=Math.min(e.processingStart,t.processingStart),t.processingEnd=Math.max(e.processingEnd,t.processingEnd),t.entries.push(e);break}}t||(t={startTime:e.startTime,processingStart:e.processingStart,processingEnd:e.processingEnd,renderTime:n,entries:[e]},C.push(t)),(e.interactionId||e.entryType==="first-input")&&ot.set(e,t),Fn()}));var kn=function(e,t){for(var n,r=[],i=0;n=j[i];i++)if(!(n.startTime+n.duration<e)){if(n.startTime>t)break;r.push(n)}return r},ds=function(e,t){Dt||(Dt=K("long-animation-frame",us)),ls((function(n){var r=(function(i){var a=i.entries[0],s=ot.get(a),o=a.processingStart,c=s.processingEnd,l=s.entries.sort((function(x,ir){return x.processingStart-ir.processingStart})),f=kn(a.startTime,c),u=i.entries.find((function(x){return x.target})),d=u&&u.target||H.get(a.interactionId),E=[a.startTime+a.duration,c].concat(f.map((function(x){return x.startTime+x.duration}))),U=Math.max.apply(Math,E),rr={interactionTarget:tt(d),interactionTargetElement:d,interactionType:a.name.startsWith("key")?"keyboard":"pointer",interactionTime:a.startTime,nextPaintTime:U,processedEventEntries:l,longAnimationFrameEntries:f,inputDelay:o-a.startTime,processingDuration:c-o,presentationDelay:Math.max(U-c,0),loadState:Cn(a.startTime)};return Object.assign(i,{attribution:rr})})(n);e(r)}),t)},Lt=[2500,4e3],Ae={},hs=function(e,t){(function(n,r){r=r||{},at((function(){var i,a=Rn(),s=N("LCP"),o=function(f){r.reportAllChanges||(f=f.slice(-1)),f.forEach((function(u){u.startTime<a.firstHiddenTime&&(s.value=Math.max(u.startTime-nt(),0),s.entries=[u],i())}))},c=K("largest-contentful-paint",o);if(c){i=O(n,s,Lt,r.reportAllChanges);var l=it((function(){Ae[s.id]||(o(c.takeRecords()),c.disconnect(),Ae[s.id]=!0,i(!0))}));["keydown","click"].forEach((function(f){addEventListener(f,(function(){return st(l)}),{once:!0,capture:!0})})),be(l),te((function(f){s=N("LCP"),i=O(n,s,Lt,r.reportAllChanges),rt((function(){s.value=performance.now()-f.timeStamp,Ae[s.id]=!0,i(!0)}))}))}}))})((function(n){var r=(function(i){var a={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:i.value};if(i.entries.length){var s=me();if(s){var o=s.activationStart||0,c=i.entries[i.entries.length-1],l=c.url&&performance.getEntriesByType("resource").filter((function(U){return U.name===c.url}))[0],f=Math.max(0,s.responseStart-o),u=Math.max(f,l?(l.requestStart||l.startTime)-o:0),d=Math.max(u,l?l.responseEnd-o:0),E=Math.max(d,c.startTime-o);a={element:tt(c.element),timeToFirstByte:f,resourceLoadDelay:u-f,resourceLoadDuration:d-u,elementRenderDelay:E-d,navigationEntry:s,lcpEntry:c},c.url&&(a.url=c.url),l&&(a.lcpResourceEntry=l)}}return Object.assign(i,{attribution:a})})(n);e(r)}),t)};const Bt="@firebase/performance",ze="0.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=ze,ps="FB-PERF-TRACE-START",gs="FB-PERF-TRACE-STOP",Ve="FB-PERF-TRACE-MEASURE",Bn="_wt_",$n="_fp",Un="_fcp",xn="_fid",zn="_lcp",ms="lcp_element",Vn="_inp",bs="inp_interactionTarget",jn="_cls",Es="cls_largestShiftTarget",Hn="@firebase/performance/config",qn="@firebase/performance/configexpire",Is="performance",Wn="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},g=new Z(Is,Wn,ys);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Ge(Wn);A.logLevel=h.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce,Gn;class p{constructor(t){if(this.window=t,!t)throw g.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay),this.onLCP=hs,this.onINP=ds,this.onCLS=is}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,n,r){!this.performance||!this.performance.measure||this.performance.measure(t,n,r)}getEntriesByType(t){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(t)}getEntriesByName(t){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(t)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!We()?(A.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):fe()?!0:(A.info("IndexedDB is not supported by current browser"),!1)}setupObserver(t,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const a of i.getEntries())n(a)}).observe({entryTypes:[t]})}static getInstance(){return Ce===void 0&&(Ce=new p(Gn)),Ce}}function Ts(e){Gn=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;function _s(e){const t=e.getId();return t.then(n=>{Kn=n}),t}function ct(){return Kn}function vs(e){const t=e.getToken();return t.then(n=>{}),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){const n=e.length-t.length;if(n<0||n>1)throw g.create("invalid String merger input");const r=[];for(let i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me;class b{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=$t("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=$t("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Me===void 0&&(Me=new b),Me}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.VISIBLE=1]="VISIBLE",e[e.HIDDEN=2]="HIDDEN"})(Y||(Y={}));const ws=["firebase_","google_","ga_"],Ss=new RegExp("^[a-zA-Z]\\w*$"),As=40,je=100;function Cs(){const e=p.getInstance().navigator;return e!=null&&e.serviceWorker?e.serviceWorker.controller?2:3:1}function Ms(){switch(p.getInstance().document.visibilityState){case"visible":return Y.VISIBLE;case"hidden":return Y.HIDDEN;default:return Y.UNKNOWN}}function Rs(){const t=p.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Ds(e){return e.length===0||e.length>As?!1:!ws.some(n=>e.startsWith(n))&&!!e.match(Ss)}function Ns(e){return e.length!==0&&e.length<=je}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){var n;const t=(n=e.options)==null?void 0:n.appId;if(!t)throw g.create("no app id");return t}function Os(e){var n;const t=(n=e.options)==null?void 0:n.projectId;if(!t)throw g.create("no project id");return t}function Ps(e){var n;const t=(n=e.options)==null?void 0:n.apiKey;if(!t)throw g.create("no api key");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="0.0.1",I={loggingEnabled:!0},ks="FIREBASE_INSTALLATIONS_AUTH";function Ls(e,t){const n=Bs();return n?(Ut(n),Promise.resolve()):xs(e,t).then(Ut).then(r=>$s(r),()=>{})}function Bs(){const e=p.getInstance().localStorage;if(!e)return;const t=e.getItem(qn);if(!t||!zs(t))return;const n=e.getItem(Hn);if(n)try{return JSON.parse(n)}catch{return}}function $s(e){const t=p.getInstance().localStorage;!e||!t||(t.setItem(Hn,JSON.stringify(e)),t.setItem(qn,String(Date.now()+b.getInstance().configTimeToLive*60*60*1e3)))}const Us="Could not fetch config, will use default configs";function xs(e,t){return vs(e.installations).then(n=>{const r=Os(e.app),i=Ps(e.app),a=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,s=new Request(a,{method:"POST",headers:{Authorization:`${ks} ${n}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:Xn(e.app),app_version:Ln,sdk_version:Fs})});return fetch(s).then(o=>{if(o.ok)return o.json();throw g.create("RC response not ok")})}).catch(()=>{A.info(Us)})}function Ut(e){if(!e)return e;const t=b.getInstance(),n=e.entries||{};return n.fpr_enabled!==void 0?t.loggingEnabled=String(n.fpr_enabled)==="true":t.loggingEnabled=I.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):I.logSource&&(t.logSource=I.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:I.logEndPointUrl&&(t.logEndPointUrl=I.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:I.transportKey&&(t.transportKey=I.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):I.networkRequestsSamplingRate!==void 0&&(t.networkRequestsSamplingRate=I.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):I.tracesSamplingRate!==void 0&&(t.tracesSamplingRate=I.tracesSamplingRate),n.fpr_log_max_flush_size?t.logMaxFlushSize=Number(n.fpr_log_max_flush_size):I.logMaxFlushSize&&(t.logMaxFlushSize=I.logMaxFlushSize),t.logTraceAfterSampling=xt(t.tracesSamplingRate),t.logNetworkAfterSampling=xt(t.networkRequestsSamplingRate),e}function zs(e){return Number(e)>Date.now()}function xt(e){return Math.random()<=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lt=1,Re;function Yn(e){return lt=2,Re=Re||js(e),Re}function Vs(){return lt===3}function js(e){return Hs().then(()=>_s(e.installations)).then(t=>Ls(e,t)).then(()=>zt(),()=>zt())}function Hs(){const e=p.getInstance().document;return new Promise(t=>{if(e&&e.readyState!=="complete"){const n=()=>{e.readyState==="complete"&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()})}function zt(){lt=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=10*1e3,qs=5.5*1e3,Ws=1e3,Qn=3,Gs=65536,Ks=new TextEncoder;let ie=Qn,T=[],Vt=!1;function Xs(){Vt||(ut(qs),Vt=!0)}function ut(e){setTimeout(()=>{ie<=0||(T.length>0&&Ys(),ut(Jn))},e)}function Ys(){const e=T.splice(0,Ws),t=He(e);Js(t).then(()=>{ie=Qn}).catch(()=>{T=[...e,...T],ie--,A.info(`Tries left: ${ie}.`),ut(Jn)})}function He(e){const t=e.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:b.getInstance().logSource,log_event:t};return JSON.stringify(n)}function Js(e){const t=b.getInstance().getFlTransportFullUrl();return Ks.encode(e).length<=Gs&&navigator.sendBeacon&&navigator.sendBeacon(t,e)?Promise.resolve():fetch(t,{method:"POST",body:e})}function Qs(e){if(!e.eventTime||!e.message)throw g.create("invalid cc log");T=[...T,e]}function Zs(e){return(...t)=>{const n=e(...t);Qs({message:n,eventTime:Date.now()})}}function eo(){const e=b.getInstance().getFlTransportFullUrl();for(;T.length>0;){const t=T.splice(-b.getInstance().logMaxFlushSize),n=He(t);if(!(navigator.sendBeacon&&navigator.sendBeacon(e,n))){T=[...T,...t];break}}if(T.length>0){const t=He(T);fetch(e,{method:"POST",body:t}).catch(()=>{A.info("Failed flushing queued events.")})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J;function Zn(e,t){J||(J={send:Zs(ro),flush:eo}),J.send(e,t)}function re(e){const t=b.getInstance();!t.instrumentationEnabled&&e.isAuto||!t.dataCollectionEnabled&&!e.isAuto||p.getInstance().requiredApisAvailable()&&(Vs()?De(e):Yn(e.performanceController).then(()=>De(e),()=>De(e)))}function to(){J&&J.flush()}function De(e){if(!ct())return;const t=b.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||Zn(e,1)}function no(e){const t=b.getInstance();if(!t.instrumentationEnabled)return;const n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n===r||n===i||!t.loggingEnabled||!t.logNetworkAfterSampling||Zn(e,0)}function ro(e,t){return t===0?io(e):ao(e)}function io(e){const t={url:e.url,http_method:e.httpMethod||0,http_response_code:200,response_payload_bytes:e.responsePayloadBytes,client_start_time_us:e.startTimeUs,time_to_response_initiated_us:e.timeToResponseInitiatedUs,time_to_response_completed_us:e.timeToResponseCompletedUs},n={application_info:er(e.performanceController.app),network_request_metric:t};return JSON.stringify(n)}function ao(e){const t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};Object.keys(e.counters).length!==0&&(t.counters=e.counters);const n=e.getAttributes();Object.keys(n).length!==0&&(t.custom_attributes=n);const r={application_info:er(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}function er(e){return{google_app_id:Xn(e),app_instance_id:ct(),web_app_info:{sdk_version:Ln,page_url:p.getInstance().getUrl(),service_worker_status:Cs(),visibility_state:Ms(),effective_connection_type:Rs()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){const n=t;if(!n||n.responseStart===void 0)return;const r=p.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),a=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,s=Math.floor((n.responseEnd-n.startTime)*1e3),o=n.name&&n.name.split("?")[0],c={performanceController:e,url:o,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:s};no(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=100,oo="_",co=[$n,Un,xn,zn,jn,Vn];function lo(e,t){return e.length===0||e.length>so?!1:t&&t.startsWith(Bn)&&co.indexOf(e)>-1||!e.startsWith(oo)}function uo(e){const t=Math.floor(e);return t<e&&A.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n,r=!1,i){this.performanceController=t,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=p.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${ps}-${this.randomId}-${this.name}`,this.traceStopMark=`${gs}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Ve}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw g.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw g.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),re(this)}record(t,n,r){if(t<=0)throw g.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw g.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(t*1e3),r&&r.attributes&&(this.customAttributes={...r.attributes}),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));re(this)}incrementMetric(t,n=1){this.counters[t]===void 0?this.putMetric(t,n):this.putMetric(t,this.counters[t]+n)}putMetric(t,n){if(lo(t,this.name))this.counters[t]=uo(n??0);else throw g.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,n){const r=Ds(t),i=Ns(n);if(r&&i){this.customAttributes[t]=n;return}if(!r)throw g.create("invalid attribute name",{attributeName:t});if(!i)throw g.create("invalid attribute value",{attributeValue:n})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){this.customAttributes[t]!==void 0&&delete this.customAttributes[t]}getAttributes(){return{...this.customAttributes}}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),n=t&&t[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,n,r,i,a){const s=p.getInstance().getUrl();if(!s)return;const o=new W(t,Bn+s,!0),c=Math.floor(p.getInstance().getTimeOrigin()*1e3);o.setStartTime(c),n&&n[0]&&(o.setDuration(Math.floor(n[0].duration*1e3)),o.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),o.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),o.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const l="first-paint",f="first-contentful-paint";if(r){const u=r.find(E=>E.name===l);u&&u.startTime&&o.putMetric($n,Math.floor(u.startTime*1e3));const d=r.find(E=>E.name===f);d&&d.startTime&&o.putMetric(Un,Math.floor(d.startTime*1e3)),a&&o.putMetric(xn,Math.floor(a*1e3))}this.addWebVitalMetric(o,zn,ms,i.lcp),this.addWebVitalMetric(o,jn,Es,i.cls),this.addWebVitalMetric(o,Vn,bs,i.inp),re(o),to()}static addWebVitalMetric(t,n,r,i){i&&(t.putMetric(n,Math.floor(i.value*1e3)),i.elementAttribution&&(i.elementAttribution.length>je?t.putAttribute(r,i.elementAttribution.substring(0,je)):t.putAttribute(r,i.elementAttribution)))}static createUserTimingTrace(t,n){const r=new W(t,n,!1,n);re(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae={},Ht=!1,tr;function qt(e){ct()&&(setTimeout(()=>ho(e),0),setTimeout(()=>fo(e),0),setTimeout(()=>po(e),0))}function fo(e){const t=p.getInstance(),n=t.getEntriesByType("resource");for(const r of n)jt(e,r);t.setupObserver("resource",r=>jt(e,r))}function ho(e){const t=p.getInstance();"onpagehide"in window?t.document.addEventListener("pagehide",()=>Ne(e)):t.document.addEventListener("unload",()=>Ne(e)),t.document.addEventListener("visibilitychange",()=>{t.document.visibilityState==="hidden"&&Ne(e)}),t.onFirstInputDelay&&t.onFirstInputDelay(n=>{tr=n}),t.onLCP(n=>{var r;ae.lcp={value:n.value,elementAttribution:(r=n.attribution)==null?void 0:r.element}}),t.onCLS(n=>{var r;ae.cls={value:n.value,elementAttribution:(r=n.attribution)==null?void 0:r.largestShiftTarget}}),t.onINP(n=>{var r;ae.inp={value:n.value,elementAttribution:(r=n.attribution)==null?void 0:r.interactionTarget}})}function po(e){const t=p.getInstance(),n=t.getEntriesByType("measure");for(const r of n)Wt(e,r);t.setupObserver("measure",r=>Wt(e,r))}function Wt(e,t){const n=t.name;n.substring(0,Ve.length)!==Ve&&W.createUserTimingTrace(e,n)}function Ne(e){if(!Ht){Ht=!0;const t=p.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");setTimeout(()=>{W.createOobTrace(e,n,r,ae,tr)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,n){this.app=t,this.installations=n,this.initialized=!1}_init(t){this.initialized||((t==null?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(t==null?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),p.getInstance().requiredApisAvailable()?de().then(n=>{n&&(Xs(),Yn(this).then(()=>qt(this),()=>qt(this)),this.initialized=!0)}).catch(n=>{A.info(`Environment doesn't support IndexedDB: ${n}`)}):A.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){b.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return b.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){b.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return b.getInstance().dataCollectionEnabled}}const mo="[DEFAULT]";function bo(e=nn()){return e=G(e),ee(e,"performance").getImmediate()}function Ao(e,t){return e=G(e),new W(e,t)}const Eo=(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if(n.name!==mo)throw g.create("FB not default");if(typeof window>"u")throw g.create("no window");Ts(window);const i=new go(n,r);return i._init(t),i};function Io(){D(new w("performance",Eo,"PUBLIC")),v(Bt,ze),v(Bt,ze,"esm2020")}Io();const yo={apiKey:"AIzaSyChrci6BBmD3aRXUmWSdcr3SzsDdc3xp24",authDomain:"vf-site-fb2b3.firebaseapp.com",projectId:"vf-site-fb2b3",storageBucket:"vf-site-fb2b3.firebasestorage.app",messagingSenderId:"588168126505",appId:"1:588168126505:web:500a672d1c97371d833c38",measurementId:"G-4GSF2Z3HGG"};let z=null,q=null,To=null;try{if(z=tn(yo),typeof window<"u"&&z){Ya().then(e=>{e&&z&&(q=Ka(z),console.log("✅ Firebase Analytics initialized"))}).catch(e=>{console.warn("⚠️ Firebase Analytics not supported:",e)});try{z&&(To=bo(z),console.log("✅ Firebase Performance Monitoring initialized"))}catch(e){console.warn("⚠️ Firebase Performance Monitoring failed:",e)}}}catch(e){console.error("❌ Firebase initialization failed:",e)}const Co=(e,t)=>{if(q)try{et(q,"page_view",{page_title:e,page_location:t||window.location.href,page_path:window.location.pathname}),Ja(q,e),console.log("📊 Page view logged:",e)}catch(n){console.error("Failed to log page view:",n)}},nr=(e,t)=>{if(q)try{et(q,e,t),console.log("📊 Event logged:",e,t)}catch(n){console.error("Failed to log event:",n)}},Mo=(e,t)=>{nr("download",{download_type:e,item_name:t})},_o=(e,t,n=!1)=>{nr("error",{error_message:e,error_code:t,fatal:n})},vo=()=>{typeof window>"u"||(window.addEventListener("error",e=>{var n;const t={message:e.message,stack:(n=e.error)==null?void 0:n.stack,fatal:!0,timestamp:new Date().toISOString(),url:window.location.href,userAgent:navigator.userAgent};qe(t),console.error("🔴 Uncaught error:",t)}),window.addEventListener("unhandledrejection",e=>{var n,r;const t={message:((n=e.reason)==null?void 0:n.message)||String(e.reason),stack:(r=e.reason)==null?void 0:r.stack,fatal:!1,timestamp:new Date().toISOString(),url:window.location.href,userAgent:navigator.userAgent};qe(t),console.error("🔴 Unhandled promise rejection:",t)}),console.log("✅ Error tracking initialized"))},qe=e=>{try{_o(e.message,e.errorCode,e.fatal)}catch{console.warn("⚠️ Failed to log error to Firebase Analytics")}try{const t=wo();t.unshift(e);const n=t.slice(0,50);localStorage.setItem("firebase_errors",JSON.stringify(n))}catch(t){console.error("Failed to store error:",t)}},wo=()=>{try{const e=localStorage.getItem("firebase_errors");return e?JSON.parse(e):[]}catch{return[]}},So=(e,t,n=!1)=>{const r={message:typeof e=="string"?e:e.message,stack:typeof e=="object"?e.stack:void 0,errorCode:t,fatal:n,timestamp:new Date().toISOString(),url:window.location.href,userAgent:navigator.userAgent};qe(r),console.error("🔴 Captured error:",r)},Ro=Object.freeze(Object.defineProperty({__proto__:null,captureError:So,initializeErrorTracking:vo},Symbol.toStringTag,{value:"Module"}));export{z as a,q as b,nr as c,Mo as d,_o as e,So as f,Ro as g,vo as i,Co as l,To as p,Ao as t};
//# sourceMappingURL=errorTracking-D_6g96BW.js.map

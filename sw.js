if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Home-B7KCIf-Z.css",revision:null},{url:"assets/Home-DfQzVU5-.js",revision:null},{url:"assets/index-AtZ9tHLP.css",revision:null},{url:"assets/index-r_dYQyIs.js",revision:null},{url:"assets/lib/@mui/joy-DjFlsSMO.js",revision:null},{url:"assets/lib/react-markdown-6jwEm186.js",revision:null},{url:"assets/strings_en-BtOJ1ICg.js",revision:null},{url:"index.html",revision:"687268cfc912626252ec18e26356aca8"},{url:"registerSW.js",revision:"7e6fd9218d56341ef36add5b7f85abac"},{url:"apple-touch-icon.png",revision:"bb8b142826dea062bfd9851f110d30ae"},{url:"favicon.ico",revision:"cd40eac6e4035d525b8dc734e5d0e828"},{url:"mask-icon.svg",revision:"6930f257d8ca14b093189481dad974b6"},{url:"pwa-192x192.png",revision:"99d5690b037de97095f1e8075e40ea06"},{url:"pwa-512x512.png",revision:"ccd1f2fb6b1f91d8cf47e7d61423a115"},{url:"manifest.webmanifest",revision:"05958e72f32d422e254f602ba4293eb6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

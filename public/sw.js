if(!self.define){let e,n={};const a=(a,s)=>(a=new URL(a+".js",s).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};n[c]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Bl.svg",revision:"72c1697955d56e893c509b9df9e4d755"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/447-144179c27c39a244.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/4bd1b696-dc53661a9e7a1ea0.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/565-19f7b486666a7390.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/Bluetooth/page-20721b4600654882.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/VolumeControl/page-a170266c206f9adc.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/last/page-f23f1531d453d50b.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/layout-1ed17c13a6bbb6ca.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/page-585e981c5f9137ca.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/(main)/selected/page-4e298f6a2e5562f8.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/app/_not-found/page-808b5c2065d488d7.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/main-app-6865024aae0989ae.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/main-b9f717ef6f0c3f2c.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5b4e8de85f287d26.js",revision:"fPvwL-7rnxTxOX7ISVe-l"},{url:"/_next/static/css/4dfadbc31bfcab68.css",revision:"4dfadbc31bfcab68"},{url:"/_next/static/fPvwL-7rnxTxOX7ISVe-l/_buildManifest.js",revision:"bd52eab9629ae26b7d16a0ed1c4606bf"},{url:"/_next/static/fPvwL-7rnxTxOX7ISVe-l/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/media/p1.16b0cb0e.jpg",revision:"69c6dd2a833a1299f7a7cc3d63faeec5"},{url:"/_next/static/media/p3.ac1e293d.png",revision:"96033a31223dbc7a39657362128a4b48"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/apple-touch-icon.png",revision:"949b4de61c6d6f6f9fdf7ca9b9adc9ed"},{url:"/icons/favicon-16x16.png",revision:"6385c5315145a63d6c3284b183d3f29b"},{url:"/icons/favicon-32x32.png",revision:"d284298aa34ab62a15bfc3c3fe6257b4"},{url:"/icons/icon-192x192.png",revision:"5cdfbac53d51791c1ca7d0ba08397159"},{url:"/icons/icon-512x512.png",revision:"5b49fefbe0f345c30faaac7f53e3b545"},{url:"/icons/icon-maskable-192x192.png",revision:"13aca1e9034fba4563e051b49793df57"},{url:"/icons/icon-maskable-512x512.png",revision:"813d7efe2b07874bd1e2eb5a49dfac85"},{url:"/icons/og-image.png",revision:"d2153031682d34c41dd816541c239b2e"},{url:"/manifest.json",revision:"7eef6afa849b354c79b9368af1882dc6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/p2.jpg",revision:"22f335c14da2f813195047bc1d53411c"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var n=e.sameOrigin,a=e.url.pathname;return!(!n||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var n=e.request,a=e.url.pathname,s=e.sameOrigin;return"1"===n.headers.get("RSC")&&"1"===n.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var n=e.request,a=e.url.pathname,s=e.sameOrigin;return"1"===n.headers.get("RSC")&&s&&!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var n=e.url.pathname;return e.sameOrigin&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

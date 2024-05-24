/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "07cf83e3d2302fcec9968a5ecaa41272"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a3e7f265.css",
    "revision": "1e12c16e092843e90c26a1e6bb568e39"
  },
  {
    "url": "assets/img/member_delete.486727c7.png",
    "revision": "486727c7ea419fd9d6b90f22653d8f25"
  },
  {
    "url": "assets/img/member_get_all.097ff1f2.png",
    "revision": "097ff1f203dcb393fc2ad78ed2651425"
  },
  {
    "url": "assets/img/member_get_id.0ff5bf47.png",
    "revision": "0ff5bf474b305246909af23cb1e99001"
  },
  {
    "url": "assets/img/member_get_roleid.6803d2a9.png",
    "revision": "6803d2a97cf49472c9c95b4ea0576729"
  },
  {
    "url": "assets/img/member_post.25582dbc.png",
    "revision": "25582dbc588a933dbbc59654d38e9ea1"
  },
  {
    "url": "assets/img/member_put.a9a0907f.png",
    "revision": "a9a0907f368fb553f0d54ed561293c86"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/role_delete.b5028cd1.png",
    "revision": "b5028cd1f2eed2da85bdbaf5acb61566"
  },
  {
    "url": "assets/img/role_get_all.10fbc864.png",
    "revision": "10fbc86468bf7b42114c508d7c682102"
  },
  {
    "url": "assets/img/role_get_id.bfc5226d.png",
    "revision": "bfc5226d1324d564d164137bf439e6e0"
  },
  {
    "url": "assets/img/role_post.b8842f40.png",
    "revision": "b8842f401ae0ce846a65e7fe9c9c831a"
  },
  {
    "url": "assets/img/role_put.f57706a5.png",
    "revision": "f57706a526b5a800a3070ef74b4934c1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_delete.a87b4109.png",
    "revision": "a87b41098def73d449351a0752cc46c9"
  },
  {
    "url": "assets/img/user_get_all.f1451c5d.png",
    "revision": "f1451c5d2c7ef2f4680d0532132ea1fa"
  },
  {
    "url": "assets/img/user_get_id.976d49aa.png",
    "revision": "976d49aa3e1782e7e1d099df4f64bb4e"
  },
  {
    "url": "assets/img/user_post.16939ea5.png",
    "revision": "16939ea5839a743b7c7a209a21f809db"
  },
  {
    "url": "assets/img/user_put.8c9ac4bc.png",
    "revision": "8c9ac4bc3cab135804dc2eb744e7be49"
  },
  {
    "url": "assets/js/10.5d5ae146.js",
    "revision": "00695da901bc8334245c3e8d837406f2"
  },
  {
    "url": "assets/js/11.51b0ef6e.js",
    "revision": "d679e74c934c23d800898a0bb22c8f4e"
  },
  {
    "url": "assets/js/12.d70ca428.js",
    "revision": "b2f41ed984dc64933d4e96c4d27b86d6"
  },
  {
    "url": "assets/js/13.6e45555a.js",
    "revision": "82c468edb2a64e3d7439e611a4e1e649"
  },
  {
    "url": "assets/js/14.0d8ad425.js",
    "revision": "a080fb65b9a770be6799146570144f83"
  },
  {
    "url": "assets/js/15.1e73ce32.js",
    "revision": "70fdb960f181bd77336593444cd27337"
  },
  {
    "url": "assets/js/16.62bb69bb.js",
    "revision": "1e2182eedd8dbf71c7b603a5ef23a2a2"
  },
  {
    "url": "assets/js/17.07c3dd04.js",
    "revision": "55020580683b3c4035f0383c2dcc3357"
  },
  {
    "url": "assets/js/18.450fd931.js",
    "revision": "458d053da3089b979a4c371f76b1aec2"
  },
  {
    "url": "assets/js/19.91d31cc6.js",
    "revision": "246e0101a4957483f09505bec4edebfc"
  },
  {
    "url": "assets/js/2.40ff0cdb.js",
    "revision": "427c786ada5b62764cbd3357a578a155"
  },
  {
    "url": "assets/js/20.45de409d.js",
    "revision": "05ab032e9255292ad95dea44de78dd80"
  },
  {
    "url": "assets/js/21.9f589d78.js",
    "revision": "d852868a4f1dfd9bd44d9b1806218ee0"
  },
  {
    "url": "assets/js/22.d5d5be16.js",
    "revision": "f95225a14c40997134016a4afebd5cba"
  },
  {
    "url": "assets/js/23.13bff708.js",
    "revision": "4220ded74aa7430025443644f86fa7c6"
  },
  {
    "url": "assets/js/24.f27b0f41.js",
    "revision": "e95c362290130e0698b17f16964d3bde"
  },
  {
    "url": "assets/js/26.d747499e.js",
    "revision": "af46a34e1ee9b3c043c126040c7781de"
  },
  {
    "url": "assets/js/3.32ee9525.js",
    "revision": "fe3bc0de52f522d122a3308d2d570c7e"
  },
  {
    "url": "assets/js/4.71dbdf1d.js",
    "revision": "4a617bef77b701817ba3b6caca591d19"
  },
  {
    "url": "assets/js/5.ead50b78.js",
    "revision": "0f3bfca4f624dfc4b07108c0e9301e8e"
  },
  {
    "url": "assets/js/6.f4318144.js",
    "revision": "b356efcdd82c6b65ff2d260221772ffb"
  },
  {
    "url": "assets/js/7.4666a7ce.js",
    "revision": "d4438ea2eef568db76faba19fef7dafe"
  },
  {
    "url": "assets/js/8.c6e97697.js",
    "revision": "d3bfe60e71f974161cc96eb02690ef8b"
  },
  {
    "url": "assets/js/9.5478b07d.js",
    "revision": "7dbc5b514e4ced9aa087ce8060e203b7"
  },
  {
    "url": "assets/js/app.afcd7cae.js",
    "revision": "ac4f0c2e6b038e90533f2facb38af136"
  },
  {
    "url": "conclusion/index.html",
    "revision": "134f0bfd1625168328f724263992bfb9"
  },
  {
    "url": "design/index.html",
    "revision": "8f4510f4a6b453fc9f2fdfcb2691e746"
  },
  {
    "url": "index.html",
    "revision": "e9d847fb526e6ed4fd4386ee8d530ace"
  },
  {
    "url": "intro/index.html",
    "revision": "4402cc3d7af313d857e5f7ab95eef833"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1458aff87818649c132f4acca2212264"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "afdf9d986470e7e0c497ea481c2ce2f8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0d48e63941aef7668b4dd6e950009f33"
  },
  {
    "url": "software/index.html",
    "revision": "ca6eb46b071c92c270865bb2b6a25149"
  },
  {
    "url": "test/index.html",
    "revision": "96f858545b32d1b4eaa59dc702a024ca"
  },
  {
    "url": "use cases/index.html",
    "revision": "5b3ba462fa168d5a3f125b7215d10519"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

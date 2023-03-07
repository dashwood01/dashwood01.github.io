'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eb74e7b92b993a4a6ac22e42db24386a",
"assets/assets/fonts/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/assets/fonts/JetBrainsMono-ExtraBold.ttf": "fb177aca3a88192fea54d61ccdfccb90",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "2ab3c46a017cadf52f504054eee882ad",
"assets/assets/images/aramestan-1.png": "83f36f97250711de2a1c69408bf43a78",
"assets/assets/images/aramestan-2.png": "66b710adfef9d48c89e1b66253be0273",
"assets/assets/images/aramestan-3.png": "95f2cf4f21f3ae60b55ece8575705f0b",
"assets/assets/images/aramestan-4.png": "334cef6b2f5fa8939462a94b905a7998",
"assets/assets/images/background.jpg": "f0f53f3669f15d84df5cb85246053a59",
"assets/assets/images/barbarg-1.png": "4cd73a4431c6d118d1ca000fd35acdfd",
"assets/assets/images/barbarg-2.png": "5552b39e6c158789bae8e13c3cae1ac4",
"assets/assets/images/barbarg-3.png": "b1d4eb9e47cd2928ec4bdae100f60728",
"assets/assets/images/barbarg-4.png": "140e576ed22af81b555ba9d6694fe0c7",
"assets/assets/images/code_icon.png": "1394790a24735159d8f100d6bf43015d",
"assets/assets/images/ic_aramestan.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"assets/assets/images/ic_barbarg.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"assets/assets/images/ic_email.png": "195af7db4bd8fa33b7f5dc22d5d4b6f4",
"assets/assets/images/ic_fingerprint_action.png": "37747d16b13fcea588b8d9cf8486bd5b",
"assets/assets/images/ic_github.png": "2a1cbf6bb926ea2e198eb14ee8ce05a6",
"assets/assets/images/ic_saroj.png": "30564414475782e2493f84f620d11ac2",
"assets/assets/images/ic_senik_bussiness.png": "60b5a2ab78f5ee355356edc2ee0ba6a1",
"assets/assets/images/ic_senik_reservation.png": "cb9854a642cc04e26639fad0afc67e36",
"assets/assets/images/ic_senik_visitor.png": "3c50341f9ea771d2967e817b4e4e9d74",
"assets/assets/images/ic_shirazvand.png": "dc49e5a40934aa47dc715d94ca96b35d",
"assets/assets/images/ic_tohid_school.png": "ffacd16f616d72ff1a3b8a28f3164f81",
"assets/assets/images/pro_code_icon.png": "8234a62febda598afc575e1d9ebea90a",
"assets/assets/images/saroj-1.png": "893d82dcb47662e0489293dba72af469",
"assets/assets/images/saroj-2.png": "658e16b77cb1ac586a270b48f0732e15",
"assets/assets/images/saroj-3.png": "877b191c2a6b9c9e429db53feff97faf",
"assets/assets/images/saroj-4.png": "744d9eb4169fc39b1dbc0147b98c7d48",
"assets/assets/images/senik-business-1.png": "f47164a47c3c09f37d36e928f35bae92",
"assets/assets/images/senik-business-2.png": "58e72a2a2ea40766a154d9bfdaf153cc",
"assets/assets/images/senik-business-3.png": "41361ac81f81b947d180f40d836c248b",
"assets/assets/images/senik-business-4.png": "3359755f2415608572e1f5db852c1cfb",
"assets/assets/images/senik-reservation-1.png": "ce94fec1b388d80b7f94baaba02a4ae9",
"assets/assets/images/senik-reservation-2.png": "8584cd27eaba0e15dc12607590352192",
"assets/assets/images/senik-reservation-3.png": "33f81a82a1f6e3cda90ba32f30950d8f",
"assets/assets/images/senik-reservation-4.png": "9c94458f9d2a8bc23da08fcc94baa4b2",
"assets/assets/images/senik-reservation-5.png": "994ff6771fc79064a5e0946c4fd75ab2",
"assets/assets/images/senik-reservation-6.png": "328d139afaadf41d229ca76c4975f217",
"assets/assets/images/senik-reservation-7.png": "5ea9da832b0a8c703b32f6d23a9c28c2",
"assets/assets/images/senik-reservation-8.png": "4d18109540d5dcb37000b46870229dbf",
"assets/assets/images/senik-visitor-1.png": "9246380b1d02a1e7b6c7879cfba8a369",
"assets/assets/images/senik-visitor-2.png": "a9460ebf700f4b531f77124d6a7d8e18",
"assets/assets/images/senik-visitor-3.png": "974c757d537cc43c2eb45d516f8e9ab4",
"assets/assets/images/shirazvand-1.png": "ad72c5698c9cd6d126fc628914136b06",
"assets/assets/images/shirazvand-2.png": "8fa39ab16afc96b6a8a5624c90bf79f0",
"assets/assets/images/shirazvand-3.png": "525ba3a4c2c92fa51f93ece04757c7fa",
"assets/assets/images/shirazvand-4.png": "824177653c8e9e23682f1efff80cc7ff",
"assets/assets/images/shirazvand-5.png": "699e18a4d4cb10c24c90c725c36b0529",
"assets/assets/images/shirazvand-6.png": "ac67f2c61ae7f97beabba884745de7f2",
"assets/assets/images/shirazvand-7.png": "40ca20d992d168aad4e96d06ddd27c9c",
"assets/assets/images/tohid-1.png": "c48622f4438f98b39f1af8a0c340796d",
"assets/assets/images/tohid-2.png": "011cf6be87eeb67487f7363c318d029b",
"assets/assets/images/tohid-3.png": "a186d3865d12e7876743d856fa75169c",
"assets/assets/images/tohid-4.png": "6c41b8afafc0b0099b678203af3b68c9",
"assets/assets/images/tohid-5.png": "d3b1bf81d4003bebc85f91e77bed08ad",
"assets/assets/images/tohid-6.png": "38695f99b214a66e02843ee034816f3d",
"assets/FontManifest.json": "ded2e01cc0eda709ea3c42f61ec8d599",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0d84e57fe3b23adbe83868a163763649",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"dashwood01.github.io/.git/COMMIT_EDITMSG": "132db5ac5fbe9f8cc5e25a90f2f6e749",
"dashwood01.github.io/.git/config": "d0e273a0adb1f9492b20e5ba83cfd7cd",
"dashwood01.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"dashwood01.github.io/.git/FETCH_HEAD": "7e99b5272061ee4fdafb13a6037a405a",
"dashwood01.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"dashwood01.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"dashwood01.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"dashwood01.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"dashwood01.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"dashwood01.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"dashwood01.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"dashwood01.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"dashwood01.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"dashwood01.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"dashwood01.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"dashwood01.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"dashwood01.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"dashwood01.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"dashwood01.github.io/.git/index": "58c1f1015a57d7885784cba33f3a15d6",
"dashwood01.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"dashwood01.github.io/.git/logs/HEAD": "5f54c06e771ab3cb3a32c054e4114c1b",
"dashwood01.github.io/.git/logs/refs/heads/main": "5f54c06e771ab3cb3a32c054e4114c1b",
"dashwood01.github.io/.git/logs/refs/remotes/origin/HEAD": "aca1dc39a61f83b98b192a2a45327f30",
"dashwood01.github.io/.git/logs/refs/remotes/origin/main": "c3c68e36290af2feae6855e55c4bc77e",
"dashwood01.github.io/.git/objects/00/d3400a24a2d1b21eb9ceb26bc33468a1d335e4": "3e433cbf4f2bb2d52f08eb9c04f82261",
"dashwood01.github.io/.git/objects/03/4b685b9560064c280ce9162eea818303b2d273": "bfb8ff1327e8b4bc830c208a92d0367a",
"dashwood01.github.io/.git/objects/0a/29f5aa5466cdb459a4d2f3c3bc58cc65a50e99": "19072d5aba92ce8d296869e38579b174",
"dashwood01.github.io/.git/objects/0a/9280916cef9ef3e0a8061c26834409b27e5fcb": "d3557195a90c276b565f9e197e16eea7",
"dashwood01.github.io/.git/objects/0c/8bceb2ba16d9b458858d56e6d2ed91ea9c50f7": "27df9fc5e4c8a3175bdf0ff07ad0d106",
"dashwood01.github.io/.git/objects/14/0087d40393ec62ba97e8ceefd4e64f4f14dda8": "12e665cc99cec5688eee9ad2abb0c1f1",
"dashwood01.github.io/.git/objects/19/6bfe646ee9ece5d6aa65fbdd4705b8bcf5b497": "1a6c3917cbe42bff43bf16347badc34e",
"dashwood01.github.io/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"dashwood01.github.io/.git/objects/1c/f358c6edc935b452272c5ff6ca5b3ecf356e27": "faef78abf79c99d9cc5648493199a804",
"dashwood01.github.io/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"dashwood01.github.io/.git/objects/31/b69cb3dafacac4a80d899e1e1ce8d5102aeff9": "ee35a834b2e4a7b72e008661bd389a3c",
"dashwood01.github.io/.git/objects/38/6af9502d48cafb136f393b28be1fdd50d86fe0": "4abcedacd744665e611915282126ea7c",
"dashwood01.github.io/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"dashwood01.github.io/.git/objects/43/13b0f979452b06a4085e4172afb639cdcbe48d": "bbcb1e6e44ba4ecc598b04d91aaf5dce",
"dashwood01.github.io/.git/objects/4a/b39dfae8f9d17a174318003e49150f29c83b42": "917944306760daddba8fc11d60ad0d4b",
"dashwood01.github.io/.git/objects/4f/e48a50afbf5535e616023162160b67cb2d30d5": "ab9fc1ddf78caa5d9623033cbc4dd181",
"dashwood01.github.io/.git/objects/55/634559c7ff2e392ef45d104343476a0151c4ec": "900d7000747eb618612dff6df450eb55",
"dashwood01.github.io/.git/objects/58/5f773ad509927fbb334c5b492583708ff42229": "b907eb5a6597252ec0f47579641f94a1",
"dashwood01.github.io/.git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
"dashwood01.github.io/.git/objects/75/6747a341a946bbd7c1aef729c512dc211b6116": "627a9d07a897b49c8ed10947ab7653cb",
"dashwood01.github.io/.git/objects/79/5c425f9e34ec434ddcc7954738b3458f5e9a04": "d5534cb29cc4a5ab8032eb5f8f381441",
"dashwood01.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"dashwood01.github.io/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"dashwood01.github.io/.git/objects/7e/0c8c8b58c8bc37a1f0d3dd2f8c22da2ba2661c": "55957979447a547ffb0e13dba1828407",
"dashwood01.github.io/.git/objects/85/af2f71c3cf15eaf63b8fe672399417157477d1": "6d32c767d85ed3afca421be1c47d83ec",
"dashwood01.github.io/.git/objects/87/b4b83564bc446d5cf370c5a30122f1c47548a7": "c78722e0252ff8a98d7630c0ae5515de",
"dashwood01.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"dashwood01.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"dashwood01.github.io/.git/objects/8c/e63c1acc619abf260e6197bdb78eccfb857681": "cab158fa6b238d96dfeb734aadc8fe38",
"dashwood01.github.io/.git/objects/8d/a7047b8a38b01b4d886a2c64739aada046a9ac": "f4a6552646c639a735a4506aa935b5a0",
"dashwood01.github.io/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"dashwood01.github.io/.git/objects/98/05c8a0c7068f2e1ac1411449a4e28463524ff9": "bd7d9f6226b6fb84676f410691b0e371",
"dashwood01.github.io/.git/objects/9a/7477c5ad20e8a9c66a428fd553526b05bf1c75": "052ef8507046f378dd6b7ac072f11724",
"dashwood01.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"dashwood01.github.io/.git/objects/a3/7f733bd2d20aa816cdb35139eda81811556ef2": "e972eb355dd42c37699624dc542ed753",
"dashwood01.github.io/.git/objects/a6/ba5529af2486ea7d2b92b7b8bd598bbee46e29": "90f7e1b1306b80eed1121e124dc7b760",
"dashwood01.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"dashwood01.github.io/.git/objects/ab/251bc811f149201cf005280acd3077618fdf34": "aa27103ea9fc6dea7920385e8052fb0a",
"dashwood01.github.io/.git/objects/ad/73e16bdb741795e79b30d4dd13f9b3a17e662b": "a02367645544892aa88c7c910551254f",
"dashwood01.github.io/.git/objects/ad/d39fa913608f757ee10fb62e818bc143877821": "7f30db3e583539a3df3bb71581857900",
"dashwood01.github.io/.git/objects/b3/42beb3d0c345a825cff4642e7142dfe2d51484": "f86d46030bae478d341c350264959d75",
"dashwood01.github.io/.git/objects/b5/6e2e47967f346558972f12dc8160b756d7787d": "309a3598491921c5a3c41accee230005",
"dashwood01.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"dashwood01.github.io/.git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
"dashwood01.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"dashwood01.github.io/.git/objects/b9/b00d746921dc82342f2440301f75aad7fc6fe1": "2f11ac35de2085cf9552ef2e2d8c0eea",
"dashwood01.github.io/.git/objects/c8/484718680666d4e44413e9a8a3d3f05c201d49": "0eee233a228efbdf0f97c749b3afe1a1",
"dashwood01.github.io/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"dashwood01.github.io/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"dashwood01.github.io/.git/objects/d1/3a4e05ce344167bf135b29164a2dd2a5a2c499": "2765d3d9e5271d6f2c88e9975051793a",
"dashwood01.github.io/.git/objects/d2/802e95cb342e0b9123587a810f669acfc045c1": "023928fc674b7427560eccac2c7a2491",
"dashwood01.github.io/.git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
"dashwood01.github.io/.git/objects/d6/976e18b6f2951b27cec6e3b8ecc0686dcd2f1b": "07433be7e01b6df4b6c928ebda241731",
"dashwood01.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"dashwood01.github.io/.git/objects/d8/31175ca80533892445b89384c609b325fdd1a6": "d348ab0e8414647255c92503928ccd01",
"dashwood01.github.io/.git/objects/dd/6ef1778bd9acee20da1bd4474c4742eeeeadd9": "204d643f4175fb2c4e39aa8cb9f8b675",
"dashwood01.github.io/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"dashwood01.github.io/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"dashwood01.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"dashwood01.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"dashwood01.github.io/.git/objects/ee/9d07054fd537c91c578eeab6c69ecd1dbba6ab": "24aa446b7983605323382a0d68af435e",
"dashwood01.github.io/.git/objects/f1/7c3a9dfc6850b92da63dc8a0e255bc45ff441e": "8d9ee7ed7941d7684d486cc8b6d9d0d2",
"dashwood01.github.io/.git/objects/f2/329a9ebc3a6fb0a2341dd6de756b4733d957ac": "2b0190c8fa00cee67eec53dde9a548d5",
"dashwood01.github.io/.git/objects/f8/5a85b5f7dd416327ad0c5d9052ca94c5b764d7": "30fd340ede706192de2b4a95b61e174c",
"dashwood01.github.io/.git/objects/pack/pack-689c18526327a533134735c052fed74c686276f7.idx": "6305bc9b04856356c35764e83085297d",
"dashwood01.github.io/.git/objects/pack/pack-689c18526327a533134735c052fed74c686276f7.pack": "26c73fbfe22121164af74625f7e7a584",
"dashwood01.github.io/.git/ORIG_HEAD": "86b8f9381056e475908bf4ea10df5bb2",
"dashwood01.github.io/.git/packed-refs": "87a081d4b7934a31b406bc8a417871ff",
"dashwood01.github.io/.git/refs/heads/main": "6ba59804b4e833b5c6112fe8e63bb501",
"dashwood01.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"dashwood01.github.io/.git/refs/remotes/origin/main": "6ba59804b4e833b5c6112fe8e63bb501",
"dashwood01.github.io/assets/AssetManifest.json": "eb74e7b92b993a4a6ac22e42db24386a",
"dashwood01.github.io/assets/assets/fonts/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"dashwood01.github.io/assets/assets/fonts/JetBrainsMono-ExtraBold.ttf": "fb177aca3a88192fea54d61ccdfccb90",
"dashwood01.github.io/assets/assets/fonts/JetBrainsMono-Medium.ttf": "2ab3c46a017cadf52f504054eee882ad",
"dashwood01.github.io/assets/assets/images/aramestan-1.png": "83f36f97250711de2a1c69408bf43a78",
"dashwood01.github.io/assets/assets/images/aramestan-2.png": "66b710adfef9d48c89e1b66253be0273",
"dashwood01.github.io/assets/assets/images/aramestan-3.png": "95f2cf4f21f3ae60b55ece8575705f0b",
"dashwood01.github.io/assets/assets/images/aramestan-4.png": "334cef6b2f5fa8939462a94b905a7998",
"dashwood01.github.io/assets/assets/images/background.jpg": "f0f53f3669f15d84df5cb85246053a59",
"dashwood01.github.io/assets/assets/images/barbarg-1.png": "4cd73a4431c6d118d1ca000fd35acdfd",
"dashwood01.github.io/assets/assets/images/barbarg-2.png": "5552b39e6c158789bae8e13c3cae1ac4",
"dashwood01.github.io/assets/assets/images/barbarg-3.png": "b1d4eb9e47cd2928ec4bdae100f60728",
"dashwood01.github.io/assets/assets/images/barbarg-4.png": "140e576ed22af81b555ba9d6694fe0c7",
"dashwood01.github.io/assets/assets/images/code_icon.png": "1394790a24735159d8f100d6bf43015d",
"dashwood01.github.io/assets/assets/images/ic_aramestan.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"dashwood01.github.io/assets/assets/images/ic_barbarg.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"dashwood01.github.io/assets/assets/images/ic_email.png": "195af7db4bd8fa33b7f5dc22d5d4b6f4",
"dashwood01.github.io/assets/assets/images/ic_fingerprint_action.png": "37747d16b13fcea588b8d9cf8486bd5b",
"dashwood01.github.io/assets/assets/images/ic_github.png": "2a1cbf6bb926ea2e198eb14ee8ce05a6",
"dashwood01.github.io/assets/assets/images/ic_saroj.png": "30564414475782e2493f84f620d11ac2",
"dashwood01.github.io/assets/assets/images/ic_senik_bussiness.png": "60b5a2ab78f5ee355356edc2ee0ba6a1",
"dashwood01.github.io/assets/assets/images/ic_senik_reservation.png": "cb9854a642cc04e26639fad0afc67e36",
"dashwood01.github.io/assets/assets/images/ic_senik_visitor.png": "3c50341f9ea771d2967e817b4e4e9d74",
"dashwood01.github.io/assets/assets/images/ic_shirazvand.png": "dc49e5a40934aa47dc715d94ca96b35d",
"dashwood01.github.io/assets/assets/images/ic_tohid_school.png": "ffacd16f616d72ff1a3b8a28f3164f81",
"dashwood01.github.io/assets/assets/images/pro_code_icon.png": "8234a62febda598afc575e1d9ebea90a",
"dashwood01.github.io/assets/assets/images/saroj-1.png": "893d82dcb47662e0489293dba72af469",
"dashwood01.github.io/assets/assets/images/saroj-2.png": "658e16b77cb1ac586a270b48f0732e15",
"dashwood01.github.io/assets/assets/images/saroj-3.png": "877b191c2a6b9c9e429db53feff97faf",
"dashwood01.github.io/assets/assets/images/saroj-4.png": "744d9eb4169fc39b1dbc0147b98c7d48",
"dashwood01.github.io/assets/assets/images/senik-business-1.png": "f47164a47c3c09f37d36e928f35bae92",
"dashwood01.github.io/assets/assets/images/senik-business-2.png": "58e72a2a2ea40766a154d9bfdaf153cc",
"dashwood01.github.io/assets/assets/images/senik-business-3.png": "41361ac81f81b947d180f40d836c248b",
"dashwood01.github.io/assets/assets/images/senik-business-4.png": "3359755f2415608572e1f5db852c1cfb",
"dashwood01.github.io/assets/assets/images/senik-reservation-1.png": "ce94fec1b388d80b7f94baaba02a4ae9",
"dashwood01.github.io/assets/assets/images/senik-reservation-2.png": "8584cd27eaba0e15dc12607590352192",
"dashwood01.github.io/assets/assets/images/senik-reservation-3.png": "33f81a82a1f6e3cda90ba32f30950d8f",
"dashwood01.github.io/assets/assets/images/senik-reservation-4.png": "9c94458f9d2a8bc23da08fcc94baa4b2",
"dashwood01.github.io/assets/assets/images/senik-reservation-5.png": "994ff6771fc79064a5e0946c4fd75ab2",
"dashwood01.github.io/assets/assets/images/senik-reservation-6.png": "328d139afaadf41d229ca76c4975f217",
"dashwood01.github.io/assets/assets/images/senik-reservation-7.png": "5ea9da832b0a8c703b32f6d23a9c28c2",
"dashwood01.github.io/assets/assets/images/senik-reservation-8.png": "4d18109540d5dcb37000b46870229dbf",
"dashwood01.github.io/assets/assets/images/senik-visitor-1.png": "9246380b1d02a1e7b6c7879cfba8a369",
"dashwood01.github.io/assets/assets/images/senik-visitor-2.png": "a9460ebf700f4b531f77124d6a7d8e18",
"dashwood01.github.io/assets/assets/images/senik-visitor-3.png": "974c757d537cc43c2eb45d516f8e9ab4",
"dashwood01.github.io/assets/assets/images/shirazvand-1.png": "ad72c5698c9cd6d126fc628914136b06",
"dashwood01.github.io/assets/assets/images/shirazvand-2.png": "8fa39ab16afc96b6a8a5624c90bf79f0",
"dashwood01.github.io/assets/assets/images/shirazvand-3.png": "525ba3a4c2c92fa51f93ece04757c7fa",
"dashwood01.github.io/assets/assets/images/shirazvand-4.png": "824177653c8e9e23682f1efff80cc7ff",
"dashwood01.github.io/assets/assets/images/shirazvand-5.png": "699e18a4d4cb10c24c90c725c36b0529",
"dashwood01.github.io/assets/assets/images/shirazvand-6.png": "ac67f2c61ae7f97beabba884745de7f2",
"dashwood01.github.io/assets/assets/images/shirazvand-7.png": "40ca20d992d168aad4e96d06ddd27c9c",
"dashwood01.github.io/assets/assets/images/tohid-1.png": "c48622f4438f98b39f1af8a0c340796d",
"dashwood01.github.io/assets/assets/images/tohid-2.png": "011cf6be87eeb67487f7363c318d029b",
"dashwood01.github.io/assets/assets/images/tohid-3.png": "a186d3865d12e7876743d856fa75169c",
"dashwood01.github.io/assets/assets/images/tohid-4.png": "6c41b8afafc0b0099b678203af3b68c9",
"dashwood01.github.io/assets/assets/images/tohid-5.png": "d3b1bf81d4003bebc85f91e77bed08ad",
"dashwood01.github.io/assets/assets/images/tohid-6.png": "38695f99b214a66e02843ee034816f3d",
"dashwood01.github.io/assets/FontManifest.json": "ded2e01cc0eda709ea3c42f61ec8d599",
"dashwood01.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"dashwood01.github.io/assets/images/aramestan-1.png": "83f36f97250711de2a1c69408bf43a78",
"dashwood01.github.io/assets/images/aramestan-2.png": "66b710adfef9d48c89e1b66253be0273",
"dashwood01.github.io/assets/images/aramestan-3.png": "95f2cf4f21f3ae60b55ece8575705f0b",
"dashwood01.github.io/assets/images/aramestan-4.png": "334cef6b2f5fa8939462a94b905a7998",
"dashwood01.github.io/assets/images/background.jpg": "f0f53f3669f15d84df5cb85246053a59",
"dashwood01.github.io/assets/images/barbarg-1.png": "4cd73a4431c6d118d1ca000fd35acdfd",
"dashwood01.github.io/assets/images/barbarg-2.png": "5552b39e6c158789bae8e13c3cae1ac4",
"dashwood01.github.io/assets/images/barbarg-3.png": "b1d4eb9e47cd2928ec4bdae100f60728",
"dashwood01.github.io/assets/images/barbarg-4.png": "140e576ed22af81b555ba9d6694fe0c7",
"dashwood01.github.io/assets/images/code_icon.png": "1394790a24735159d8f100d6bf43015d",
"dashwood01.github.io/assets/images/ic_aramestan.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"dashwood01.github.io/assets/images/ic_barbarg.png": "7c51e7f381a27d78bcdbe3654aeab7c7",
"dashwood01.github.io/assets/images/ic_email.png": "195af7db4bd8fa33b7f5dc22d5d4b6f4",
"dashwood01.github.io/assets/images/ic_fingerprint_action.png": "37747d16b13fcea588b8d9cf8486bd5b",
"dashwood01.github.io/assets/images/ic_github.png": "2a1cbf6bb926ea2e198eb14ee8ce05a6",
"dashwood01.github.io/assets/images/ic_saroj.png": "30564414475782e2493f84f620d11ac2",
"dashwood01.github.io/assets/images/ic_senik_bussiness.png": "60b5a2ab78f5ee355356edc2ee0ba6a1",
"dashwood01.github.io/assets/images/ic_senik_reservation.png": "cb9854a642cc04e26639fad0afc67e36",
"dashwood01.github.io/assets/images/ic_senik_visitor.png": "3c50341f9ea771d2967e817b4e4e9d74",
"dashwood01.github.io/assets/images/ic_shirazvand.png": "dc49e5a40934aa47dc715d94ca96b35d",
"dashwood01.github.io/assets/images/ic_tohid_school.png": "ffacd16f616d72ff1a3b8a28f3164f81",
"dashwood01.github.io/assets/images/pro_code_icon.png": "8234a62febda598afc575e1d9ebea90a",
"dashwood01.github.io/assets/images/saroj-1.png": "893d82dcb47662e0489293dba72af469",
"dashwood01.github.io/assets/images/saroj-2.png": "658e16b77cb1ac586a270b48f0732e15",
"dashwood01.github.io/assets/images/saroj-3.png": "877b191c2a6b9c9e429db53feff97faf",
"dashwood01.github.io/assets/images/saroj-4.png": "744d9eb4169fc39b1dbc0147b98c7d48",
"dashwood01.github.io/assets/images/senik-business-1.png": "f47164a47c3c09f37d36e928f35bae92",
"dashwood01.github.io/assets/images/senik-business-2.png": "58e72a2a2ea40766a154d9bfdaf153cc",
"dashwood01.github.io/assets/images/senik-business-3.png": "41361ac81f81b947d180f40d836c248b",
"dashwood01.github.io/assets/images/senik-business-4.png": "3359755f2415608572e1f5db852c1cfb",
"dashwood01.github.io/assets/images/senik-reservation-1.png": "ce94fec1b388d80b7f94baaba02a4ae9",
"dashwood01.github.io/assets/images/senik-reservation-2.png": "8584cd27eaba0e15dc12607590352192",
"dashwood01.github.io/assets/images/senik-reservation-3.png": "33f81a82a1f6e3cda90ba32f30950d8f",
"dashwood01.github.io/assets/images/senik-reservation-4.png": "9c94458f9d2a8bc23da08fcc94baa4b2",
"dashwood01.github.io/assets/images/senik-reservation-5.png": "994ff6771fc79064a5e0946c4fd75ab2",
"dashwood01.github.io/assets/images/senik-reservation-6.png": "328d139afaadf41d229ca76c4975f217",
"dashwood01.github.io/assets/images/senik-reservation-7.png": "5ea9da832b0a8c703b32f6d23a9c28c2",
"dashwood01.github.io/assets/images/senik-reservation-8.png": "4d18109540d5dcb37000b46870229dbf",
"dashwood01.github.io/assets/images/senik-visitor-1.png": "9246380b1d02a1e7b6c7879cfba8a369",
"dashwood01.github.io/assets/images/senik-visitor-2.png": "a9460ebf700f4b531f77124d6a7d8e18",
"dashwood01.github.io/assets/images/senik-visitor-3.png": "974c757d537cc43c2eb45d516f8e9ab4",
"dashwood01.github.io/assets/images/shirazvand-1.png": "ad72c5698c9cd6d126fc628914136b06",
"dashwood01.github.io/assets/images/shirazvand-2.png": "8fa39ab16afc96b6a8a5624c90bf79f0",
"dashwood01.github.io/assets/images/shirazvand-3.png": "525ba3a4c2c92fa51f93ece04757c7fa",
"dashwood01.github.io/assets/images/shirazvand-4.png": "824177653c8e9e23682f1efff80cc7ff",
"dashwood01.github.io/assets/images/shirazvand-5.png": "699e18a4d4cb10c24c90c725c36b0529",
"dashwood01.github.io/assets/images/shirazvand-6.png": "ac67f2c61ae7f97beabba884745de7f2",
"dashwood01.github.io/assets/images/shirazvand-7.png": "40ca20d992d168aad4e96d06ddd27c9c",
"dashwood01.github.io/assets/images/tohid-1.png": "c48622f4438f98b39f1af8a0c340796d",
"dashwood01.github.io/assets/images/tohid-2.png": "011cf6be87eeb67487f7363c318d029b",
"dashwood01.github.io/assets/images/tohid-3.png": "a186d3865d12e7876743d856fa75169c",
"dashwood01.github.io/assets/images/tohid-4.png": "6c41b8afafc0b0099b678203af3b68c9",
"dashwood01.github.io/assets/images/tohid-5.png": "d3b1bf81d4003bebc85f91e77bed08ad",
"dashwood01.github.io/assets/images/tohid-6.png": "38695f99b214a66e02843ee034816f3d",
"dashwood01.github.io/assets/NOTICES": "0d84e57fe3b23adbe83868a163763649",
"dashwood01.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"dashwood01.github.io/assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"dashwood01.github.io/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"dashwood01.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"dashwood01.github.io/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"dashwood01.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"dashwood01.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dashwood01.github.io/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"dashwood01.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"dashwood01.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"dashwood01.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"dashwood01.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"dashwood01.github.io/index.html": "bbbceedbb30ab796eaf3efd924e184f8",
"/": "34f587c72bdb676af21d16fae57bccd4",
"dashwood01.github.io/index.html.bak": "2297fe5b99968303591f9ab771af7633",
"dashwood01.github.io/main.dart.js": "d74e7835e853fa328e58550ca6486cc2",
"dashwood01.github.io/manifest.json": "ba8cb0c065e201d18bd9887a07b61f68",
"dashwood01.github.io/version.json": "727e86a18495df49b86a04e00c159c5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "34f587c72bdb676af21d16fae57bccd4",
"main.dart.js": "6a5f4c1561ecb580c79780d01b039e1e",
"manifest.json": "ba8cb0c065e201d18bd9887a07b61f68",
"version.json": "727e86a18495df49b86a04e00c159c5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

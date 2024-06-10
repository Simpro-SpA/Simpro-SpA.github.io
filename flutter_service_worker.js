'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f4f15661d4d98bb7613eaa3c3791d042",
".git/config": "b4d2dbe67ea636c32605e0046de0e7a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "514017c8fa326fc10f12e1a28e7f7e76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aaa51ff527a75a950ad6d91f879aeca1",
".git/logs/refs/heads/main": "429f3cc25aedfaeb1260427d293f95c3",
".git/logs/refs/remotes/origin/main": "c8505bc4e8a32a24066169d0cdb0bd55",
".git/objects/01/6d1dc8b7d913246d37dbba6304b9ed8f278d63": "e7e1b7e5ee602a342d5e91c2de6b6cae",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/a65cbe5e08730e0c6bcbade030b5344467d4bb": "7a449f607c6bbeff9852de0e328cfe2f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/479d33d678a98442b1e65fa96066da03510a58": "1e0f5932f195740323090831ee0a565e",
".git/objects/0d/4f4fcc71f7fb68bfe99969e219edb837a7c59a": "98582dfd46bbc79c9462da6770b5c2e9",
".git/objects/0f/ba094c5da1c0e13324a8a0ca2c33a0701fc587": "a202ee3039aa9a913d762766c701b933",
".git/objects/10/63c69903582292facd3b49dc1a6a3e4a14b544": "7910547be1004493ce163bacf54516af",
".git/objects/12/2ac5fef131e607cd4d9c241b7f9e4215f7276c": "dcd2bed7373b253475f9fd3227341086",
".git/objects/15/0bb3588af6a1f929f7a33dbcd9b94a6806ed89": "8560699ac3e4182cf0415a54ac139158",
".git/objects/15/e258f6b9353d365d58a91f43be142e5e6729df": "276ded65c1492251999335f0a8c2c6d9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/3dff20ce8326ecd3737dc4f4717d2cc00f7e09": "d89f68e65688b337679aa13f4a579179",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/8ae4f367109ee61d5f6392bb9243ff724006ee": "43275cc4c224d4baf16d8fd4fd3c4379",
".git/objects/20/c10e1cf7eac2c09870ddb4e5aea7adaf78686a": "825ff4c1b3967c581425b72b43c4301d",
".git/objects/21/7b86c6cf8e1537b5fb2b4d61479926def79561": "dc1f3d256658d272f422244bac1bf856",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/7e8b7d9fa02cb2341a67da1fd5fe044918257a": "6b918fa361b33008035612e15a61ca58",
".git/objects/24/cd7658ee55c188153d475f34090585a1e2f073": "b9ad611b92d69a1b34f9e9ed2d94c4f8",
".git/objects/29/4ca6fb58cf16ade7e26385e4b898994fbb8988": "2939882c5e5ac73add79112a53fda4ad",
".git/objects/2a/5da292ad39867a3a149465016ea32d3536cd74": "57e515dd3ec1d767d173cc32960f8a79",
".git/objects/2c/424de4896949d3b7abb35f2942151ccc2b17d2": "ff5803c84ef568c7b16c2d06ec49708e",
".git/objects/2c/96d77060b9c0034cd1a3a47bb9f6cc3b87daa1": "905358b8a7451b762733324183ed9eee",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/35/13b09fbddcd668a03fe13e78d11c836ed3027c": "9996aedb5212e48a386c5759747a6c17",
".git/objects/37/1fb1c4ddea573cba5f7835dd2d21e88c0cc77f": "5c73549ecdc489653a45ed3e4d01662d",
".git/objects/39/aef005c00d6ecea9fac9c9b55abc4776488f5e": "c632b3d525efbabb76de5171137dba22",
".git/objects/3a/855d259b6c84bcae3ddea1166972811194b00b": "c8d9043faf239f67530e3dedfce4497b",
".git/objects/3d/6fb40aa026a39bc21cd196eb5fdb894d813b0d": "bba0575933befbb200231680461680e2",
".git/objects/46/7ad02340a5fcfed6406dcb7b7357c8d8be5364": "ec065126aec49e94438d6d678754eccd",
".git/objects/49/d9696c838cc0cf2fa7be9eb01cd165357188bf": "65d0bb0ecf15e394ed9f08a40e9519a2",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/866b3d9a49e1d478bf3ba810fd10d5608e206a": "71e6711dac9f0a27c4c084ba90f7e45d",
".git/objects/4c/cc26f91adc2ca160295206e483f59a204a752c": "9d837ab7b5b161e1173db35ee4cd675d",
".git/objects/50/4d5fee5c9a6b91482d4b4e37c50355eadc9964": "1db18cdd3e48d8a0acc7ca9169a09609",
".git/objects/55/fb16bbbb76487bf410a722d58390748cfcf325": "c5e9c1dcfc2b917824ca12e960341831",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/9b6cd4f6f9a67592a8942fa50eba4b3d44397d": "f708d61bb68e10b71c3994682af2a490",
".git/objects/62/b7a4b0cfc1d0924238b137d0eead5f03154c66": "66a45073eecfab62eb979ac4c510356e",
".git/objects/65/892cf84eb433a0c894a3ecf7ccf54873e29b3f": "5239247b57d9bafb5ddbbea2fd61c4f3",
".git/objects/66/78487133af6757141e9bd2db63fad689cae824": "7d9ff9a13454a3327353373e32190803",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/8ffe7d2251f4ad6a14d95c6aa84c502f173ba0": "1a6aefacb1c8672fa8314699f6b28cfe",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/0f539e59e1f0153255597457e88829dfe796db": "5dafa63c8e78a4f49342120573c975af",
".git/objects/75/850421011640190da6787efede6df28b56b78a": "2d70d644a7d66792eb89ba3fe648be7b",
".git/objects/75/c3640833852a721d5efa28805148d996b68ee9": "89d3b05817854d0e15c32f8636f31238",
".git/objects/7a/dcf9b9336845f0ebec9c245cbf2b8c1eb27e1e": "6da60ed8befb92bb31bbc41e985d3d1b",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7e/3ab3750ce235a87d4c5e871ac14b6d1cdef207": "e3436594fdae79bf9d09bf72bf444992",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/9a0a8484c441169a2b31a2f73e7b88ea8a5b62": "e997d9d54b897fe16ee6762d72781eab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8d/7e6d707e78c741208760b006ef55220bff0590": "32a16072ed2300ec72c4fc7ab7b44aaf",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/93/83a1b9d3e7245c623d320477c16b0b741698a8": "fd32129578a30d08d35c4d006f1d481a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/c6520868cf08cf9967f0fbdf471dfac75e6e5f": "6d167e73e6224bf1f9549ee9d4332b82",
".git/objects/9a/e0f0ce584375dc286a5bb4bd421cf533406700": "5733418b5cee07ab3f49ac2ac0a62e67",
".git/objects/9f/c07e5433bf204c67f008665fd2568f640daeb7": "d2af36fbbeb56d23450b8d56a7ccf276",
".git/objects/a1/62f0d1b0374d9ef23f113eef2b65ec69a4321b": "5d9d69a6bc9e153318de0d2dd6555d84",
".git/objects/a1/de9a4352bea14801259dcfd4f2e46c6f9aac39": "4857903997bea0eba81672fd959ca00c",
".git/objects/a5/932239fa3c6086bd273cf03ae85039f659c3c5": "76d8c12e34a9fa93845923341130715a",
".git/objects/ab/84252f2ab4a19afdf3bd775bdfe4096edc99fd": "819d9273b63e29d39d5edf4e303eff20",
".git/objects/af/48f0e9fd1a2d22a72712129a2c2b29cc81af2c": "cc9cbfae861b7d854456c10f89227e3d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/5672a95d529bf674d6f03e36ff2351cba85d1c": "c18e09f35055cf46dd3fcfca73d8edf5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/a10f5fd2342dd928d86596894fdd73ddbe26ce": "064c74c4308bdaa96af35151665a96b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a28dd77ccb90790dc22e26831c0cfa2a222564": "97e07ca00832707805058690b63ffb5c",
".git/objects/ba/257dfbb293baa97b7f35fd5d65822944c9ac46": "42820b9b5739beeb45d70d6cafbc1a2b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/a67a5a270e81c41abc622879f77ac2256c112d": "27d6e5f7569a80b0866c374e1860d2ae",
".git/objects/c3/71bef783ef9a817bb136b9e20a7389f8668ffd": "d292dba8bf7161756e587cd73cdaddd2",
".git/objects/c4/69ed45d38f88c7e40577848a7e062c44467201": "918966b5133c8e862617595634d68db1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/87a24a14f42a2845fb41d425b6fd6275944214": "eea903cf481dc70f7d69ffc4f0145bd6",
".git/objects/cc/8f2ad7c702e5c1e71c40eba88c48a23290f232": "d7064525d60e27d14e71524a1761cad3",
".git/objects/cd/e9cb510a95a38aeddd1ccc636c59b90ef6b227": "3fdd82fed6c0575a87536be636009d5b",
".git/objects/d1/c1ef78823368a4a13dd5057eb8eda8378d5807": "82d746c4e1dd57093870206b9136da93",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/5a3fa7bf9c452564d7f87a06fb16bdcb5b8a13": "9a4ed4dbcbfa1bf961e9fe5c3d4d470b",
".git/objects/e1/920d23aa7cd904e3a6a7480e6df9fccc5aae22": "f81094dca05c504e3b20a52f4c45cb4b",
".git/objects/e3/cb36c8f300176eff67dd6f71c6f81b601b8ec9": "251fe89ea927f12c92c591763c4f6de5",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/24b2fe8b355467bf9b5613cd5524165ec44318": "efb403e1751def5e8dbf9013abd68617",
".git/objects/f8/c8a7d20cf51216610ae47fce35f07163530da6": "72631c529d5651c1ca6494127744218f",
".git/objects/f9/c033e77eee480609beda04e9b4cb7ed0dcad4f": "75d6d2fb936fa357d2f31d734763eea1",
".git/objects/f9/e700c25f01725374091508cb21fc39064e5fbe": "6e0a99b74c69acfb8d57180d45404b9b",
".git/objects/fa/4b23ac280297291ba4f7cc5c3cfda171b79432": "fcb33ad3067397e879d8330414c08b4e",
".git/refs/heads/main": "656e86abf9f7658350636f44ad101994",
".git/refs/remotes/origin/main": "656e86abf9f7658350636f44ad101994",
"assets/AssetManifest.bin": "7422902c8c0127c10738b9c14ea44472",
"assets/AssetManifest.bin.json": "4c6a2646b6af11dfb95891f316dfdf5a",
"assets/AssetManifest.json": "78bf57bab1c04a18f0ed71d75c75e1b5",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/AIDetector_negw.png": "5d21c4138414f0b2bcdd98de23b7c404",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/FRONT-crop.gif": "5d28fdcf20f595054bb1c1d7e3f27fb8",
"assets/assets/images/header_orbitas_fondo.png": "036b5060f00578b5f3d291f7f13c54c9",
"assets/assets/images/icon_AIDetector.png": "9ea929da5e358d7c91d16069a7edabc3",
"assets/assets/images/icon_LogBook.png": "902a5102b288923c4e778a73736b080f",
"assets/assets/images/icon_RCMTool.png": "fde8a8d29255c3ce8a8327ee8efa03d7",
"assets/assets/images/icon_Sentinel.png": "ec158a79eb691b20a09848b3daf42f39",
"assets/assets/images/ISO-crop.gif": "c83caa709d3872fbb0e4853acebb5ae9",
"assets/assets/images/nueva_nueva_amplitud_axial.png": "ee379e6f7d48d614187e6446bd684fae",
"assets/assets/images/nueva_nueva_amplitud_global.png": "ba3ebd6728d120a37d273f854e98cdfb",
"assets/assets/images/nueva_nueva_amplitud_horizontal.png": "b66010d5e2bc12995aaefc41c57b4daa",
"assets/assets/images/nueva_nueva_amplitud_vertical.png": "317a72c65467c4659b95bfbdea8484f4",
"assets/assets/images/nueva_nueva_de.png": "54daddd93370b5aad535af073bfc8026",
"assets/assets/images/nueva_nueva_tendencia_angulo.png": "15ecce69f5e99e45abec3d8c7d53a6ad",
"assets/assets/images/ODS_HVLB_iso_rel1_c-ezgif.com-censor.gif": "23bbaa5f099466b982a5bb4eea59c334",
"assets/assets/images/ODS_ISO_edited.gif": "37bf8528ddbd4914d62e0c9504387c0b",
"assets/assets/images/orbita_alimentacion_derecha_XY.png": "31b3f6849fc3ed3de4d2537ae276f33e",
"assets/assets/images/orbita_alimentacion_derecha_XZ.png": "062335891a145307762ffb21dcaf3a52",
"assets/assets/images/orbita_alimentacion_derecha_YZ.png": "7bfa62ff2793ebc40380d0db063de4e7",
"assets/assets/images/orbita_alimentacion_izquierda_XY.png": "56e829b7cbe73e2658af7974db916b1f",
"assets/assets/images/orbita_alimentacion_izquierda_XZ.png": "5b4c0cbca2ba46a3e0684d8f23cb9266",
"assets/assets/images/orbita_alimentacion_izquierda_YZ.png": "2fac43b6760b5000f696c0a81e01f068",
"assets/assets/images/orbita_descarga_derecha_XY.png": "26b17a5208ff353e29cd3543843def3f",
"assets/assets/images/orbita_descarga_derecha_XZ.png": "da4598e334cd89e1a441bde057d4c987",
"assets/assets/images/orbita_descarga_derecha_YZ.png": "561ef924935741c9eee1a48174a99971",
"assets/assets/images/orbita_descarga_izquierda_XY.png": "95057452116053566bda6ce5089d34bb",
"assets/assets/images/orbita_descarga_izquierda_XZ.png": "c0376ff53e272ff383c31193db4367c8",
"assets/assets/images/orbita_descarga_izquierda_YZ.png": "f77a7a8afbc0156a83778d9513d347fa",
"assets/assets/images/tcms.png": "14fcfa1865fdb069361d0bb61cfe96b9",
"assets/assets/images/TOP-crop.gif": "9e5dec473852cd863779485a49fdbb8e",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/fonts/MaterialIcons-Regular.otf": "55d2caa84ff1b66437d0402bc1e5b398",
"assets/NOTICES": "8b59b830b0a850a49ab2c33a91aaa360",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "713dc78104ddfdbe0cad35ac9ef6e102",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8596cb1cfe0eed9c14245cfb6cc14e2",
"/": "e8596cb1cfe0eed9c14245cfb6cc14e2",
"main.dart.js": "802215d334407e2bda6d6604dc644906",
"manifest.json": "d512528454cb76bd5d7ee7dc9a6f160a",
"version.json": "e5eede8caf970e0ef2175f12f0256793"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

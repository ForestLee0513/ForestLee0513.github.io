(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[25],{6030:function(e,i,r){"use strict";var n,t=r(7294),o=(n=t)&&"object"==typeof n&&"default"in n?n.default:n,a=r(4889),s=new a,l=s.getBrowser(),u=s.getCPU(),c=s.getDevice(),b=s.getEngine(),d=s.getOS(),w=s.getUA(),f=function(e){return s.setUA(e)},m=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},p=Object.freeze({ClientUAInstance:s,browser:l,cpu:u,device:c,engine:b,os:d,ua:w,setUa:f,parseUserAgent:m});function g(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,n)}return r}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function y(){return y=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function O(e,i){return O=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},O(e,i)}function S(e,i){if(null==e)return{};var r,n,t=function(e,i){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],i.indexOf(r)>=0||(t[r]=e[r]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,t,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!i||o.length!==i);a=!0);}catch(l){s=!0,t=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw t}}return o}(e,i)||function(e,i){if(!e)return;if("string"==typeof e)return C(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,i){(null==i||i>e.length)&&(i=e.length);for(var r=0,n=new Array(i);r<i;r++)n[r]=e[r];return n}var j="mobile",A="tablet",I="smarttv",P="console",T="wearable",U="embedded",M=void 0,N={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},B={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},z={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},q=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},L=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},V=function(e){var i=L();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},R=function(e,i,r,n){return function(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?g(Object(r),!0).forEach((function(i){x(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}({},e,{vendor:q(i.vendor),model:q(i.model),os:q(r.name),osVersion:q(r.version),ua:q(n)})};var W=function(e){return e.type===j},D=function(e){return e.type===A},F=function(e){var i=e.type;return i===j||i===A},$=function(e){return e.type===I},G=function(e){return e.type===M},Y=function(e){return e.type===T},Z=function(e){return e.type===P},H=function(e){return e.type===U},X=function(e){var i=e.vendor;return q(i)},K=function(e){var i=e.model;return q(i)},Q=function(e){var i=e.type;return q(i,"browser")},J=function(e){return e.name===B.Android},ee=function(e){return e.name===B.Windows},ie=function(e){return e.name===B.MAC_OS},re=function(e){return e.name===B.WindowsPhone},ne=function(e){return e.name===B.IOS},te=function(e){var i=e.version;return q(i)},oe=function(e){var i=e.name;return q(i)},ae=function(e){return e.name===N.Chrome},se=function(e){return e.name===N.Firefox},le=function(e){return e.name===N.Chromium},ue=function(e){return e.name===N.Edge},ce=function(e){return e.name===N.Yandex},be=function(e){var i=e.name;return i===N.Safari||i===N.MobileSafari},de=function(e){return e.name===N.MobileSafari},we=function(e){return e.name===N.Opera},fe=function(e){var i=e.name;return i===N.InternetExplorer||i===N.Ie},me=function(e){return e.name===N.MIUI},pe=function(e){return e.name===N.SamsungBrowser},ge=function(e){var i=e.version;return q(i)},he=function(e){var i=e.major;return q(i)},ve=function(e){var i=e.name;return q(i)},xe=function(e){var i=e.name;return q(i)},ye=function(e){var i=e.version;return q(i)},ke=function(){var e=L(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)},Oe=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=L();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},_e=function(){return V("iPad")},Ee=function(){return V("iPhone")},Ce=function(){return V("iPod")},je=function(e){return q(e)};function Ae(e){var i=e||p,r=i.device,n=i.browser,t=i.os,o=i.engine,a=i.ua;return{isSmartTV:$(r),isConsole:Z(r),isWearable:Y(r),isEmbedded:H(r),isMobileSafari:de(n)||_e(),isChromium:le(n),isMobile:F(r)||_e(),isMobileOnly:W(r),isTablet:D(r)||_e(),isBrowser:G(r),isDesktop:G(r),isAndroid:J(t),isWinPhone:re(t),isIOS:ne(t)||_e(),isChrome:ae(n),isFirefox:se(n),isSafari:be(n),isOpera:we(n),isIE:fe(n),osVersion:te(t),osName:oe(t),fullBrowserVersion:ge(n),browserVersion:he(n),browserName:ve(n),mobileVendor:X(r),mobileModel:K(r),engineName:xe(o),engineVersion:ye(o),getUA:je(a),isEdge:ue(n)||Oe(a),isYandex:ce(n),deviceType:Q(r),isIOS13:Se(),isIPad13:_e(),isIPhone13:Ee(),isIPod13:Ce(),isElectron:ke(),isEdgeChromium:Oe(a),isLegacyEdge:ue(n)&&!Oe(a),isWindows:ee(t),isMacOs:ie(t),isMIUI:me(n),isSamsungBrowser:pe(n)}}var Ie=$(c),Pe=Z(c),Te=Y(c),Ue=H(c),Me=de(l)||_e(),Ne=le(l),Be=F(c)||_e(),ze=W(c),qe=D(c)||_e(),Le=G(c),Ve=G(c),Re=J(d),We=re(d),De=ne(d)||_e(),Fe=ae(l),$e=se(l),Ge=be(l),Ye=we(l),Ze=fe(l),He=te(d),Xe=oe(d),Ke=ge(l),Qe=he(l),Je=ve(l),ei=X(c),ii=K(c),ri=xe(b),ni=ye(b),ti=je(w),oi=ue(l)||Oe(w),ai=ce(l),si=Q(c),li=Se(),ui=_e(),ci=Ee(),bi=Ce(),di=ke(),wi=Oe(w),fi=ue(l)&&!Oe(w),mi=ee(d),pi=ie(d),gi=me(l),hi=pe(l);function vi(e){var i=e||window.navigator.userAgent;return m(i)}i.jU=Le},4889:function(e,i,r){var n;!function(t,o){"use strict";var a="function",s="undefined",l="object",u="string",c="model",b="name",d="type",w="vendor",f="version",m="architecture",p="console",g="mobile",h="tablet",v="smarttv",x="wearable",y="embedded",k="Amazon",O="Apple",S="ASUS",_="BlackBerry",E="Firefox",C="Google",j="Huawei",A="LG",I="Microsoft",P="Motorola",T="Opera",U="Samsung",M="Sony",N="Xiaomi",B="Zebra",z="Facebook",q=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},L=function(e,i){return typeof e===u&&-1!==V(i).indexOf(V(e))},V=function(e){return e.toLowerCase()},R=function(e,i){if(typeof e===u)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},W=function(e,i){for(var r,n,t,s,u,c,b=0;b<i.length&&!u;){var d=i[b],w=i[b+1];for(r=n=0;r<d.length&&!u;)if(u=d[r++].exec(e))for(t=0;t<w.length;t++)c=u[++n],typeof(s=w[t])===l&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):o:this[s[0]]=c?s[1].call(this,c,s[2]):o:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):o):this[s]=c||o;b+=2}},D=function(e,i){for(var r in i)if(typeof i[r]===l&&i[r].length>0){for(var n=0;n<i[r].length;n++)if(L(i[r][n],e))return"?"===r?o:r}else if(L(i[r],e))return"?"===r?o:r;return e},F={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,f],[/opios[\/ ]+([\w\.]+)/i],[f,[b,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[f,[b,T]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[b,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[b,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[f,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[b,"IE"]],[/yabrowser\/([\w\.]+)/i],[f,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure Browser"],f],[/\bfocus\/([\w\.]+)/i],[f,[b,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[f,[b,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[b,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[b,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[f,[b,E]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 Browser"],f],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,z],f],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[b,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[b,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[b,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,"Chrome WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[b,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,f],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[f,[b,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[f,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[f,D,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[b,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[b,f]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,V]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",V]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,V]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[w,U],[d,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[w,U],[d,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[w,O],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[w,O],[d,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[w,j],[d,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[w,j],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[w,N],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[w,N],[d,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[w,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[w,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[w,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[w,P],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[w,P],[d,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[w,A],[d,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[w,A],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[w,"Lenovo"],[d,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[w,"Nokia"],[d,g]],[/(pixel c)\b/i],[c,[w,C],[d,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[w,C],[d,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[w,M],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[w,M],[d,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[w,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[w,k],[d,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[w,k],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,w,[d,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[w,_],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[w,S],[d,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[w,S],[d,g]],[/(nexus 9)/i],[c,[w,"HTC"],[d,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[w,[c,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[w,"Acer"],[d,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[w,"Meizu"],[d,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[w,"Sharp"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,c,[d,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,c,[d,h]],[/(surface duo)/i],[c,[w,I],[d,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[w,"Fairphone"],[d,g]],[/(u304aa)/i],[c,[w,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[c,[w,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[c,[w,"RCA"],[d,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[w,"Dell"],[d,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[w,"Verizon"],[d,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[w,"Barnes & Noble"],[d,h]],[/\b(tm\d{3}\w+) b/i],[c,[w,"NuVision"],[d,h]],[/\b(k88) b/i],[c,[w,"ZTE"],[d,h]],[/\b(nx\d{3}j) b/i],[c,[w,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[c,[w,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[c,[w,"Swiss"],[d,h]],[/\b((zeki)?tb.*\b) b/i],[c,[w,"Zeki"],[d,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],c,[d,h]],[/\b(ns-?\w{0,9}) b/i],[c,[w,"Insignia"],[d,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[w,"NextBook"],[d,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],c,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],c,[d,g]],[/\b(ph-1) /i],[c,[w,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[w,"Envizen"],[d,h]],[/\b(trio[-\w\. ]+) b/i],[c,[w,"MachSpeed"],[d,h]],[/\btu_(1491) b/i],[c,[w,"Rotor"],[d,h]],[/(shield[\w ]+) b/i],[c,[w,"Nvidia"],[d,h]],[/(sprint) (\w+)/i],[w,c,[d,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[w,I],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[w,B],[d,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[w,B],[d,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,c,[d,p]],[/droid.+; (shield) bui/i],[c,[w,"Nvidia"],[d,p]],[/(playstation [345portablevi]+)/i],[c,[w,M],[d,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[w,I],[d,p]],[/smart-tv.+(samsung)/i],[w,[d,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[w,U],[d,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,A],[d,v]],[/(apple) ?tv/i],[w,[c,"Apple TV"],[d,v]],[/crkey/i],[[c,"Chromecast"],[w,C],[d,v]],[/droid.+aft(\w)( bui|\))/i],[c,[w,k],[d,v]],[/\(dtv[\);].+(aquos)/i],[c,[w,"Sharp"],[d,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[w,R],[c,R],[d,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,v]],[/((pebble))app/i],[w,c,[d,x]],[/droid.+; (glass) \d/i],[c,[w,C],[d,x]],[/droid.+; (wt63?0{2,3})\)/i],[c,[w,B],[d,x]],[/(quest( 2)?)/i],[c,[w,z],[d,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[d,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[d,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[b,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[f,D,F]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[f,D,F]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,"Mac OS"],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[f,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,f],[/\(bb(10);/i],[f,[b,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[b,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[b,"webOS"]],[/crkey\/([\d\.]+)/i],[f,[b,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[b,"Chromium OS"],f],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,f],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[b,f]]},G=function e(i,r){if(typeof i===l&&(r=i,i=o),!(this instanceof e))return new e(i,r).getResult();var n=i||(typeof t!==s&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),a=r?function(e,i){var r={};for(var n in e)i[n]&&i[n].length%2==0?r[n]=i[n].concat(e[n]):r[n]=e[n];return r}($,r):$;return this.getBrowser=function(){var e,i={};return i.name=o,i.version=o,W.call(i,n,a.browser),i.major=typeof(e=i.version)===u?e.replace(/[^\d\.]/g,"").split(".")[0]:o,i},this.getCPU=function(){var e={};return e.architecture=o,W.call(e,n,a.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,W.call(e,n,a.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,W.call(e,n,a.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,W.call(e,n,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===u&&e.length>255?R(e,255):e,this},this.setUA(n),this};G.VERSION="0.7.31",G.BROWSER=q([b,f,"major"]),G.CPU=q([m]),G.DEVICE=q([c,w,d,p,g,v,h,x,y]),G.ENGINE=G.OS=q([b,f]),typeof i!==s?(e.exports&&(i=e.exports=G),i.UAParser=G):r.amdO?(n=function(){return G}.call(i,r,i,e))===o||(e.exports=n):typeof t!==s&&(t.UAParser=G);var Y=typeof t!==s&&(t.jQuery||t.Zepto);if(Y&&!Y.ua){var Z=new G;Y.ua=Z.getResult(),Y.ua.get=function(){return Z.getUA()},Y.ua.set=function(e){Z.setUA(e);var i=Z.getResult();for(var r in i)Y.ua[r]=i[r]}}}("object"==typeof window?window:this)},4008:function(e,i,r){"use strict";r.r(i),r.d(i,{default:function(){return g}});var n=r(7294),t=r(1633),o=r(9),a=r(2359),s=r(6030),l=null,u=r(5444),c=o.default.ul.withConfig({displayName:"List__ListContainer",componentId:"sc-x4rmt2-0"})(["margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);list-style:none;flex:1;display:flex;align-items:center;overflow-x:",";*{","}"],(function(e){return e.$isBrowser?"hidden":"scroll"}),(function(e){return e.$isScroll&&"pointer-events: none;"})),b=o.default.li.withConfig({displayName:"List__ListItem",componentId:"sc-x4rmt2-1"})(["@media only screen and (max-width:1200px){width:200px;}width:300px;display:flex;flex-direction:column;margin-left:20px;padding:10px;transition:all 0.4s;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);&:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}a{background:unset;}&:first-of-type{margin-left:40px;}&:last-of-type{margin-right:40px;}h4{margin-bottom:0;}h3{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin-bottom:0;}@media only screen and (max-width:1200px){&:first-of-type{margin-left:20px;}&:last-of-type{margin-right:20px;}}"]),d=o.default.hr.withConfig({displayName:"List__ListHairline",componentId:"sc-x4rmt2-2"})(["width:15%;margin-left:0;border:none;height:1px;background-color:black;"]),w=o.default.span.withConfig({displayName:"List__TagText",componentId:"sc-x4rmt2-3"})(["color:#777777;margin-right:4px;display:inline-flex;"]),f=function(e){var i=e.items,r=(0,n.useRef)(),t=(0,n.useState)(!1),o=t[0],f=t[1],p=(0,n.useCallback)((function(e){var i,r;e.preventDefault(),e.target.scrollLeft+=e.deltaY,f(!0),i=function(){f(!1)},r=500,l&&clearTimeout(l),l=setTimeout((function(){i()}),r)}),[]);return(0,n.useEffect)((function(){var e;s.jU&&(null===(e=r.current)||void 0===e||e.addEventListener("wheel",p));return function(){f(!1),r.current=null}}),[p]),0===i.length?n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}},n.createElement("p",null,"개제된 포트폴리오가 존재하지 않습니다."))):n.createElement(c,{ref:r,$isScroll:o,$isBrowser:s.jU},i.map((function(e,i){var r=e.frontmatter.title,t=(0,a.d)(e.frontmatter.thumbnail),o=e.frontmatter.date,s=e.frontmatter.tags,l=i+1<10?"0"+(i+1):i+1,c=e.fields.slug;return n.createElement(b,{key:i},n.createElement(u.Link,{to:"/portfolio"+c},n.createElement("h4",null,l),n.createElement(m,{image:t,alt:r}),n.createElement("h3",null,r),n.createElement("p",null,o),s&&n.createElement(d,null),s&&s.map((function(e,i){return i>4?"":n.createElement(w,{key:e+"-"+i},"#",e)})),s&&s.length>5?n.createElement(w,null,"외 ",s.length-5,"개"):""))})))},m=(0,o.default)(a.G).withConfig({displayName:"List___StyledGatsbyImage",componentId:"sc-x4rmt2-4"})(["@media only screen and (max-width:1200px){min-width:200px;max-width:200px;min-height:250px;max-height:250px;}display:block !important;min-width:300px;max-width:300px;min-height:350px;max-height:350px;margin-bottom:10px;"]),p=o.default.div.withConfig({displayName:"portfolio__PortfolioContainer",componentId:"sc-14va38r-0"})(["width:100%;height:calc(100% + 50px);transform:translateY(-50px);display:flex;flex-direction:column;"]),g=function(e){var i=e.data.allMarkdownRemark.nodes;return n.createElement(n.Fragment,null,n.createElement(t.Z,{title:"작업물"}),n.createElement(p,null,n.createElement(f,{items:i})))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-75cdc874d3e9361ddb9d.js.map
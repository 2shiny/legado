const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BookShelf-CnjAvi1K.js","./vendor-JTttPx12.js","./vendor-Bui7wm94.css","./loading-DbywvlSa.js","./loading-DyaW7RXx.css","./BookShelf-BewVO7Ij.css","./BookChapter-DmbReSQh.js","./BookChapter-BgNMFAcT.css"])))=>i.map(i=>d[i]);
import{r as Be,o as g,c as w,a as ne,b as re,d as x,e as m,w as p,f as y,u as s,l as T,g as h,F as O,E as Ee,h as me,i as xe,j as B,k as Se,m as D,t as X,n as he,p as fe,q as se,s as Ie,v as P,x as K,y as ye,z as Le,A as Ne,B as ce,V as Re,C as Ve,D as Y,G as Te,H as le,I as Oe,J as N,K as Pe,L as Je,M as j,N as be,O as _e,P as F,Q as De,R as $e,S as Ae,T as je,U as He,W as Ke,X as Me,Y as We,Z as Fe,_ as qe,$ as ze}from"./vendor-JTttPx12.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const J=(e,o)=>{const t=e.__vccOpts||e;for(const[r,n]of o)t[r]=n;return t},Ge={};function Qe(e,o){const t=Be("router-view");return g(),w(t)}const Xe=J(Ge,[["render",Qe]]),Ye="modulepreload",Ze=function(e,o){return new URL(e,o).href},ue={},de=function(o,t,r){let n=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),k=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));n=Promise.allSettled(t.map(b=>{if(b=Ze(b,r),b in ue)return;ue[b]=!0;const C=b.endsWith(".css"),I=C?'[rel="stylesheet"]':"";if(!!r)for(let _=c.length-1;_>=0;_--){const v=c[_];if(v.href===b&&(!C||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${I}`))return;const i=document.createElement("link");if(i.rel=C?"stylesheet":Ye,C||(i.as="script"),i.crossOrigin="",i.href=b,k&&i.setAttribute("nonce",k),document.head.appendChild(i),C)return new Promise((_,v)=>{i.addEventListener("load",_),i.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${b}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return n.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return o().catch(l)})},ke=[{path:"/",name:"shelf",component:()=>de(()=>import("./BookShelf-CnjAvi1K.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)},{path:"/chapter",name:"chapter",component:()=>de(()=>import("./BookChapter-DmbReSQh.js"),__vite__mapDeps([6,1,2,3,4,7]),import.meta.url)}];ne({history:re(),routes:ke});const et={style:{"margin-top":"20px"}},tt={__name:"SourceHelp",setup(e){return(o,t)=>{const r=Ee,n=me;return g(),x(O,null,[m(r,{icon:s(T),href:"/help/#appHelp",target:"_blank"},{default:p(()=>t[0]||(t[0]=[y("APP帮助文档")])),_:1},8,["icon"]),t[19]||(t[19]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#ruleHelp",target:"_blank"},{default:p(()=>t[1]||(t[1]=[y("书源制作教程")])),_:1},8,["icon"]),t[20]||(t[20]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#jsHelp",target:"_blank"},{default:p(()=>t[2]||(t[2]=[y("js变量和函数")])),_:1},8,["icon"]),t[21]||(t[21]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#xpathHelp",target:"_blank"},{default:p(()=>t[3]||(t[3]=[y("xpath语法教程")])),_:1},8,["icon"]),t[22]||(t[22]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#regexHelp",target:"_blank"},{default:p(()=>t[4]||(t[4]=[y("正则表达式教程")])),_:1},8,["icon"]),t[23]||(t[23]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#txtTocRuleHelp",target:"_blank"},{default:p(()=>t[5]||(t[5]=[y("txt目录正则说明")])),_:1},8,["icon"]),t[24]||(t[24]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#debugHelp",target:"_blank"},{default:p(()=>t[6]||(t[6]=[y("书源调试说明")])),_:1},8,["icon"]),t[25]||(t[25]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#httpTTSHelp",target:"_blank"},{default:p(()=>t[7]||(t[7]=[y("在线朗读规则")])),_:1},8,["icon"]),t[26]||(t[26]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#webDavBookHelp",target:"_blank"},{default:p(()=>t[8]||(t[8]=[y(" WebDav书籍简明使用教程")])),_:1},8,["icon"]),t[27]||(t[27]=h("br",null,null,-1)),m(r,{icon:s(T),href:"/help/#webDavHelp",target:"_blank"},{default:p(()=>t[9]||(t[9]=[y(" WebDav备份教程")])),_:1},8,["icon"]),t[28]||(t[28]=h("br",null,null,-1)),m(r,{icon:s(T),href:"https://regexr-cn.com/",target:"_blank"},{default:p(()=>t[10]||(t[10]=[y("正则表达式在线验证工具")])),_:1},8,["icon"]),t[29]||(t[29]=h("br",null,null,-1)),h("div",et,[h("span",null,[m(n,null,{default:p(()=>t[11]||(t[11]=[h("code",null,"^$()[]{}.?+*|",-1),y(" 这些是Java正则特殊符号,匹配需转义")])),_:1})]),t[15]||(t[15]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:p(()=>t[12]||(t[12]=[h("code",null,"(?s)",-1),y(" 前缀表示跨行解析")])),_:1})]),t[16]||(t[16]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:p(()=>t[13]||(t[13]=[h("code",null,"(?m)",-1),y(" 前缀表示逐行匹配")])),_:1})]),t[17]||(t[17]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:p(()=>t[14]||(t[14]=[h("code",null,"(?i)",-1),y(" 前缀表示忽略大小写")])),_:1})]),t[18]||(t[18]=h("br",null,null,-1))])],64)}}},ot=J(tt,[["__scopeId","data-v-fe99b178"]]),nt=1e3,U=xe.create({baseURL:localStorage.getItem("remoteUrl")||location.origin,timeout:120*nt});let A,ie;const rt=e=>{try{const o=new URL(e);if(o.toString()===A)throw new Error("Please input different url: "+A);const{protocol:t}=o;if(!t.startsWith("http"))throw new Error("Expect http:/https: protocol but "+t);return o}catch(o){throw localStorage.getItem("remoteUrl")==e&&localStorage.removeItem("remoteUrl"),new Error("Fail to parse Leagdo remoteUrl "+e,{cause:o})}},st=e=>{let o=new URL(location.origin);try{o=rt(e)}catch{}const{protocol:t,port:r,href:n}=o;let l,c;r!==""?l=String(Number(r)+1):l=t.startsWith("https:")?"444":"81",c=t.startsWith("https:")?"wss://":"ws://",U.defaults.baseURL=n,localStorage.setItem("remoteUrl",n),A=n,o.protocol=c,o.port=l,ie=o.href};st(U.defaults.baseURL);const lt=async e=>{const{data:o={}}=await U.get("/getReadConfig",{baseURL:e,timeout:3e3});try{if("isSuccess"in o)return o.data;throw new Error("ReadConfig后端返回格式错误")}catch{throw new Error("ReadConfig后端返回格式错误")}},it=/source/i.test(location.href),at=e=>{throw it&&B({message:"后端错误，检查网络或者阅读app",type:"error"}),e};U.interceptors.response.use(e=>e,at);const ct=()=>U.get("/getReadConfig",{timeout:3e3}),ut=e=>U.post("/saveReadConfig",e),dt=e=>U.post("/saveBookProgress",e),pt=e=>{e&&navigator.sendBeacon(new URL("/saveBookProgress",A),JSON.stringify(e))},gt=()=>U.get("/getBookshelf"),mt=e=>U.get("/getChapterList?url="+encodeURIComponent(e)),St=(e,o)=>U.get("/getBookContent?url="+encodeURIComponent(e)+"&index="+o),ht=(e,o,t)=>{const r=new WebSocket(new URL("/searchBook",ie));r.onopen=()=>{r.send(`{"key":"${e}"}`)},r.onmessage=({data:n})=>o(n),r.onclose=()=>{t()}},ft=e=>U.post("/saveBook",e),yt=e=>U.post("/deleteBook",e),Q=/bookSource/i.test(location.href),bt=()=>Q?U.get("/getBookSources"):U.get("/getRssSources"),_t=e=>Q?U.post("/saveBookSource",e):U.post("/saveRssSource",e),kt=e=>Q?U.post("/saveBookSources",e):U.post("/saveRssSources",e),vt=e=>Q?U.post("/deleteBookSources",e):U.post("/deleteRssSources",e),wt=(e,o,t,r)=>{const n=new URL(`/${Q?"bookSource":"rssSource"}Debug`,ie),l=new WebSocket(n);l.onopen=()=>{l.send(JSON.stringify({tag:e,key:o}))},l.onmessage=({data:c})=>t(c),l.onclose=()=>{B({message:"调试已关闭！",type:"info"}),r()}},Ut=e=>e.startsWith(A)?e:new URL("/cover?path="+encodeURIComponent(e),A).href,Ct=(e,o)=>e.startsWith(A)?e:new URL("/image?path="+encodeURIComponent(e)+"&url="+encodeURIComponent(sessionStorage.getItem("bookUrl"))+"&width="+o,A),H={getReadConfig:ct,saveReadConfig:ut,saveBookProgress:dt,saveBookProgressWithBeacon:pt,getBookShelf:gt,getChapterList:mt,getBookContent:St,search:ht,saveBook:ft,deleteBook:yt,getSources:bt,saveSources:kt,saveSource:_t,deleteSource:vt,debug:wt,getProxyCoverUrl:Ut,getProxyImageUrl:Ct,testLeagdoHttpUrlConnection:lt},G=e=>e==null||e.length===0||/^\s+$/.test(e),ae=e=>"bookSourceName"in e,Bt=e=>ae(e)?!G(e.bookSourceName)&&!G(e.bookSourceUrl)&&!G(e.bookSourceType):!G(e.sourceName)&&!G(e.sourceUrl),Z=e=>ae(e)?e.bookSourceUrl:e.sourceUrl,Et=(e,o)=>{var t,r,n,l,c,u,k,b;return ae(e)?(((t=e.bookSourceName)==null?void 0:t.includes(o))||((r=e.bookSourceUrl)==null?void 0:r.includes(o))||((n=e.bookSourceGroup)==null?void 0:n.includes(o))||((l=e.bookSourceComment)==null?void 0:l.includes(o)))??!1:(((c=e.sourceName)==null?void 0:c.includes(o))||((u=e.sourceUrl)==null?void 0:u.includes(o))||((k=e.sourceGroup)==null?void 0:k.includes(o))||((b=e.sourceComment)==null?void 0:b.includes(o)))??!1},oe=e=>{const o=new Map;return e.forEach(t=>o.set(Z(t),t)),o},xt={ruleSearch:{},ruleBookInfo:{},ruleToc:{},ruleContent:{},ruleReview:{},ruleExplore:{}},It={},q=/bookSource/i.test(location.href),pe=q?xt:It,M=Se("source",{state:()=>({bookSources:[],rssSources:[],savedSources:[],currentSource:JSON.parse(JSON.stringify(pe)),currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},isDebuging:!1}),getters:{sources:e=>q?e.bookSources:e.rssSources,sourcesMap:e=>oe(e.sources),savedSourcesMap:e=>oe(e.savedSources),currentSourceUrl:e=>q?e.currentSource.bookSourceUrl:e.currentSource.sourceUrl,searchKey:e=>q?e.currentSource.ruleSearch.checkKeyWord||"我的":null},actions:{startDebug(){this.currentTab="editDebug",this.isDebuging=!0},debugFinish(){this.isDebuging=!1},saveSources(e){q?this.bookSources=e:this.rssSources=e},setPushReturnSources(e){this.savedSources=e},deleteSources(e){let o=q?this.bookSources:this.rssSources;e.forEach(t=>{let r=o.indexOf(t);r>-1&&o.splice(r,1)})},saveCurrentSource(){let e=this.currentSource,o=this.sourcesMap;o.set(Z(e),JSON.parse(JSON.stringify(e))),this.saveSources(Array.from(o.values()))},changeCurrentSource(e){this.currentSource=JSON.parse(JSON.stringify(e))},changeTabName(e){this.currentTab=e,localStorage.setItem("tabName",e)},changeEditTabSource(e){this.editTabSource=JSON.parse(JSON.stringify(e))},editHistory(e){let o;if(localStorage.getItem("history"))o=JSON.parse(localStorage.getItem("history")),o.new.push(e),o.new.length>50&&o.new.shift(),o.old.length>50&&o.old.shift(),localStorage.setItem("history",JSON.stringify(o));else{const t={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(t))}},editHistoryUndo(){if(localStorage.getItem("history")){let e=JSON.parse(localStorage.getItem("history"));e.old.push(this.currentSource),e.new.length&&(this.currentSource=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(){this.editTabSource={},this.currentSource=JSON.parse(JSON.stringify(pe))},clearAllSource(){this.bookSources=[],this.rssSources=[],this.savedSources=[]}}}),Lt={__name:"SourceItem",props:["source"],setup(e){const o=e,t=M(),r=D(()=>t.currentSourceUrl),n=D(()=>Z(o.source)),l=u=>{t.changeCurrentSource(u)},c=D(()=>{const u=t.savedSourcesMap;return u.size==0?!1:!u.has(n.value)});return(u,k)=>{const b=se,C=Ie;return g(),w(C,{size:"large",border:"",value:s(n),class:fe({error:s(c),edit:s(n)==s(r)})},{default:p(()=>[y(X(e.source.bookSourceName||e.source.sourceName)+" ",1),m(b,{text:"",icon:s(he),onClick:k[0]||(k[0]=I=>l(e.source))},null,8,["icon"])]),_:1},8,["value","class"])}}},Nt=J(Lt,[["__scopeId","data-v-c62441eb"]]),Rt={class:"tool"},Vt={__name:"SourceList",setup(e){const o=M(),t=P([]),r=P(""),n=D(()=>o.sources),l=D(()=>{const d=r.value;return d===""?n.value:n.value.filter(i=>Et(i,d))}),c=D(()=>{const d=t.value;if(d.length==0)return[];const i=r.value==""?o.sourcesMap:oe(l.value);return d.reduce((_,v)=>{const E=i.get(v);return E&&_.push(E),_},[])}),u=()=>{const d=c.value;H.deleteSource(d).then(({data:i})=>{if(!i.isSuccess)return B.error(i.errorMsg);o.deleteSources(d);const _=Ve(t.value);d.forEach(v=>{const E=_.indexOf(Z(v));E>-1&&_.splice(E,1)}),t.value=_})},k=()=>{o.clearAllSource(),t.value=[]},b=()=>{const d=document.createElement("input");d.type="file",d.accept=".json,.txt",d.addEventListener("change",i=>{const _=i.target.files[0],v=new FileReader;v.readAsText(_),v.onload=()=>{try{const E=JSON.parse(v.result);o.saveSources(E)}catch{B({message:"上传的源格式错误",type:"error"})}}}),d.click()},C=/bookSource/i.test(window.location.href),I=()=>{const d=document.createElement("a");let i=t.value.length===0?l.value:c.value,_=C?"BookSource":"RssSource";d.download=`${_}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let v=new Blob([JSON.stringify(i,null,4)],{type:"application/json"});d.href=window.URL.createObjectURL(v),d.click(),window.URL.revokeObjectURL(d.href)};return(d,i)=>{const _=Y,v=se,E=Te;return g(),x(O,null,[m(_,{modelValue:s(r),"onUpdate:modelValue":i[0]||(i[0]=V=>K(r)?r.value=V:null),class:"search","prefix-icon":s(ye),placeholder:"筛选源"},null,8,["modelValue","prefix-icon"]),h("div",Rt,[m(v,{onClick:b,icon:s(Le)},{default:p(()=>i[2]||(i[2]=[y("打开")])),_:1},8,["icon"]),m(v,{disabled:s(l).length===0,onClick:I,icon:s(Ne)},{default:p(()=>i[3]||(i[3]=[y(" 导出")])),_:1},8,["disabled","icon"]),m(v,{type:"danger",icon:s(ce),onClick:u,disabled:s(c).length===0},{default:p(()=>i[4]||(i[4]=[y("删除")])),_:1},8,["icon","disabled"]),m(v,{type:"danger",icon:s(ce),onClick:k,disabled:s(n).length===0},{default:p(()=>i[5]||(i[5]=[y("清空")])),_:1},8,["icon","disabled"])]),m(E,{id:"source-list",modelValue:s(t),"onUpdate:modelValue":i[1]||(i[1]=V=>K(t)?t.value=V:null)},{default:p(()=>[m(s(Re),{style:{height:"100%","overflow-y":"auto","overflow-x":"hidden"},"data-key":V=>V.bookSourceUrl||V.sourceUrl,"data-sources":s(l),"data-component":Nt,"estimate-size":45},null,8,["data-key","data-sources"])]),_:1},8,["modelValue"])],64)}}},Tt=J(Vt,[["__scopeId","data-v-ece64d32"]]),Ot={__name:"SourceDebug",setup(e){const o=M(),t=P(""),r=P("");le(()=>o.isDebuging,()=>{o.isDebuging&&l()});const n=u=>{let k=document.querySelector("#debug-text");k.scrollTop=k.scrollHeight,t.value+=u+`
`},l=async()=>{t.value="";try{await H.saveSource(o.currentSource)}catch(u){throw o.debugFinish(),u}H.debug(o.currentSourceUrl,r.value||o.searchKey,n,o.debugFinish)},c=D(()=>/bookSource/i.test(window.location.href));return(u,k)=>{const b=Y;return g(),x(O,null,[s(c)?(g(),w(b,{key:0,id:"debug-key",modelValue:s(r),"onUpdate:modelValue":k[0]||(k[0]=C=>K(r)?r.value=C:null),placeholder:"搜索书名、作者","prefix-icon":s(ye),style:{"padding-bottom":"4px"},onKeydown:Oe(l,["enter"])},null,8,["modelValue","prefix-icon"])):N("",!0),m(b,{id:"debug-text",modelValue:s(t),"onUpdate:modelValue":k[1]||(k[1]=C=>K(t)?t.value=C:null),type:"textarea",readonly:"",rows:29,placeholder:"这里用于输出调试信息"},null,8,["modelValue"])],64)}}},Pt=J(Ot,[["__scopeId","data-v-e289b5e4"]]),Jt=Se("book",{state:()=>({connectStatus:"正在连接后端服务器……",connectType:"primary",newConnect:!0,searchBooks:[],shelf:[],catalog:[],readingBook:{index:0,chapterPos:0},popCataVisible:!1,contentLoading:!0,showContent:!1,config:{theme:0,font:0,fontSize:18,readWidth:800,infiniteLoading:!1,customFontName:"",jumpDuration:1e3,spacing:{paragraph:1,line:.8,letter:0}},miniInterface:!1,readSettingsVisible:!1}),getters:{bookProgress:e=>{var c;if(e.catalog.length==0)return;const{index:o,chapterPos:t,bookName:r,bookAuthor:n}=e.readingBook;let l=(c=e.catalog[o])==null?void 0:c.title;if(l)return{name:r,author:n,durChapterIndex:o,durChapterPos:t,durChapterTime:new Date().getTime(),durChapterTitle:l}},theme:e=>e.config.theme,isNight:e=>e.config.theme==6},actions:{setConnectStatus(e){this.connectStatus=e},setConnectType(e){this.connectType=e},setNewConnect(e){this.newConnect=e},addBooks(e){this.shelf=e},clearBooks(){this.shelf=[]},setCatalog(e){this.catalog=e},setPopCataVisible(e){this.popCataVisible=e},setContentLoading(e){this.contentLoading=e},setReadingBook(e){this.readingBook=e},setConfig(e){this.config=Object.assign({},this.config,e)},setReadSettingsVisible(e){this.readSettingsVisible=e},setShowContent(e){this.showContent=e},setMiniInterface(e){this.miniInterface=e},async setSearchBooks(e){e.forEach(o=>{this.shelf.find(r=>r.bookUrl==o.bookUrl)===void 0&&this.searchBooks.push(o)})},clearSearchBooks(){this.searchBooks=[]},async saveBookProgress(){return this.bookProgress?H.saveBookProgress(this.bookProgress):Promise.resolve()}}}),Dt=Pe(),$t={__name:"SourceJson",setup(e){const o=M(),t=P(""),r=async n=>{try{o.changeEditTabSource(JSON.parse(n))}catch{B({message:"粘贴的源格式错误",type:"error"})}};return Je(async()=>{let n=o.editTabSource;Object.keys(n).length>0?t.value=JSON.stringify(n,null,4):t.value=""}),(n,l)=>{const c=Y;return g(),w(c,{id:"source-json",modelValue:s(t),"onUpdate:modelValue":l[0]||(l[0]=u=>K(t)?t.value=u:null),type:"textarea",placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP",rows:30,onChange:r,style:{"margin-bottom":"4px"}},null,8,["modelValue"])}}},At=J($t,[["__scopeId","data-v-4e022d46"]]),jt={__name:"SourceTabTools",setup(e){const o=M(),t=D({get:()=>o.currentTab,set:n=>o.currentTab=n}),r=P([["editTab","编辑源"],["editDebug","调试源"],["editList","源列表"],["editHelp","帮助信息"]]);return(n,l)=>{const c=At,u=Pt,k=Tt,b=ot,C=be,I=_e;return g(),w(I,{modelValue:s(t),"onUpdate:modelValue":l[0]||(l[0]=d=>K(t)?t.value=d:null)},{default:p(()=>[(g(!0),x(O,null,j(s(r),(d,i)=>(g(),w(C,{key:d[0],name:d[0],label:d[1]},{default:p(()=>[i==0?(g(),w(c,{key:0})):N("",!0),i==1?(g(),w(u,{key:1})):N("",!0),i==2?(g(),w(k,{key:2})):N("",!0),i==3?(g(),w(b,{key:3})):N("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}},Ht=J(jt,[["__scopeId","data-v-8249c810"]]),Kt={class:"menu flex-column-center"},Mt={class:"hotkeys-header flex-space-between"},Wt=["id"],Ft={key:0},qt={class:"hotkeys-settings flex-column-center"},zt={class:"title"},Gt={class:"hotkeys-item__content"},Qt={key:0},Xt={key:0},Yt={__name:"ToolBar",setup(e){const o=M(),t=()=>{const f=B({message:"加载中……",showClose:!0,duration:0});H.getSources().then(({data:a})=>{a.isSuccess?(o.changeTabName("editList"),o.saveSources(a.data),B({message:`成功拉取${a.data.length}条源`,type:"success"})):B({message:a.errorMsg??"后端错误",type:"error"})}).finally(()=>f.close())},r=()=>{let f=o.sources;if(o.changeTabName("editList"),f.length===0)return B({message:"空空如也",type:"info"});B({message:"正在推送中",type:"info"}),H.saveSources(f).then(({data:a})=>{if(a.isSuccess){let S=a.data;if(Array.isArray(S)){let $="";f.length>S.length&&($=`
推送失败的源将用红色字体标注!`,o.setPushReturnSources(S)),B({message:`批量推送源到「阅读3.0APP」
共计: ${f.length} 条
成功: ${S.length} 条
失败: ${f.length-S.length} 条${$}`,type:"success"})}}else B({message:`批量推送源失败!
ErrorMsg: ${a.errorMsg}`,type:"error"})})},n=()=>{o.changeTabName("editTab"),o.changeEditTabSource(o.currentSource)},l=()=>{o.changeCurrentSource(o.editTabSource)},c=()=>{o.editHistoryUndo()},u=()=>{o.clearEdit(),B({message:"已清除",type:"success"})},k=()=>{o.clearEdit(),o.clearAllHistory(),B({message:"已清除所有历史记录",type:"success"})},b=()=>{let f=/bookSource/i.test(location.href),a=o.currentSource;Bt(a)?H.saveSource(a).then(({data:S})=>{S.isSuccess?(B({message:`源《${f?a.bookSourceName:a.sourceName}》已成功保存到「阅读3.0APP」`,type:"success"}),o.saveCurrentSource()):B({message:`源《${f?a.bookSourceName:a.sourceName}》保存失败!
ErrorMsg: ${S.errorMsg}`,type:"error"})}):B({message:"请检查<必填>项是否全部填写",type:"error"})},C=()=>{o.startDebug()},I=P(Array.of({name:"⇈推送源",hotKeys:[],action:r},{name:"⇊拉取源",hotKeys:[],action:t},{name:"⋙生成源",hotKeys:[],action:n},{name:"⋘编辑源",hotKeys:[],action:l},{name:"✗清空表单",hotKeys:[],action:u},{name:"↶撤销操作",hotKeys:[],action:c},{name:"↷重做操作",hotKeys:[],action:k},{name:"⇏调试源",hotKeys:[],action:C},{name:"✓保存源",hotKeys:[],action:b})),d=P(!0),i=P(!1),_=P(-1),v=()=>{i.value||(d.value=!1),i.value=!1};le(d,f=>{if(!f){F.unbind("*"),z(),W();return}z(),F.unbind(),F("*",a=>{a.preventDefault();let S=F.getPressedKeyString();S.length==1&&S[0]=="esc"||i.value&&_.value>-1&&(I.value[_.value].hotKeys=S)})},{immediate:!0});const E=f=>{i.value=!0,B({message:"按ESC键或者点击空白处结束录入",type:"info"}),I.value[f].hotKeys=[],_.value=f},V=()=>{const f=[];I.value.forEach(({hotKeys:a})=>{f.push(a)}),R(f),d.value=!1},W=()=>{F.filter=()=>!0,I.value.forEach(({hotKeys:f,action:a})=>{f.length!=0&&F(f.join("+"),S=>{S.preventDefault(),a.call(null)})})},R=f=>{localStorage.setItem("legado_web_hotkeys",JSON.stringify(f))};function z(){try{const f=JSON.parse(localStorage.getItem("legado_web_hotkeys"));return!Array.isArray(f)||f.length==0?!1:(I.value.forEach((a,S)=>a.hotKeys=f[S]),!0)}catch{B({message:"快捷键配置错误",type:"error"}),localStorage.removeItem("legado_web_hotkeys")}return!1}return De(()=>{z()&&(d.value=!1)}),(f,a)=>{const S=se,$=me,Ue=Ae;return g(),x(O,null,[h("div",Kt,[(g(!0),x(O,null,j(s(I),L=>(g(),w(S,{size:"large",key:L.name,onClick:L.action},{default:p(()=>[y(X(L.name),1)]),_:2},1032,["onClick"]))),128)),m(S,{size:"large",onClick:a[0]||(a[0]=()=>d.value=!0)},{default:p(()=>a[2]||(a[2]=[y("快捷键")])),_:1})]),m(Ue,{modelValue:s(d),"onUpdate:modelValue":a[1]||(a[1]=L=>K(d)?d.value=L:null),"show-close":!1,"before-close":v},{header:p(({titleClass:L,titleId:ee})=>[h("div",Mt,[h("div",{id:ee,class:fe(L)},[a[4]||(a[4]=y(" 快捷键设置 ")),s(i)?(g(),x("span",Ft,[m($,null,{default:p(()=>a[3]||(a[3]=[y(" / 录入中 ")])),_:1})])):N("",!0)],10,Wt),m(S,{disabled:s(i),onClick:V,icon:s($e)},{default:p(()=>a[5]||(a[5]=[y("保存")])),_:1},8,["disabled","icon"])])]),default:p(()=>[h("div",qt,[(g(!0),x(O,null,j(s(I),(L,ee)=>(g(),x("div",{key:L.name,class:"hotkeys-item flex-space-between"},[h("span",zt,[m($,null,{default:p(()=>[y(X(L.name),1)]),_:2},1024)]),h("div",Gt,[(g(!0),x(O,null,j(L.hotKeys,(te,Ce)=>(g(),x("div",{key:te},[h("kbd",null,X(te),1),Ce+1<L.hotKeys.length?(g(),x("span",Qt,[m($,null,{default:p(()=>a[6]||(a[6]=[y("+")])),_:1})])):N("",!0)]))),128)),L.hotKeys.length==0?(g(),x("span",Xt,"未设置")):N("",!0)]),m(S,{disabled:s(i),text:"",icon:s(he),onClick:te=>E(ee)},{default:p(()=>a[7]||(a[7]=[y("编辑")])),_:2},1032,["disabled","icon","onClick"])]))),128))])]),_:1},8,["modelValue"])],64)}}},Zt=J(Yt,[["__scopeId","data-v-9f61bfde"]]),eo={__name:"SourceTabForm",props:["config"],setup(e){const o=M(),t=D(()=>o.currentSource);return(r,n)=>{const l=Y,c=je,u=He,k=Ke,b=Me,C=We,I=Fe,d=be,i=_e;return g(),w(i,{id:"source-edit"},{default:p(()=>[(g(!0),x(O,null,j(Object.values(e.config),({name:_,children:v})=>(g(),w(d,{label:_,key:_},{default:p(()=>[m(I,{"label-position":"right","label-width":"auto"},{default:p(()=>[(g(!0),x(O,null,j(v,({type:E,title:V,namespace:W,id:R,array:z,hint:f,required:a})=>(g(),w(C,{label:V,key:V,required:a},{default:p(()=>[E=="String"&&typeof W>"u"?(g(),w(l,{key:0,type:"textarea",modelValue:s(t)[R],"onUpdate:modelValue":S=>s(t)[R]=S,placeholder:f,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):N("",!0),E=="String"&&typeof W<"u"?(g(),w(l,{key:1,type:"textarea",modelValue:s(t)[W][R],"onUpdate:modelValue":S=>s(t)[W][R]=S,placeholder:f,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):N("",!0),E=="Boolean"?(g(),w(c,{key:2,modelValue:s(t)[R],"onUpdate:modelValue":S=>s(t)[R]=S},null,8,["modelValue","onUpdate:modelValue"])):N("",!0),E=="Number"?(g(),w(u,{key:3,modelValue:s(t)[R],"onUpdate:modelValue":S=>s(t)[R]=S,min:0},null,8,["modelValue","onUpdate:modelValue"])):N("",!0),E=="Array"?(g(),w(b,{key:4,modelValue:s(t)[R],"onUpdate:modelValue":S=>s(t)[R]=S},{default:p(()=>[(g(!0),x(O,null,j(z,(S,$)=>(g(),w(k,{value:$,key:S,label:S},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):N("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}}},to=J(eo,[["__scopeId","data-v-0cb9f194"]]),oo={base:{name:"基础",children:[{title:"源类型",id:"bookSourceType",type:"Array",array:["文本","音频","图片","文件"],required:!0},{title:"源域名",id:"bookSourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"源名称",id:"bookSourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"bookSourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"bookSourceComment",type:"String",hint:"描述源作者和状态"},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"链接验证",id:"bookUrlPattern",type:"String",hint:"书籍URL正则，当详情页URL与源URL的域名不一致时有效，用于添加网址"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"书源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率，如1000(访问间隔1000ms)或者1/1000(1000ms内访问1次)"},{title:"js库",id:"jsLib",type:"String",hint:"js库, 可填写js或者key-value object获取在线js文件"}]},search:{name:"搜索",children:[{title:"搜索地址",id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",namespace:"ruleSearch",id:"checkKeyWord",type:"String",hint:"校验关键字，强烈建议填写"},{title:"列表规则",namespace:"ruleSearch",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleSearch",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleSearch",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleSearch",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleSearch",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleSearch",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleSearch",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleSearch",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleSearch",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",id:"exploreUrl",type:"String",hint:"单个发现格式<name>::<url>或者{url:<url>,title:<name>,style:...}；前者用换行符或者&&连接，后者放在数组内；可用js动态生成"},{title:"列表规则",namespace:"ruleExplore",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleExplore",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleExplore",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleExplore",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleExplore",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleExplore",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleExplore",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleExplore",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleExplore",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",namespace:"ruleBookInfo",id:"init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",namespace:"ruleBookInfo",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleBookInfo",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleBookInfo",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleBookInfo",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleBookInfo",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleBookInfo",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleBookInfo",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",namespace:"ruleBookInfo",id:"tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"修改书籍",namespace:"ruleBookInfo",id:"canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"},{title:"下载URL",namespace:"ruleBookInfo",id:"downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"}]},directory:{name:"目录",children:[{title:"更新前JS",namespace:"ruleToc",id:"preUpdateJs",type:"String",hint:"更新目录前调用JS 动态更新目录链接"},{title:"列表规则",namespace:"ruleToc",id:"chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",namespace:"ruleToc",id:"chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",namespace:"ruleToc",id:"chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"标题处理",namespace:"ruleToc",id:"formatJs",type:"String",hint:"遍历去重后的章节列表的回调，提供index(章节序号从1开始)、title(章节标题)变量，额外提供gInt(初始值0)，返回值作为新的标题"},{title:"卷名标识",namespace:"ruleToc",id:"isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"章节信息",namespace:"ruleToc",id:"updateTime",type:"String",hint:"选择章节信息（如更新时间） (规则结果为String)"},{title:"收费标识",namespace:"ruleToc",id:"isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",namespace:"ruleToc",id:"isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"翻页规则",namespace:"ruleToc",id:"nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"正文规则",namespace:"ruleContent",id:"content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"标题规则",namespace:"ruleContent",id:"title",type:"String",hint:"获取结果将会覆盖章节标题 (规则结果为String)"},{title:"翻页规则",namespace:"ruleContent",id:"nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"脚本注入",namespace:"ruleContent",id:"webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"资源正则",namespace:"ruleContent",id:"sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",namespace:"ruleContent",id:"replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",namespace:"ruleContent",id:"imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"图片解密",namespace:"ruleContent",id:"imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "},{title:"购买操作",namespace:"ruleContent",id:"payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"}]},other:{name:"其他",children:[{title:"启用搜索",id:"enabled",type:"Boolean"},{title:"启用发现",id:"enabledExplore",type:"Boolean"},{title:"CookieJar",id:"enabledCookieJar",type:"Boolean"},{title:"搜索权重",id:"weight",type:"Number"},{title:"排序编号",id:"customOrder",type:"Number"}]}},no={base:{name:"基础",children:[{title:"源域名",id:"sourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"图标",id:"sourceIcon",type:"String",hint:"填写图片网络链接"},{title:"源名称",id:"sourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"sourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"sourceComment",type:"String",hint:"描述源作者和状态"},{title:"分类地址",id:"sortUrl",type:"String",hint:`名称1::链接1
名称2::链接2`},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"}]},list:{name:"列表",children:[{title:"列表规则",id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"内容规则",id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"},{title:"链接拦截",id:"shouldOverrideUrlLoading",type:"String",hint:"填写js，变量url为当前资源链接，返回true拦截"}]},other:{name:"其他",children:[{title:"列表样式",id:"articleStyle",type:"Array",array:["默认","大图","双列"]},{title:"加载地址",id:"loadWithBaseUrl",type:"Boolean"},{title:"启用JS",id:"enableJs",type:"Boolean"},{title:"启用",id:"enabled",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"单URL",id:"singleUrl",type:"Boolean"},{title:"排序编号",id:"customOrder",type:"Number"}]}},ro={class:"editor"},so={__name:"SourceEditor",setup(e){qe();let o;return/bookSource/i.test(location.href)?(o=oo,document.title="书源管理"):(o=no,document.title="订阅源管理"),(t,r)=>{const n=to,l=Zt,c=Ht;return g(),x("div",ro,[m(n,{class:"left",config:s(o)},null,8,["config"]),m(l),m(c,{class:"right"})])}}},ge=J(so,[["__scopeId","data-v-9682883a"]]),ve=[{path:"/bookSource",name:"book-home",component:ge},{path:"/rssSource",name:"rss-home",component:ge}];ne({history:re(),routes:ve});const we=ne({history:re(),routes:ke.concat(ve)});we.afterEach(e=>{e.name=="shelf"&&(document.title="书架")});ze(Xe).use(Dt).use(we).mount("#app");le(()=>Jt().isNight,e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")});export{H as A,J as _,A as l,st as s,Jt as u,rt as v};
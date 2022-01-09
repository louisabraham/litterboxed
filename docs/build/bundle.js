var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach((e=>{e.c(t)||(a.delete(e),e.f())})),0!==a.size&&u(f)}function d(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function g(t){const e=x("style");return function(t,e){d(t.head||t,e)}(h(t),e),e}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function b(){return $("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}const E=new Set;let S,z=0;function M(t,e,n,o,r,l,s,i=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=h(t);E.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=g(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${o}ms linear ${r}ms 1 both`,z+=1,f}function C(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),z-=r,z||u((()=>{z||(E.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),E.clear())})))}function N(t){S=t}const j=[],D=[],I=[],R=[],P=Promise.resolve();let T=!1;function q(t){I.push(t)}const B=new Set;let F,L=0;function U(){const t=S;do{for(;L<j.length;){const t=j[L];L++,N(t),Y(t.$$)}for(N(null),j.length=0,L=0;D.length;)D.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];B.has(e)||(B.add(e),e())}I.length=0}while(j.length);for(;R.length;)R.pop()();T=!1,B.clear(),N(t)}function Y(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function G(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const H=new Set;let J;function K(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),J.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const V={duration:0};function W(n,o,s,i){let d=o(n,s),h=i?0:1,g=null,p=null,m=null;function y(){m&&C(n,m)}function x(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:l=0,duration:s=300,easing:i=e,tick:w=t,css:$}=d||V,v={start:c()+l,b:o};o||(v.group=J,J.r+=1),g||p?p=v:($&&(y(),m=M(n,h,o,s,l,i,$)),o&&w(0,1),g=x(v,s),q((()=>G(n,o,"start"))),function(t){let e;0===a.size&&u(f),new Promise((n=>{a.add(e={c:t,f:n})}))}((t=>{if(p&&t>p.start&&(g=x(p,s),p=null,G(n,g.b,"start"),$&&(y(),m=M(n,h,g.b,g.duration,0,i,d.css))),g)if(t>=g.end)w(h=g.b,1-h),G(n,g.b,"end"),p||(g.b?y():--g.group.r||r(g.group.c)),g=null;else if(t>=g.start){const e=t-g.start;h=g.a+g.d*i(e/g.duration),w(h,1-h)}return!(!g&&!p)})))}return{run(t){l(d)?(F||(F=Promise.resolve(),F.then((()=>{F=null}))),F).then((()=>{d=d(),w(t)})):w(t)},end(){y(),g=p=null}}}function X(t,e){-1===t.$$.dirty[0]&&(j.push(t),T||(T=!0,P.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,s,i,c,u,a,f,d=[-1]){const h=S;N(e);const g=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:s.target||h.$$.root};f&&f(g.root);let p=!1;if(g.ctx=i?i(e,s.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&X(e,t)),n})):[],g.update(),p=!0,r(g.before_update),g.fragment=!!c&&c(g.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);g.fragment&&g.fragment.l(t),t.forEach(m)}else g.fragment&&g.fragment.c();s.intro&&K(e.$$.fragment),function(t,e,o,s){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,o),s||q((()=>{const e=c.map(n).filter(l);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(q)}(e,s.target,s.anchor,s.customElement),U()}N(h)}let tt,et=t=>{let e=function(t){for(var e=0,n=1779033703^t.length;e<t.length;e++)n=(n=Math.imul(n^t.charCodeAt(e),3432918353))<<13|n>>>19;return function(){return n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),(n^=n>>>16)>>>0}}(t);var n,o,r,l;n=e(),o=e(),r=e(),l=e(),tt=function(){var t=(n>>>=0)+(o>>>=0)|0;return n=o^o>>>9,o=(r>>>=0)+(r<<3)|0,r=(r=r<<21|r>>>11)+(t=t+(l=1+(l>>>=0)|0)|0)|0,(t>>>0)/4294967296}};function nt(t){return t[Math.floor(t.length*tt())]}let ot=async t=>fetch(t).then((t=>t.text())).then((t=>t.split("\n"))),rt=(t,e)=>{let n=new Array;for(let o of e){for(let e of t.get(o))for(let n of e)n!=o&&t.get(n).delete(e);n.push(t.get(o)),t.delete(o)}return n},lt=(t,e,n)=>{for(let o of Array.from(e).reverse()){t.set(o,n.pop());for(let e of t.get(o))for(let n of e)n!=o&&t.get(n).add(e)}},st=t=>{let e=Array.from(new Set(t)),n=new Array;for(let t=0;t<e.length;t++)for(let o=t+1;o<e.length;o++)n.push(e[t]+e[o]);return n},it=(t,e)=>{let n=t+e.slice(1),o=new Array;for(let t of(t=>{let e=new Array,n=Array.from(new Set(t));for(let t=0;t<n.length;t++)for(let o=t+1;o<n.length;o++)for(let r=o+1;r<n.length;r++)e.push(n[t]+n[o]+n[r]);return e})(n))st(t).some((t=>-1!=n.indexOf(t)))||o.push(t);return(t=>{let e=new Map;for(let n of t)for(let t of n)e.has(t)||e.set(t,new Set),e.get(t).add(n);let n=new Array,o=()=>{if(0==e.size)return n;let t=e.keys().next().value;for(const n of e.keys())e.get(n).size<e.get(t).size&&(t=n);for(let r of e.get(t)){n.push(r);let t=rt(e,r),l=o();if(l)return l;lt(e,r,t),n.pop()}return!1};return o()})(o)},ct=(t,e,n)=>{for(;;){let o=nt(t),r=nt(e.get(o.slice(-1)));if(12==new Set(o+r).size&&(!n||13==(o+r).length))return[o,r]}},ut=()=>{var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()};function at(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}function ft(t,e,n){const o=t.slice();return o[20]=e[n],o[22]=n,o}function dt(t,e,n){const o=t.slice();return o[23]=e[n],o[25]=n,o}function ht(t,e,n){const o=t.slice();return o[26]=e[n],o[22]=n,o}function gt(t){let e,n,o,r;return{c(){e=x("span"),n=$(t[3]),A(e,"position","absolute"),A(e,"left","0"),A(e,"right","0"),A(e,"font-size","medium"),k(e,"class","message svelte-1a65lko")},m(t,o){p(t,e,o),d(e,n),r=!0},p(t,e){(!r||8&e)&&O(n,t[3])},i(t){r||(q((()=>{o||(o=W(e,at,{},!0)),o.run(1)})),r=!0)},o(t){o||(o=W(e,at,{},!1)),o.run(0),r=!1},d(t){t&&m(e),t&&o&&o.end()}}}function pt(t){let e,n,o,r,l,s,i;return{c(){e=w("line"),k(e,"x1",n=t[7][t[11](t[0].indexOf(t[26]))].x),k(e,"y1",o=t[7][t[11](t[0].indexOf(t[26]))].y),k(e,"x2",r=t[7][t[11](t[0].indexOf(t[23][t[22]+1]))].x),k(e,"y2",l=t[7][t[11](t[0].indexOf(t[23][t[22]+1]))].y),k(e,"stroke",s=t[25]==t[2].length?"#ff3e00":"#ff3e0080"),k(e,"stroke-width",Ot),k(e,"stroke-dasharray",i=t[25]==t[2].length?2:0)},m(t,n){p(t,e,n)},p(t,c){7&c&&n!==(n=t[7][t[11](t[0].indexOf(t[26]))].x)&&k(e,"x1",n),7&c&&o!==(o=t[7][t[11](t[0].indexOf(t[26]))].y)&&k(e,"y1",o),7&c&&r!==(r=t[7][t[11](t[0].indexOf(t[23][t[22]+1]))].x)&&k(e,"x2",r),7&c&&l!==(l=t[7][t[11](t[0].indexOf(t[23][t[22]+1]))].y)&&k(e,"y2",l),4&c&&s!==(s=t[25]==t[2].length?"#ff3e00":"#ff3e0080")&&k(e,"stroke",s),4&c&&i!==(i=t[25]==t[2].length?2:0)&&k(e,"stroke-dasharray",i)},d(t){t&&m(e)}}}function mt(t){let e,n=t[22]+1<t[23].length&&pt(t);return{c(){n&&n.c(),e=b()},m(t,o){n&&n.m(t,o),p(t,e,o)},p(t,o){t[22]+1<t[23].length?n?n.p(t,o):(n=pt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&m(e)}}}function yt(t){let e,n=t[23],o=[];for(let e=0;e<n.length;e+=1)o[e]=mt(ht(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=b()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);p(t,e,n)},p(t,r){if(2183&r){let l;for(n=t[23],l=0;l<n.length;l+=1){const s=ht(t,n,l);o[l]?o[l].p(s,r):(o[l]=mt(s),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){y(o,t),t&&m(e)}}}function xt(t){let e,n,o,r,l,s,i,c,u,a,f,h,g,y,x,v=t[0][t[10](t[22])]+"";function b(){return t[16](t[22])}return{c(){e=w("circle"),l=w("text"),s=$(v),u=w("rect"),k(e,"cx",n=t[20].x),k(e,"cy",o=t[20].y),k(e,"r","1"),k(e,"fill",(t[5],t[1],r=t[15](t[10](t[22])))),k(e,"stroke","black"),k(e,"stroke-width",Ot),k(l,"text-anchor","middle"),k(l,"dominant-baseline","central"),k(l,"x",i=t[8][t[22]].x),k(l,"y",c=t[8][t[22]].y),k(l,"font-size",kt),k(u,"x",a=t[9][t[22]].x),k(u,"y",f=t[9][t[22]].y),k(u,"width",h=t[9][t[22]].width),k(u,"height",g=t[9][t[22]].height),k(u,"fill","none"),k(u,"stroke","none"),k(u,"stroke-width",".1"),k(u,"pointer-events","fill")},m(t,n){p(t,e,n),p(t,l,n),d(l,s),p(t,u,n),y||(x=_(u,"click",b),y=!0)},p(n,o){t=n,34&o&&r!==(t[5],t[1],r=t[15](t[10](t[22])))&&k(e,"fill",r),1&o&&v!==(v=t[0][t[10](t[22])]+"")&&O(s,v)},d(t){t&&m(e),t&&m(l),t&&m(u),y=!1,x()}}}function wt(t){let e,n,o,l,s,i,c,u,a,f,h,g,E,S,z,M,C,N,j,D,I,R,P,T,q,B,F,L,U=t[3]&&gt(t),Y=[...t[2],t[1]],G=[];for(let e=0;e<Y.length;e+=1)G[e]=yt(dt(t,Y,e));let H=t[7],V=[];for(let e=0;e<H.length;e+=1)V[e]=xt(ft(t,H,e));return{c(){e=x("main"),n=x("h1"),n.textContent="litter boxed",o=v(),l=x("div"),U&&U.c(),s=v(),i=x("span"),c=$(t[1]),u=x("span"),a=$(t[4]),h=v(),g=x("hr"),E=v(),S=x("div"),z=x("p"),M=$(t[6]),C=v(),N=w("svg"),j=w("rect");for(let t=0;t<G.length;t+=1)G[t].c();D=b();for(let t=0;t<V.length;t+=1)V[t].c();I=v(),R=x("div"),P=x("button"),P.textContent="Delete",T=v(),q=x("button"),q.textContent="Enter",k(n,"class","svelte-1a65lko"),A(i,"display","inline"),k(u,"class","unselectable svelte-1a65lko"),k(u,"style",f=(t[1]?"width: 0em;":"")+"display: inline-block;"),A(g,"min-width","10em"),A(g,"max-width","13em"),A(g,"border","1px solid black"),A(g,"margin-top","0"),k(l,"class","current svelte-1a65lko"),k(S,"class","words svelte-1a65lko"),k(j,"x",vt),k(j,"y",bt),k(j,"width",$t),k(j,"height",$t),k(j,"stroke","black"),k(j,"stroke-width",Ot),k(j,"fill","none"),k(N,"xmlns","http://www.w3.org/2000/svg"),k(N,"viewBox","0 0 42 42"),k(N,"class","svelte-1a65lko"),k(P,"class","svelte-1a65lko"),k(q,"class","svelte-1a65lko"),k(R,"class","buttons svelte-1a65lko"),k(e,"class","svelte-1a65lko")},m(r,f){p(r,e,f),d(e,n),d(e,o),d(e,l),U&&U.m(l,null),d(l,s),d(l,i),d(i,c),d(l,u),d(u,a),d(l,h),d(l,g),d(e,E),d(e,S),d(S,z),d(z,M),d(e,C),d(e,N),d(N,j);for(let t=0;t<G.length;t+=1)G[t].m(N,null);d(N,D);for(let t=0;t<V.length;t+=1)V[t].m(N,null);d(e,I),d(e,R),d(R,P),d(R,T),d(R,q),B=!0,F||(L=[_(P,"click",t[13]),_(q,"click",t[14])],F=!0)},p(t,[e]){if(t[3]?U?(U.p(t,e),8&e&&K(U,1)):(U=gt(t),U.c(),K(U,1),U.m(l,s)):U&&(J={r:0,c:[],p:J},Q(U,1,1,(()=>{U=null})),J.r||r(J.c),J=J.p),(!B||2&e)&&O(c,t[1]),(!B||16&e)&&O(a,t[4]),(!B||2&e&&f!==(f=(t[1]?"width: 0em;":"")+"display: inline-block;"))&&k(u,"style",f),(!B||64&e)&&O(M,t[6]),2183&e){let n;for(Y=[...t[2],t[1]],n=0;n<Y.length;n+=1){const o=dt(t,Y,n);G[n]?G[n].p(o,e):(G[n]=yt(o),G[n].c(),G[n].m(N,D))}for(;n<G.length;n+=1)G[n].d(1);G.length=Y.length}if(38819&e){let n;for(H=t[7],n=0;n<H.length;n+=1){const o=ft(t,H,n);V[n]?V[n].p(o,e):(V[n]=xt(o),V[n].c(),V[n].m(N,null))}for(;n<V.length;n+=1)V[n].d(1);V.length=H.length}},i(t){B||(K(U),B=!0)},o(t){Q(U),B=!1},d(t){t&&m(e),U&&U.d(),y(G,t),y(V,t),F=!1,r(L)}}}let $t=30,vt=6,bt=6,_t=3.5,kt=4,Ot=.3;function At(t,e,n){let o,r,l,s,i="loading",c=t=>{n(3,i=t),setTimeout((()=>{n(3,i="")}),1e3)},u=[],a=[],f="";localStorage.getItem("date")!=ut()&&localStorage.removeItem("puzzle"),f=localStorage.getItem("puzzle")||"            ",(async()=>{et(ut());let t=await ot("./easy.txt");l=(t=>{et(ut());let e=new Map;for(let n of t){let t=n[0];e.has(t)||e.set(t,new Array),e.get(t).push(n)}return()=>{for(;;){let[n,o]=ct(t,e,!0),r=it(n,o);if(r)return r}}})(t),n(0,f=l().join("").toUpperCase()),localStorage.setItem("puzzle",f),localStorage.setItem("date",ut()),n(3,i="loading dict");let e=await ot("./scrabble.txt");s=(t=>e=>{let n=0,o=t.length;for(;n<o;){let r=(n+o)/2;e<t[r]?o=r:n=r}return e==t[n]})(e),n(3,i=" ")})();let d=[];for(let t=0;t<3;t++){let e=$t/3*(t+.5);u.push({x:vt,y:bt+e}),a.push({x:vt-_t,y:bt+e}),d.push({x:vt-_t-kt/2,y:bt+e-kt/2,width:kt+_t,height:kt}),u.push({x:vt+$t,y:bt+e}),a.push({x:vt+$t+_t,y:bt+e}),d.push({x:vt+$t-kt/2,y:bt+e-kt/2,width:kt+_t,height:kt}),u.push({x:vt+e,y:bt}),a.push({x:vt+e,y:bt-_t}),d.push({x:vt+e-kt/2,y:bt-_t-kt/2,width:kt,height:kt+_t}),u.push({x:vt+e,y:bt+$t}),a.push({x:vt+e,y:bt+$t+_t}),d.push({x:vt+e-kt/2,y:bt+$t-kt/2,width:kt,height:kt+_t})}let h=t=>t%4*3+Math.floor(t/4),g="",p=t=>{Math.floor(o/3)!=Math.floor(t/3)&&n(1,g+=f[t])},m=[],y="?";setInterval((()=>{n(4,y=y?"":"?")}),500);return t.$$.update=()=>{3&t.$$.dirty&&n(5,o=g?f.indexOf(g.slice(-1)):-1),4&t.$$.dirty&&n(6,r=m.join(" - "))},[f,g,m,i,y,o,r,u,a,d,h,t=>t%3*4+Math.floor(t/3),p,()=>{n(1,g=g.slice(0,-1)),""==g&&m.length&&(n(1,g=m.pop()),n(2,m))},()=>g.length<3?c("Too short"):s(g)?(n(2,m=[...m,g]),n(1,g=g.slice(-1)),void n(5,o+=0)):c("Not a word"),t=>t==o?"#ff3e00":m.join("").indexOf(f[t])>-1?"grey":g.indexOf(f[t])>-1?"black":"white",t=>p(h(t))]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),Z(this,t,At,wt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

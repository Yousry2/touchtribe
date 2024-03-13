import{e as I,f as C,k as M,p as j,q as p}from"./chunk-MHGSLDMT.js";import{Db as b,Qa as r,Ra as s,Sa as d,T as l,Ta as y,Va as f,Wa as v,Ya as x,Za as m,ha as i,jb as w,pb as S,sb as g,va as u,wa as h,yb as c}from"./chunk-O67IW5TN.js";var D=(()=>{let e=class e{constructor(n){this.baseHref=n,this.userStore=i(p),this.router=i(C),w(()=>{let t=this.userStore.userInfo();console.log("userInfo",t),t||(console.log("userInfo",t),this.router.navigateByUrl("/auth"))})}};e.\u0275fac=function(t){return new(t||e)(h(g))},e.\u0275cmp=l({type:e,selectors:[["operations-pension-details"]],standalone:!0,features:[x([{provide:g,useFactory:j,deps:[S]}]),m],decls:8,vars:2,consts:[["data-theme","light",1,"flex","min-h-screen","justify-center","items-center","font-quicksand","bg-gray-50"],[1,"flex","backdrop-blur-md","p-3","shadow-lg","max-w-6xl","shadow-gray-400","rounded-2xl"],[1,"w-1/2","max-lg:w-full"],[1,"flex","flex-col","mx-12","mt-4","max-sm:mx-4"],["alt","logo","height","20","priority","","width","20",1,"w-32",2,"view-transition-name","logo",3,"ngSrc"],[1,"w-1/2","max-lg:hidden","rounded-2xl"],["priority","","width","500","height","700","alt","",1,"min-w-full","h-full","object-center","object-fill","rounded-2xl",2,"view-transition-name","register",3,"ngSrc"]],template:function(t,a){t&1&&(r(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3),d(4,"img",4)(5,"router-outlet"),s()(),r(6,"div",5),d(7,"img",6),s()()()),t&2&&(u(4),f("ngSrc","",a.baseHref,"assets/pension-auth/images/logo.svg"),u(3),f("ngSrc","",a.baseHref,"assets/pension-auth/images/register.jpeg"))},dependencies:[c,M,I,b]});let o=e;return o})();var F=(()=>{let e=class e{constructor(){this.userStore=i(p)}signout(){this.userStore.signout()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["operations-pension-info"]],standalone:!0,features:[m],decls:2,vars:0,consts:[["type","submit","test-id",`
        pension-auth-signout-submit-button`,1,"py-4","px-8","w-full","text-white","btn-secondary","bg-secondary","rounded-lg","shadow-lg","disabled:opacity-50","opacity-90","hover:opacity-100","focus:ring-8","focus:ring-red-100","focus:outline-none",3,"click"]],template:function(t,a){t&1&&(r(0,"button",0),y("click",function(){return a.signout()}),v(1,` Logout
`),s())},dependencies:[c],changeDetection:0});let o=e;return o})();var K=[{path:"",pathMatch:"full",redirectTo:"details"},{path:"details",component:D,children:[{path:"",redirectTo:"info",pathMatch:"full"},{path:"info",component:F}]}];export{D as PensionDetailsComponent,K as pensionDetailsRoutes};
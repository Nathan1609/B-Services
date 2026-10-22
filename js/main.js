var M={"home":["Aide ménagère à Liège et en Wallonie | Titres-services – Be-Services","Be-Services, entreprise de titres-services agréée à Liège et Herstal depuis 2005 : aide ménagère, repassage, aide ponctuelle. Sans frais de gestion."],
"aide-menagere-a-domicile":["Aide ménagère à domicile à Liège | Titres-services – Be-Services","Aide ménagère qualifiée à Liège et en Wallonie : entretien du domicile, lessive, courses, repas. Payable en titres-services, sans frais de gestion."],
"repassage":["Repassage à domicile ou en atelier à Liège | Be-Services","Service de repassage à votre domicile ou dans notre atelier à Liège, payable en titres-services. Devis gratuit."],
"aide-ponctuelle":["Aide ponctuelle et grands nettoyages à Liège | Be-Services","Grands nettoyages de saison ou aide temporaire en cas d’incapacité de travail, en titres-services à Liège et en Wallonie."],
"jeunes-mamans-independantes":["105 titres-services gratuits pour jeunes mamans indépendantes | Be-Services","Be-Services offre 105 titres-services aux jeunes mamans indépendantes en Wallonie. Vérifiez votre éligibilité."]};
function route(){var h=location.hash.slice(1),v=M[h]&&h!=="home"?h:"home";
document.querySelectorAll(".view").forEach(function(e){e.hidden=e.id!=="v-"+v});
document.title=M[v][0];var d=document.querySelector('meta[name="description"]');if(d)d.setAttribute("content",M[v][1]);
var l=document.querySelector('link[rel="canonical"]');if(l)l.setAttribute("href","https://www.be-services.eu/"+(v==="home"?"":v+"/"));
var t=v==="home"&&h&&document.getElementById(h);if(t)setTimeout(function(){t.scrollIntoView()},30);else if(!(v==="home"&&!h))window.scrollTo(0,0)}
window.addEventListener("hashchange",route);route();
try{var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!rm&&"IntersectionObserver"in window){document.documentElement.classList.add("js");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;el.classList.add("in");io.unobserve(el);setTimeout(function(){el.style.transitionDelay=""},900);
var c=el.querySelector("[data-count]");if(c){var n=+c.dataset.count,s=null;(function f(t){s=s||t;var p=Math.min((t-s)/1200,1);c.textContent=Math.round(n*p).toLocaleString("fr-BE");if(p<1)requestAnimationFrame(f)})(performance.now())}})},{threshold:.12});
document.querySelectorAll("section:not(.hero) h2,.card,.box,.logos,details,.stats>div,form,.table").forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.transitionDelay=Math.min(i,3)*80+"ms";el.classList.add("rv");io.observe(el)})}
var hd=document.querySelector("header.top");addEventListener("scroll",function(){hd.classList.toggle("sc",scrollY>8)},{passive:true})}catch(x){}

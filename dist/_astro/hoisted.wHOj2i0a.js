import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&r.target.classList.add("show")})});document.querySelectorAll(".fade-left, .fade-right, .fade-down, .fade-up").forEach(o=>e.observe(o))});const c=window.location.pathname,n=document.querySelectorAll(".navegacion-principal a");n.forEach(e=>{e.getAttribute("href")===c&&e.classList.add("activo")});const s=document.querySelectorAll(".aparecer-lado"),d=document.querySelectorAll(".aparecer-lado-derecha"),a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})});s.forEach(e=>a.observe(e));d.forEach(e=>a.observe(e));

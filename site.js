(() => {
 const nav=document.getElementById("site-navigation"), toggle=document.querySelector(".menu-toggle"), header=document.querySelector(".nav");
 if(nav&&toggle&&header){
  const setOpen=open=>{header.classList.toggle("is-open",open);toggle.setAttribute("aria-expanded",String(open));};
  toggle.addEventListener("click",()=>setOpen(toggle.getAttribute("aria-expanded")!=="true"));
  nav.addEventListener("click",event=>{if(event.target.closest("a"))setOpen(false);});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true"){setOpen(false);toggle.focus();}});
  window.matchMedia("(min-width: 1020px)").addEventListener("change",event=>{if(event.matches)setOpen(false);});
 }
 document.documentElement.classList.add("js");
})();
document.addEventListener('DOMContentLoaded',()=>{let m=document.getElementById('nav'),b=document.getElementById('hamb');if(m&&b)b.onclick=()=>{let x=m.classList.toggle('open');b.setAttribute('aria-expanded',String(x))};let lang=document.getElementById('lang');if(lang)lang.onchange=()=>{try{localStorage.setItem('zabielos_language',lang.value)}catch(e){}let path=location.pathname;let prefix=path.includes('/zabielos-site/')?'/zabielos-site/':'/';let seg=path.slice(prefix.length).split('/').filter(Boolean);if(['pt','en','es','it'].includes(seg[0]))seg.shift();location.href=prefix+lang.value+'/'+(seg.length?seg.join('/')+'/':'')};let f=document.getElementById('rfq');if(f)f.onsubmit=e=>{e.preventDefault();let z=new FormData(f),body=['ZABIELOS — B2B INQUIRY','Company: '+(z.get('company')||''),'Product: '+(z.get('product')||''),'Quantity: '+(z.get('quantity')||''),'Destination: '+(z.get('destination')||''),'Specifications: '+(z.get('details')||'')].join('\n');document.getElementById('output').value=body;document.getElementById('ready').hidden=false};let c=document.getElementById('copy');if(c)c.onclick=()=>{let v=document.getElementById('output');v.select();if(navigator.clipboard)navigator.clipboard.writeText(v.value).catch(()=>document.execCommand('copy'));else document.execCommand('copy')}});
document.addEventListener('DOMContentLoaded',()=>{
  const groups=[...document.querySelectorAll('.zb-has-dropdown')];
  groups.forEach(group=>{
    const toggle=group.querySelector('.zb-submenu-toggle');
    if(!toggle)return;
    toggle.addEventListener('click',()=>{
      const shouldOpen=!group.classList.contains('is-open');
      groups.forEach(g=>{g.classList.remove('is-open');const b=g.querySelector('.zb-submenu-toggle');if(b)b.setAttribute('aria-expanded','false')});
      group.classList.toggle('is-open',shouldOpen);
      toggle.setAttribute('aria-expanded',String(shouldOpen));
    });
  });
  document.addEventListener('click',event=>{
    if(groups.some(g=>g.contains(event.target)))return;
    groups.forEach(g=>{g.classList.remove('is-open');const b=g.querySelector('.zb-submenu-toggle');if(b)b.setAttribute('aria-expanded','false')});
  });
  document.addEventListener('keydown',event=>{
    if(event.key!=='Escape')return;
    groups.forEach(g=>{g.classList.remove('is-open');const b=g.querySelector('.zb-submenu-toggle');if(b)b.setAttribute('aria-expanded','false')});
  });
});

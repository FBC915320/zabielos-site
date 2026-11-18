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

// Catálogo B2B de sombreamento: fotografias existentes, sem marcas de fabricantes.
document.addEventListener('DOMContentLoaded',()=>{
  const match=location.pathname.match(/\/(pt|en|es|it)\/commerce\/(shade-nets|shade-sails)\/?$/);
  if(!match)return;
  const [,lang,category]=match;
  const copy={
    pt:{nets:['Telas Shade para sombreamento','Telas de sombreamento em polietileno para jardins, viveiros, agricultura e áreas de lazer. Consulte níveis de sombreamento, cores, larguras, acabamentos e fornecimento em rolos ou sob medida.','Detalhe de tela de sombreamento','Malha de sombreamento com trama e acabamento reforçado; especificações e opções de fixação devem ser confirmadas na cotação.'],sails:['Velas Shade Sail para áreas externas','Velas tensionadas para jardins, terraços, piscinas, hotéis e espaços comerciais. Modelos e formatos personalizados, com escolha de tecido, cor, medidas e acessórios conforme projeto.','Conjunto de vela de sombreamento','Exemplo de vela tensionada e acessórios; a configuração de instalação depende das medidas e dos pontos de ancoragem.'],heading:'Produtos para revenda internacional',note:'Imagens ilustrativas de produtos, sem logotipos. Origem, fabricante, disponibilidade e desempenho técnico sujeitos à confirmação.'},
    en:{nets:['Shade nets for outdoor protection','Polyethylene shade nets for gardens, nurseries, agriculture and leisure areas. Ask about shade levels, colors, widths, finishing and rolls or made-to-measure supply.','Shade net fabric detail','Woven shade mesh with reinforced finishing; specifications and fixing options are confirmed at quotation.'],sails:['Shade sails for outdoor spaces','Tensioned shade sails for gardens, terraces, pools, hotels and commercial areas. Custom dimensions, shapes, fabrics, colors and accessories subject to project specifications.','Shade sail set','Example of a tensioned shade sail and accessories; installation depends on dimensions and anchoring points.'],heading:'Products for international wholesale',note:'Unbranded illustrative product images. Origin, manufacturer, availability and technical performance require confirmation.'},
    es:{nets:['Mallas Shade de sombreo','Mallas de polietileno para jardines, viveros, agricultura y zonas de ocio. Consulte porcentajes de sombra, colores, anchos, acabados y suministro en rollos o a medida.','Detalle de malla de sombreo','Tejido de sombreo con acabado reforzado; las especificaciones y fijaciones se confirman al cotizar.'],sails:['Velas Shade Sail para exteriores','Velas tensadas para jardines, terrazas, piscinas, hoteles y espacios comerciales. Formas, tejidos, colores, medidas y accesorios personalizados según el proyecto.','Conjunto de vela de sombra','Ejemplo de vela tensada y accesorios; la instalación depende de las medidas y los anclajes.'],heading:'Productos para distribución internacional',note:'Imágenes ilustrativas sin logotipos. Origen, fabricante, disponibilidad y prestaciones técnicas sujetos a confirmación.'},
    it:{nets:['Reti ombreggianti Shade','Reti in polietilene per giardini, vivai, agricoltura e aree ricreative. Richiedete percentuali di ombreggiamento, colori, larghezze, finiture e fornitura in rotoli o su misura.','Dettaglio della rete ombreggiante','Rete ombreggiante con finitura rinforzata; specifiche e fissaggi sono da confermare in fase di preventivo.'],sails:['Vele ombreggianti Shade Sail','Vele tese per giardini, terrazze, piscine, hotel e spazi commerciali. Forme, tessuti, colori, misure e accessori personalizzati secondo il progetto.','Kit vela ombreggiante','Esempio di vela tesa e accessori; l’installazione dipende da dimensioni e punti di ancoraggio.'],heading:'Prodotti per la distribuzione internazionale',note:'Immagini illustrative senza loghi. Origine, produttore, disponibilità e prestazioni tecniche da confermare.'}
  }[lang];
  const isNets=category==='shade-nets';
  const entries=isNets?[[copy.nets[0],copy.nets[1],'tela-preta.webp'],[copy.nets[2],copy.nets[3],'tela-cinza.webp']]:[[copy.sails[0],copy.sails[1],'shade.webp']];
  const section=document.createElement('section');
  section.className='section zb-shade-catalog';
  const prefix=location.pathname.includes('/zabielos-site/')?'/zabielos-site/':'/';
  const base=prefix+'assets/';
  section.innerHTML='<div class="wrap"><h2>'+copy.heading+'</h2><div class="zb-shade-gallery">'+entries.map(([title,description,filename])=>'<article class="zb-shade-card"><img loading="lazy" decoding="async" src="'+base+(isNets?'logistics/':'products/')+filename+'" alt="'+title+'"><div><h3>'+title+'</h3><p>'+description+'</p></div></article>').join('')+'</div><p class="note">'+copy.note+'</p></div>';
  document.querySelector('main .subhero')?.after(section);
});

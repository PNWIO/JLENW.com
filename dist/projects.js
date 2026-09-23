const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox?.querySelector('img');
const lightboxCaption=lightbox?.querySelector('p');
document.querySelectorAll('.shot').forEach(button=>button.addEventListener('click',()=>{
  const image=button.querySelector('img');
  lightboxImage.src=button.dataset.image;
  lightboxImage.alt=image.alt;
  lightboxCaption.textContent=image.alt;
  lightbox.showModal();
}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});

const comparisonTabs=[...document.querySelectorAll('[data-comparison]')];
const comparisonPanel=document.querySelector('.comparison-panel');
const comparisonShot=comparisonPanel?.querySelector('.comparison-shot');
const comparisonImage=comparisonShot?.querySelector('img');
const comparisonKicker=comparisonPanel?.querySelector('.eyebrow');
const comparisonTitle=comparisonPanel?.querySelector('h3');

function selectComparison(tab,index){
  comparisonTabs.forEach(item=>item.setAttribute('aria-selected',String(item===tab)));
  comparisonPanel?.setAttribute('aria-labelledby',tab.id);
  if(comparisonShot)comparisonShot.dataset.image=tab.dataset.comparison;
  if(comparisonImage){
    comparisonImage.src=tab.dataset.comparison;
    comparisonImage.alt=`${tab.dataset.title} before and after transformation`;
  }
  if(comparisonKicker)comparisonKicker.innerHTML=`<span></span> Transformation ${String(index+1).padStart(2,'0')}`;
  if(comparisonTitle)comparisonTitle.textContent=tab.dataset.title;
}

comparisonTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectComparison(tab,index));
  tab.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    let next=index;
    if(event.key==='ArrowLeft')next=(index-1+comparisonTabs.length)%comparisonTabs.length;
    if(event.key==='ArrowRight')next=(index+1)%comparisonTabs.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=comparisonTabs.length-1;
    comparisonTabs[next].focus();
    selectComparison(comparisonTabs[next],next);
  });
});

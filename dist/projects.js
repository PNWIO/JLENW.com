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

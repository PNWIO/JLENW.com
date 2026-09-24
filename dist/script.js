const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.topbar nav');
function closeMenu(){menuButton?.setAttribute('aria-expanded','false');nav?.classList.remove('open')}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('project-form');
const FORM_ENDPOINT='https://formsubmit.co/ajax/johanssonland@gmail.com';
form?.addEventListener('submit',async event=>{event.preventDefault();form.querySelector('.form-error')?.remove();if(!form.reportValidity())return;const submit=form.querySelector('button[type="submit"]');if(!FORM_ENDPOINT){const note=document.createElement('p');note.className='form-error';note.textContent='Online inquiries are being connected. Please call 206-818-6381 and we’ll be glad to discuss your project.';form.append(note);return}submit.disabled=true;submit.textContent='Sending…';try{const response=await fetch(FORM_ENDPOINT,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!response.ok)throw new Error('Submission failed');const box=form.querySelector('.form-success');box.hidden=false;box.querySelector('p').textContent='Thank you. Your inquiry has been sent.';form.reset()}catch{const note=document.createElement('p');note.className='form-error';note.textContent='We could not send that message. Please call 206-818-6381.';form.append(note)}finally{submit.disabled=false;submit.innerHTML='Send project inquiry <span aria-hidden="true">↗</span>'}});

const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.topbar nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');nav?.classList.remove('open')}));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('project-form');
form?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const summary=`JLE project inquiry\n\nName: ${data.get('name')}\nContact: ${data.get('contact')}\nProject: ${data.get('project')}\n\nDetails:\n${data.get('details')||'Not provided yet'}`;const box=form.querySelector('.form-success');box.hidden=false;box.querySelector('textarea').value=summary;box.scrollIntoView({behavior:'smooth',block:'nearest'})});
document.querySelector('.copy-button')?.addEventListener('click',async event=>{const text=document.querySelector('.form-success textarea').value;try{await navigator.clipboard.writeText(text);event.currentTarget.textContent='Copied'}catch{document.querySelector('.form-success textarea').select();document.execCommand('copy');event.currentTarget.textContent='Copied'}});

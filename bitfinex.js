const mainmenu=document.getElementById('mainmenu');
const open=document.getElementById('open');
const close=document.getElementById('close');
const marquee=document.getElementById('marq');

function openmenu(){
    mainmenu.style.display='block';
    open.style.display='none';
    close.style.display='block';
    marquee.style.display='none';

  
}
function closemenu(){
    mainmenu.style.display='none';
    close.style.display='none';
    open.style.display='block';
    marquee.style.display='block';
  
}
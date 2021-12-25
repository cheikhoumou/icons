var codeactive = '0556F7P768858';
var itemscode = document.querySelector('.header-top #menu-top .HTML .code')
if( itemscode.innerText == '\n0556F7P768858\n'){
    console.log('*** القالب مفعل***');
}else{
    document.querySelector('.box-cheikho-king').style = "display: block;";
    window.cheikhohaking.innerHTML += `.container, .footer-wrapper, .copyright, .wrappercheikho, .social-media-tools {filter: blur(6px);}`;
    console.log('القالب غير مفعل!!!');
}

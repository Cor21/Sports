
 //scrip login y register

 const btn_login = document.getElementById('btn-login');
 const btn_register = document.getElementById('btn-register');
 const mostrarContenidologin = document.getElementById('login');
 const mostrarContenidoregister = document.getElementById('form_register');
 
 btn_login.addEventListener('click', contenidoLogin);
 btn_register.addEventListener('click',contenidoregister);
 
 function contenidoLogin() {
   btn_login.style.backgroundColor = 'purple';
   btn_register.style.backgroundColor = 'black';
   mostrarContenidologin.style.display = 'block';
   mostrarContenidoregister.style.display = 'none';
 }
 
 function contenidoregister() {
    btn_login.style.backgroundColor = 'black';
    btn_register.style.backgroundColor = 'purple';
    mostrarContenidologin.style.display = 'none';
    mostrarContenidoregister.style.display = 'block';
  }

contenidoLogin()
$(window).ready(function() {
  

    $('#formulario_login').on ('submit', function (e) {
    
     e.preventDefaul();

     let usuario=$('#txt_usuario').val();
     let pass=$('#txt_senha').val();

        $.post('config/controlador.php', {usuario, pass}, function(data){

            data=JSON.parse(data);
 
          if($data=='true') {
            swal.fire({
              title: 'Usuário logado',
              icon:'valido',
              text: data
          })
            } 
          else{
              swal.fire({
                  title: 'Erro',
                  icon:'erro',
                  text: data
              })
            }
     
        });

    });



});
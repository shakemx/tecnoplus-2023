/**
   * Recaptcha y EMAIL JS
   */

window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
  };
  
  
  (function () {
    emailjs.init("user_gGHZQEDHJmDEjuOwEPoep");
  })();
  
  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        var myModalGracias = new bootstrap.Modal(
          document.getElementById("modalGracias"),
          {}
        );
        var myModalError = new bootstrap.Modal(
          document.getElementById("modalError"),
          {}
        );
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              event.preventDefault();
              try {
                var template_params = {
                  nombre_contacto: document.getElementById("nombre_contacto").value,
                  correo_contacto: document.getElementById("correo_contacto").value,
                  telefono_contacto:
                    document.getElementById("telefono_contacto").value,                  
                  mensaje_contacto:
                    document.getElementById("mensaje_contacto").value,
                  'g-recaptcha-response': '6Lcf0BAmAAAAAPH9SeJS50g_K-siED_ljH0kVjXU',        
                };
                emailjs.send(
                  "service_6qrxbhr",
                  "template_rl608nr",
                  template_params
                );
                myModalGracias.show();
                setTimeout(function () {
                  myModalGracias.hide();
                }, 3000);
              } catch (error) {
                myModalError.show();
                setTimeout(function () {
                  myModalError.hide();
                }, 3000);
                console.log(error);
              }
              nombre_contacto.value = "";
              correo_contacto.value = "";
              telefono_contacto.value = "";
              mensaje_contacto.value = "";
              grecaptcha.reset();
            },
            false
          );
        });
      },
      false
    );
  })();
  
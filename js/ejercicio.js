

function send_form() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let documento = document.getElementById("documento").value;
    let age = document.getElementById("age").value;

    if (name.length < 5 || lastName.length < 5 || documento.length < 5 || age.length < 5) {
        Swal.fire({
            title: "Caracteres insuficientes",
            text: "Cada caja al menos debe contener 5 caracteres",
            icon: "error"
        })
        if(name.length < 5){
            document.getElementById("name").style.color = "red";
            if(lastName.length < 5){
                document.getElementById("lastName").style.color = "red";
                if(documento.length < 5){
                    document.getElementById("documento").style.color = "red";
                    if(age.length < 5){
                        document.getElementById("age").style.color = "red";
                    }
                }
            }
            
        }
    }
}


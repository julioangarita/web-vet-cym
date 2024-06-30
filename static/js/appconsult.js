function consult_user() {
    let id_user = document.getElementById("ident").value
    let obj_user = {
        "id": id_user,
        
    }
    fetch("/consult_user", {
        "method":"post",
        "headers":{"Content-Type":"application/json"},
        "body":JSON.stringify(obj_user)
    })
    .then(resp => resp.json())
    .then(data => {
        if (data.status == "ok") {
            document.getElementById("txt-data").value = "Nombre: " + data.Nombre 
            + "\n" + "Apellidos: " + data.Apellidos
            + "\n" + "Telefono: " + data.Telefono
            + "\n" + "Mascota: " + data.Mascota
            + "\n" + "Nacimiento: " + data.Nacimiento
            + "\n" + "Clase: " + data.Clase
            
            document.getElementById("img-user").src = data.photo
            
        }
        else {
            alert ("Usuario no encontrado")
            document.getElementById("txt-data").value =""
            document.getElementById("img-user").src = ""
        }
        
    })
    .catch(err => {
        alert("Error " + err)
    })
}   


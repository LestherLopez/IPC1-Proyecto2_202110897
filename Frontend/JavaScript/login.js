function ingresar(){
    let url = 'http://localhost:4000/usuarios'
    var username = document.getElementById('Usuario').value;
    var password=document.getElementById('Password').value;
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) =>{
        let acept = true;
        for(let i=0; i<data.length; i++){ 
            if(username==data[i].Usuario   && password==data[i].Password){
                acept = false;
                document.location.assign('HTML/Home.html')
            }
        }
        if(acept){
            alert("Error");
        }
    }
}
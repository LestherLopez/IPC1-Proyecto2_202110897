function ingresar(){
    var username = document.getElementById('Usuario').value;
    var password=document.getElementById('Password').value;

    if(username=="admin"  && password=="admin"){
       
        document.location.assign('HTML/Home.html')
    }
    else{
        alert("Error");
    }
}
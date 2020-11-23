function Login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user == "ahmad2017" && pass =="integrity") {
    alert("Login Berhasil");
    window.location.href ="index.html";
    }
    else if(username =="" || password ==""){
        alert("Masukan username dan password Anda");
    }
    else{
        alert("Login Gagal Silahkan Coba Lagi");
    }
}
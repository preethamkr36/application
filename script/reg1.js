function validate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cnfpass=document.getElementById("cnfpass").value;

    if(email=="" || password=="" || cnfpass==""){
        document.getElementById("print").innerHTML="Fields cannot be empty"
    }
    else{
        if(email.length<6 || email.length>30){
            document.getElementById("print").innerHTML="Email id cannot be <6 character and not >30 character"
        }else if(password.length<5){
            document.getElementById("print").innerHTML="Password cannot be <5 character"
        }else if(cnfpass!=password){
            document.getElementById("print").innerHTML="Password not confirmed"
        }
    }
}
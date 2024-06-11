let pass = document.querySelector("#password");
let eye = document.querySelector("#eye");

eye.addEventListener("click",()=>{
  if(pass.type == "password"){
    pass.type = "text";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  }else{
    pass.type = "password";
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  }
})
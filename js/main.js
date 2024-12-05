let users=[];
 if(localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem("users"));

 }

const loginBtn= document.getElementById("btnlogin");
const emailInput= document.getElementById("signinEmail");
const passwordInput = document.getElementById("signinPassword");
const signinError= document.getElementById("incorrect");
const signBtn = document.getElementById("signBtn");
const nameInput = document.getElementById("signinName");
const userName = document.getElementById("username");
const logoutBtn = document.getElementById("Logout");


loginBtn?.addEventListener("click" , function(){
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if( !emailValue  || !passwordValue ){
    signinError.innerHTML="All inputs is required";
    return;
  }

  const founduser = users.find(user => user.email === emailValue && user.password === passwordValue )

  if( !founduser ){
    signinError.innerHTML="incorrect email or password";
    return;
  }
  
  signinError.innerHTML="";

  localStorage.setItem("founduser" , JSON.stringify(founduser));

 
  window.location.href = "home.html";
  
  

})

signBtn?.addEventListener("click" , function(){

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
  
    if( !nameValue|| !emailValue  || !passwordValue  ){
      signinError.innerHTML="All inputs is required";
      return;
    }
  
    const founduser = users.find(user => user.email === emailValue )
    if( founduser ){
      signinError.innerHTML="user already Exist";
      return;
    }
    signinError.innerHTML="";

    users.push({
        username: nameValue,
        email: emailValue,
        password: passwordValue
    })
    localStorage.setItem("users" , JSON.stringify(users));
  
  })


const loggedUser = JSON.parse(localStorage.getItem("founduser"));
if (userName){
  userName.innerHTML = `Welcome ${loggedUser?.username}`
}

logoutBtn?.addEventListener("click" , function(){
  localStorage.removeItem('founduser');
  
  window.location.href = "index.html";

})
const pathlist = window.location.pathname.split("/") 
const path =pathlist[pathlist.length -1]

if ( path === "home.html" && !loggedUser ){
  window.location.href = "index.html";
}



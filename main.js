

//getting all inputs from html to be used in js
let logInBtn=document.getElementById('logInBtn');
let signUpBtn=document.getElementById('signUpBtn');
let loginBtnLink=document.getElementById('loginBtnLink')

let logInEmail=document.getElementById('logInEmail')
let logInPassword=document.getElementById('logInPassword');
let testInputs=document.getElementById('testInputs');
let userName=document.getElementById('userName');
let userPassword=document.getElementById('userPassword');
let userEmail=document.getElementById('userEmail');
let checkInputs=document.getElementById('checkInputs');

let userNameTesting=document.getElementById('userNameTesting');

//the array in which dataof user will be stored
let arrayOfSignUp;
let userNameShow=localStorage.getItem('usernametest');
//in order that the array contain old data
    if(localStorage.getItem('userinfo')!=null)
    {
        arrayOfSignUp=JSON.parse(localStorage.getItem('userinfo'));
    }
    else
    {
        arrayOfSignUp=[];
    }

//check if the entered email ia already exit before
    function identicalEmail()
    {
        let userEmailValue=userEmail.value;
        for(let i=0;i<arrayOfSignUp.length;i++)
        {
            if(arrayOfSignUp[i].email.toLowerCase() ==userEmailValue.toLowerCase())
            {
                  return false;
            }
       
        
        }
    }


function clearForm(){

userName.value="";
userEmail.value="";
userPassword.value="";



}



//signing up
function signup(){
    //store data of user as an object
    let userData=
    {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    //getting the value on inputs

        let userNameValue=userName.value;
        let userEmailValue=userEmail.value;
        let userPasswordValue=userPassword.value;
    
 
 //check if any input is empty
    if(userEmailValue=="" ||userPasswordValue=="" ||userNameValue=="")
    {
        //return this message
        checkInputs.innerHTML= '<span class="text-danger m-3">All inputs is required</span>';
       return false;
    }
    //if the email is already exit>>return this message
    if(identicalEmail()==false){
        checkInputs.innerHTML = '<span class="text-danger m-3">email already exists</span>'
    }
    //if entered data isnot null or exit before -->>store it in the array &local storage
    else{
        arrayOfSignUp.push(userData);
        localStorage.setItem('userinfo', JSON.stringify(arrayOfSignUp));
     checkInputs.innerHTML = '<span class="text-success m-3">Success</span>'
     clearForm();

    }
}










//>>>>>>>>>>>>>>>>login>>>>>>>>>>>>

function login()
{
   
    let logInEmailValue=logInEmail.value;
    let logInPasswordValue=logInPassword.value;

 //check if there is no inputs

    if(logInEmailValue=="" || logInPasswordValue=="" )
    {
        //return this message
        testInputs.innerHTML= '<span class="text-danger m-3">All inputs is required</span>';
     
    }

    else
    {
        //if sign in email &passowrd ara the same of array email & password
        for(let i=0;i<arrayOfSignUp.length;i++)
        {
            if(logInEmailValue==arrayOfSignUp[i].email && logInPasswordValue==arrayOfSignUp[i].password)
            {
           
                location.href="welcome.html";
               localStorage.setItem('usernametest',arrayOfSignUp[i].name);
               

            }
//if they ara different
            else
            {
                  testInputs.innerHTML= '<span class="text-danger m-3">incorrect email or password</span>';
       
            }
        }     
        
    }
}

//display this message (welcome+username)
 function welcome(){


    userNameTesting.innerHTML="welcome"+ " "+ userNameShow;
 }
 function logout() {
    localStorage.removeItem('usernametest');
}

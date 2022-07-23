

//getting all inputs from html to be used in js
var logInBtn=document.getElementById('logInBtn');
var signUpBtn=document.getElementById('signUpBtn');
var loginBtnLink=document.getElementById('loginBtnLink')

var logInEmail=document.getElementById('logInEmail')
var logInPassword=document.getElementById('logInPassword');
var testInputs=document.getElementById('testInputs');
var userName=document.getElementById('userName');
var userPassword=document.getElementById('userPassword');
var userEmail=document.getElementById('userEmail');
var checkInputs=document.getElementById('checkInputs');

var userNameTesting=document.getElementById('userNameTesting');

//the array in which dataof user will be stored
var arrayOfSignUp;
var userNameShow=localStorage.getItem('usernametest');
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
        var userEmailValue=userEmail.value;
        for(var i=0;i<arrayOfSignUp.length;i++)
        {
            if(arrayOfSignUp[i].email.toLowerCase() ==userEmailValue.toLowerCase())
            {
                  return false;
            }
       
        
        }
    }

//signing up
function signup(){
    //store data of user as an object
    var userData=
    {
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    //getting the value on inputs

        var userNameValue=userName.value;
        var userEmailValue=userEmail.value;
        var userPasswordValue=userPassword.value;
    
    if(arrayOfSignUp.length==0)
    {
        arrayOfSignUp.push(userData);
        localStorage.setItem('userinfo', JSON.stringify(arrayOfSignUp));
        checkInputs.innerHTML = '<span class="text-success m-3">Success</span>';
                    // return true;
    }
 //check if any input is empty
    if(userEmailValue=="" &&userPasswordValue=="" && userNameValue=="")
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
     console.log(arrayOfSignUp)

    }
}










//>>>>>>>>>>>>>>>>login>>>>>>>>>>>>

function login()
{
   
    var logInEmailValue=logInEmail.value;
    var logInPasswordValue=logInPassword.value;

 //check if there is no inputs

    if(logInEmailValue=="" && logInPasswordValue=="" )
    {
        //return this message
        testInputs.innerHTML= '<span class="text-danger m-3">All inputs is required</span>';
     
    }

    else
    {
        //if sign in email &passowrd ara the same of array email & password
        for(var i=0;i<arrayOfSignUp.length;i++)
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
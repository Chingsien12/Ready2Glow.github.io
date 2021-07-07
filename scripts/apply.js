"use strict";
/*get variables from form and check rules*/
function validate() {
  var errMsg = ""; /* stores the error message */
  var result = true; /* assumes no errors */

var JR=document.getElementById("JobID").value;
var firstname=document.getElementById("firstname").value;
var lastname=document.getElementById("Lastname").value;
var streetaddress=document.getElementById("streetaddress").value;
var suburb=document.getElementById("suburb").value;
var email=document.getElementById("email").value;
var phonenumber=document.getElementById("phonenumber").value;
var othertext=document.getElementById("otherText").value;
// for skill
var Communication=document.getElementById("communication").checked;
var ComputerSkills=document.getElementById("computerSkills").checked;
var Leadership=document.getElementById("Leadership").checked;
var ProblemSolving=document.getElementById("ProblemSolving").checked;
 var other = document.getElementById("other").checked;
 var gender=document.getElementsByName("sex");
// store the item as local
localStorage.setItem("job1","JRFA102890973");
localStorage.setItem("job2","JRFB102890973");

  //get varibles from form and check rules here
  // if something is wrong set result = false, and concatenate error message

  var dob = document.getElementById("dob").value;
  var DOB=dob.split("/");
  var date = new Date(DOB[2], parseInt(DOB[1]) - 1, DOB[0]);//like 12 in string ,but have to use -1 to get index because january is 0 index
  var today = new Date();
  var age = today.getFullYear() - date.getFullYear();

  if (age >= 80) { // Outside age ranges.
    errMsg = errMsg + "-You must be 80 or younger to apply for this job,\n"+"<br>";
    result = false;
  }

  if (age <= 15) { // Outside age ranges.
    errMsg = errMsg + "-You must be 15 or older to apply for this job,\n"+"<br>";
    result = false;
  }

 var postcode = document.getElementById("postcode").value;
 var state = document.getElementById("state").value;

 var regex;
 //VIC = 3 OR 8, NSW = 1 OR 2 ,QLD = 4 OR 9 ,NT = 0 ,WA = 6 ,SA=5 ,TAS=7 ,ACT= 0.
 switch (state) {
    case "Please Select":
        return false;
    case "VIC":
        regex = /^3|8\d+/;
        break;
     case "NSW":
        regex = /^1|2\d+/;
        break;
     case "QLD":
        regex = /^4|9\d+/;
        break;
     case "NT":
        regex = /^0\d+/;
        break;
     case "WA":
        regex = /^6\d+/;
        break;
     case "SA":
        regex = /^5\d+/;
        break;
     case "TAS":
        regex = /^7\d+/;
        break;
     case "ACT":
        regex = /^0\d+/;
        break;
 }
 if(!postcode.match(regex)){// if not match the pattern above
   errMsg = errMsg + "-State and postcode do not match\n"+"<br>";
   result = false;
 }
 
  if (other && document.getElementById("otherText").value.length==0) {//if the user seleceted the other skills ;so, they must enter some other skill in the text area
    errMsg +="-You have selected other skills, you must enter one other skill in the text box\n"+"<br>";
    result= false;
  }

  if (errMsg != "") { //only display message box if there is something to show
    var alerttext=document.getElementById("alert");
    alerttext.innerHTML=errMsg;
   
    alerttext.style.color= "red";
    alerttext.style.fontSize="larger";
    result=false;
  }
   if (result) 
  {
    sessionStorage.job=JR;
  	sessionStorage.firstname=firstname;
 	sessionStorage.lastname=lastname;
 	
 	for (var i = 0; i < gender.length; i++) 
 	{
 		if (gender[i].checked) 
 		{
 				sessionStorage.gender=gender[i].value;
 		}
 	}
 	
 	sessionStorage.dob=dob;
 	sessionStorage.streetaddress=streetaddress;
 	sessionStorage.suburb=suburb;
 	sessionStorage.postcode=postcode;
 	sessionStorage.state=state;
 	sessionStorage.email=email;
 	sessionStorage.phonenumber=phonenumber;
 	sessionStorage.othertext=othertext;
 	var skill="";
 	if (Communication) 
 	{
 		skill+="Communication/";
 	}
 	if (ComputerSkills) 
 	{
 		skill+="ComputerSkills/";
 	}
 	if (Leadership) 
 	{
 		skill+="Leadership/";
 	}
 	if (ProblemSolving) 
 	{
 		skill+="ProblemSolving";
 	}
  if (other) 
  {
    skill+="other";
  }
 	//skill="Communication/ComputerSkills/Leadership/ProblemSolving"
 	sessionStorage.skill=skill;

 	alert("successfully stored! for "+sessionStorage.firstname);
  }
  return result; //if false the information will not be sent to the server
}

function getstore()
{
		if (sessionStorage.firstname!=undefined) 
	{
    
    document.getElementById("JobID").value=sessionStorage.job;
		document.getElementById("firstname").value=sessionStorage.firstname;
		document.getElementById("Lastname").value=sessionStorage.lastname;
		document.getElementById("dob").value=sessionStorage.dob;
		var gender=document.getElementsByName("sex");
		for (var i = 0; i < gender.length; i++) 
 	{
 		if (gender[i].value==sessionStorage.gender) 
 		{
 				gender[i].checked=true;//true here will be checked
 		}
 		else
 		{
 			gender[i].checked=false;//flase will not checked
 		}
 	}
   
 	document.getElementById("streetaddress").value=sessionStorage.streetaddress;
 	document.getElementById("suburb").value=sessionStorage.suburb;
 	document.getElementById("postcode").value=sessionStorage.postcode;
 	document.getElementById("state").value=sessionStorage.state;
 	document.getElementById("email").value=sessionStorage.email;
 	document.getElementById("phonenumber").value=sessionStorage.phonenumber;
  document.getElementById("otherText").value=sessionStorage.othertext;
 	var skill=sessionStorage.skill;
 	if (skill.indexOf("Communication")!=-1) 
 	{
 		document.getElementById("communication").checked=true;
 	}
 	if (skill.indexOf("other")!=-1) 
  {
    document.getElementById("other").checked=true;

  }
 
 	if (skill.indexOf("ComputerSkills")!=-1) 
 	{
 		document.getElementById("computerSkills").checked=true;
 	}
 	if (skill.indexOf("Leadership")!=-1) 
 	{
 		document.getElementById("Leadership").checked=true;
 	}
	if (skill.indexOf("ProblemSolving")!=-1) 
 	{
 		document.getElementById("ProblemSolving").checked=true;
 	}

}

}
//error want to store the value
function job()
{
  document.getElementById("JobID").value=sessionStorage.job;
}


function init() {

  var regForm = document.getElementById("regform"); // get ref to the HTML element
  
  
  getstore();
  
  regForm.onsubmit = validate; //register the event listener 
 
}
addEventListener("load",init);


// var job=document.getElementById("clickBtn");
 
// job.addEventListener("click",job);
 
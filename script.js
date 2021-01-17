var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}
function openForm() {
  document.getElementById("popupForm").style.display="flex";
}

function closeForm() {
  document.getElementById("popupForm").style.display="none";
  document.myform.fullname.value = "";
  document.myform.email.value = "";
  document.myform.username.value = "";
  document.myform.password.value = "";
  document.myform.copassword.value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.myform.quantity.value ="";
  document.myform.address.value = "";
  document.getElementById("check-box").checked = false;
}

function validation(){ 
    var result = true;

    if (document.myform.fullname.value == "") {
        document.getElementById('error').innerHTML="*Please enter a fullname*";
        result = false;
        return;
    }
    else if (!document.myform.fullname.value.match(letters)) {
        document.getElementById('error').innerHTML="*Only contain letters*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if (document.myform.email.value == "") {
        document.getElementById('error').innerHTML="*Please enter a email*";
        result = false;
        return;
    }
    else if (document.myform.email.value.indexOf("@") != document.myform.email.value.lastIndexOf("@")) {
        document.getElementById('error').innerHTML="*Wrong email format*";
        result = false;
        return;
    }
    else if (!document.myform.email.value.includes("@")) {
        document.getElementById('error').innerHTML="*Wrong email format*";
        result = false;
        return;
    }
    else if (document.myform.email.value.lastIndexOf(".") > 2) {
        document.getElementById('error').innerHTML="*Wrong email format*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if (document.myform.username.value.length < 6) {
        document.getElementById('error').innerHTML="*Username must be greater than 6 characters*";
        result = false;
        return;
    }
    else if (document.myform.username.value.includes(" ")) {
        document.getElementById('error').innerHTML="*Username cannot contain space*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if (document.myform.password.value.length < 8) {
        document.getElementById('error').innerHTML="*Password must be greater than 8 characters*";
        result = false;
        return;
    }
    re = /[0-9]/;
    if(!re.test(document.myform.password.value)) {
        document.getElementById('error').innerHTML="*Password must contain number*";
        result = false;
        return;
      }
    re = /[a-z]/;
    if(!re.test(document.myform.password.value)) {
        document.getElementById('error').innerHTML="*Password must contain lowercase*";
        result = false;
        return;
      }
    re = /[A-Z]/;
    if(!re.test(document.myform.password.value)) {
        document.getElementById('error').innerHTML="*Password must contain uppercase*";
        result = false;
        return;
      }
    else document.getElementById('error').innerHTML="";

    if (document.myform.copassword.value != document.myform.password.value) {
        document.getElementById('error').innerHTML="*Password must be the same*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
        document.getElementById('error').innerHTML="*Choose your gender*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if (!document.myform.address.value.endsWith(" Street")) {
        document.getElementById('error').innerHTML="*Address must ends with ' Street'*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";
    
    if (!document.getElementById("check-box").checked) {
        document.getElementById('error').innerHTML="*Terms and conditions must be agreed*";
        result = false;
        return;
    }
    else document.getElementById('error').innerHTML="";

    if(result)
    {
        alert("Purchase success!");
        closeForm();
    }
}
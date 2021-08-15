//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = document.querySelector(".button span");
contactName = form.querySelector(".name")
contactEmail = form.querySelector(".email")
contactMessage = document.querySelector(".email-message")



form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#CFF1C8";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{

    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "#CFF1C8";
        if(response.indexOf("required") != -1){
          contactEmail.style.border = "1px solid red";
          contactMessage.style.border = "1px solid red";
        }
        if(response.indexOf("valid") != -1){
          contactEmail.style.border = "1px solid red";
          contactMessage.style.border = "0px solid black";
        }
      }else{
        form.reset();
        contactEmail.style.border = "0px solid black";
        contactMessage.style.border = "0px solid black";
        setTimeout(()=>{
          statusTxt.innerText = "Send";
        }, 3000);
      }
      if(response.indexOf("required") != -1){
        statusTxt.innerText = "Error";
      }
      if(response.indexOf("valid") != -1){
        statusTxt.innerText = "Error";
      }
      if(response.indexOf("failed") != -1){
        statusTxt.innerText = "Error";
      }else{
        statusTxt.innerText = "dddnt";
      }
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
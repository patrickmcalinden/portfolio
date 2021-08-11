const form = document.querySelector("form"),


form,onsubmit = (e) =>{
    e.preventDefault();
    
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState== 4 && xhr.status == 200){
            let response = xhr.response;
            if(repsone.indexOf("Email and Message fields need to be filled") != -1 || response.indexOf("Enter a valid Email!") != -1 || response.indexOf("Failed to sened message!")){
            }else{
                form.reset();
                setTimeout(()=>{

                },3000);
        }            

        }
    }
    let formData = new FormData();
    xhr.send(formData);
}
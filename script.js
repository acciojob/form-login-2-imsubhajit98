//your JS code here. If required.
let first=document.getElementById('first');
        let last=document.getElementById('last');
        let phone=document.getElementById('phone');
        let email=document.getElementById('email');
        let submit=document.getElementById('submit');

        submit.addEventListener('click',()=>{
            // e.preventDefault();
            alert(`
            First Name: ${first.value}
            Last Name: ${last.value}
            Phone Number: ${phone.value}
            Email: ${email.value}`);
        })
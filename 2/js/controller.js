const controller = {}
controller.register = (data) => {
    document.getElementById('firstNameError').innerHTML ='';
    document.getElementById('lastNameError').innerHTML ='';
    document.getElementById('email-error').innerHTML ='';
    document.getElementById('passwordError').innerHTML ='';
    document.getElementById('confirmPasswordError').innerHTML ='';
    if(data.firstName.trim() === '') {
        document.getElementById('firstNameError').innerHTML = 'Please input first name'
    }
    if(data.lastName.trim() === '') {
        document.getElementById('lastNameError').innerHTML = 'Please input last name'
    }
    if(data.email.trim() === '') {
        document.getElementById('email-error').innerHTML = 'Please input email'
    }
    if(data.password === '') {
        document.getElementById('passwordError').innerHTML = 'Please input password'
    }
    if(data.confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerHTML = 'Please confirm password'
    }
    else if(data.password != data.confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = "Password didn't match"
    }
    if(data.firstName != '' && data.lastName!='' && data.email!='' && data.password!='' && data.confirmPassword!='' && data.password === data.confirmPassword) {
        model.register(data)
    }
}
controller.login = (data) => {
    document.getElementById('emailError').innerHTML = '' ; 
    document.getElementById('passwordError').innerHTML = '';
    if(data.email.trim() ==='') document.getElementById('emailError').innerHTML = 'Please input your email' ; 
    if(data.password ==='') document.getElementById('passwordError').innerHTML = 'Please input your password';
    if(data.email!= '' && data.password !='') {
        model.login(data);
    }
}
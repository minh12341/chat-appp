const components = {};
components.welcomeScreen = `
    <h1>Welcome to chat app</h1>
`
components.registerScreen = 
    `
    <div class="register-container">
        <div class="aside-right">
            <div class="header">
                <h3>Mindx chat</h3>
            </div>
            <form id="register-form"> 
                <div class="input-name-wraper">
                        <div class="input-wraper">
                            <input type="text"  name="firstName" placeholder="First name">
                            <div class="error" id="firstNameError"> </div>
                        </div>
                        <div class="input-wraper">
                            <input type="text"  name="lastName" placeholder="Last name">
                            <div class="error" id="lastNameError"> </div>
                        </div>      
                </div>
                <div class="input-wraper">
                    <input type="email"  name="email" placeholder="Email">
                            <div class="error" id="email-error"> </div>
                </div>
                <div class="input-wraper">
                    <input type="password"  name="password" placeholder="Password">
                            <div class="error" id="passwordError"> </div>
                </div>
                <div class="input-wraper">
                    <input type="password"  name="confirmPassword" placeholder="Confirm Password">
                            <div class="error" id="confirmPasswordError"> </div>
                </div>
                <div class="form-action">
                    <span id="redirect-to-login"> Already have an account?  <a onclick="goToLogin()" href="#">Login</a></span>
                    <button class="btn" type="submit"><a>Register</a> </button>
                </div>
            </form>
        </div>
    </div>
`
components.loginScreen = `
<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h3>Mindx chat</h3>
    </div>
    <form id="login-form">
        <div class="input-wraper">
            <input type="email"  name="email" placeholder="Email">
                    <div class="error" id="emailError"> </div>
        </div>
        <div class="input-wraper">
            <input type="password"  name="password" placeholder="Password">
                    <div class="error" id="passwordError"> </div>
        </div>
        <div class="form-action">
            <span id="redirect-to-register"> Don't have an account? <a onclick="goToRegister()" href="#">Register</a> </span>
            <button class="btn" type="submit">Login</button>
        </div>
    </form>
</div>
</div>
`
components.chatScreen = (a) => {
    return `<h1> Welcome ${a} </h1>`
}

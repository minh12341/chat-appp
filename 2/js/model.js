const model = {}
model.register = (data) => {
    firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then ((res) => {
        firebase.auth().currentUser.updateProfile( {
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert("The email has been registered, please check your email and verfify your account")
        view.setActiveScreen('loginScreen')
    }). catch((err) => {
        console.log(err);
        alert(err.message)
    })
}
      model.login = async(data) => {
          try {
           var respone =  await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
           console.log(respone);
           if(respone.user.emailVerified==false) alert ("Please verify your email")
           else {
            
            model.currentUser = {
                displayName : respone.user.displayName,
                email: respone.user.email
            }
            goToChat();
           
           } 
          }catch (err) {
              console.log(err);
              alert(err.message)
          }
      }
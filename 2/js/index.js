// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4cpdP69FpYv7bcOInjSKUiO1Na4d_C8A",
    authDomain: "chat-app-1e842.firebaseapp.com",
    databaseURL: "https://chat-app-1e842.firebaseio.com",
    projectId: "chat-app-1e842",
    storageBucket: "chat-app-1e842.appspot.com",
    messagingSenderId: "505137738006",
    appId: "1:505137738006:web:c1655e48aa5db72c0fe037"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
window.onload = view.setActiveScreen('registerScreen');
console.log(firebase.app().name)
    function goToLogin() { 
        window.onload = view.setActiveScreen('loginScreen')
        console.log(firebase.app().name)
    }
    function goToRegister() {
        window.onload = view.setActiveScreen('registerScreen')
        console.log(firebase.app().name)
    }
    function goToChat() {
        window.onload = view.setActiveScreen(`chatScreen`)
    }



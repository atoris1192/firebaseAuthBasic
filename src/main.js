document.addEventListener('DOMContentLoaded', () => {
  'use strict' 

  const email = document.querySelector('#email') 
  const password = document.querySelector('#password') 
  const signUp = document.querySelector('#signUp') 
  const signIn = document.querySelector('#signIn') 
  const signOut = document.querySelector('#signOut') 
  const log = document.querySelector('#log')

  const firebase = require('firebase/app')
  require('firebase/auth')
  const config = {
    apiKey: "",
    authDomain: ".firebaseapp.com",
  }
  firebase.initializeApp(config)

  // アカウント登録
  signUp.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value )
      .then( result => {
        console.log("singUp: ", result)
        log.innerText = 'SignUp Success!'
      })
      .catch( error => {
        console.log(" SignUp error")
        const errorCode = error.code
        const errorMessage = error.message 
        log.textContent = `SignUp Faild:  ${errorCode}: ${errorMessage}`
      })
  })

  // Login
  signIn.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then( result => {
        log.textContent = 'サインイン成功'

      })
      .catch( error => {
        console.log(" SignIn error")
        const errorCode = error.code
        const errorMessage = error.message 
        log.textContent = `SignIn Faild :${errorCode}: ${errorMessage}`
      })
  })
  // LogOut
  signOut.addEventListener('click', () => {
    firebase.auth().signOut()
      .then( () => {
        log.textContent = 'サインアウト成功'
      })
      .catch( error => {
        console.error(error)
        log.textContent = 'サインアウト失敗'
      })
  })

}) 
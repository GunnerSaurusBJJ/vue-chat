import firebase from '@/plugins/firebase'
import store from '@/store'
export const fireBaseLogin = async (email, password) => {
  try {
    const data = await firebase.auth().signInWithEmailAndPassword(email, password)
    return data
  } catch (error) {
    console.error(error)
    store.dispatch('loadMessage', error.message)
  }
}

export const fireBaseSignOut = async () => {
  try {
    const data = await firebase.auth().signOut()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const fireBaseSignUp = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const fireBaseResetPassword = async (email) => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email)
    return data
  } catch (error) {
    console.error(error)
  }
}

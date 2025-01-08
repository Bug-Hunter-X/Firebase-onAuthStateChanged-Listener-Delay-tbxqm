function handleLoginSuccess() {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Get user's ID token to confirm authentication
      userCredential.user.getIdToken().then((idToken) => {
        // If idToken is present, authentication is confirmed
        console.log("Login successful!", idToken);
        // Update UI based on user's authenticated state
        // ...
      }).catch((error) => {
        // Handle error if getting idToken fails
        console.error("Error getting ID token:", error);
      });
    })
    .catch((error) => {
      // Handle error if login fails
      console.error("Login failed:", error);
    });
}

// Initialize Firebase
// ...

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});
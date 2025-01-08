The Firebase SDK's `onAuthStateChanged` listener might not trigger immediately after a successful authentication.  This can lead to unexpected behavior if your application relies on the user's authentication state right after login or signup.
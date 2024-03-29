/* 

------------------------------------
            Initial Setup
------------------------------------

1. visit: console.firebase.google.com
2., create a new project (Skip Google Analytics)
3. Click on the "Web" icon
4. Register the app
5. Copy the config object
6. Install Firebase
7. Add config file to your project
8. DANGER: Do not publish or make firebase config to public by pushing those to GitHub

------------------------------------
    Integrate Firebase with React
------------------------------------



9. Go to Docs > Build > Authentication > Get Started
10. export app from firebase.init.js = export default app;
11. import app in Login.jsx: getAuth(app) from "firebase/auth";
12. create cont auth = getAuth(app);    

-----------------------------------------
    Provider Setup for Google Sign In
-----------------------------------------

13. import google auth provider from "firebase/auth"; and create a new instance of GoogleAuthProvider
14. use sign in with pop up and pass auth and provider
15. activate the google sign in method in firebase console
16. [vite] change 127.0.0.1 to localhost

-----------------------------------------
Sign in with GitHub

17. Go to Authentication > Sign-in method
18. Enable GitHub
19. Create a new GitHub app
20. Add the client id and secret to firebase console
21. Create a new provider for GitHub
22. Create a new method for GitHub sign in
23. Add the new method to the login component

*/
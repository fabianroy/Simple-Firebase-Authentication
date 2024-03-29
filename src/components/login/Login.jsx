import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    };


    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    };



    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div>
            <div className="mt-10 mb-16">
                {user ?
                    <button className="border px-4 py-2 font-semibold rounded-lg shadow bg-green-400 text-white" onClick={handleSignOut}>Sign Out</button> :
                    <div className="flex gap-6 justify-center">
                        <button className="border px-4 py-2 font-semibold rounded-lg shadow bg-green-400 text-white" onClick={handleGoogleSignIn}>Login with Google</button>
                        <button className="border px-4 py-2 font-semibold rounded-lg shadow bg-green-400 text-white" onClick={handleGithubSignIn}>GiHub Login</button>
                    </div>
                }
            </div>
            <div className="flex flex-col justify-center">
                {user && <div>
                    <img className="w-fit mx-auto rounded-full mb-6" src={user.photoURL} alt="" />
                    <h3 className="text-xl mb-6">User : {user.displayName}</h3>
                    <h4 className="text-xl">Email : {user.email}</h4>
                </div>}
            </div>
        </div>
    );
};

export default Login;
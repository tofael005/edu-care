import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


const CreateAuth = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, correntUser => {
            setUser(correntUser)
            if(correntUser) {
                fetch(`https://edu-care.vercel.app/jwt?email=${correntUser.email}`,
                {
                    method: "POST"
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("access-token", data.token)
                })
            }
            else {
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authData = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInGoogle
    }

    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

const useAuth = () => {
    return useContext(CreateAuth);
}

export { AuthProvider, useAuth }
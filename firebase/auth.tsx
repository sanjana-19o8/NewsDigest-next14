'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, signOut as authSignOut, User } from "firebase/auth";
import { auth } from "./firebase";

interface AuthUser {
    uid: string;
    email: string | any;
    username: string | any;
}

interface AuthUserProviderProps {
    children: ReactNode;
}

export const AuthUserContext = createContext<any>({
    authUser: null,
    isLoading: true,
    signOut: () => {},
    setAuthUser: () => {},
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const clear = () => {
        setAuthUser(null);
        setIsLoading(false);
    };

    const authStateChanged = async (user: User | null) => {
        setIsLoading(true);
        if (!user) {
            clear();
            return;
        }
        setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName || null,
        });
        setIsLoading(false);
    };

    const signOut = () => {
        authSignOut(auth).then(() => clear());
    };

    return {
        authUser,
        isLoading,
        signOut,
        setAuthUser,
    };
}


export const AuthUserProvider: React.FC<AuthUserProviderProps> = ({ children }) => {
    const auth = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);

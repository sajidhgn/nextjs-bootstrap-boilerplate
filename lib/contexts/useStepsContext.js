import { useEffect } from "react";
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { createContext, useContext, useState, useCallback } from 'react';

const StepsContext = createContext(undefined);

// Custom hook to access the steps context
export function useStepsContext() {
    const context = useContext(StepsContext);
    if (!context) {
        throw new Error('useStepsContext must be used within a StepsProvider');
    }
    return context;
}

// Component to provide steps context to the app
export function StepsProvider({ children }) {
    // Initialize state from the cookie or with default values
    const [isStatus, setIsStatus] = useState(false);

    const [stepsData, setStepsData] = useState(() => {
        const cookieData = getCookie('steps_data');
        return cookieData ? JSON.parse(cookieData) : [];
    });

    // User Data
    const [profileData, setProfileData] = useState([]);

    const [token, setToken] = useState(() => {
        return getCookie('token') || '';
    });

    const [userData, setUserData] = useState(() => {
        return getCookie('user_name');
    });

    const [userUUID, setUserUUID] = useState(() => {
        return getCookie('u_user');
    });

    const [userProfile, setUserProfile] = useState(() => {
        return getCookie('user_profile');
    });

    const [isActives, setIsActives] = useState(false);

    const toggleStatusFunction = useCallback(() => {
        setIsStatus(true);
    }, [setIsStatus]);

    const updateProfileDataFunction = useCallback((data) => {
        setProfileData(data);
    }, [setProfileData]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStatus(false);
        }, 100);

        return () => clearTimeout(timer);
    }, [isStatus]);

    // Function to update steps and save to cookie
    const updateStepsFunction = useCallback((steps) => {
        setStepsData(steps);
        setCookie("steps_data", JSON.stringify(steps));
    }, [setStepsData]);

    // Function to update token and save to cookie
    const updateTokenFunction = useCallback((newToken) => {
        setToken(newToken);
        setCookie("token", newToken);
    }, [setToken]);

    // Function to delete token cookie
    const deleteTokenFunction = useCallback(() => {
        setToken('');
        deleteCookie("token");
    }, [setToken]);

    // Function to delete steps data cookie
    const deleteStepsFunction = useCallback(() => {
        setStepsData([]);
        deleteCookie("steps_data");
    }, [setStepsData]);

    // Function to update user data and save to cookie
    const updateUserDataFunction = useCallback((user) => {
        setUserData(user);
        setCookie("user_name", user);
    }, [setUserData]);

    // Function to delete user data cookie
    const deleteUserDataFunction = useCallback(() => {
        setUserData('');
        deleteCookie("user_name");
    }, [setUserData]);

    const updateUUIDFunction = useCallback((user) => {
        setUserUUID(user);
        setCookie("u_user", user);
    }, [setUserUUID]);

    // Function to delete user data cookie
    const deleteUUIDFunction = useCallback(() => {
        setUserUUID('');
        deleteCookie("u_user");
    }, [setUserUUID]);

    // Function to update user profile and save to cookie
    const updateUserProfileFunction = useCallback((user) => {
        setUserProfile(user);
        setCookie("user_profile", user);
    }, [setUserProfile]);

    // Function to delete user profile cookie
    const deleteUserProfileFunction = useCallback(() => {
        setUserProfile('');
        deleteCookie("user_profile");
    }, [setUserProfile]);

    const updateActiveFunction = useCallback((status) => {
        setIsActives(status);
    }, [setIsActives]);

    return (
        <StepsContext.Provider
            value={{
                stepsData,
                updateStepsFunction,
                deleteStepsFunction,
                token,
                updateTokenFunction,
                deleteTokenFunction,
                userData,
                updateUserDataFunction,
                deleteUserDataFunction,
                userProfile,
                updateUserProfileFunction,
                deleteUserProfileFunction,
                isActives,
                updateActiveFunction,
                isStatus,
                toggleStatusFunction,
                userUUID,
                updateUUIDFunction,
                deleteUUIDFunction,
                profileData,
                updateProfileDataFunction
            }}
        >
            {children}
        </StepsContext.Provider>
    );
}

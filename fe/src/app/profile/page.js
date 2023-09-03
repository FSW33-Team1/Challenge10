"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
    const router = useRouter();
    const {status, data} = useSession();
    useEffect(()=> {
        if(status === 'unauthenticated'){
            router.push("/login");
        }
    },[status])
    return (<>This is for protected user {data?.user?.name}</>)
}

export default Profile;
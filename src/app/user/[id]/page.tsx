"use client";
import { useParams } from 'next/navigation'

export default function UserID() {
    
    const params = useParams();
    console.log(params);
    return <div>My User ID Page </div>
}
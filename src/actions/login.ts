'use server'

import { signIn } from "@/auth"
import { signOut } from "@/auth";


export async function SignIn(){

await signIn("github");

}

export async function SignOut(){

    await signOut({redirectTo : "/"});
}
import { GitBranchIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {SignIn} from "@/actions/login";
import { redirect } from "next/navigation";
import { auth } from "@/auth";


export default async function root_landing_page() {

  const isAuthorized = await auth();

  return (

    <>
    
    {isAuthorized && isAuthorized.user? 
            (redirect("/chat")) : 
        (
            <div className="h-screen flex">
              <Card className="m-auto sm:max-w-[425px]">
                
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Log in to your git account to chat with your online helper</CardDescription>
                </CardHeader>  

                <CardContent className="grid gap-4">
                <form action={SignIn} className="flex items-center space-x-4 p-4">
                  <Button variant="outline" className="w-full sm:max-w-small">
                    <GitBranchIcon className="mr-2 size-4" /> Sign in with GitHub
                  </Button>
                </form>
                </CardContent>
              </Card>
            </div>
        )

      }
    
    </>

   
    )

}

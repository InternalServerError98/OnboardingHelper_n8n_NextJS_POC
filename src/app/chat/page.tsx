'use client'

import { SkeletonCard } from "@/components/skeletons";
import { RootState } from "@/global_redux/store";
import { useSelector } from "react-redux";

export default function Chat_Landing_Page() {
 
  const isNewChatEvent = useSelector((state:RootState) => state.newChatLoading.isLoading);

  if(isNewChatEvent){

    return <SkeletonCard/>

  }
 
  return (

    <main className="h-screen flex">
      <section className="w-full flex felx-col justify-center items-center
        py-6 md:py-12 lg:py-16 xl:py-24 m-auto">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl tracking-tighter font-bold sm:text-4xl
                md:text-5xl lg:text-6xl/none">
                  Welcome on Your Onboarding Journey!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Ask questions, and navigate common hurdles faced on your onboarding journey! 
                  Create a new chat to get started.
                </p>
              </div>
            </div>
          </div>
      </section>
    </main>

  );
}
import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonCard() {
  return (
    <div className="h-screen flex">
      <section className="m-auto">
        <Skeleton className="h-[400px] w-[550px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-[550px] my-1" />
          <Skeleton className="h-8 w-[550px]" />
        </div>
      </section>
    </div>
  )
}


export function ChatHistSkeleton(){

  return (

    <div className="flex-1 p-4">


    <div className="flex items-center space-x-4 justify-start">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>

    <div className="flex items-center space-x-4 justify-end">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>

    </div>



  )

}

export function ChatReplySkeleton(){

  return (

     <div>
      <Skeleton className="h-12 w-12 mb-1 rounded-full bg-background" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-background" />
      </div>
     </div>
    

  )

}
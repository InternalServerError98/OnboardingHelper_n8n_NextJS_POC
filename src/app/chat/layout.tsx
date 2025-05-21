
import { AppSideBar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

          <SidebarProvider>
          <div className="flex h-screen bg-background text-foreground w-full">
            <>
                <AppSideBar />
                <div className="flex flex-1 flex-col">
                  <Header />
                  {children}
                </div>
            </>
          </div>
        </SidebarProvider>

  
  );
}

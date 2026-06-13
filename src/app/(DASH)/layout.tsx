import Avatar from "@/components/avatar";
import Sidebar from "@/components/navigation/sidebar";
import { UserInfo } from "@/lib/queries";
import { redirect } from "next/navigation";

const DashLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const userData = await UserInfo();

  if (!userData) return redirect("/home");

  return (
    <div>
      <Sidebar name={userData.name} role={userData.role} />
      <main className="lg:pl-[200px]">
        <div className="flex justify-end mb-8 m-2">
          <Avatar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashLayout;

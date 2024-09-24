import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar></Sidebar>
      <div className="flex-1 flex flex-col md:ml-64">
        <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 md:m-8  rounded-[50px] shadow-lg overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <main className="flex-1 p-4  mr-20 overflow-auto">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
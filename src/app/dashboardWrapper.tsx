import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-200">
      <Sidebar />
      <main className="flex w-full flex-col bg-gray-500">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;

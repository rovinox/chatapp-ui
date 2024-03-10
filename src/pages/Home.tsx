import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Sidebar from "../components/Sidebar";
import AuthOverlay from "../components/AuthOverlay";

export default function Home() {
  return (
    <MainLayout>
      <div
        style={{
          position: "absolute",
        }}
      >
        <AuthOverlay />
        <ProtectedRoutes>
          <Sidebar />
        </ProtectedRoutes>
      </div>
    </MainLayout>
  );
}

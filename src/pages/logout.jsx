import { pb } from "../lib/pocketbase";
import { useUserStore } from "../store/user";

const LogoutButton = () => {
  const { logout } = useUserStore();
  const handleLogout = () => {
    logout();
    pb.authStore.clear();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;

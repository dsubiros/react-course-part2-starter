import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, dispatch] = useReducer(authReducer, '');
  // const { user, dispatch } = useContext(AuthContext);
  // const { user, dispatch } = useAuth();
  const { userName, login, logout } = useAuthStore();

  if (userName)
    return (
      <>
        <div>
          <span className="mx-2">{userName}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("dariel.subiros")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;

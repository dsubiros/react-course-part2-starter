import useAuthStore from "./store";

const LoginStatus = () => {
  // const [user, dispatch] = useReducer(authReducer, '');
  // const { user, dispatch } = useContext(AuthContext);
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
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

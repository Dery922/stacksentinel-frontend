import Cookies from "js-cookie";

let savedUser = null;
try {
  const rawUser = Cookies.get("user");
  if (rawUser) {
    savedUser = JSON.parse(rawUser); // ✅ assign to outer variable
  }
} catch (error) {
  console.error("Failed to parse user cookie:", error);
}

const savedToken = Cookies.get("token") || null;

const initialState = {
  user: savedUser,
  token: savedToken,
  isAuthenticated: !!savedToken, // ✅ true if we have a token
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      Cookies.set("user", JSON.stringify(action.payload.user));
      Cookies.set("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case "LOGOUT":
      Cookies.remove("user");
      Cookies.remove("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}

// ✅ keep type consistent (all caps)
export const setUserAuthenticated = (value) => ({
  type: "LOGIN",
  payload: { user: null, token: Cookies.get("token") }, // token is already in cookie
});

export default authReducer;

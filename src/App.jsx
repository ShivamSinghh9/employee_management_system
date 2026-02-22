import { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("logged in user");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("logged in user", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee);
        localStorage.setItem(
          "logged in user",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-screen">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role === "admin" && <AdminDashboard setUser={setUser} />}
      {user?.role === "employee" && (
        <EmployeeDashboard data={loggedInUserData} setUser={setUser} />
      )}
    </div>
  );
};

export default App;

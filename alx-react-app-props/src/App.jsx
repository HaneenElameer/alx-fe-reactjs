import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = {
    name: "Haneen Elameer",
    email: "Haneenelameer23@gmail.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
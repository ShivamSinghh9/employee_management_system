const Header = ({ setUser }) => {

  const logoutUser = () => {
    localStorage.removeItem('logged in user');
    setUser(null);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h2 className="text-2xl">Hello</h2>
        <h1 className="text-3xl">User 👋</h1>
      </div>
      <div>
        <button 
          onClick={logoutUser}
          className="bg-red-500 px-5 font-semibold text-xl cursor-pointer rounded-xs py-2"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
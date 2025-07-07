import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <img
            src="../assets/newlogo.jpg"
            alt="logo"
            height="50"
            width="50"
            className="logo-img"
          />
          <h1 className="brand-name">VibeShare</h1>
        </div>

        <img
          src="../assets/profile_new.png"
          alt="profile"
          height="50"
          width="50"
          className="profilebtn"
        />
      </div>
    </div>
  );
}

export default Header;

import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 CS-ITLA MOVIES🎥
    </span>
  );
};

export default Header;

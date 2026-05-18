import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  //  for search and profile dropdown
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // for profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  //  for blur
  const [isScrolled, setIsScrolled] = useState(false);
  // add scroll event listener to change header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Logo" />

        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="#tv-shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="#movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="#my-list">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="#profile">
            My List
          </Link>
          <Link className={styles.navLink} to="#settings">
            Browse by Language
          </Link>
          <Link className={styles.navLink} to="#home">
            Home
          </Link>
        </nav>

        {/* right side section */}
        {/* search */}
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              {/* Search button */}
              <Search size={20} />
            </button>
            {/* creat on click functionality to show search input */}
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movies, TV shows, genres..."
                className={styles.searchInput}
              />
            )}
          </div>
          {/* notification */}
          <button className={styles.iconButton}>
            {/* Notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>
          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.ProfileMenuItem} to="#profile">
                  Account
                </Link>
                <Link className={styles.ProfileMenuItem} to="#settings">
                  Help Center
                </Link>
                <hr className={styles.profileMenuDivider} />
                <Link className={styles.ProfileMenuItem} to="#logout">
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

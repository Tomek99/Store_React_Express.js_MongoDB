import React from "react";
import styles from "./AdminSearch.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function AdminBar({ handleNav, handleLogin }) {
  const navigate = useNavigate();

  function logout() {
    handleLogin();
    navigate(`/`);
  }

  return (
    <div className={styles.AdminBar}>
      <div className={styles.divSecondBar}>
        <button className={styles.btnNav} onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </button>
        <div className={styles.divSearch}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search..."
          />
          <BsSearch size={30} className={styles.iconSearch} />
        </div>
      </div>
      <button className={styles.btnLogOut} onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default AdminBar;

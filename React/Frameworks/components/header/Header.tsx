"use client";

import React from "react";
import ProfileButton from "./ProfileButton";
import SearchButton from "./SearchButton";
import PlaylistsButton from "./PlaylistsButton";

const SearchHeader: React.FC = () => {
  return (
    <header
      className="bg-linear-200 from-pink-500 to-pink-100"
      style={styles.header}
    >
      <div style={styles.leftSection}>
        <SearchButton />
        <PlaylistsButton />
      </div>
      <div style={styles.rightSection}>
        <ProfileButton />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
  },
  leftSection: {
    display: "flex",
    gap: "10px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
};

export default SearchHeader;

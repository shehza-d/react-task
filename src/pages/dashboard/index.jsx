// import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import styles from "../../styles/dashboard/index.module.css";
import { RiHome5Line } from "react-icons/ri";
import searchIcon from "../../assets/dashboard/search.svg";
// import SearchCard from "./searchCard";
// import SearchSuggestion from "./searchSuggestionBox";
import AllContent from "./allContent";
import CompanyDetails from "./companyDetails";
import Screen3 from "./Screen3";
import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import {
  getFirestore,
  collection, //get reference to a collection
  addDoc,
  getDocs, //get all docs
  getDoc, //get one doc
  doc, //get reference to a document
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";

export default function Dashboard() {
  const [counter, setCounter] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <NavBar />
      <div className={styles.homeBtnDiv}>
        <div className={styles.homeCircle}>
          <RiHome5Line />
        </div>
        <span className={styles.options}>Home</span>
      </div>
      <div className={styles.searchBarDiv}>
        <img src={searchIcon} alt="" />
        <input
          type="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>

      {counter === 1 ? <AllContent setCounter={setCounter} searchQuery={searchQuery}/> : null}
      {counter === 2 ? <CompanyDetails setCounter={setCounter} /> : null}
      {counter === 3 ? <Screen3 setCounter={setCounter} /> : null}
    </>
  );
}



import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import WritingItems from "./WritingItems";
import styles from "./Writing.module.css";
import { fetchWriting } from "../store/writingSlice";

const Writing = () => {
  const dispatch = useDispatch();
  const WrtItems = useSelector((store) => store.writing);

  useEffect(() => {
    dispatch(fetchWriting());
  }, [dispatch]);

  return (
    <section className={styles.writings} id="writing" style={{ padding: "8rem 0" }}>
      <div className="container">
        <h2 style={{ 
          fontSize: "clamp(2rem, 6vw, 3.5rem)", 
          textAlign: "center", 
          marginBottom: "4rem",
          textTransform: "uppercase"
        }}>Writing & Articles</h2>

        <div className="grid">
          {WrtItems.length === 0 ? (
            <p>Loading writings...</p>
          ) : (
            WrtItems.slice(0, 3).map((WrtItem) => (
              <div key={WrtItem.id} className="card">
                <WritingItems WrtItem={WrtItem} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Writing;
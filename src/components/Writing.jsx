

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
    <section className={styles.writings} id="writing">
      <div className="container">
        <h2 className={styles.h2_heading}>Writing</h2>

        {WrtItems.length === 0 ? (
          <p>Loading writings...</p>
        ) : (
          WrtItems.slice(0, 3).map((WrtItem) => (
            <WritingItems key={WrtItem.id} WrtItem={WrtItem} />
          ))
        )}

      </div>
    </section>
  );
};

export default Writing;
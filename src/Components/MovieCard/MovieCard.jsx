import React from "react";
import styles from "./MovieCard.module.css";
// import { FaCirclePlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa"; // Changed FaCirclePlay to FaPlayCircle
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let geners = ["Action", "Adventure", "Thriller"];
  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        src={IMG_BASE + movie?.poster_path}
        alt="poster image"
        className={styles.poster}
      />
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* image */}
        <img
          className={styles.hoverImage}
          src={IMG_BASE + movie?.poster_path}
          alt="poster image"
        />
        {/* bage */}
        <div className={styles.badge}>badge</div>
        {/* button  row*/}
        <div className={styles.buttonRow}>
          <FaPlayCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
        {/* meta data  row*/}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movies</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* geners */}
        <div className={styles.geners}>
          {geners.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < geners.length - 1 && (
                  <span className={styles.dot}>.</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

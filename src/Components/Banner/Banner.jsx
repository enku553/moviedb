import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import style from "./Banner.module.css";
import MovieInstance from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrl";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await MovieInstance.get(
        requests.fetchNetflixOriginals
      );

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }

    fetchBannerImage();
  }, []);

  function truncateString(str, num) {
    return str?.length > num
      ? str.substring(0, num - 1) + "..."
      : str;
  }

  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={style.contents}>
        {/* netflix image */}
        <img
          className={style.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />

        {/* title */}
        <h1 className={style.title}>
          {bannerImage?.original_name}
        </h1>

        {/* description */}
        <h1 className={style.description}>
          {truncateString(bannerImage?.overview, 120)}
        </h1>

        {/* buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>

          <button className={style.button}>
            <Info size={30} />
            More Info
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={style.faddedBottom}></div>
    </div>
  );
}

export default Banner;
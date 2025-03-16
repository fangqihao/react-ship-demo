import React, { FC } from "react";
import styles from "./index.module.scss";
import exportImg from "../../imgs/export.png";
import exportDayImg from "../../imgs/exportDay.png";

interface IForceBox {
  img: string;
  title: string;
  value: number;
  theme: string;
}

const ForceBox: FC<IForceBox> = (props) => {
  const { img, title, value, theme } = props;
  return (
    <div className={styles.surge_box}>
      <div className={styles.top_left}>
        <img className={styles.icon} src={img} alt="" />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.bottom_right}>
        <span className={styles.value}>{value}kN</span>
        <img
          className={styles.icon}
          src={theme === "dark" ? exportImg : exportDayImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ForceBox;

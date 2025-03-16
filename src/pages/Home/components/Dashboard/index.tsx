import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const Dashboard = () => {
  const [angle, setAngle] = useState(0); // 初始角度
  const [otherAngle, setOtherAngle] = useState(20); // 初始角度
  const [dashAngle, setDashAngle] = useState(100); // 初始角度
  const [arrowAngle, setArrowAngle] = useState(100); // 初始角度
  const radius = 28; // 圆的半径

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 3) % 360); // 递增角度，使其旋转
      setOtherAngle((prevAngle) => (prevAngle + 4) % 360); // 递增角度，使其旋转
      setDashAngle((prevAngle) => (prevAngle + 5) % 360); // 递增角度，使其旋转
      setArrowAngle((prevAngle) => (prevAngle + 7) % 360); // 递增角度，使其旋转
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 计算柱子位置的坐标
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div className={styles.wrapper}>
      <div className={styles.small_wrapper}>
        {/* 箭头+线条1 */}
        <div
          className={styles.arrow_container}
          style={{
            transform: `translateX(27px) translateY(-1px) rotate(${angle}deg)`,
          }}
        >
          <div className={styles.arrow_line}></div>
          <div className={styles.arrow}></div>
        </div>
        {/* 箭头+线条2 */}
        <div
          className={styles.arrow_container}
          style={{
            transform: `translateX(27px) translateY(-1px) rotate(${otherAngle}deg)`,
          }}
        >
          <div
            className={styles.arrow_line}
            style={{ backgroundColor: "#E757FF" }}
          ></div>
          <div
            className={styles.arrow}
            style={{ borderTopColor: "#E757FF" }}
          ></div>
        </div>

        {/* 中间固定白色的圆 */}
        <div className={styles.circle}></div>
        {/* 指针容器 */}
        <div
          className={styles.triangle}
          style={{
            transform: `rotate(${arrowAngle}deg)`,
          }}
        ></div>

        {/* 粉色虚线指针 */}
        <div
          className={styles.arrow_dash_container}
          style={{
            transform: `translateX(27px) translateY(-1px) rotate(${dashAngle}deg)`,
          }}
        >
          <div className={styles.arrow_dash_line}></div>
          <div className={styles.arrow_dash}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

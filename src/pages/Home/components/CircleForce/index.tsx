import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";

interface ICircleForce {
  title: string;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
}

const CircleForce: FC<ICircleForce> = (props) => {
  const { title, left, top, bottom, right } = props;
  const [blockNumber, setBlockNumber] = useState<number>(3);
  const [angle, setAngle] = useState(90); // 当前的旋转角度
  const radius = 16; // 圆的半径

  useEffect(() => {
    // 每秒更新一次角度，实现持续旋转
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360); // 增加角度，直到360重新开始
    }, 20); // 每20毫秒更新一次

    return () => clearInterval(interval); // 清除间隔，防止内存泄漏
  }, []);

  // 计算柱子位置的坐标
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className={styles.circle_wrapper1}
      style={{ left, top, bottom, right }}
    >
      <div className={styles.bow_thruster}>{title}</div>
      <div className={styles.arrow_wrapper}>
        <div
          className={styles.arrow_container}
          style={{
            transform: `translate(${x}px, ${y}px) rotate(${angle - 90}deg)`,
            transition: "height 2s ease-in-out", // 设置高度变化的渐变动画
          }}
        >
          {[...new Array(blockNumber)].map((_, index) => (
            <div key={index} className={styles.block}></div>
          ))}
          <div className={styles.arrowhead}></div>
        </div>
      </div>
    </div>
  );
};

export default CircleForce;

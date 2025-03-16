import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const SectorArea = () => {
  const [angle, setAngle] = useState(0); // 指针角度 (初始90度)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(() => {
        const random = 0.2 + Math.random() * (0.4 - 0.2);
        return Math.min(0 + random * 100, 160);
      });
    }, 500); // 100ms 更新一次，实现平滑动画

    return () => clearInterval(interval);
  }, []);

  // 计算指针的旋转角度（CSS 变换）
  const pointerStyle = {
    transform: `rotate(${angle}deg)`,
    transition: "transform 0.3s ease",
  };

  // 计算 clip-path 扇形的路径
  const getClipPath = (angle: number) => {
    const radius = 1000; // 半圆半径
    const cx = 48; // 圆心 X
    const cy = 48; // 圆心 Y

    // 计算角度对应的点坐标
    const x = cx + radius * Math.cos((Math.PI * (angle - 90)) / 180);
    const y = cy + radius * Math.sin((Math.PI * (angle - 90)) / 180);

    return `polygon(50% 100%, 50% 0%, ${x}px ${y}px)`;
  };

  return (
    <div className={styles.gauge}>
      {/* 扇形遮罩区域 */}
      <div
        className={styles.sector}
        style={{
          clipPath: getClipPath(angle),
        }}
      ></div>

      {/* 指针 */}
      <div className={styles.pointer} style={pointerStyle}>
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
};

export default SectorArea;

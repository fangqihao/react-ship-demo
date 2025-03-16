import styles from "./index.module.scss";
import { Radio, Switch } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import desktopImg from "./imgs/desktop.png";
import areaChartImg from "./imgs/areaChart.png";
import areaChartDayImg from "./imgs/areaChartDay.png";
import snippetsFillImg from "./imgs/snippetsFill.png";
import snippetsFillDayImg from "./imgs/snippetsFillDay.png";
import settingFillImg from "./imgs/settingFill.png";
import settingFillDayImg from "./imgs/settingFillDay.png";
import IconSurgeForceImg from "./imgs/IconSurgeForce.png";
import IconSwayForceImg from "./imgs/IconSwayForce.png";
import IconYawMomentImg from "./imgs/IconYawMoment.png";
import exportImg from "./imgs/export.png";
import exportDayImg from "./imgs/exportDay.png";
import CircleForce from "./components/CircleForce";
import ForceBox from "./components/ForceBox";
import SectorArea from "./components/SectorArea";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [selectedValue, setSelectedValue] = useState("1");

  const onLightChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
  };

  const onEnglishChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onMoveChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const getRealImg = (value: string) => {
    switch (value) {
      case "1":
        return desktopImg;
      case "2":
        if (value === selectedValue) {
          if (theme === "dark") {
            return areaChartDayImg;
          } else {
            return areaChartImg;
          }
        } else {
          if (theme === "dark") {
            return areaChartImg;
          } else {
            return areaChartDayImg;
          }
        }
      case "3":
        if (value === selectedValue) {
          if (theme === "dark") {
            return snippetsFillDayImg;
          } else {
            return snippetsFillImg;
          }
        } else {
          if (theme === "dark") {
            return snippetsFillImg;
          } else {
            return snippetsFillDayImg;
          }
        }
      default:
        return "https://via.placeholder.com/100x100?text=Default";
    }
  };

  const options: CheckboxGroupProps<string>["options"] = [
    {
      label: <img className={styles.img} src={desktopImg} alt="" />,
      value: "1",
    },
    {
      label: <img className={styles.img} src={getRealImg("2")} alt="" />,
      value: "2",
    },
    {
      label: <img className={styles.img} src={getRealImg("3")} alt="" />,
      value: "3",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.left_ship}>
        <div className={styles.top_actions}>
          <div className={styles.title}>Thrusters</div>
          <div className={styles.actions}>
            <Radio.Group
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              block
              options={options}
              defaultValue="Apple"
              optionType="button"
              buttonStyle="solid"
            />
            <img
              className={styles.settingImg}
              src={theme === "dark" ? settingFillImg : settingFillDayImg}
              alt=""
            />
          </div>
        </div>
        <div className={styles.bottom_ship_model}>
          <div className={styles.ship}>
            <div className={styles.mainshipNight}>
              <CircleForce left={45} top={31} title="BT1" />
              <CircleForce left={-4} bottom={6} title="PSA" />
              <CircleForce right={-4} bottom={6} title="SSA" />
            </div>
          </div>
          <div className={styles.force}>
            <ForceBox
              img={IconSurgeForceImg}
              title="Surge Force"
              value={10.4}
              theme={theme}
            />
            <ForceBox
              img={IconSwayForceImg}
              title="Sway Force"
              theme={theme}
              value={8.9}
            />
            <div className={styles.yaw_box}>
              <div className={styles.yaw_box_top}>
                <img
                  className={styles.yaw_box_img}
                  src={IconYawMomentImg}
                  alt=""
                />
                <span className={styles.yaw_box_title}>Yaw Moment</span>
              </div>
              <div className={styles.yaw_box_center}>
                <div className={styles.value}>19kNm</div>
                <img
                  className={styles.img}
                  src={theme === "dark" ? exportImg : exportDayImg}
                  alt=""
                />
              </div>

              <div className={styles.yaw_box_bottom}>
                <SectorArea />
              </div>
            </div>
            <div className={styles.view}>
              <div className={styles.top}>
                <div className={styles.title}>VIEW</div>
                <div className={styles.select}>Balance</div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.dashLine1}></div>
                <div className={styles.dashLine2}></div>
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_ship}>
        <div className={styles.top}>
          <div className={styles.thrusters}>Thrusters</div>
          <div className={styles.night}>Night Display</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.btn}>
            <div className={styles.label}>日/夜间模式</div>
            <div className={styles.radio}>
              <Switch onChange={onLightChange} />
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.label}>中英文切换</div>
            <div className={styles.radio}>
              <Switch onChange={onEnglishChange} />
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.label}>动画模式</div>
            <div className={styles.radio}>
              <Switch onChange={onMoveChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

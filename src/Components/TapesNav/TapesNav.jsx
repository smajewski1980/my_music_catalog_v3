import styles from "./TapesNav.module.css";
import Button from "../Button/Button";

const TapesNav = ({ setSubFormat }) => {
  return (
    <nav>
      <ul>
        <li>
          <Button
            text='ALL TAPES'
            func={setSubFormat}
            type={"all"}
          />
        </li>
        <li>
          <Button
            text='8-TRACKS'
            func={setSubFormat}
            type={"8-track"}
          />
        </li>
        <li>
          <Button
            text='CASSETTES'
            func={setSubFormat}
            type={"cassette"}
          />
        </li>
        <li>
          <Button
            text='REEL TO REEL'
            func={setSubFormat}
            type={"reel to reel"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default TapesNav;

import styles from "./RecordsNav.module.css";
import Button from "../Button/Button";

const RecordsNav = ({ setSubFormat }) => {
  return (
    <nav>
      <ul>
        <li>
          <Button
            text='ALL RECORDS'
            func={setSubFormat}
            type={"all"}
          />
        </li>
        <li>
          <Button
            text='33s'
            func={setSubFormat}
            type={"33s"}
          />
        </li>
        <li>
          <Button
            text='45s'
            func={setSubFormat}
            type={"45s"}
          />
        </li>
        <li>
          <Button
            text='78s'
            func={setSubFormat}
            type={"78s"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default RecordsNav;

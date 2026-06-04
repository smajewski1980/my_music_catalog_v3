import styles from "./MainNav.module.css";
import Button from "../Button/Button";
import { useRef, useEffect } from "react";

const MainNav = ({ setFormat }) => {
  return (
    <nav>
      <ul className={styles.headerNavList}>
        <li>
          <Button
            text='Search All'
            setFormat={setFormat}
            type={"all"}
          />
        </li>
        <li>
          <Button
            text='CDS'
            setFormat={setFormat}
            type={"cds"}
          />
        </li>
        <li>
          <Button
            text='TAPES'
            setFormat={setFormat}
            type={"tapes"}
          />
        </li>
        <li>
          <Button
            text='RECORDS'
            setFormat={setFormat}
            type={"records"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

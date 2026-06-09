import styles from "./MainNav.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

const MainNav = ({ setFormat }) => {
  return (
    <nav>
      <ul className={styles.headerNavList}>
        <li>
          <Button
            text='SEARCH ALL'
            func={setFormat}
            type={"all"}
          />
        </li>
        <li>
          <Button
            text='CDS'
            func={setFormat}
            type={"cds"}
          />
        </li>
        <li>
          <Button
            text='TAPES'
            func={setFormat}
            type={"tapes"}
          />
        </li>
        <li>
          <Button
            text='RECORDS'
            func={setFormat}
            type={"records"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

import styles from "./CdsNav.module.css";
import Button from "../Button/Button";

const CdsNav = ({ setSubFormat }) => {
  return (
    <nav>
      <ul>
        <li>
          <Button
            text='ALL CDS'
            func={setSubFormat}
            type={"all"}
          />
        </li>
        <li>
          <Button
            text='CDS MAIN'
            func={setSubFormat}
            type={"main"}
          />
        </li>
        <li>
          <Button
            text='COMPILATIONS'
            func={setSubFormat}
            type={"compilations"}
          />
        </li>
        <li>
          <Button
            text='SINGLES'
            func={setSubFormat}
            type={"singles"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default CdsNav;

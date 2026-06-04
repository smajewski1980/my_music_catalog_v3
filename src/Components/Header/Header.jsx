import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.headerNavList}>
          <li>
            <Button
              path='/'
              text='Search All'
            />
          </li>
          <li>
            <Button
              path='/'
              text='CDS'
            />
          </li>
          <li>
            <Button
              path='/'
              text='TAPES'
            />
          </li>
          <li>
            <Button
              path='/'
              text='RECORDS'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

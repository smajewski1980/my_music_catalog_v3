import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <Logo />
      <Button
        path='/'
        text='Search All'
      />
      <Button
        path='/'
        text='CDS'
      />
      <Button
        path='/'
        text='TAPES'
      />
      <Button
        path='/'
        text='RECORDS'
      />
    </header>
  );
};

export default Header;

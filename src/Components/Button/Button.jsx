import styles from "./Button.module.css";

const Button = ({ text, setFormat, type }) => {
  return (
    <button
      onClick={() => {
        setFormat(type);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

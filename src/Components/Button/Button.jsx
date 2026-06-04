import styles from "./Button.module.css";

const Button = ({ text, func, type }) => {
  return (
    <button
      onClick={() => {
        func(type);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

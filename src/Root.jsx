import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";

const Root = () => {
  const [format, setFormat] = useState(null);
  const [subFormat, setSubFormat] = useState(null);
  const [searchField, setSearchField] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log(format);
    console.log(subFormat);
  }, [format, subFormat]);

  return (
    <Header
      format={format}
      setFormat={setFormat}
      subFormat={subFormat}
      setSubFormat={setSubFormat}
    />
  );
};

export default Root;

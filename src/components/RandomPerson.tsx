import { FC, useState, useEffect } from "react";

interface PersonProps {
  count: number;
}

const RandomPerson: FC<PersonProps> = (props) => {
  const [randomPersonText, setRandomPersonText] = useState("Loading...");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          setRandomPersonText(
            `${result.results[0].name.first} ${result.results[0].name.last}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
      <p>
        {props.count}. {randomPersonText}
      </p>
    </>
  );
};

export default RandomPerson;

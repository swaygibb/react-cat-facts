import { FC, useState, useEffect } from "react";

interface CatProps {
  count: number;
}

const CatFacts: FC<CatProps> = (props) => {
  const [catFact, setCatFact] = useState("Loading...");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then(
        (result) => {
          setCatFact(result.fact);
        },
        (error) => {
          alert(error);
        }
      );
  }, []);

  return (
    <>
      <p>
        {props.count}. {catFact}
      </p>
    </>
  );
};

export default CatFacts;

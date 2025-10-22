import { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return [skills];
};

export default useSkills;

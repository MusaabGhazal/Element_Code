import { useEffect, useState } from "react";
import { ElementsServices } from "../elementsServices";

export function useDiamond(){

  const [loadingState, setLoadingState] = useState<string>()
  const [diamondData, setDiamondData] = useState<any>()
  const fetchDiamondData = async () => {
    setLoadingState("loading");
    await ElementsServices.getDiamondElement()
      .then((value) => {
        setLoadingState("success");
        setDiamondData(value);
      })
      .catch((error) => {
        setLoadingState("error");
        console.log("error", error)
      });
  };
  const addStudentData = async (name: string, grade: string) => {
  setLoadingState("loading");
  await ElementsServices.addStudent(name, grade)
    .then((value) => {
      setLoadingState("success");
      console.log("Student added:", value);
      // optionally refresh the students list after adding
      // fetchDiamondData();
    })
    .catch((error) => {
      setLoadingState("error");
      console.log("error", error);
    });
};

    useEffect(() => {
    fetchDiamondData();
  }, []);

return {
  loadingState,
  setLoadingState, 
  diamondData, 
  setDiamondData,
  addStudentData,
}
}  
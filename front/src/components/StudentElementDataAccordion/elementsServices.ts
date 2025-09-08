import { httpClient } from "../../services/api/httpClient";

export const ElementsServices = {
    getDiamondElement: (): Promise<void> => {
    return httpClient.get(
      `http://localhost:5004/api/students`,
    ).then((response) => response.data)
      .catch((error) => {
        throw new Error(
          `${error.response?.data.message}\n${error.response?.data.descriptionEn}`
        );
    });;
  },
  addStudent: (name: string, grade: string): Promise<void> => {
  return httpClient.post(
    `http://localhost:5004/api/students`,
    { name, grade } // 👈 body
  )
  .then((response) => response.data)
  .catch((error) => {
    throw new Error(
      `${error.response?.data.message}\n${error.response?.data.descriptionEn}`
    );
  });
},
}
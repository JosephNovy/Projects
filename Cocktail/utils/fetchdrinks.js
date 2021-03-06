import { showloading } from "./toggleloading.js";
export const fetchdrinks = async (url) => {
  showloading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

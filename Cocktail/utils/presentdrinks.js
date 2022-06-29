import { displaydrinks } from "./displaydinks.js";
import { fetchdrinks } from "./fetchdrinks.js";
import { setdrink } from "./setdrink.js";
export const showdrinks = async (url) => {
  const data = await fetchdrinks(url);

  const section = await displaydrinks(data);
  if (section) {
    setdrink(section);
  }
};

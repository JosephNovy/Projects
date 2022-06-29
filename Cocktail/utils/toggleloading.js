import { getelement } from "./getelement.js";

const loading = getelement(".loading");

export const showloading = () => {
  loading.classList.remove("hide-loading");
};
export const hideloading = () => {
  loading.classList.add("hide-loading");
};

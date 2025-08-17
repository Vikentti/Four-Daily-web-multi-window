import Header from "./Header.js";
import Carusel from "./Carusel.js";
import TabsCollection from "./Tabs.js";
import Seach from "./Search.js";

new Header();

if (document.querySelector("[data-js-carusel]")) {
  new Carusel();
}

new TabsCollection();

if (document.querySelector("[data-js-search]")) {
  new Seach();
}

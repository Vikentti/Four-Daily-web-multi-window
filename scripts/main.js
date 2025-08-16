import Header from "./Header.js";
import Carusel from "./Carusel.js";
import TabsCollection from "./Tabs.js";

new Header();
if (document.querySelector("[data-js-carusel]")) {
  new Carusel();
}
new TabsCollection();

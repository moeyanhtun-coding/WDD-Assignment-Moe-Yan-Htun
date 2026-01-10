// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { Ripple, initMDB } from "mdb-ui-kit";
import { Input, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });
initMDB({ Input });
initMDB({ Dropdown, Collapse });
initMDB({ Ripple });

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});



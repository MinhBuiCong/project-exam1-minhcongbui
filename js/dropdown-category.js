const dropdown = document.querySelector(".show-all-categories");
const nameContainer = document.querySelector(".categories-name");

function categoryDrop() {
  if (nameContainer.style.display === "block") {
    nameContainer.style.display = "none";
    dropdown.innerHTML = `<p>Categories &darr;</p>`;
  } else {
    nameContainer.style.display = "block";
    dropdown.innerHTML = `<p>Categories &uarr;</p>`;
  }
}

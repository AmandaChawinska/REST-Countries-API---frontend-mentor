const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    return countryElement;
}

const createListElement = (countries) => {
  const listElement = document.createElement("ul");
  countries.forEach((country) => {
    listElement.appendChild(createCountryItemElement(country));
  });
  return listElement;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createListElement(countries));

  // render country items into main element
};

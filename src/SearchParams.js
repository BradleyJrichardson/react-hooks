import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  console.log(ANIMALS);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

/// Takeaways
// input inside of label is a good practice for accessability as if they click anywhere it will highlight the correct input more easily

/// the useState hook
// returns two things, the intial argument you passed into it (the default state), and a function which updates this default state

/// What is setLocation
// setlocation is an updater function for that piece of state. It is how we change it

/// Hooks
// can be defined by useSomething
// NEVER GO INSIDE OF IF STATEMENTS OR LOOPS

/// useEffect
// takes the place of normal react lifecycle methods
// it does not happen immediatly rather after the first render, similar to componentdidmount

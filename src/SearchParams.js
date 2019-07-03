import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreeds] = useState([]);

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

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={event => setAnimal(event.target.value)}
            onBlue={event => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}

            <option value="" />
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            placeholder="breed"
            onChange={event => setBreeds(event.target.value)}
            onBlue={event => setBreeds(event.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breedString => {
              return (
                <option key={breedString} value={breedString}>
                  {breedString}
                </option>
              );
            })}
          </select>
        </label>
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

let harryPotter_characters = [
  "Harry Potter",
  "Luna Lovegood",
  "Ginny Weasley",
  "Remus Lupin",
  "Hermione Granger",
  "Albus Dumbledore",
  "Rubeus Hagrid",
  "Sirius Black",
  "Ron Weasley",
  "Lord Voldemort",
  "Nymphadora Tonks",
  "Alastor Moody",
  "Lily Evans Potter",
  "Draco Malfoy",
  "Dobby the House Elf",
  "Neville Longbottom"
];

function randomWord() {
  //This function is returning the random down number * of possible choices in character array selcting one of those//
  return harryPotter_characters[
    Math.floor(Math.random() * harryPotter_characters.length)
  ];
}


//This is a functional component w/ Array database being exported to the Hangman.js file
export {randomWord}

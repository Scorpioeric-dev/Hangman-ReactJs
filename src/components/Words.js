let harryPotter_characters = [
  "harrypotter",
  "lunalovegood",
  "ginnyweasley",
  "remuslupin",
  "hermionegranger",
  "albusdumbledore",
  "rubeushagrid",
  "siriusblack",
  "ronweasley",
  "lordvoldemort",
  "nymphadoratonks",
  "alastormoody",
  "lilyevanspotter",
  "dracomalfoy",
  "dobbythehouseelf",
  "nevillelongbottom"
];

function randomWord() {
  //This function is returning the random down number * of possible choices in character array selcting one of those//
  return harryPotter_characters[
    Math.floor(Math.random() * harryPotter_characters.length)
  ];
}


//This is a functional component w/ Array database being exported to the Hangman.js file
export {randomWord}

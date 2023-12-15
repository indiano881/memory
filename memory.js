const EMOJIS= [
    String.fromCodePoint(0x1F621),
    String.fromCodePoint(0x1F621),
    String.fromCodePoint(0x1F922),
    String.fromCodePoint(0x1F922),
    String.fromCodePoint(0x1F976),
    String.fromCodePoint(0x1F976),
    String.fromCodePoint(0x1F608),
    String.fromCodePoint(0x1F608),
    String.fromCodePoint(0x1F480),
    String.fromCodePoint(0x1F480),
    String.fromCodePoint(0x1F47D),
    String.fromCodePoint(0x1F47D),
    String.fromCodePoint(0x1F63B),
    String.fromCodePoint(0x1F63B),
    String.fromCodePoint(0x1F977),
    String.fromCodePoint(0x1F977)
];

let copy_EMOJIS = Array.from(EMOJIS);
let placeholderShuffledEmojis = new Array(16);

const shuffleCards = () => {
  for (i=0; i<EMOJIS.length; i++) {
    removeEmojiIndex = Math.floor(Math.random() * copy_EMOJIS.length);
    placeholderShuffledEmojis[i] = copy_EMOJIS.splice(removeEmojiIndex, 1)[0];
    
  }
}
shuffleCards();
console.log(placeholderShuffledEmojis);



/*
Write a function that will return the word count for the LONGEST
sentence of a block of text.

Rules
  - input --> large block of text. paragraphs
  - output --> a number --> rep. the number of words in the LONGEST sentence

  Sentences can end with . || ! || ?
  Any seq. of chars that are NOT spaces or sentence-ending chars are treated
  as words
    - -- counts as a word
  
  Words are seperated by spaces

  - input could be in paragraph form --> multiple whitespace chars between text

Data --> an array of paragraphs
an array of sentences

Algo
  - seperate the string into an array of paragraphs first --> /n/n
  - create a wordCount array
  - iterare over each paragraph
    - create an array of sentences --> split(/[!.?]/)
    - map over each sentence and push its word count into the wordCout array
  - sort the wordcount array in dec order
  - return the first element of the array

Helper method
  wordCount(sentence)
    - return sentence.split(' ').length
*/

function longestSentence(bulkText) {
  let sentences = bulkText.split(/[!?.]/g);
  sentences = sentences.map(sentence => sentence.replace(/\s+/g, ' '));
  let wordCounts = sentences.map(sentence => {
    return sentence.trim().split(' ').length;
  });
  return wordCounts.sort((a, b) => b - a)[0];
}



let text = `Four score and seven years ago our fathers brought forth
on this continent a new nation, conceived in liberty, and
dedicated to the proposition that all men are created
equal.

Now we are engaged in a great civil war, testing whether
that nation, or any nation so conceived and so dedicated,
can long endure. We are met on a great battlefield of that
war. We have come to dedicate a portion of that field, as
a final resting place for those who here gave their lives
that that nation might live. It is altogether fitting and
proper that we should do this.

But, in a larger sense, we can not dedicate, we can not
consecrate, we can not hallow this ground. The brave
men, living and dead, who struggled here, have
consecrated it, far above our poor power to add or
detract. The world will little note, nor long remember
what we say here, but it can never forget what they
did here. It is for us the living, rather, to be dedicated
here to the unfinished work which they who fought
here have thus far so nobly advanced. It is rather for
us to be here dedicated to the great task remaining
before us -- that from these honored dead we take
increased devotion to that cause for which they gave
the last full measure of devotion -- that we here highly
resolve that these dead shall not have died in vain
-- that this nation, under God, shall have a new birth
of freedom -- and that government of the people, by
the people, for the people, shall not perish from the
earth.`

console.log(longestSentence(text));        //86
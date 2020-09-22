const sentence = "changed string to test";

let count = 0;
for (const char of sentence) {
  

  setTimeout(() => { 
    process.stdout.write(char);
    // Print the newline after the last count
    // if (count === sentence.length * 50) {
    //   process.stdout.write("\n") } 
      
    
    
  }, count);

  if (count === (sentence.length - 1) * 50) {
    setTimeout(() => process.stdout.write("\n"), count)
  }
  count += 50; 
}

// console.log(sentence[sentence.length - 1])


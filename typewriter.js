let delay = 0;
let lineBreak = '\n';

const printMessage = sentence => {
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 100)
};
  setTimeout(() => {
    process.stdout.write(lineBreak);
    }, sentence.length * 100); 
  };
  
printMessage('Add any sentence to print here!');
    
    
// line 11-13 is waiting until the entire sentence has been logged then add the line space (*100 ms) is needed to ensure it triggers after the incremental time seen in line 8)
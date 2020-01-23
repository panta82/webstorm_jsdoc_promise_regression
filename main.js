const {makeWidget} = require('./widgets');

function main() {
  // No hint
  makeWidget().then(widget => {
    console.log(widget);
  });
  
  // With hint
  makeWidget().then(/** Widget */ widget => {
    console.log(widget);
  });
}

main();
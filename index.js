function receivesAFunction(postRun) {
    postRun()  
  }
  
  receivesAFunction(function() {
      console.log("Hello World")
  })
  
  function returnsANamedFunction() {
      return function namedFunction () {}
  }
  
  function returnsAnAnonymousFunction() {
      return function () {}
  }
function register(name, nextStep) {
    setTimeout(() => {
      if (!name) {
        nextStep("Error: Name is required", null);
      } else {
        console.log(`User ${name} registered`);
        nextStep(null, name);
      }
    }, 1000);
  }
  
  function verifyEmail(name, nextStep) {
    setTimeout(() => {
      if (name === "fail") {
        nextStep("Error: Email verification failed", null);
      } else {
        console.log(`Verification email sent to ${name}`);
        nextStep(null, name);
      }
    }, 1000);
  }
  
  function login(name, nextStep) {
    setTimeout(() => {
      if (name !== "admin") {
        nextStep("Error: Login failed", null);
      } else {
        console.log(`User ${name} logged in`);
        nextStep(null, name);
      }
    }, 1000);
  }
  
  function showWelcome(name, nextStep) {
    setTimeout(() => {
      console.log(`Welcome, ${name}!`);
      nextStep(null);
    }, 1000);
  }
  
  // Execute tasks in sequence using nested callbacks
  register("admin", (error, name) => {
    if (error) return console.log(error);
  
    verifyEmail(name, (error, name) => {
      if (error) return console.log(error);
  
      login(name, (error, name) => {
        if (error) return console.log(error);
  
        showWelcome(name, (error) => {
          if (error) return console.log(error);
  
          console.log("Process completed");
        });
      });
    });
  });
  
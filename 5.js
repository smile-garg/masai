function timer(duration, onComplete) {
    setTimeout(() => {
      onComplete(`Timer of ${duration} ms finished`);
    }, duration);
  }
  
  // Example usage:
  timer(3000, (message) => console.log(message));
  
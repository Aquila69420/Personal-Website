
      // This is the text that will be typed out
      const typedText = "Hi there, I'm Dhruv.";
    
      // This is the delay between each character being typed
      const typeDelay = 100;
    
      // This function types out the text in the header one character at a time
      function typeHeader() {
        let i = 0;
        const typedHeader = document.getElementById("typed-header");
    
        const typeInterval = setInterval(function() {
          if (i < typedText.length) {
            typedHeader.innerHTML += typedText.charAt(i);
            i++;
          } else {
            clearInterval(typeInterval);
          }
        }, typeDelay);
      }
    
      // This runs the typeHeader function after the page has loaded
      window.onload = function() {
        typeHeader();
      };

    
    
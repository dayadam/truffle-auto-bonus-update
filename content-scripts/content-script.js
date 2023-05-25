let rootElement = null;
setInterval(function() {
    console.log(rootElement);
    //Get the root element
    rootElement = document.getElementById('root');
    console.log(rootElement);

    //Check if the root element exists
    if (rootElement) {
    // Loop through the elements within the root element
    for (var i = 0; i < rootElement.children.length; i++) {
        var element = rootElement.children[i];

        // Check if the element has a shadow root
        if (element.shadowRoot) {
        // Find all elements with the class "claim" within the shadow root
        var claimElements = element.shadowRoot.querySelectorAll('.claim');

        // Click on the first matching element (you can modify this logic as per your requirement)
        if (claimElements.length > 0) {
            //claimElements[0].click();
            break; // Exit the loop after clicking the element
        }
        }
    }
    } else {
    console.info('Root element not found.');
    }
}, 5000)

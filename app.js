//VISIBILITY
    const dropdown = document.getElementById('dropdown');
    const divContainers = document.querySelectorAll('.container');

    dropdown.addEventListener('change', function() {
        if (dropdown.value === 'option1') {
            divContainers[0].style.display = 'block';
            divContainers[1].style.display = 'none';
        } else if (dropdown.value === 'option2') {
            divContainers[0].style.display = 'none';
            divContainers[1].style.display = 'block';
        }
    });


//Copy text to clipboard
    // Get the button element by its ID
    const copyButton = document.getElementById('copy-text');
    // Get the textarea element by its ID
    const textarea = document.getElementById('outputTextarea');

    // Add a click event listener to the button
    copyButton.addEventListener('click', function() {
        const selectElement = document.getElementById('type');
        const selectedValue = selectElement.value + " ";
        textarea.value = selectedValue + textarea.value;

        // Select the content inside the textarea
        textarea.select();
        // Copy the selected text to the clipboard using the Clipboard API
        document.execCommand('copy');
        // Revert the change to the textarea's value
        textarea.value = textarea.value.replace(selectedValue, '');
        // Deselect the textarea to avoid any visual impact
        window.getSelection().removeAllRanges();
        // You can provide some visual feedback that the text has been copied
        alert(selectedValue + 'prompt copied to clipboard');
    });


//Character Limit
    // Get the textarea element and the message element
    var textareaElement = document.getElementById("outputTextarea");
    var messageElement = document.getElementById("charCountMessage");

    // Add an event listener to the textarea element to monitor changes
    textareaElement.addEventListener("input", function() {
        var currentLength = textareaElement.value.length;
        var maxLength = parseInt(textareaElement.getAttribute("maxlength"), 10);

        // Display the character count message
        messageElement.textContent = "Characters remaining: " + (maxLength - currentLength) + "/256";
    });

//Clear text
    const clearButton = document.getElementById("clear-text");
    const outputTextarea = document.getElementById("outputTextarea");

    clearButton.addEventListener("click", function() {
        outputTextarea.value = ""; // Clear the content of the textarea
        var messageElement = document.getElementById("charCountMessage");
        messageElement.textContent = "Characters remaining: 256/256";
    });


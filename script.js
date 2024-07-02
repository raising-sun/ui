document.querySelector('.send-button').addEventListener('click', function() {
    const topicSelect = document.querySelector('.topic-select');
    const selectedTopics = Array.from(topicSelect.selectedOptions).map(option => option.value);
    const title = document.querySelector('.title-input').value;
    const message = document.querySelector('.message-input').value;

    // Handle send button click, e.g., send data to a server or display an alert
    alert(`Topics: ${selectedTopics.join(', ')}\nTitle: ${title}\nMessage: ${message}`);
});

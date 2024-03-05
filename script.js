
// Function to fetch and load initial content (about.html)
function loadInitialContent() {
    fetch('content/about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error fetching initial content:', error));
}

// Call the function to load initial content when the page is first loaded
document.addEventListener('DOMContentLoaded', loadInitialContent);


async function showContent(pageName) {
    try {
        // Remove "active" class from all links
        document.querySelectorAll('#left-column a').forEach(link => {
        link.classList.remove('active');
        });

        // Add "active" class to the clicked link
        event.target.classList.add('active');
        
        // Simulate fetching content from a server (replace with actual server request)
        const response = await fetch(`content/${pageName}.html`);
        const content = await response.text();

        // Display the fetched content in the right column
        document.getElementById("content").innerHTML = content;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

// function showContent(pageNumber) {
//     // You can fetch content for each page dynamically or load it from predefined HTML files
//     // For simplicity, let's assume we have some content for each page
//     const pageContents = [
//         "<h2>Page 1 Content</h2><p>Description for Page 1.</p>",
//         "<h2>Page 2 Content</h2><p>Description for Page 2.</p>",
//         "<h2>Page 3 Content</h2><p>Description for Page 3.</p>",
//         "<h2>Page 4 Content</h2><p>Description for Page 4.</p>",
//     ];

//     // Display the selected page content in the right column
//     document.getElementById("content").innerHTML = pageContents[pageNumber - 1];
// }


async function showContent(pageName) {
    try {
        // Simulate fetching content from a server (replace with actual server request)
        const response = await fetch(`content/${pageName}.html`);
        const content = await response.text();

        // Display the fetched content in the right column
        document.getElementById("content").innerHTML = content;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

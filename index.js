
const endpoint = "https://jsonplaceholder.typicode.com/posts"
const postList = document.getElementById("post-list")

async function displayPost() {
    try {
        const response = await fetch(endpoint);
        const posts = await response.json();

        posts.forEach(post => {
            const group = document.createElement('li')

            const header = document.createElement('h1')
            header.textContent = post.title

            const postText = document.createElement('p')
            postText.textContent = post.body

            group.appendChild(header)
            group.appendChild(postText)

            postList.appendChild(group)
        });
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}

displayPost()
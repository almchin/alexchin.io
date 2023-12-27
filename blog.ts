type Blog = {
    title: string;
    date: string;
    description: string;
    content: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Test entry 5",
        date: "2023-12-26",
        description: "This is the latest blog post.",
        content: "AFTER CHRISTMAS",
        slug: "blog-post-5",
    },
    {
        title: "Test Entry 4",
        date: "2023-12-25",
        description: "This is the previous blog post.",
        content: "CHRISTMAS",
        slug: "blog-post-4",
    },
    {
        title: "Test Entry 3",
        date: "2023-12-24",
        description: "This is the previous blog post.",
        content: "CHRISTMAS EVE",
        slug: "blog-post-3",
    },
    {
        title: "Test Entry 2",
        date: "2023-12-23",
        description: "This is the previous blog post.",
        content: "TWO DAYS BEFORE CHRISTMAS",
        slug: "blog-post-2",
    },
    {
        title: "Test Entry 1",
        date: "2023-12-22",
        description: "This is the previous blog post.",
        content: "THREE DAYS BEFORE CHRISTMAS",
        slug: "blog-post-1",
    },

];

function displayBlogs() {
    const container = document.getElementById("blog-container");

    // If container is null, use an empty div as a fallback
    const targetContainer = container ?? document.createElement("div");

    blogs.forEach(blog => {
        const blogElement = document.createElement("div");
        blogElement.className = "blog-entry"; // Add a class for styling
        blogElement.innerHTML = `
            <h2><a href="${blog.slug}.html">${blog.title}</a></h2>
            <p>Date: ${blog.date}</p>
            <p>${blog.description}</p>
            <p>${blog.content}</p>
        `;
        targetContainer.appendChild(blogElement);
    });

    // If container was initially null, append the filled container to the document
    if (!container) {
        document.getElementById("blog-list")?.appendChild(targetContainer);
    }
}

// Call the function to display blogs when the page loads
displayBlogs();



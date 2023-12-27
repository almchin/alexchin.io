var blogs = [
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
    var _a;
    var container = document.getElementById("blog-container");
    // If container is null, use an empty div as a fallback
    var targetContainer = container !== null && container !== void 0 ? container : document.createElement("div");
    blogs.forEach(function (blog) {
        var blogElement = document.createElement("div");
        blogElement.className = "blog-entry"; // Add a class for styling
        blogElement.innerHTML = "\n            <h2><a href=\"".concat(blog.slug, ".html\">").concat(blog.title, "</a></h2>\n            <p>Date: ").concat(blog.date, "</p>\n            <p>").concat(blog.description, "</p>\n            <p>").concat(blog.content, "</p>\n        ");
        targetContainer.appendChild(blogElement);
    });
    // If container was initially null, append the filled container to the document
    if (!container) {
        (_a = document.getElementById("blog-list")) === null || _a === void 0 ? void 0 : _a.appendChild(targetContainer);
    }
}
// Call the function to display blogs when the page loads
displayBlogs();

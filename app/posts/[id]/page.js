
const getPost = async (id) => {
    if (id === undefined) return (null);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response.json();
        console.log("json: ", post);
        return post;
    }
    catch (err) {
        console.error(err);
        return null;
    }
};

// Dynamic Metadata
export async function generateMetadata({ params, searchParams }) {
    const post = await getPost(params.id);
    return { title: post.title };
}

export default async function page({ params, searchParams }) {
    const { id } = params;
    const post = await getPost(id);
    // console.log("params: ", params);
    // console.log("searchParams: ", searchParams);
    // console.log("id: ", id);
    // console.log("post: ", post);

    // create a return jsx with post id, title and body with tailwind css
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-4xl text-red-500">
                {post ? post.title : 'Post not found'}
            </div>
            <div className="text-2xl text-blue-500">
                {post ? post.body : ''}
            </div>
        </div>
    );
}

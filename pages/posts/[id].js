import React from 'react'

const PostById = ({ post }) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )
}
/**
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const response = await getAllPosts()

    // Get the paths we want to pre-render based on posts
    const paths = response.data.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}



// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const response = await getPostById(params.id)

    // Pass post data to the page via props
    return {
        props: { post: response.data },
    }
}
*/
export default PostById

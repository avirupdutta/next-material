import React from 'react'
import { getAllPosts, getPostById } from '../../src/services/authService'

const PostById = ({ post }) => {
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = await getAllPosts()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
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
    const post = await getPostById(params.id)

    // Pass post data to the page via props
    return { props: { post } }
}

export default PostById

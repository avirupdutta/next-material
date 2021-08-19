import React from 'react'
import Link from '../../src/Link'
import { getAllPosts } from '../../src/services/authService'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map(each => (
                <p key={each.id}>
                    <Link naked href={`/posts/${each.id}`}>{each.title}</Link>
                </p>
            )
            )}
        </div>
    )
}

export const getStaticProps = async (context) => {
    const posts = await getAllPosts();
    return {
        props: {
            posts
        }
    }
}

export default Posts

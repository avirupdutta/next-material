import React from 'react'
import Link from '../../src/Link'
import { getLocalPosts } from '../../src/services/authService'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map(each => (
                <p key={each.id}>
                    <Link color='textPrimary' href={`/posts/${each.id}`}>{each.title}</Link>
                </p>
            )
            )}
        </div>
    )
}

// export const getStaticProps = async (context) => {
//     const response = await getLocalPosts();
//     return {
//         props: {
//             posts: response.data
//         },
//         revalidate: 10
//     }
// }

export const getServerSideProps = async (context) => {
    const response = await getLocalPosts();

    if (response.data && !response.error) {
        return {
            props: {
                posts: response.data
            }
        }
    }

    return {
        notFound: true
    }
}

export default Posts

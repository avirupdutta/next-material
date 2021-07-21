import useSWR from "swr"
import { getAllUsers } from "../src/services/authService"

const swr = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error } = useSWR('/', getAllUsers, {
        initialData: [
            {
                name: 'foo',
                surname: 'bar',
                id: 1,
            }
        ]
    })

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <ul>
        {
            data.map(each => <li key={each.id}>{each.name}</li>)
        }
    </ul>
}

export default swr

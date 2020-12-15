import PostListItem from './PostListItem';
import useJsonFetch from'../../hooks/useJsonFetch';


function AllPosts () {
    const [data, loading, error] = useJsonFetch('http://localhost:7777/posts', {method: 'GET'});


    return (
        <div>
           {}
        </div>
    )
}
export default AllPosts;
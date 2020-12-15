import {Redirect} from 'react-router-dom';

function NewPost () {

    const onAdd = () => {
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify({"id": 0, "content": "То, что введено в поле ввода"})
        });
        <Redirect to='/'/>
            
        
    }

    return (
        <div>
            Форма создания нового поста
            <form onSubmit={onAdd}>
                <input/>
                <button>Создать</button>
            </form>
            
        </div>
    )
}
export default NewPost;
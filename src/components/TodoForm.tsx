import React, { useRef} from 'react'

interface TodoFormProps {
    onAdd(title:string): void
}

const TodoForm:React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.onAdd(ref.current!.value);
        ref.current!.value = ''
    }

    return (
        <form className="input-field mt2" onSubmit={handleSubmit}>
            <input type="text" id="title" ref={ref}/>
            <label className="active" htmlFor="title">Введите название дела</label>
        </form>
    )
}

export default TodoForm

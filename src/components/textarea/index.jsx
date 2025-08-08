function TextArea({ name, label, value, change, rows = 4 }) {
    return (
        <>
            <label className="text-sm" htmlFor={ name }>{ label }</label>
            <textarea
                id={ name }
                name={ name }
                value={ value }
                onChange={ change }
                rows={ rows }
                required
                className="w-full flex justify-between items-center gap-2 rounded-2xl bg-(--foreground) text-(--background) p-3 mt-1.5 hover:bg-(--foreground)/80 outline-0"            
            >
            </textarea>
        </>       
    )
}

export default TextArea
function Input({ name, ph = "", type = "text", label, value, change }) {
    return (
        <>
            <label className="text-sm" htmlFor={ name }>{ label }</label>
            <input
                id={ name }
                name={ name }
                type={ type }
                value={ value }
                placeholder={ ph }
                onChange={ change }
                required
                className="w-full flex justify-between items-center gap-2 rounded-2xl bg-(--foreground) text-(--background) p-3 mt-1.5 hover:bg-(--foreground)/80 outline-0"            
            />
        </>       
    )
}

export default Input
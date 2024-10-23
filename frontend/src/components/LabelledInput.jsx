

export const LabelledInput = ({label, onChange, placeholder })=>{ 

    return <div> 
        {label}  
        <input type="text" onChange={onChange} placeholder={placeholder}/>
    </div>
}
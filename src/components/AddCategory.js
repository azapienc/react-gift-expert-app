import React,{useState} from 'react'
import PropTypes from "prop-types"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("Search...");

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //Prevents automatic page refresh
        
        if(inputValue!=""){
            setCategories(categories=>[inputValue,...categories]);
            setInputValue("");
        }
    }
    
    const handleClick=()=>{
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value = {inputValue}
                onChange = {handleInputChange}
                onClick = {handleClick}
            /> 
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired,
}
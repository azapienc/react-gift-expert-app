import react,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dog"]);

    return<>
        <h2 className="title">GifExpertApp</h2>

        {/* //This is another component */}
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr />
        <ol>
            {categories.map(category=>
                <GifGrid 
                    key = {category}
                    category={category}
                />
            )}
        </ol>
    </>
};

export default GifExpertApp;

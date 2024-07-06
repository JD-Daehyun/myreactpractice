import { useEffect, useState } from "react"
import { GiNuclearWaste } from "react-icons/gi";
import './styles.css';


export default function LoadMoreData(){

    const[loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    const[count, setCount] = useState(0);
    const[disableButton, setDisableButton] =useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count ===0 ? 0 : count * 20}`);
            const data = await response.json();

            if(data && data.products && data.products.length){
                setProducts(()=>[...products, ...data.products]);
                setLoading(false);
            }
            console.log(data);

        }catch(e){
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, [count]);

    useEffect(()=>{
        if(products && products.length === 100)
            setDisableButton(true);
    }, [products])

    if(loading){
        return <div>Loading Data...! Please Wait</div>
    }

    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?
                products.map((product) =>
                    <div key={product.id} className="product">
                        <img 
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <p>{product.title}</p>

                    </div>
                )
                : null
            }
        </div>
        <div className="button-container">
            <button disabled={disableButton}onClick={()=> setCount(count + 1)}>Load More Products</button>
            {
                disableButton ? <p>You have reached the bottom!</p>: null
            }
        </div>
    </div>
};
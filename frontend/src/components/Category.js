import React from "react";

export function Category() {
    const category_list = [      
        {
            "id": 1,
            "name": "Electronics",
            "description": "We have products ranging from computers & computer accessories to audio systems that will revolutionalize your leisure.",
            "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        },
        {
            "id": 2,
            "name": "Jewelery",
            "description": "We are changing how you shop for fine gold and gems jewellery",
            "image": "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        },
        {
            "id": 3,
            "name": "Men's clothing",
            "description": "Men's Apparel From Top Brands",
            "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
            "id": 4,
            "name": "Women's clothing",
            "description": "Women's Apparel From Top Brands",
            "image": "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        }
           
    ]

    let itemList = category_list.map(item=>{
        return(
            <div className="card" key={item.id}>
                <a href="/product" style={{textDecoration: "none", textDecorationColor: "black"}}>
                    <span class="link"></span>
                </a>
                    <div className="card-image">
                        <img src={item.image} width='180' height='200'/>
                        <span className="card-title">{item.name}</span>  
                    </div>
                    <div className="card-content">
                        <p>{item.description}</p>
                    </div>       
             </div>
        )
    })

    return (
        <div className="App">
            <header>
                <h5 style={{color: "white"}}>Category</h5>
            </header>
            <div className="box">
                {itemList}
            </div>
        </div>
    );
}
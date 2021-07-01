import React from "react";

function handleSubmit(e:any){
    e.preventDefault();
    console.log('added');

}

function AddItems(){
    console.log('came here');


    return(
        <div><form onSubmit={handleSubmit}>
            <label htmlFor='fruitName'>fruitName</label>
                <input name='fruitName' type='input' placeholder='fruitName'></input></form></div>
    )
}

export default AddItems;
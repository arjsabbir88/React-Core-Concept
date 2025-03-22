export function Todo({task, isDone}){
    
    return (
        <div style={{
            color: "aqua",
            margin: "10px",
            padding: "10px",
            border: "3px solid green"
        }}>
            <li>Task : {task}</li>
            <li>Task : {isDone?"true":"false"}</li>
        </div>
    )
}

// return component using condition

export default function Mobile ({brand,price,color}){
    if(price>= 10000){
        return(
            <div style={{
                color: "aqua",
                margin: "10px",
                padding: "10px",
                border: "3px solid green"
            }}>
                <p>Brand : {brand}</p>
                <p>Price : {price}</p>
                <p>Color : {color}</p>
            </div>
        )
    }
    return(
        <div style={{
            color: "green",
            margin: "10px",
            padding: "10px",
            border: "3px solid red"
        }}>
            <p>Brand : {brand}</p>
            <p>Price : {price}</p>
            <p>Color : {color}</p>
        </div>
    )
}
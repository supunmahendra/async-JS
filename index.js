/*getProducts =(resourceURL, callback) =>{

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.status ===200 && request.readyState === 4){
            // console.log(request.responseText);
            callback(request.responseText, undefined);

        }else if(request.readyState === 4){
            callback(undefined, 'Can not Execute the request!')
        }
    })

    // request.open('GET', 'https://fakestoreapi.com/products');
    request.open('GET', resourceURL);

    request.send();
}




const nowGetSometing = () =>{
    return new Promise ((resolve,reject)=>{
        //resolve('i got somting')
        reject ('I did not get')

    });

}

nowGetSometing().then((data)=>{
    //console.log("what our promise return:", data)
}).catch((error)=>{
    //console.log(error)
})*/





const gateFakeStoreProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/product');
        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.log(error)
    }
}

gateFakeStoreProducts()

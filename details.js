const getproduct=async ()=>{

    const param=new URLSearchParams(window.location.search);
    const id=param.get('id');

    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;

}
const displayproduct =async ()=> {

    const data = await getproduct();
    const images = data.images.map((img)=>{
        return `
<img src=' ${img}' width='200px;'/>
        
        `;

    }).join('');

const result=`
<h2>${data.title}</h2>
<p>${data.description}</p>


`;
document.querySelector(".product").innerHTML=result
document.querySelector(".product-images").innerHTML=images;


};
displayproduct();
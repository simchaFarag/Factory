import axios from 'axios';


const getAll=(url)=>axios.get(url);

const getById=(url,id)=>axios.get(`${url}/${id}`);
const addItem=(url,obj)=>axios.post(url,obj);
const upDate=(url,id,obj)=>axios.put(`${url}/${id}`,obj)
const deleteEmploee=(url,id)=>axios.delete(`${url}/${id}`)


export {getAll,addItem,upDate,getById,deleteEmploee}

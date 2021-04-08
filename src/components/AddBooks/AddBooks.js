import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    console.log(data);
    const bookData = {
      name: data.name,
      price: data.price,
      category: data.category,
      imageURL: imageURL
    };
    const url = `http://localhost:5000/addBook`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
    .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'c38dba077359c836d33630b68d8f48c1');
    imageData.append('image', event.target.files[0]);
    console.log(imageData);
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      console.log(response);
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" type="text" defaultValue="Book name" {...register('name')} />
      <br/>
      <input name="price" type="text" defaultValue="Book price" {...register('price')} />
      <br/>
      <input name="category" type="text" defaultValue="Book category" {...register('category')} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddBooks;
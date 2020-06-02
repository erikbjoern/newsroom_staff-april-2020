import React, { useState }  from 'react'
import axios from "axios";
import WritingForm from "./WritingForm";
import { Container, Image } from "semantic-ui-react";
import createHeaders from "../modules/headers";

const CreateArticle = () => {
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.persist();
      const category = document
        .getElementById("category")
        .firstElementChild.innerText.toLowerCase();
      let encodedImage;
      if (e.target.image.files[0]) {
        encodedImage = await toBase64(e.target.image.files[0]);
      }
      const response = await axios.post(
        "/articles",
        {
          title: e.target.title.value,
          body: e.target.body.value,
          image: encodedImage,
          category: category,
        },
        { headers: createHeaders() }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <Container className="writing-container">
      <WritingForm onSubmitHandler={onSubmitHandler} message={message}/>
    </Container>
  );
};

export default CreateArticle;

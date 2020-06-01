import React from "react";
import categoryList from "../modules/category";
import { Container, Grid, Form, Dropdown, Button } from "semantic-ui-react";
import Preview from "./Preview";

const UpdateArticle = (props) => {
  const categories = categoryList();
  return (
    <Grid columns={2}>
      <Grid.Column id="left">
        <Container>
          <Preview selectedArticle={props.selectedArticle} />
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Form onSubmit={(e) => props.onSubmitHandler(e)}>
          <Form.Field>
            <label>Category</label>
            <Dropdown
              selection
              id="category"
              name="category"
              placeholder={props.selectedArticle.category}
              options={categories}
            ></Dropdown>
          </Form.Field>
          <Form.Field>
            <input
              id="radio-free"
              label="Free"
              name="premium"
              value={true}
              type="radio"
              defaultChecked
            />
            <label style={{ display: "inline" }}> Free </label>
            <input
              id="radio-premium"
              label="Premium"
              name="premium"
              value={false}
              type="radio"
            />
            <label style={{ display: "inline" }}> Premium</label>
          </Form.Field>
          <Button id="publish-btn" type="submit">
            Publish Article
          </Button>
          <p id="message">{props.message}</p>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default UpdateArticle;

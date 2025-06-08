import React, { useState } from "react";
import { nanoid } from "nanoid";
import "../../src/App.css";
import { useForm } from "react-hook-form";
import "../../public/todo.png"

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  // const [title, settitle] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    (data.id = nanoid()), (data.isCoomleted = false);

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    reset();
  };

  console.log(errors);

  return (
    <>
    <form onSubmit={handleSubmit(submitHandler)} className="input-section">
      <input
        {...register("title", { required: "title can't be empty" })}
        type="text"
        placeholder="Add a new task..."
      />
      <button type="submit">Add task</button>
    </form>
     {errors.title && (
        <span className="error">{errors.title.message}</span>
      )} 
    </>
  );
};

export default Create;

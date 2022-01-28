import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const About = () => {
  const [arr, setArr] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    setArr(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register('First name', {
            required: true,
            maxLength: 80,
          })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register('Last name', {
            required: true,
            maxLength: 100,
          })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register('Email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          {...register('Title', {
            required: true,
          })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register('Developer', {
            required: true,
          })}
          type="radio"
          value="Yes"
        />
        <input
          {...register('Developer', {
            required: true,
          })}
          type="radio"
          value="No"
        />

        <input type="submit" />
      </form>
      {arr}
    </>
  );
};

export default About;

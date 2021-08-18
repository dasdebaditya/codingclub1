import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>



        <div className='form-inputs'>
          <label className='form-label'>Team Leader Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Team Leader Department</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Team Leader Year</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Team Leader Contact</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Team Leader Email</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Member 1 Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 1 Department</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 1 Year</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 1 Contact</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
        
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Member 2 Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 2 Department</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 2 Year</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 2 Contact</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>
        

        <div className='form-inputs'>
          <label className='form-label'>Member 3 Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 3 Department</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
        
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 3 Year</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Member 3 Contact</label>
          <input
            className='form-input'
            type='text'
            name='username'
            // placeholder='Enter your username'
            // value={values.username}
            onChange={handleChange}
          />
          
        </div>
        
        <button className='form-input-btn' type='submit'>
          Register!
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;

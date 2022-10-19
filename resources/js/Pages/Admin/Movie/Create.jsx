import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head, useForm } from '@inertiajs/inertia-react'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import Checkbox from '@/Components/Checkbox'

export default function Create({auth}) {
  const {setData, post, processing, errors} = useForm({
    name:'',
    category:'',
    video_url:'',
    thumbnail:'',
    rating:'',
    is_featured: false,
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
  }

  const submit = (e) => {
    e.preventDefault();

    post(route('admin.dashboard.movie.store'));
  }

  return (
    <Authenticated auth={auth}>
      <Head title='Admin - Create Movie'/>
      <h1 className='text-xl'>Create Movie</h1>
      <hr className='mb-4'/>

      <form onSubmit={submit}>
        {/* Name*/}
        <InputLabel forInput='name' value='Name'/>
        <TextInput 
          type='text' 
          name='name'
          variant='primary-outline'
          handleChange={onHandleChange} 
          placeholder='Enter the name of the movie'
          isError={errors.name}
          />
        <InputError message={errors.name} className='mt-2'/>
        
        {/* Category */}
        <InputLabel forInput='category' value='Category' className='mt-4'/>
        <TextInput 
          type='text' 
          name='category'
          variant='primary-outline'
          handleChange={onHandleChange} 
          placeholder='Enter the category'
          />
        <InputError message={errors.category} className='mt-2'/>
        
        {/* Video Url */}
        <InputLabel forInput='video_url' value='Video URL' className='mt-4'/>
        <TextInput 
          type='text' 
          name='video_url'
          variant='primary-outline'
          handleChange={onHandleChange} 
          placeholder='Enter the category'
          />
        <InputError message={errors.video_url} className='mt-2'/>
        
        {/* Thumbnail */}
        <InputLabel forInput='thumbnail' value='Thumbnail' className='mt-4'/>
        <TextInput 
          type='file' 
          name='thumbnail'
          variant='primary-outline'
          handleChange={onHandleChange} 
          placeholder='Insert thumbnail of the movie'
          />
        <InputError message={errors.thumbnail} className='mt-2'/>
        
        {/* Rating */}
        <InputLabel forInput='rating' value='Rating' className='mt-4'/>
        <TextInput 
          type='number' 
          name='rating'
          variant='primary-outline'
          handleChange={onHandleChange} 
          placeholder='Enter the category'
          />
        <InputError message={errors.rating} className='mt-2'/>
        
        {/* is Featured */}
        <div className='flex flex-row mt-4 items-center'>
          <InputLabel forInput='is_featured' value='Is Featured' className='mr-3 mt-1'/>
          <Checkbox 
            name='is_featured'
            handleChange={(e) => setData('is_featured', e.target.checked)}    
          />
        </div>
        <PrimaryButton type='submit' className='mt-4' processing={processing} children='Submit'/>
      </form>

    </Authenticated>
  )
}

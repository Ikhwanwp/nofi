import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import PrimaryButton from '@/Components/PrimaryButton'
import Authenticated from '@/Layouts/Authenticated/Index'
import FlashMessage from '@/Components/FlashMessage'

export default function Index({auth, flashMessage, movies}) {
  return (
    <Authenticated auth={auth}>
        <Link href={route('admin.dashboard.movie.create')}>
          <PrimaryButton children='Create Movie' className='w-40 mb-8' type='button'/>
        </Link>
        {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
        )}
        <table className='table-fixed w-full text-center'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>
                  <img src={`/storage/${movie.thumbnail}`} className='w-32 rounded-md'/>
                </td>
                <td>
                  {movie.name}
                </td>
                <td>
                  {movie.category}
                </td>
                <td>
                  {movie.rating.toFixed(1)}
                </td>
                <td>
                  <Link href={route("admin.dashboard.movie.edit", movie.id)}>
                    <PrimaryButton type='button' variant='warning' children='Edit'/>
                  </Link>
                  <PrimaryButton type='button' variant='danger' children='Delete'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </Authenticated>
  )
}

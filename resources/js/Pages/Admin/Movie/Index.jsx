import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import PrimaryButton from '@/Components/PrimaryButton'
import Authenticated from '@/Layouts/Authenticated/Index'
import FlashMessage from '@/Components/FlashMessage'

export default function Index({auth, flashMessage}) {
  return (
    <Authenticated auth={auth}>
        <Link href={route('admin.dashboard.movie.create')}>
          <PrimaryButton children='Create Movie' className='w-40 mb-8' type='button'/>
        </Link>
        {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
    </Authenticated>
  )
}

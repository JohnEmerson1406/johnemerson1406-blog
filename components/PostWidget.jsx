import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
      } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug, categories])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Postagens relacionadas' : 'Postagens recentes' }
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              className='align-middle rounded-full object-cover h-14 w-14'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-2'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('DD MMM. YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md' passHref>
              <span className='hover:text-pink-600 cursor-pointer'>
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

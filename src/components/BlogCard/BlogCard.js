import React from 'react'
import imageURLs from '@/utils/imageURLs'

const BlogCard = ({ blog }) => {
  return (
    <div className="blogCardMain">
        <div className="blogCard_hover" style={{backgroundImage: `url(${imageURLs.blogs.card2})`}}></div>
        <div className="blogCard" style={{backgroundImage: `url(${imageURLs.blogs.card})`}}>
            <div className="blogCard_text1">
                <span className="blogCard_text1_title">{blog?.title}</span>
                <span className="blogCard_text1_category"><span>{blog?.category}</span></span>
            </div>

            <div className="blogCard_text2">
                <div className="blogCard_text2_date">{blog?.date}</div>
                <div className="blogCard_text2_text">{blog?.description}</div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard

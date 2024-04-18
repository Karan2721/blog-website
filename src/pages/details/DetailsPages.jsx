import React, { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { blog } from "../../assets/data/data";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const selectedBlog = blog.find((item) => item.id === parseInt(id));
    if (selectedBlog) {
      setBlogData(selectedBlog);
    }
  }, [id]);

  return (
    <>
      {blogData && (
        <section className='singlePage'>
          <div className='container'>
            <div className='right'>
              <h1>{blogData.title}</h1>
              <img src={blogData.cover} alt='' />
              <p>{blogData.desc}</p>
              <p>Author: {blogData.author}</p>
              <div className='date'>
                <AiOutlineComment className='icon' /> <label htmlFor=''>{blogData.comments}</label>
                <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

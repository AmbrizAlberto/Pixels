// src/components/Posts.jsx

'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className='Posts'>
      {posts.map((post) => (
        <div key={post.id} className="publis">
          <div className='containerpost'>
            <div className='infouser'>
              <div className='nameuser'>{post.author.username}</div>
            </div>
            <div className='contain'>
              {post.imageUrl && (
                <div className='photopost'>
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    width={300} 
                    height={200} 
                    layout="responsive" // Usar responsive para adaptar la imagen al contenedor
                    objectFit="cover"   // Ajustar la imagen para cubrir el contenedor
                  />
                </div>
              )}
              <div className='photodesc'>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

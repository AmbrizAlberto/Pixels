// posts.jsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../public/css/posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='Posts'>
      <br />
      {posts.map(post => (
        <div key={post.id} className="publis">
          <div className='containerpost'>
            <div className='infouser'>
              <div className='imguser'>
                <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
              </div>
              <div className='nameuser'>
                AlDev
              </div>
            </div>
            <div className='contain'>
              <div className='photopost'>
                <img src="https://i.pinimg.com/originals/a9/95/63/a995634384bf179509c82723aa748af1.jpg" alt="" />
              </div>
              <div className='photodesc'>
                <h1>{post.title}</h1>
                <h1>{post.description}</h1>
                <h1>Propiedades</h1>
                <h2><i className="bi bi-camera"></i> Sony</h2>
                <h2><i className="bi bi-fan"></i> f1.2</h2>
              </div>
            </div>
            <div className='postabajo'>
              <div className="resumen">
                <p>10,000 Likes</p>
                <p>10,000 Comentarios</p>
              </div>
              <div className="reactions">
                <button className="btn btn-primary"><i className="bi bi-star"></i></button>
                <button className="btn btn-secondary"><i className="bi bi-chat"></i></button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}

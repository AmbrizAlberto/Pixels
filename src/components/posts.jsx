// posts.jsx
// pages/posts.jsx

import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../public/css/posts.css";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) {
                    throw new Error('Error fetching posts');
                }
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
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="publis">
                        <div className='containerpost'>
                            <div className='infouser'>
                                <div className='imguser'>
                                    <img src="https://3.bp.blogspot.com/-MAtrroD5mj8/UKl-JropN-I/AAAAAAABQ9Y/2kIMSnm_4Jw/s1600/Beletsi_Lake_Parnitha_HDR_.jpg" alt="" />
                                </div>
                                <div className='nameuser'>
                                    {post.author ? post.author.username : 'Usuario Desconocido'}
                                </div>
                            </div>
                            <div className='contain'>
                                <div className='photopost'>
                                    <img src="https://i.pinimg.com/originals/a9/95/63/a995634384bf179509c82723aa748af1.jpg" alt="" />
                                </div>
                                <div className='photodesc'>
                                    <h1>{post.title}</h1>
                                    <p>{post.description}</p>
                                    {/* Aquí puedes añadir más detalles del post si lo necesitas */}
                                </div>
                            </div>
                            <div className='postabajo'>
                                {/* Añadir más detalles o interacciones si es necesario */}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Cargando posts...</p>
            )}
            <br />
        </div>
    );
}

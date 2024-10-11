import React, { useContext } from 'react'
import Spinner from './Spinner';
import { AppContext } from './Context/AppContext';



const Blogs = () => {
    // using contextAPI
    const {loading,posts} = useContext(AppContext);

    return (

    <div>
        {
            loading? (<Spinner/>) : (posts.length===0?
            (
                <div>No Post Found</div>
            ):
            (posts.map( (post)=>(
                <div key={post.id} className=' m-4 rounded-xl bg-violet-950 shadow-white/50 shadow-sm p-2 w-[20rem]'>
                     <div>
                        <img src={post.img} className='w-[100%] object-cover'/>
                     </div>
                     <div className=' text-white'>
                        <p className='font-medium text-sky-500 text-lg'>{post.title}</p>
                        <p className='font-light'>By <span>{post.author} </span>on <span>{post.category}</span></p>
                        <p className='font-light pb-2'>posted on <span>{post.date}</span> </p>
                        
                        <p className=' overflow-y-scroll h-28'>{post.content}</p>
                        {/* since tags in the api object is an array, we need to define a different mapping method */}
                        <p>{post.tags.map((tag,index)=>{
                            return<span key={index}>{`#${tag}`}</span>
                        })}</p>
                        
                     </div>
                </div>
            ) )))
            
        }
    </div>
  )
}

export default Blogs
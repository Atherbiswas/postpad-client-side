import React from 'react';
import { FaEdit, FaReadme} from 'react-icons/fa';
import { GrUpload } from "react-icons/gr";
import { BsFillSuitHeartFill } from "react-icons/bs";

const SecondColumn = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <FaEdit className='lg:text-3xl text-xl font-bold'></FaEdit>
                <h2 className='lg:text-3xl text-xl font-bold lg:mx-1'>Create An Account for log in.</h2>
                </div>
            <div className='flex justify-center items-center mt-5'>
                <GrUpload className='lg:text-3xl text-xl font-bold'></GrUpload>
                <h2 className='lg:text-3xl text-xl font-bold lg:mx-1'>Upload image and write blog.</h2>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <BsFillSuitHeartFill className='lg:text-3xl text-xl font-bold'></BsFillSuitHeartFill>
                <h2 className='lg:text-3xl text-xl font-bold lg:mx-2'>React Love/Like on the post.</h2>
            </div>
            <div className='flex justify-center items-center  mt-5'>
                <FaReadme className='lg:text-3xl text-xl font-bold'></FaReadme>
                <h2 className='lg:text-3xl text-xl font-bold lg:mx-2'>See & read other post/Blog </h2>
            </div>
        </>
    );
};

export default SecondColumn;
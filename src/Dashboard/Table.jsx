import React from 'react';
import { BsTrash3Fill } from "react-icons/bs";

const Table = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <section className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-[#323969]  sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3'>USER IMAGE</th>
                            <th className='py-3'>NAME</th>
                            <th className='py-3'>EMAIL</th>
                            <th className='py-3'>ROLE</th>
                            <th className='py-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        <tr className="border-b-2 text-[#737373]">
                            <td className="py-2 text-center text-[#151515] font-bold">1</td>
                            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src='https://i.ibb.co/zSf4QdG/licensed-image-3.jpg' alt="" /></td>
                            <td className="py-2 text-center">item_name</td>
                            <td className="py-2 text-center">Category</td>
                            <td className="py-2 text-center">$price</td>
                            <td className="py-2"><button  className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill /></button></td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Table;
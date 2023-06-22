import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useClasses from '../../../hooks/useClasses';
import ManageClassCard from '../component/ManageClassCard';

const ManageClasess = () => {
    const { classes, refetch } = useClasses("all")
    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(null)
    const { axiosSecure } = useAxiosSecure()
    const updateStatus = async (status, id) => {
        const res = await axiosSecure.put(`/change-class-status/${id}`, { status })
        if (res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Status Has Updated',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    const sendFeedback = (e) => {
        e.preventDefault()

        if (e.target.feed.value) {
            axiosSecure.put(`/send-feedback/${id}`, { feedback: e.target.feed.value })

                .then(res => {

                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Feedback Has been Sent',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            e.target.reset()
            setIsOpen(false)
        }
    }

    const openFeed = (id) => {
        setIsOpen(true)
        setId(id)
    }
    return (
        <div className="mt-20">

            <div>
                <div className={`${isOpen ? "" : "hidden"} p-4 max-w-[700px] h-[300px] shadow-lg fixed z-[111111] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded bg-white`}>
                    <form onSubmit={sendFeedback}>
                        <textarea required name='feed' placeholder='write your feedback' className='w-full h-[220px] text-black resize-none outline-0 border-2 p-4 rounded'></textarea>
                        <div className='flex justify-center gap-3 mt-2 mb-3'>
                            <button className='px-4 py-2  rounded bg-sky-300'>Send</button>
                            <div onClick={() => setIsOpen(false)} className='px-4 py-2 bg-sky-300 rounded cursor-pointer '>close</div>
                        </div>
                    </form>
                </div>
                <h1 className="text-2xl font-semibold mb-4">Manage Classes:{classes.length}</h1>
                <section className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                    <table className='w-full text-black'>
                        <thead >
                            <tr className='bg-sky-300  sticky top-0 px-10'>
                                <th className='py-3'>SL</th>
                                <th className='py-3'>Class Image</th>
                                <th className='py-3'>Class Name</th>
                                <th className='py-3'>Instructor Email</th>
                                <th className='py-3'>Instructor Name</th>
                                <th className='py-3'>Available Seats</th>
                                <th className='py-3'>Price</th>
                                <th className='py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                classes && classes.map((singleClass, i) => <ManageClassCard key={singleClass._id} updateStatus={updateStatus} openFeed={openFeed} i={i} singleClass={singleClass} />)
                            }

                        </tbody>
                    </table>
                </section>
            </div>
         </div>   );
};

            export default ManageClasess;
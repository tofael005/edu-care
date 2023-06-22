import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useSelectedClasses from '../../../hooks/useSelectedClasses';
import SelectedClassTable from './SelectedClassTable';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';


const MySelectCourse = () => {
    useTitle("MySelectCourses")

    const { selectedClasses, refetch } = useSelectedClasses()
    const { axiosSecure } = useAxiosSecure()
    const deleteSelectedClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-selected-class/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="mt-20">
            <div className='flex items-center justify-between'>
                <h1 className='mb-2 text-2xl font-bold'>Select Class:{selectedClasses.length} </h1>
                <Link to='/dashboard/payment'>
                    <button className='bg-sky-300 mb-4 hover:bg-sky-500 font-semibold px-6 py-2 rounded-md '>Pay</button>
                </Link>
            </div>
            <div className='max-w-[1240px] mx-auto'>
                <section className='  h-[500px]  overflow-x-auto relative'>
                    <table className='w-full '>
                        <thead >
                            <tr className='bg-sky-300  sticky top-0 px-10 py-3'>
                                <th className='py-3'>Sl</th>
                                <th className='py-3'>Class Image</th>
                                <th className='py-3'>Class Name</th>
                                <th className='py-3'>Instructor Name</th>
                                <th className='py-3'>Instructor Email</th>
                                <th className='py-3'>Price</th>
                                <th className='py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                selectedClasses && selectedClasses.map((singleClass, i) => <SelectedClassTable key={singleClass._id} singleClass={singleClass} i={i} deleteSelectedClass={deleteSelectedClass} />)
                            }

                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default MySelectCourse;
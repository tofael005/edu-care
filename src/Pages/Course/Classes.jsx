import CourseCard from './CourseCard';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useClasses from '../../hooks/useClasses';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Classes = () => {
    useTitle("Classes")
    const { classes } = useClasses('Approved');
    const { user } = useAuth()
    const navigate = useNavigate()
    const { axiosSecure } = useAxiosSecure()
    const seletedClass = async (singleClass) => {

        if (user?.email) {
            const addToClass = {
                class_id: singleClass._id,
                class_name: singleClass.class_name,
                class_image: singleClass.class_image,
                instructor_name: singleClass.instructor_name,
                instructor_email: singleClass.instructor_email,
                price: singleClass.price,
                email: user?.email
            }


            const res = await axiosSecure.post("/select-class", addToClass)
            if (res.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'This class is selectd',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        }
        else {
            Swal.fire({
                title: 'Login In First',
                text: "Without login you are not select any class",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            })
        }


    }
    return (
        <div className='mt-[90px]'>
            <h1 className="text-center font-bold border w-80 block mx-auto p-3 rounded-md text-3xl my-9">This our all classes</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 my-6 gap-8 px-3">
                {
                    classes.map((singleCard, _id) => <CourseCard key={_id} singleCard={singleCard} seletedClass={seletedClass} />) 
                }

            </div>
        </div>
    );
};

export default Classes;
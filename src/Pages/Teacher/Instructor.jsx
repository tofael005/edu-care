
import SingleInstructor from './SingleInstructor';
import useTitle from '../../hooks/useTitle';
import useInstructors from '../../hooks/useInstructors';



const Instructor = () => {
    useTitle("Instructor")
    

    const { instructors } = useInstructors();
    return (
        <div className='mt-[90px]'>
            
            <h1 className="text-center mt-5 mb-6 text-3xl font-bold">Our honorable Instructor</h1>
            <div className="max-w-[1240px] mx-auto gap-6 grid md:grid-cols-3 px-3 mb-20">
                {
                    instructors.map((singleInstructor, id) => <SingleInstructor key={id} singleInstructor={singleInstructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default Instructor;
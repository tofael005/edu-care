import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import useTitle from "../../../hooks/useTitle";
import EnrolledClassTable from "./EnrolledClassTable";





const MyEnrolledCours = () => {
    useTitle("Enrolled Course")
    const { enrolledClasses } = useEnrolledClasses()


    return (
        <main className='h-screen mt-20 overflow-hidden'>
            <h1 className="text-2xl font-bold mb-4">Enrolled Classes:{enrolledClasses.length}</h1>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-sky-300'>
                            <th className='py-3 text-black'>Sl</th>
                            <th className='py-3 text-black'>Class Image</th>
                            <th className='py-3 text-black'>Class Name</th>
                            <th className='py-3 text-black'>Instructor Name</th>
                            <th className='py-3 text-black'>Instructor Email</th>
                            <th className='py-3 text-black'>Price</th>

                        </tr>
                    </thead>
                    <tbody >

                        {
                            enrolledClasses && enrolledClasses.map((singleClass, i) => <EnrolledClassTable key={singleClass._id} singleClass={singleClass} i={i} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default MyEnrolledCours;
import useTitle from "../../../hooks/useTitle";
import ClassTable from "../component/ClassTable";
import useMyClasses from "../../../hooks/useMyClasses";



const MyCourse = () => {
    useTitle("My Classes")
    const { classes } = useMyClasses()

    return (
        <main className='h-screen overflow-hidden'>
            <div className='flex items-center justify-between mt-20 font-bold'>
                <h3 className='text-2xl'>My Classes: {classes.length > 0 ? classes.length : 0}</h3>
            </div>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-sky-300'>
                            <th className='py-3'></th>
                            <th className='py-3'>Class Image</th>
                            <th className='py-3'>Total enrolled</th>
                            <th className='py-3'>Class Name</th>
                            <th className='py-3'>Feedback</th>
                            <th className='py-3'>Status</th>
                            <th className='py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            classes && classes.map((singleClass, i) => <ClassTable key={singleClass._id} i={i} singleClass={singleClass} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default MyCourse;
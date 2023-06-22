
import SingleCourse from './SingleCourse';
import 'aos/dist/aos.css';
import usePopularClasses from '../../hooks/usePopularClasses';

const TopCourse = () => {
    const { popularClasses } = usePopularClasses();
    return (
        <div>
            <h1 className="text-center my-8 px-3 text-3xl font-bold">Our Top Classes</h1>
            <div className="max-w-[1240px] px-3 mx-auto grid md:grid-cols-3 gap-6">
                {
                    popularClasses.map((singleData, id) => <SingleCourse key={id} singleData={singleData}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default TopCourse;
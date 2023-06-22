import React from 'react';
import Banner from '../../Header/Banner';
import CourseCategory from '../Courses/CourseCategory';
import TopCourse from '../Courses/TopCourse';
import Analitiks from '../Courses/Analitiks';
import Teacher from '../Teacher/Instructor';
import StudentFeedBack from './StudentFeedBack';
import useTitle from '../../hooks/useTitle';



const Home = () => {
    useTitle("Home")
    return (
        <div>
            
            <div>
                <Banner />
                <CourseCategory />
                <TopCourse />
                <Analitiks />
                <Teacher />
                <StudentFeedBack />
            </div>
        </div>
    );
};

export default Home;
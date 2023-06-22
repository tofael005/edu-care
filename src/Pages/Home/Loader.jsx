import React from 'react';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-68px)]">
            <Grid
                height="80"
                width="80"
                color="#7bd5f6cf"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;
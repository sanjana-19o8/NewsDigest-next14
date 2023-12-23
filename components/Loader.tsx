import Image from "next/image";
import React from "react";

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <Image
                width={100}
                height={100}
                alt="Loading..."
                src="/loader.svg"
            />
            <h1>The NEWS Digest</h1>
            <span>Your one stop shop for all the latest coverage</span>
        </div>
    );
};

export default Loader;
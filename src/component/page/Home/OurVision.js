import React from "react";

const OurVision = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://cdn-cjcgn.nitrocdn.com/AqZGLUgovpyOEexQpCZfkhWEayCsnoKP/assets/static/optimized/rev-293e6df/wp-content/themes/custom-wagner/images/storybrand-wood-stakes-bg.jpg)",
                }}
                alt="name"
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Vision</h1>
                        <div className="text-4xl">
                            LIFE'S TOO SHORT TO WASTE YOUR HARD WORK
                        </div>
                        <p className="mb-5 text-xl">
                            Unchecked moisture can cost time, money, and your
                            reputation. Are you really willing to risk that?
                        </p>
                        <button className="btn btn-primary">
                            Get Started{" "}
                            <svg
                                className="w-8 h-8 ml-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                                <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVision;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const BusinessSummary = () => {
    return (
        <div className="mx-auto w-50 my-8 py-8">
            <div className="text-center text-3xl">Business Summary</div>
            <OwlCarousel
                className="owl-carousel"
                loop={true}
                nav={false}
                dots={false}
                autoplay={true}
                items={1}
                key="1"
            >
                {/* Item 1 */}
                <div className="item">
                    <div className="m-5">
                        <div className="flex items-center justify-center">
                            <div className="card w-96 bg-base-100 shadow-xl image-full text-center justify-center">
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-center text-6xl">
                                        We Served{" "}
                                    </h2>
                                    <p className="text-xl">100+ customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- -- -- -- */}
                {/* Item 2 */}
                <div className="item">
                    <div className="m-5">
                        <div className="flex items-center justify-center">
                            <div className="card w-96 bg-base-100 shadow-xl image-full text-center justify-center">
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-center text-6xl">
                                        Annual revenue{" "}
                                    </h2>
                                    <p className="text-xl">100M+ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- -- -- -- */}
                {/* Item 3 */}
                <div className="item">
                    <div className="m-5">
                        <div className="flex items-center justify-center">
                            <div className="card w-96 bg-base-100 shadow-xl image-full text-center justify-center">
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-center text-6xl">
                                        Reviews{" "}
                                    </h2>
                                    <p className="text-xl">33K+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- -- -- -- */}
                {/* Item 4 */}
                <div className="item">
                    <div className="m-5">
                        <div className="flex items-center justify-center">
                            <div className="card w-96 bg-base-100 shadow-xl image-full text-center justify-center">
                                <figure>
                                    <img
                                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-center text-6xl">
                                        Tools{" "}
                                    </h2>
                                    <p className="text-xl">50+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- -- -- -- */}
            </OwlCarousel>
        </div>
    );
};

export default BusinessSummary;

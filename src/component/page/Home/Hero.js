import React from "react";
import { Link } from "react-router-dom";
const Hero = ({ img }) => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://cdn-cjcgn.nitrocdn.com/AqZGLUgovpyOEexQpCZfkhWEayCsnoKP/assets/static/optimized/rev-293e6df/wp-content/uploads/2013/04/click-here-family-photo-small.jpg"
                        className="max-w-lg rounded-lg shadow-2xl"
                        alt="Hero"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Wholesale Master</h1>
                        <p className="py-6 text-2xl">
                            In our list of 40 tools, you'll find carpenter
                            tools, woodshop tools, woodworking power tools, and
                            the best woodworking tools.
                        </p>
                        <Link to="products" className="btn btn-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

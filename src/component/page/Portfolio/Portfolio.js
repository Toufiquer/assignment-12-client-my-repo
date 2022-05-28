import React from "react";
import { a } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="my-16 container  mx-auto">
            <div className="container">
                <div className="text-left text-2xl grid grid-cols-1 gap-2">
                    <h2 className="border p-2">Name: Toufiquer Rahman.</h2>
                    <h2 className="border p-2">
                        Email: toufiquerabc@gmail.com
                    </h2>
                    <h2 className="border p-2">
                        Educational Background: I completed HSC in 2017 in
                        Cantonment public School. also, I completed SSC in 2015
                        from Cantonment Board Heigh School. Now I am an
                        undergraduate student at National University. I am
                        studying Physics. I love physics.
                    </h2>
                    <div className="border p-2">
                        Now I dont have any port folio website but here some,{" "}
                        <br />
                        <br />
                        Just Normal Website :
                        <a
                            className="btn btn-xm"
                            target="_blank"
                            rel="noreferrer"
                            href="https://toufiquer.github.io/portfolio/"
                        >
                            Click for Live
                        </a>
                        <br />
                        <br />
                        From Practice :
                        <a
                            className="btn btn-xm"
                            target="_blank"
                            rel="noreferrer"
                            href="https://new-pro-bcfd7.web.app/"
                        >
                            Click for Live
                        </a>
                        <br />
                        <br />
                        From Assignment 11 :
                        <a
                            className="btn btn-xm"
                            target="_blank"
                            rel="noreferrer"
                            href="https://assignment-11-c2cc1.web.app/"
                        >
                            Click for Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

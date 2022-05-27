import React from "react";

const WeAreBest = () => {
    return (
        <div className="my-16">
            <div className="text-center text-2xl my-4">Best Offer</div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title">25 %</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi</p>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title">30 %</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi</p>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title">35 %</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreBest;

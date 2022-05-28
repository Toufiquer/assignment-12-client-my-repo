import React from "react";

const Blogs = () => {
    return (
        <>
            <div className="container mx-auto">
                {/*  Question 1*/}
                <div className="collapse my-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        1. How will you improve the performance of a React
                        Application?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        {/* Start */}

                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            What can I do to improve the
                                            performance of a React Application{" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            Keeping component state local where
                                            necessary.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Memoizing React components to
                                            prevent unnecessary re-renders.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            {" "}
                                            Code-splitting in React using
                                            dynamic import()
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Windowing or list virtualization in
                                            React.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Lazy loading images in React.</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* _--_-__-__ */}

                        {/* End */}
                    </div>
                </div>
                {/* -- --- ---- -----  */}
                {/*  Question 2*/}
                <div className="collapse my-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        2. What are the different ways to manage a state in a
                        React application?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        {/* Start */}

                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            There are four main types of state
                                            you need to properly manage in your
                                            React apps
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            1. Local state , 2. Global state, 3.
                                            Server state, 4. URL state
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Local (UI) state - Local state is
                                            data we manage in one or another
                                            component.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Local state is most often managed in
                                            React using the useState hook.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Global (UI) state - Global state is
                                            data we manage across multiple
                                            components.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Server state - Data that comes from
                                            an external server that must be
                                            integrated with our UI state.
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            URL state - Data that exists on our
                                            URLs, including the pathname and
                                            query parameters.
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* _--_-__-__ */}

                        {/* End */}
                    </div>
                </div>
                {/* -- --- ---- -----  */}
                {/*  Question 3*/}
                <div className="collapse my-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        3. How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        {/* Start */}

                        <div class="text-2xl my-4">
                            When it comes to inheritance, JavaScript only has
                            one construct: objects. Each object has a private
                            property which holds a link to another object called
                            its prototype. That prototype object has a prototype
                            of its own, and so on until an object is reached
                            with null as its prototype. By definition, null has
                            no prototype, and acts as the final link in this
                            prototype chain.
                        </div>
                        <hr />
                        <div class="text-2xl">
                            JavaScript objects are dynamic "bags" of properties
                            (referred to as own properties). JavaScript objects
                            have a link to a prototype object. When trying to
                            access a property of an object, the property will
                            not only be sought on the object but on the
                            prototype of the object, the prototype of the
                            prototype, and so on until either a property with a
                            matching name is found or the end of the prototype
                            chain is reached.
                        </div>
                        {/* _--_-__-__ */}

                        {/* End */}
                    </div>
                </div>
                {/* -- --- ---- -----  */}
                {/*  Question 4*/}
                <div className="collapse my-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        4. Why you do not set the state directly in React. For
                        example, if you have const [products, setProducts] =
                        useState([]). Why you do not set products = [...]
                        instead, you use the setProducts
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        {/* Start */}

                        <div class="text-2xl my-4">
                            We need to load a dynamic data. one is loaded first
                            then we update data as we need. but we need to fixed
                            out put to display data. in short we use [products,
                            setProducts] = useState([]). products to show in ui.
                            setProducts for update products. And it is a useful
                            tool.
                        </div>
                        {/* _--_-__-__ */}

                        {/* End */}
                    </div>
                </div>
                {/* -- --- ---- -----  */}
                {/*  Question 5 */}
                <div className="collapse my-6">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        5. What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-base-200-content">
                        {/* Start */}

                        <div class="text-2xl my-4">
                            UNIT TESTING is a type of software testing where
                            individual units or components of a software are
                            tested. The purpose is to validate that each unit of
                            the software code performs as expected. Unit Testing
                            is done during the development (coding phase) of an
                            application by the developers. Unit Tests isolate a
                            section of code and verify its correctness. A unit
                            may be an individual function, method, procedure,
                            module, or object.
                        </div>
                        {/* _--_-__-__ */}

                        {/* End */}
                    </div>
                </div>
                {/* -- --- ---- -----  */}
            </div>
        </>
    );
};

export default Blogs;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron">
                    <h2 className=""><span>Q:1. </span>How does React work ?</h2>
                    <p> <b>Answer: </b></p>
                          <article> React is a JavaScript library for building user interfaces that does not commit state changes one after the other if there are multiple state changes. Instead, React goes works through its virtual DOM ,creates a list of those changes that need to be make to the actual DOM and It does it all in one single process. React implements a virtual DOM that is normally a DOM tree representation in JavaScript. It read or write to the DOM, it will use the virtual represent. and the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        </article><br />
                    </div>
                    <div>
                        <h2>Q:2. What is the difference between Props  and State?</h2>
                        <p></p>
                        <p > <b>Answer: </b></p>
                        <b>Props : </b>
                        1.Props are read-only.
						2.Props are immutable.
						3.In Props data is passed from one component to another.
						4.Props can be accessed by the child component.
						5.Props are used to communicate between components.
                        
                        <br />

                        <b>State: : </b>
                        1.State changes can be asynchronous.
                        2.State is mutable.
                        3.In State data is passed within the component only.
                        4.State cannot be accessed by child components.
                        5.States can be used for rendering dynamic changes with the component.
                    </div>

                    <h2><span>Q:3. </span>How Use State Works?</h2>
                            <p> <b>Answer: </b></p>
                        <article> The React useState Hook allows to track state in a functional component. Its initialize use state by the calling useState in function component that changes can be asynchronous. It is generally refers to data or properties that need to be tracking in an application.useState is a Hook function that allows you to have state variables in functional components. It initial state to this function and it returns a variable with the current state value and another function to update this value.

                        </article>
                    </div>
                </div>
            </div>
    );
};

export default Footer;
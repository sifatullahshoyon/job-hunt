import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-5 p-5'>
            <div>
                <div className='mb-5'>
                    <h3 className='font-manrope font-bold text-lg uppercase mb-3'><span>1.</span> When should you use context API?</h3>
                    <p className='font-manrope text-justify capitalize'><span className='font-semibold'>Answer:-</span> Managing the state is an essential part of developing applications in React. A common way to manage the state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application.  But it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.  Fortunately, React provides a built-in feature known as the context API that helps  “teleport” data to the components that need it without passing props.  In this article, we'll explore how the context API works and how to use it effectively in your React applications.</p>
                </div>
                <div className='mb-5'>
                    <h3 className='font-manrope font-bold text-lg uppercase mb-3'><span>2.</span> What is a custom hook?</h3>
                    <p className='font-manrope text-justify capitalize'><span className='font-semibold'>Answer:-</span> A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.  A custom Hook has the following features-
                    <ul className='list-disc mt-2 pl-5'>
                        <li>As a function, it takes input and returns output.</li>
                        <li>Its name starts with use like useQuery, useMedia...</li>
                        <li>Unlike functional components, custom looks to return normal non-jsx data.</li>
                        <li>Unlike normal functions, custom hooks can use other hooks such as useState, useRef, and other custom hooks.</li>
                    </ul>
                    </p>
                </div>
                <div className='mb-5'>
                    <h3 className='font-manrope font-bold text-lg uppercase mb-3'><span>3.</span> What is useRef?</h3>
                    <p className='font-manrope text-justify capitalize'><span className='font-semibold'>Answer:-</span> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef hook is a new addition in React 16.8. To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage. The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and help in caching and storing previous value</p>
                </div>
                <div className='mb-5'>
                    <h3 className='font-manrope font-bold text-lg uppercase mb-3'><span>4.</span> What is useMemo?</h3>
                    <p className='font-manrope text-justify capitalize'><span className='font-semibold'>Answer:-</span> useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
                    <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies)</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
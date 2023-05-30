import React from 'react';
import Blog from './Blog';
import './styleOfBlog.css'

const BlogContainer = () => {
    const blogsArr = [
        {id:1,question:'Tell us the differences between uncontrolled and controlled components.',answer:'Props are commonly used to customize the behavior or appearance of a child component. For example, a parent component may pass a prop to a child component to specify its color, size, or content. Props are passed as attributes to the child component in the JSX code. State, on the other hand, is used to manage data that can change over time, such as user input or the current state of a game. State is declared in the constructor of a component as an object, and can be accessed using the this.state object. To update the state of a component, We  can use the this.setState() method, passing in an object that specifies the new state values.'},
        {id:2,question:'How to validate React props using PropTypes?',answer:'useState is a built-in React hook that allows functional components to have state, which is a way to store and manage data that changes over time.how useState works: 1.Import the useState hook 2.The useState hook returns an array with two elements: the first element is the current state value, and the second element is a function that can be used to update the state. We  can can declare a state variable and its initial value by calling useState and passing in the initial value as an argument.And 3.Using the state variable and its update function in the component:'},
        {id:3,question:'Tell us the difference between nodejs and express js.',answer:'In React, the useEffect hook is used for performing side effects in a functional component. Side effects can include things not only fetching data from an API but also setting up event listeners, or modifying the DOM.'},
        {id:4,question:'What is a custom hook, and why will you create a custom hook?',answer:'React is a popular front-end JavaScript library that is used to build user interfaces. At a high level, React works by creating a virtual representation of the UI in memory, and then rendering that UI to the browser.'}
    ]
    return (
        <div className='answering'>
        <h3><span className='wcome'>Welcome</span> to Blog Section</h3>
        {
            blogsArr.map(result=><Blog
                key={result.id}
                result = {result}
            ></Blog>)
        }
    </div>
    );
};

export default BlogContainer;
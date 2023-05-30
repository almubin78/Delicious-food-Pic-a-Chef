import React from 'react';

const Blog = ({ result }) => {
    const { id, question, answer } = result;
    return (
        <div className='single-q-a'>
            <span>{id}: {question}</span>
            <div className="answer">
                <h5>Answer: {answer}</h5>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';

const About = () => {
    return (
        <React.Fragment>
        <div style={paraStyle}>
            <h1>About</h1>
                <p>This is the ToDoList App v1.0.0 from a React Crash Course</p>
                <p>Right now it grabs 10 dummy ToDos from a json file, but you can add your own.</p>
            </div>
        </React.Fragment>
    );
}
const paraStyle = {
    padding: '5%'
}

export default About;

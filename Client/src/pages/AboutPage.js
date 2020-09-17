import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
           <Hero title={props.title} />
           <Content>
           <p>	Have 2 years experience  in App Development.</p>
           <p>	Done internship on Mobile Application Development and Web Development in GirlsScript and Technopedia.</p>
           <p>	Considerable knowledge of  Flutter, Firebase, React, HTML, CSS3 and javaScript. Considerable knowledge of  CPP, Python, DataStructures, Algorithms etc.</p>
           <p>	Also developed several projects like InsideOut app, ecommerce app, ToDo list in react, Chat UI, expense management app etc.</p>
        <p>	Considerable knowledge of System Design (High Level Design and Low Level Design).</p>



               
            </Content>  
        </div>
    )
}

export default AboutPage

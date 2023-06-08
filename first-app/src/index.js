import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
// starting by adding evverything in one page

let pageData = {
    title:"First React Web Page",
    pagePointers:[
        "First react app",
        "Learning React Coponents",
        "Learning JSX",
        "Experimenting with the map functions",
        "creating JSX from data",
    ],
    header:"Learinng Objectives",
    footer:"This is shubham singh learning by doing"
}

let title = ({title})=><h1>{title}</h1>

let header = ({header})=><h2>{header}</h2>
let footer = ({footer})=><h2>{footer}</h2>

let pointers = ({pagePointers})=>{
    return <ul className='pointer-list'>
        {
            pagePointers.map( (point , ind)=><li className='pointer-list-item' key={ind}>{point}</li> )
        }
    </ul>
}
let App = <div className='App'>
    {title( pageData )}
    {header( pageData )}
    {pointers(pageData)}
    {footer( pageData )}
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( App );

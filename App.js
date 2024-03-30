import React from "react";
import ReactDOM from "react-dom/client";

//jsx- babel will convert jsx to react.createelemnt
// jsx is not html similar like syntax
// write attributes in camel case
 const head=(<h1 className="head">hello im 1 st element</h1>); // React element

 const head2= <h1 className="head">{head}hello im 2 nd element</h1>; // React element

 // React Functional component
 const Title= () => (
    <div>
        {head2}
        <h1>heloo im functional component Title</h1>
    </div>
 
 );

 // React Functional component

 const HeadingComponent= () => (
    <div id="container">
            <Title/>
        <h1>heloo im functional heading component</h1>
    </div>
 
 );


 //<Title></Title>     below 3 ways are same
 //<Title/>
//  {Title()}

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
root.render(<HeadingComponent/>); // waay of rendering component


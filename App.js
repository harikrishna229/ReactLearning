/*
*
* <div id="parent">
        <div id="child">
            <h1>hello im h1 tag</h1>
        </div>
    </div>
*
*
*

*/ 

var parent=React.createElement(
    "div",
    {id: "parent"},[
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"im h1 tag "),React.createElement("h2",{},"im h2 tag ")]
    ),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"im h1 tag "),React.createElement("h2",{},"im h2 tag ")]
    )
    ]
);

// const heading =React.createElement("h1",
// {id:"child",xyx:"abcd"},
// "Hello world from React");
console.log(parent) // it is a object

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


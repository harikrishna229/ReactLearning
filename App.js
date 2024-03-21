const heading =React.createElement("h1",
{id:"child",xyx:"abcd"},
"Hello world from React");
console.log(heading) // it is a object

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


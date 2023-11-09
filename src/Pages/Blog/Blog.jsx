import {Helmet} from "react-helmet";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>R-Foodie|Blog</title>
            </Helmet>
            <h2 className=" mt-6 text-3xl font-bold text-center">Blog Page</h2>
            <div className="bg-yellow-100 rounded-lg p-6 mt-6 shadow-xl">
           <h2 className="text-xl font-bold"> Question 1. What is One way data binding?</h2>
           <p className="text-base"><span className="text-xl font-bold">Answer: </span>
           One-way data binding will bind the data from the component to the view (DOM) or from view to the component.One-way data binding is unidirectional.It is used to display information to the end-user which automatically stays synchronized with each change of the underlying data.One-way data binding from view to the component can be achieved by using the event binding technique. <br />
           There are different techniques of data binding which use one-way data binding to bind data from component to view. Below are some of the techniques, which uses one-way data binding. <br />
           1.Interpolation Binding: Interpolation refers to binding expressions into marked up language. <br />
           2.Property Binding: Property binding is used to set a property of a view element. The binding sets the property to the value of a template expression. <br />
           3.Attribute Binding: Attribute binding is used to set a attribute property of a view element. <br />
           4.Class Binding: Class binding is used to set a class property of a view element. <br />
           5.Style Binding: Style binding is used to set a style of a view element. <br />
           </p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 mt-8 shadow-xl">
            <h2 className="text-xl font-bold"> Question 2. What is NPM in node.js?</h2>
            <p
            className="text-base"><span className="text-xl font-bold">Answer: </span>
            A package in Node.js contains all the files you need for a module.NPM is a package manager for Node.js packages, or module.It is a package manager for the JavaScript programming language maintained by npm, Inc.It is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.
            </p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 mt-8 mb-8 shadow-xl">
            <h2 className="text-xl font-bold"> Question 2.  Different between Mongodb database vs mySQL database.</h2>
            <p className="text-base"><span className="text-xl font-bold">Answer: </span>
            </p>
            <div className="flex justify-evenly">
                <div className="flex-1"><h2 className="text-xl font-bold text-center underline">Mongodb Database</h2>
                <p>1.MongoDB stores data as JSON documents in a more flexible format.</p>
                <p>2.Does not support Join operation.</p>
                <p>3.Optimized for high performance joins across multiple tables.</p>
                <p>4.MongoDB is a well-established, non-relational database system offering improved flexibility and horizontal scalability.</p>
                <p>5.MongoDB design is that the database is extremely easy to scale.</p>
                </div>
                <div className="flex-1"><h2 className="text-xl font-bold text-center underline"> mySQL Database</h2>
                <p>1.MySQL is a relational database system that stores data in a structured tabular format.</p>
                <p>2.Supports Join operation</p>
                <p>3.Optimized for write performance.</p>
                <p>4.MySQL is a mature relational database system, offering a familiar database environment.</p>
                <p>5.MySQL database system, options for scalability are much more limited.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;
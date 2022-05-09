import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className=' mt-10 blog-items'>


            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 ">Difference between Javascript and NodeJs?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Node JS Isn't any language rather It's a cross platform, open-source,server side runtime environment. It's allows javascript code to be run on server or even outside of the browser.
                    On the other hand javascript is a lightweight, object-oriented scripting language. It's used to build dynamic HTML pages with interactive effects on webpage or any other application.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900">What is the purpose of JWT and how does it work?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">A JSON Web Token (or JWT) is simply a JSON payload containing a particular claim. The key property of JWTs is that in order to confirm if they are valid we only need to look at the token itself Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 ">Differences between SQL and NoSQL databases?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">SQL	Databases are categorized as Relational Database Management System on the other hand NoSQL databases are categorized as Non-relational or distributed database system.	SQL databases have fixed or static or predefined schema but NoSQL databases have dynamic schema.SQL databases use a powerful language "Structured Query Language" to define and manipulate the data but In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database. </p>
            </div>

        </section>
    );
};

export default Blogs;
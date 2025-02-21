 
import React from "react";
export const About = () => {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hi, I'm Virnz.
                    <br className="hidden lg:inline-block" />I love to build amazing
                    apps.
                </h1>
                <p className="mb-8 leading-relaxed">
                Front End Developer with 10+ years of experience building hybrid mobile apps and responsive websites. Skilled in ReactJS, React Native, Angular, VueJS, NetCore, Kony Mobile, and Sencha/ExtJS, with a growing focus on Full Stack Development. A quick learner, highly organized, and a strong team player. Experienced in Scrum Master roles and capable of Business Analysis and Project Management.

                </p>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See My Past Work
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded mix-blend-multiply" 
                    alt="Virna"
                    src="./virna.JPG"
                />
                </div>
            </div>
            </section>
        );
}
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function getFullYear() {
      var date = new Date();
      const fullYear = date.getFullYear();
      return fullYear;
    }

    return (
      <div className="App">
        <ReactFullpage
          navigation
          pluginWrapper={pluginWrapper}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {/* ===================================================== */}
              <div className="section bg-gray-100 px-5 md:px-32">
                <div className="w-full">
                  <div className="flex justify-between items-center h-20 w-full">
                    <div>Logo</div>
                    <div className="text-base text-gray-500">
                      <Link href="/auth/login">
                        <a className="mr-7 hover:text-blue-600">Sign In</a>
                      </Link>
                      <Link href="/auth/register">
                        <a className="mr-7 hover:text-blue-600">Sign Up</a>
                      </Link>
                      <Link href="/about">
                        <a className="mr-7 footer-link">About us</a>
                      </Link>
                      <Link href="/doc">
                        <a className="mr-7 footer-link">Documentation</a>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="pt-20">
                      <div className="flex items-center justify-center bg-blue-600 h-10 text-white w-44 text-3xl font-bold mb-8">
                        Blog
                      </div>
                      <h1 className="title-home font-bold text-4xl md:text-6xl mb-5">
                        Create, Publish <br /> Share !
                      </h1>
                      <p className="md:w-1/2 mb-5 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <button className="border-2 w-60 h-12 flex justify-center items-center font-semibold text-gray-400">
                        Get your 14 day free trial &#8594;
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================================================== */}
              <div className="section bg-black text-white px-5 md:px-32">
                <div className="w-full flex-col justify-between">
                  <h1 className="title-home md:text-6xl text-white font-bold text-4xl mb-10 pt-10">
                    Start Managing your <br /> content with us
                  </h1>
                  <div className="flex w-full">
                    <div className="flex flex-col text-gray-500 tracking-wide text-lg w-1/2">
                      <Link href="/doc">
                        <a className="footer-link">Documentation</a>
                      </Link>
                      <Link href="/auth/login">
                        <a className="footer-link">Login</a>
                      </Link>
                      <Link href="/auth/register">
                        <a className="footer-link">Register</a>
                      </Link>
                      <Link href="/about">
                        <a className="footer-link">About us</a>
                      </Link>
                    </div>
                    <div className="md:block hidden">Animation</div>
                  </div>
                  <div className="text-gray-500 absolute bottom-10 font-semibold">
                    @{getFullYear()} RigelCorp
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;

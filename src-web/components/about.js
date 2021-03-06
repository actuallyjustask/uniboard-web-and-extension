import React, { Component } from "react";
import $ from "jquery";
import RegisterUser from "./registerUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
  scrollMoreInfo = () => {
    $("html, body").animate(
      { scrollTop: $("#moreInfo").offset().top - 64 },
      500
    );
  };
  componentDidMount() {
    $("#root").css({ height: "auto" });
  }
  componentWillUnmount() {
    $("#root").css({ height: "100%" });
  }
  render() {
    let extensionLink =
      "https://chrome.google.com/webstore/detail/synopsis-your-moodle-hero/ikffeebmjnccffbijpcnlhadgdebadmc";
    return (
      <div className="overflow-hidden">
        <section className="bg-blue-lightest h-full py-12">
          <div className="w-5/6 max-w-lg ml-auto mr-auto h-full">
            <div className="flex items-center justify-center text-center h-full">
              <div>
                <img
                  className="w-full md:w-2/3 mb-6"
                  src={process.env.PUBLIC_URL + "/img/mockup.png"}
                />
                <h1 className="text-4xl sm:text-5xl font-semibold leading-none">
                  A better way to moodle, UniBoard.
                </h1>
                <h2 className="text-2xl sm:text-3xl text-blue-darker opacity-75 font-normal leading-tight mb-8">
                  It makes using Moodle a piece of cake &#x1F382;!
                </h2>
                <img
                  className="h-128 w-full md:w-2/3"
                  src={process.env.PUBLIC_URL + "/img/features.svg"}
                />
                <div className="flex flex-col sm:flex-row justify-center pt-8">
                  <a href={extensionLink}>
                    <button className="bg-blue hover:bg-blue-dark text-2xl leading-none text-white font-semibold h-12 px-8 rounded-full whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2">
                      Download The Extension
                    </button>
                  </a>
                  <button
                    onClick={this.scrollMoreInfo}
                    className="bg-transparent text-2xl leading-none text-blue font-semibold hover:text-blue-dark h-12 px-8 border border-blue-lighter hover:border-blue-light rounded-full whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="w-full max-w-lg ml-auto mr-auto">
            <div className="flex flex-col md:flex-row items-center justify-center my-6">
              <p className="text-xl text-black leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">
                New Here? Welcome to UniBoard!
              </p>
              <a href={extensionLink}>
                <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap no-underline">
                  Get Started
                </button>
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center my-6">
              <p className="text-xl text-black leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">
                Already have the extension?
              </p>
              <Link to="/login">
                <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap no-underline">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-indigo-lightest py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
            <div className="flex flex-col justify-center text-center pb-8">
              <h2 className="text-5xl font-semibold leading-none mb-4">
                Getting Started
              </h2>
            </div>

            <div
              className="bg-white rounded shadow-lg overflow-hidden"
              style={{ height: "350px" }}
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/lU_Qz0_ZcZQ"
                allowFullScreen="true"
                width="100%"
                height="350"
              />
            </div>
          </div>

          <div className="w-5/6 max-w-md ml-auto mr-auto pt-8 mt-8 mb-8">
            <div className="flex flex-wrap -mx-6 -my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-xl font-semibold leading-tight mb-3">
                  Can I use the app for free?
                </h3>
                <p className="text-lg leading-normal text-grey-darker mb-8">
                  Yes! The app is 100% free. If you like the app, feel free to
                  check out Deep's{" "}
                  <a href="https://deeplydiligent.github.io/blog">Blog</a> and{" "}
                  <a href="https://soundcloud.com/deeplydiligent-podcast">
                    Podcast
                  </a>
                  .
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-xl font-semibold leading-tight mb-3">
                  I dont know much tech. How easy it is to use?
                </h3>
                <p className="text-lg leading-normal text-grey-darker mb-8">
                  Simple as A, B, C.
                  <br />
                  A. <a href={extensionLink}>Download The Extension</a>
                  <br />
                  B. Open Moodle
                  <br />
                  C. Sync Your Data
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="moreInfo" className="bg-white py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8 text-center">
            <div className="text-5xl sm:text-6xl font-semibold leading-none mb-10">
              Say Hello To Blazing Fast Access
            </div>
            <div className="flex flex-wrap -mx-6 my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-teal-dark">
                  <i className="fas fa-clock" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  Save Your Time
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  No more waiting until eternity for Moodle to load. Use the
                  extra time to watch the next season of Game of Thrones.
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-red-dark">
                  <i className="fas fa-download" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  Download Away
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  Downloading files one by one is so 2018. Enjoy blazing fast
                  batch downloads of your Lectures and Tutes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-lighter py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8 text-center">
            <div className="text-5xl sm:text-6xl font-semibold leading-none mb-10">
              Other Exciting Features
            </div>
            <div className="flex flex-wrap -mx-6 my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-none mb-3">
                  View Multiple Subjects at Once
                </h3>
                <div className="my-8 text-5xl text-teal-dark">
                  <img
                    className="rounded-lg shadow-md w-full m-auto block"
                    src={process.env.PUBLIC_URL + "/img/multiplesubjects.png"}
                  />
                </div>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  Are you a multitasker too? Easy!
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-none mb-3">
                  Search Quickly
                </h3>
                <div className="my-8 text-5xl text-teal-dark">
                  <img
                    className="rounded-lg shadow-md w-full m-auto block"
                    src={process.env.PUBLIC_URL + "/img/searchfeature.png"}
                  />
                </div>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker">
                  Need access to Week 1 content in Week 12? Find it, fast!
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-none mb-3">
                  Neatly Organised For You
                </h3>
                <div className="my-8 text-5xl text-teal-dark">
                  <img
                    className="rounded-lg shadow-md w-full m-auto block"
                    src={process.env.PUBLIC_URL + "/img/typesoffiles.png"}
                  />
                </div>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker">
                  Who likes messing around with slides and links?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="moreInfo" className="bg-white py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8 text-center">
            <div className="text-5xl sm:text-6xl font-semibold leading-none mb-2">
              Upcoming Features
            </div>
            <div className="text-xl font-semibold leading-none mb-10 text-grey">
              We're always growing!
            </div>
            <div className="flex flex-wrap -mx-6 my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-teal-dark">
                  <i className="fas fa-search" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  In-Depth Search
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  Search for tags, file contents and file context. Search is
                  already a really cool feature, we ought to make it even
                  better!
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-red-dark">
                  <i className="fas fa-tags" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  Tag To Your Heart's Content
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  Organise your files the way you want by tagging them, then
                  view those files in a tag directory viewer.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <a href={'https://bitbucket.org/deeplydiligent/moodlehero-react-extension/'}>
                <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap">
                  <i className="fab fa-bitbucket" />&emsp;Contribute On Bitbucket
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-grey-darker py-8">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className="text-xl text-white leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">
                What are you waiting for?
              </p>
              <a href={extensionLink}>
                <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap">
                  Download The Extension
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-grey-lightest py-10">
          <div className="w-5/6 max-w-2xl ml-auto mr-auto mt-8">
            <div className="flex flex-col justify-center text-center pb-8">
              <h2 className="text-5xl font-semibold leading-none mb-4">
                Meet The Creators
              </h2>
            </div>
            <div className="flex flex-wrap -mx-6 -my-6">
              <div className="w-full lg:w-1/2 px-6 py-6 m-auto text-center">
                <img
                  className="rounded-full w-32 m-auto block -mb-6"
                  src={process.env.PUBLIC_URL + "/faces/deep.jpg"}
                />
                <div className="bg-yellow-lightest rounded shadow-lg overflow-hidden p-8">
                  <div className="text-2xl font-black text-bold">
                    Deep Bhattacharyya
                  </div>
                  <div className="flex justify-center py-4">
                    <div className="bg-grey-light h-1 w-16 rounded" />
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    Loves Watching Python Videos&nbsp;
                    <i className="fab fa-snake" />
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    IT Director at MASA | Lead Web Developer at Learnmate
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    Monash University: Finance & Business Information Systems
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src={process.env.PUBLIC_URL + "/faces/sameer.jpg"}
                  />
                  <div className="bg-yellow-lighter rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Sameer Syed
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Loves Big Bang Theory&nbsp;
                      <i className="fas fa-space-shuttle" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      IT Officer at MASA
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Monash University: Accounting & Software Development
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg"
                  />
                  <div className="bg-yellow-lighter rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Haikal Zain
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Enjoys Swimming from Sharks&nbsp;
                      <i className="fas fa-frown-open" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Team Member at Accenture Digital - Machine Learning
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Studies Medicine at Monash University and Maths at Melbourne University
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg"
                  />
                  <div className="bg-yellow-light rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Farharth Faisal
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Enjoys a Saturday Snooze&nbsp;
                      <i className="fas fa-bed" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Freelance Web Designer and Developer
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Swinbourne University: Computer Science
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src={process.env.PUBLIC_URL + "/faces/nikhil.jpg"}
                  />
                  <div className="bg-yellow-light rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Nikhil Ramesh
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Knows His Coffee Well&nbsp;
                      <i className="fas fa-mug-hot" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Lead Developer at Guac Tutor
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Monash University: Business Information Systems and Finance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf-e8QvjtMvr7kv-jzWblMLQSX2bjzyF0Efrj0OcWvMkiq2vg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </section>
        <footer className="bg-green-lightest py-8">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-8">
            <small className="block text-sm text-grey p-3">
              &copy; UniBoard
            </small>
            <small className="block text-sm text-grey p-3">
              *We do not have any stake in Monash University. No data is sent to
              UniBoard unless explicitly specified by the user.
              <br />
              <Link
                to="/privacy-policy"
                className="block text-sm text-grey text-right"
              >
                Privacy Policy
              </Link>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;

import React from "react"
import ReactDOM from "react-dom"

import Jobs from "./jobs/index"
import Experiences from "./experience"

import "./base.scss"

const App = () => (
  <section className="app">
    <div className="row bottom-xs">
      <div className="col-xs bottom-xs">
        <h1 tabIndex={0}>Aaron Lote</h1>
      </div>
      <div className="col-xs end-xs">
        <p>
          <a href="https://www.github.com/azz0r" target="_blank" tabIndex={0}>
            github.com/azz0r
          </a>
        </p>
        <p>
          <a href="mailto:mail@wuggawoo.com" tabIndex={0}>
            mail@wuggawoo.com
          </a>
        </p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-xs-12 col-lg" tabIndex={0}>
        <p>
          I am a London based senior web developer with 10 years commercial
          experience working with large, and small, companies to deliver high
          quality web experiences to millions of customers.
        </p>
        <p>
          With my varied experience I have a valuable ability to understand a
          task from the perspective of a developer, a project manager or a stake
          holder.
        </p>
        <p>
          I’m experienced with implementing standards and processes to improve
          workflows and productivity.
        </p>
        <hr />
        <Experiences />
      </div>
      <div className="col-xs">
        <Jobs />
      </div>
    </div>
  </section>
)

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}

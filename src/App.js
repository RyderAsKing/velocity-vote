import "./App.css";
import AppLogic from "./AppLogic";
const App = () => {
  const { handleChange, minutes, exportToJson } = AppLogic();
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Auto Vote configuration generator</span>
        </a>
      </header>
      <main>
        <h1>Get started with Auto Vote Rating (velocitycraft)</h1>
        <p className="fs-5 col-md-12">
          Voting manually could be annoying and we understand that, that's why
          we bring a auto voting solution for you. Install the following browser
          extension{" "}
        </p>
        <hr />
        <div className="row">
          <div className="col-8">
            <div>
              <p className="fs-5 col-md-12">
                1. Install the extension -{" "}
                <a href="https://chrome.google.com/webstore/detail/auto-vote-rating/mdfmiljoheedihbcfiifopgmlcincadd?hl=en">
                  click here
                </a>
                <br />
                2. Enter your minecraft username below
                <br />
              </p>
              <div className="input-group mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
              </div>
              <p className="fs-5 col-md-12">3. Download the configuration</p>
              <div className="mb-1">
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={exportToJson}
                >
                  Download configuration
                </button>
              </div>
              <p className="fs-5 col-md-12">4. Import the configuration</p>
            </div>
          </div>
          <div className="col-4">
            <h2>Video example</h2>
            <div className="embed-responsive">
              <iframe
                className="embed-responsive-item"
                src="/auto_vote.mp4"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <hr />
        <footer className="text-center">
          <p className="fs-5">
            <a
              href="https://velocitycraft.net"
              className="text-dark text-decoration-none"
            >
              <span className="fs-4">Auto Vote Rating</span>
            </a>{" "}
            is a free auto voting solution provided by{" "}
            <a
              href="https://velocitycraft.net"
              className="text-dark text-decoration-none"
            >
              <span className="fs-4">VelocityCraft</span>
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;

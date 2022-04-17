import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About</h3>
              <p>Fress news gives you up-to-date and breaking News. </p>
              <p>
                Fress news is born out of concerted efforts from a team of
                veteran scribes who have weathered the ups and downs print,
                broadcast and new media journalism.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Categories</h3>
              <ul>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Technology</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Get in touch with us</h3>
              <p>info@newsfress.com </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <p>Copyright @ FressNews</p>
            </div>
            <div className="col-md-6 design">
              <p className="text-right">Designed by Anand Shukla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

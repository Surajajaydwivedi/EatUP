import React from "react";
import MainHeader from "./Mainheader";
import MainFooter from "./Mainfooter";

export default function HowItWorks() {

  return (
    <>
      <MainHeader />
      <div style={{marginTop: '40px'}}>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <style dangerouslySetInnerHTML={{__html: "\n   .bee-row-1,\n\t\t.bee-row-2,\n\t\t.bee-row-3,\n\t\t.bee-row-4,\n\t\t.bee-row-5,\n\t\t.bee-row-6,\n\t\t.bee-row-7,\n\t\t.bee-row-8 {\n\t\t\tbackground-repeat: no-repeat\n\t\t}\n\n\t\tbody {\n\t\t\tbackground-color: #121b2c;\n\t\t\tcolor: #000;\n\t\t\tfont-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif\n\t\t}\n\n\t\ta {\n\t\t\tcolor: #cecece\n\t\t}\n\n\t\t* {\n\t\t\tbox-sizing: border-box\n\t\t}\n\n\t\tbody,\n\t\tp {\n\t\t\tmargin: 0\n\t\t}\n\n\t\t.bee-row-content {\n\t\t\tmax-width: 1440px;\n\t\t\tmargin: 0 auto;\n\t\t\tdisplay: flex\n\t\t}\n\n\t\t.bee-row-content .bee-col-w5 {\n\t\t\tflex-basis: 42%\n\t\t}\n\n\t\t.bee-row-content .bee-col-w7 {\n\t\t\tflex-basis: 58%\n\t\t}\n\n\t\t.bee-row-content .bee-col-w12 {\n\t\t\tflex-basis: 100%\n\t\t}\n\n\t\t.bee-divider,\n\t\t.bee-image {\n\t\t\toverflow: auto\n\t\t}\n\n\t\t.bee-divider .center,\n\t\t.bee-image .bee-center {\n\t\t\tmargin: 0 auto\n\t\t}\n\n\t\t.bee-image img {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%\n\t\t}\n\n\t\t.bee-text {\n\t\t\toverflow-wrap: anywhere\n\t\t}\n\n\t\t@media (max-width:768px) {\n\t\t\t.bee-mobile_hide {\n\t\t\t\tdisplay: none\n\t\t\t}\n\n\t\t\t.bee-row-content:not(.no_stack) {\n\t\t\t\tdisplay: block\n\t\t\t}\n\t\t}\n\n\t\t.bee-row-1 .bee-row-content,\n\t\t.bee-row-2 .bee-row-content,\n\t\t.bee-row-3 .bee-row-content,\n\t\t.bee-row-4 .bee-row-content,\n\t\t.bee-row-5 .bee-row-content,\n\t\t.bee-row-6 .bee-row-content,\n\t\t.bee-row-7 .bee-row-content,\n\t\t.bee-row-8 .bee-row-content {\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tcolor: #000\n\t\t}\n\n\t\t.bee-row-1 .bee-col-1,\n\t\t.bee-row-2 .bee-col-1,\n\t\t.bee-row-3 .bee-col-1,\n\t\t.bee-row-3 .bee-col-2,\n\t\t.bee-row-4 .bee-col-1,\n\t\t.bee-row-5 .bee-col-1,\n\t\t.bee-row-5 .bee-col-2,\n\t\t.bee-row-6 .bee-col-1,\n\t\t.bee-row-6 .bee-col-2,\n\t\t.bee-row-7 .bee-col-1,\n\t\t.bee-row-7 .bee-col-2,\n\t\t.bee-row-8 .bee-col-1 {\n\t\t\tpadding-bottom: 5px;\n\t\t\tpadding-top: 5px\n\t\t}\n\n\t\t.bee-row-1 .bee-col-1 .bee-block-1,\n\t\t.bee-row-1 .bee-col-1 .bee-block-2,\n\t\t.bee-row-2 .bee-col-1 .bee-block-1,\n\t\t.bee-row-3 .bee-col-2 .bee-block-4,\n\t\t.bee-row-4 .bee-col-1 .bee-block-1,\n\t\t.bee-row-4 .bee-col-1 .bee-block-5,\n\t\t.bee-row-5 .bee-col-1 .bee-block-4,\n\t\t.bee-row-6 .bee-col-1 .bee-block-1,\n\t\t.bee-row-6 .bee-col-2 .bee-block-1,\n\t\t.bee-row-6 .bee-col-2 .bee-block-4,\n\t\t.bee-row-7 .bee-col-1 .bee-block-4,\n\t\t.bee-row-8 .bee-col-1 .bee-block-1 {\n\t\t\tpadding: 10px\n\t\t}\n\n\t\t.bee-row-3 .bee-col-1 .bee-block-1 {\n\t\t\tpadding-bottom: 10px;\n\t\t\tpadding-left: 15px;\n\t\t\tpadding-right: 15px;\n\t\t\twidth: 100%\n\t\t}\n\n\t\t.bee-row-3 .bee-col-2 .bee-block-1,\n\t\t.bee-row-3 .bee-col-2 .bee-block-3,\n\t\t.bee-row-4 .bee-col-1 .bee-block-3,\n\t\t.bee-row-4 .bee-col-1 .bee-block-4,\n\t\t.bee-row-5 .bee-col-1 .bee-block-2,\n\t\t.bee-row-5 .bee-col-1 .bee-block-3,\n\t\t.bee-row-6 .bee-col-2 .bee-block-2,\n\t\t.bee-row-6 .bee-col-2 .bee-block-3,\n\t\t.bee-row-7 .bee-col-1 .bee-block-2,\n\t\t.bee-row-7 .bee-col-1 .bee-block-3 {\n\t\t\tpadding-bottom: 10px;\n\t\t\tpadding-left: 20px;\n\t\t\tpadding-right: 10px\n\t\t}\n\n\t\t.bee-row-3 .bee-col-2 .bee-block-2 {\n\t\t\tpadding-bottom: 15px;\n\t\t\tpadding-top: 15px;\n\t\t\twidth: 100%\n\t\t}\n\n\t\t.bee-row-4 {\n\t\t\tbackground-color: #0b111f\n\t\t}\n\n\t\t.bee-row-4 .bee-col-1 .bee-block-2,\n\t\t.bee-row-5 .bee-col-2 .bee-block-1,\n\t\t.bee-row-6 .bee-col-1 .bee-block-2,\n\t\t.bee-row-7 .bee-col-2 .bee-block-1 {\n\t\t\tpadding-left: 15px;\n\t\t\tpadding-right: 15px;\n\t\t\twidth: 100%\n\t\t}\n\n\t\t.bee-row-5 .bee-col-1 .bee-block-1,\n\t\t.bee-row-7 .bee-col-1 .bee-block-1 {\n\t\t\tpadding: 10px 10px 10px 15px\n\t\t}\n  " }} />
        <div className="bee-page-container">
          <div className="bee-row bee-row-1">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w12">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '50px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-text">
                  <div className="bee-text-content" style={{fontSize: '14px', lineHeight: '120%', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#555555'}}>
                    <p style={{lineHeight: '14px'}}>
                      <span style={{fontSize: '40px', lineHeight: '50px'}}>
                      </span>
                    </p>
                    <p style={{fontSize: '40px', lineHeight: '50px', textAlign: 'center'}}>
                      <span style={{color: '#FFFFFF', fontSize: '50px', lineHeight: '50px'}}>
                        {/* <strong style={{}}> */}
                          How It Works?
                        {/* </strong> */}
                      </span>
                    </p>
                    <p style={{lineHeight: '14px'}}>
                      <span style={{fontSize: '42px', color: '#3fde82', lineHeight: '50px'}}>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-2">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w12">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '55px'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-3">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w7">
                <div className="bee-block bee-block-1 bee-image">
                  <img alt="Phone " className="bee-center bee-fixedwidth" src="https://i.ibb.co/qWJPwjx/imageonline-co-roundcorner-2.png" style={{maxWidth: '504px'}} />
                </div>
              </div>
              <div className="bee-col bee-col-2 bee-col-w5">
                <div className="bee-block bee-block-1 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#369dba'}}>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{fontSize: '38px', lineHeight: '76px'}}>
                      </span>
                    </p>
                    <p style={{fontSize: '38px', lineHeight: '76px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                        <strong style={{}}>
                          Setup Your Restaurant and Get QR
                        </strong>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-image">
                  <img alt="" className="bee-center bee-fixedwidth" src="https://i.ibb.co/rxYZTGy/Qr.png" style={{maxWidth: '240px'}} />
                </div>
                <div className="bee-block bee-block-3 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#ffffff'}}>
                    <p style={{textAlign: 'justify', lineHeight: '24px'}}>
                      <span style={{fontSize: '16px', lineHeight: '32px'}}>
                        Restaurant owners need to set up their account and their restaurant details to get their QR code which can be used in their restaurants for customers to scan and order food.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-4 bee-divider">
                  <div className="spacer" style={{height: '10px'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-4">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w12">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '30px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-image">
                  <img alt="Smart Watch" className="bee-center bee-fixedwidth" src="https://i.ibb.co/0sn5Dqw/imageonline-co-roundcorner-3.png" style={{maxWidth: '792px'}} />
                </div>
                <div className="bee-block bee-block-3 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#369dba'}}>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                      </span>
                    </p>
                    <p style={{textAlign: 'center', fontSize: '38px', lineHeight: '76px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                        <strong style={{}}>
                          <span style={{fontSize: '38px', lineHeight: '76px'}}>
                            Create and Edit Menu
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                        <strong style={{}}>
                          <span style={{fontSize: '38px', lineHeight: '76px'}}>
                          </span>
                        </strong>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-4 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', color: '#ffffff', fontFamily: 'inherit'}}>
                    <p style={{textAlign: 'center', fontSize: '15px', lineHeight: '30px'}}>
                      <span style={{fontSize: '15px', lineHeight: '30px'}}>
                        After setting up your account you can create and edit your menu in the menu manager you can navigate to it from the navigation bar.
                      </span>
                    </p>
                    <p style={{textAlign: 'center', fontSize: '15px', lineHeight: '30px'}}>
                      <span style={{fontSize: '15px', lineHeight: '30px'}}>
                        You can also change the availability of a dish by clicking the toggle button.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-5 bee-divider">
                  <div className="spacer" style={{height: '30px'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-5">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w5">
                <div className="bee-block bee-block-1 bee-divider bee-mobile_hide">
                  <div className="spacer" style={{height: '30px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#369dba'}}>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{fontSize: '38px', lineHeight: '76px'}}>
                      </span>
                    </p>
                    <p style={{fontSize: '38px', lineHeight: '76px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                        <strong style={{}}>
                          Manage Your Orders
                        </strong>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-3 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#ffffff'}}>
                    <p style={{textAlign: 'justify', lineHeight: '24px'}}>
                      <span style={{fontSize: '16px', lineHeight: '32px'}}>
                        You can keep a track of your active orders from the Active Orders section. Whenever you receive a new order you'll get a notification. &nbsp;You can even cancel an order or check mark it as completed to notify the customer.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-4 bee-divider">
                  <div className="spacer" style={{height: '10px'}}>
                  </div>
                </div>
              </div>
              <div className="bee-col bee-col-2 bee-col-w7">
                <div className="bee-block bee-block-1 bee-image">
                  <a href="www.example.com">
                    <img alt="Black Headphone" className="bee-center bee-fixedwidth" src="https://i.ibb.co/8gT2qtD/imageonline-co-roundcorner.png" style={{maxWidth: '630px'}} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-6">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w7">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '60px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-image">
                  <a href="www.example.com">
                    <img alt="View All Items" className="bee-center bee-fixedwidth" src="https://i.ibb.co/Y38q5X6/imageonline-co-roundcorner-1.png" style={{maxWidth: '722px'}} /></a>
                </div>
              </div>
              <div className="bee-col bee-col-2 bee-col-w5">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '60px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#369dba'}}>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                      </span>
                    </p>
                    <p style={{fontSize: '38px', lineHeight: '76px'}}>
                      <span style={{fontSize: '38px', color: '#3fde82', lineHeight: '76px'}}>
                        <strong style={{}}>
                          Keep Track of Your Stats
                        </strong>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', fontSize: '38px', lineHeight: '76px'}}>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-3 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#ffffff'}}>
                    <p style={{textAlign: 'justify', lineHeight: '24px'}}>
                      <span style={{fontSize: '16px', lineHeight: '32px'}}>
                        Restaurants can keep track of their stats in the dashboard section to have a better understanding of their restaurant growth and their day-to-day sales.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-4 bee-divider">
                  <div className="spacer" style={{height: '10px'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-7">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w5">
                <div className="bee-block bee-block-1 bee-divider bee-mobile_hide">
                  <div className="spacer" style={{height: '30px'}}>
                  </div>
                </div>
                <div className="bee-block bee-block-2 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#369dba'}}>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                        <strong style={{}}>
                          <span style={{fontSize: '38px', lineHeight: '76px'}}>
                            Never Miss Any Update
                          </span>
                        </strong>
                      </span>
                    </p>
                    <p style={{lineHeight: '24px'}}>
                      <span style={{color: '#3fde82', lineHeight: '24px'}}>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-3 bee-text">
                  <div className="bee-text-content" style={{lineHeight: '200%', fontSize: '12px', fontFamily: '"Montserrat", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif', color: '#ffffff'}}>
                    <p style={{textAlign: 'justify', lineHeight: '24px'}}>
                      <span style={{fontSize: '16px', lineHeight: '32px'}}>
                        Managing Restaurants can be a stressful task which is why we send you real-time notifications and emails so you don't miss any order and your customers are well notified about every step.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bee-block bee-block-4 bee-divider">
                  <div className="spacer" style={{height: '10px'}}>
                  </div>
                </div>
              </div>
              <div className="bee-col bee-col-2 bee-col-w7">
                <div className="bee-block bee-block-1 bee-image">
                  <a href="www.example.com">
                    <img alt="Black Headphone" className="bee-center bee-fixedwidth" src="https://i.ibb.co/xX1YDwW/imageonline-co-roundcorner.png" style={{maxWidth: '462px'}} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bee-row bee-row-8">
            <div className="bee-row-content">
              <div className="bee-col bee-col-1 bee-col-w12">
                <div className="bee-block bee-block-1 bee-divider">
                  <div className="spacer" style={{height: '0px'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <MainFooter />
      </>
  );
}

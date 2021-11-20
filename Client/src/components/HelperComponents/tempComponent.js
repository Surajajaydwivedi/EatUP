import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Mainheader from "../InfoSection/Mainheader";
import Mainfooter from "../InfoSection/Mainfooter";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useQRCode } from "react-qrcodes";
import { typography } from "@material-ui/system";

function NewComponent(){
      return (
  
        <table border={0} cellPadding={0} cellSpacing={0} className="nl-container" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#e5e5e5'}} width="100%">
          <tbody>
            <tr>
              <td>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-1" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#0d1b2a', color: '#000000', backgroundPosition: 'center top'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top', borderTop: '0px', borderRight: '0px', borderBottom: '0px', borderLeft: '0px'}} width="16.666666666666668%">
                                <div className="spacer_block" style={{height: '285px', lineHeight: '0px', fontSize: '1px'}}> </div>
                              </td>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top', borderTop: '0px', borderRight: '0px', borderBottom: '0px', borderLeft: '0px'}} width="66.66666666666667%">
                                <table border={0} cellPadding={0} cellSpacing={0} className="image_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{width: '100%', paddingRight: '0px', paddingLeft: '0px'}}>
                                        <div align="center" style={{lineHeight: '10px'}}><img src="https://i.ibb.co/drHZKyW/Food-Preparation.png" style={{display: 'block', height: 'auto', border: 0, width: '277px', maxWidth: '100%'}} width={277} /></div>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top', borderTop: '0px', borderRight: '0px', borderBottom: '0px', borderLeft: '0px'}} width="16.666666666666668%">
                                <div className="spacer_block" style={{height: '285px', lineHeight: '0px', fontSize: '1px'}}> </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-2" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content stack" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#0d1b2a', color: '#000000'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top'}} width="100%">
                                <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{width: '25px', backgroundColor: 'transparent'}}>&nbsp;</td>
                                      <td style={{paddingTop: '0px', paddingBottom: '0px', borderTop: '0px', borderBottom: '0px', width: '591px'}}>
                                        <table border={0} cellPadding={10} cellSpacing={0} className="text_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', wordBreak: 'break-word'}} width="100%">
                                          <tbody><tr>
                                              <td>
                                                <div style={{fontFamily: 'Tahoma, Verdana, sans-serif'}}>
                                                  <div style={{fontSize: '12px', fontFamily: '"Lato", Tahoma, Verdana, Segoe, sans-serif', msoLineHeightAlt: '14.399999999999999px', color: '#555555', lineHeight: '1.2'}}>
                                                    <p style={{margin: 0, fontSize: '12px', textAlign: 'center'}}><strong><span style={{color: '#fefeff', fontSize: '38px'}}>OP Store</span></strong></p>
                                                  </div>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                        <table border={0} cellPadding={0} cellSpacing={0} className="image_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                          <tbody><tr>
                                              <td style={{width: '100%', paddingRight: '0px', paddingLeft: '0px', paddingTop: '30px'}}>
                                                <div align="center" style={{lineHeight: '10px'}}><img alt="Alternate text" src="https://i.ibb.co/5GFGFrD/receipt-top.png" style={{display: 'block', height: 'auto', border: 0, width: '591px', maxWidth: '100%'}} title="Alternate text" width={591} /></div>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                      </td>
                                      <td style={{width: '24px', backgroundColor: 'transparent'}}>&nbsp;</td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                

















                
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-4" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content stack" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#f2f2f2', color: '#000000'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top'}} width="100%">
                                <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{width: '25px', backgroundColor: '#0D1B2A'}}>&nbsp;</td>
                                      <td style={{paddingTop: '0px', paddingBottom: '0px', borderTop: '0px', borderBottom: '0px', width: '590px'}}>
                                        <div className="spacer_block" style={{height: '30px', lineHeight: '30px', fontSize: '1px'}}> </div>
                                      </td>
                                      <td style={{width: '25px', backgroundColor: '#0D1B2A'}}>&nbsp;</td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-5" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content stack" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#0d1b2a', color: '#000000'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top'}} width="100%">
                                <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{width: '25px', backgroundColor: 'transparent'}}>&nbsp;</td>
                                      <td style={{paddingTop: '0px', paddingBottom: '0px', borderTop: '0px', borderBottom: '0px', width: '591px'}}>
                                        <table border={0} cellPadding={0} cellSpacing={0} className="image_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                          <tbody><tr>
                                              <td style={{width: '100%', paddingRight: '0px', paddingLeft: '0px', paddingBottom: '30px'}}>
                                                <div align="center" style={{lineHeight: '10px'}}><img alt="Alternate text" src="https://i.ibb.co/Pz8F6zz/receipt-bottom.png" style={{display: 'block', height: 'auto', border: 0, width: '591px', maxWidth: '100%'}} title="Alternate text" width={591} /></div>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                      </td>
                                      <td style={{width: '24px', backgroundColor: 'transparent'}}>&nbsp;</td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-6" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content stack" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#0d1b2a', color: '#000000'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top', paddingTop: '30px', paddingBottom: '30px', borderTop: '0px', borderRight: '0px', borderBottom: '0px', borderLeft: '0px'}} width="100%">
                                <table border={0} cellPadding={0} cellSpacing={0} className="icons_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{color: '#ffffff', fontFamily: 'inherit', fontSize: '13px', textAlign: 'center'}}>
                                        <table cellPadding={0} cellSpacing={0} role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                          <tbody><tr>
                                              <td style={{textAlign: 'center'}}>
                                                {/*[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]*/}
                                                {/*[if !vml]><!*/}
                                                <table cellPadding={0} cellSpacing={0} className="icons-inner" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', display: 'inline-block', marginRight: '-4px', paddingLeft: '0px', paddingRight: '0px'}}>
                                                  {/*<![endif]*/}
                                                  <tbody><tr>
                                                      <td style={{textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '25px', paddingRight: '25px'}}><img align="center" alt="Truck Icon" className="icon" height={32} src="https://i.ibb.co/gmpmsSz/Frame-42.png" style={{display: 'block', height: 'auto', border: 0}} width={32} /></td>
                                                    </tr>
                                                    <tr>
                                                      <td style={{fontFamily: 'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif', fontSize: '13px', color: '#ffffff', verticalAlign: 'middle', letterSpacing: 'undefined', textAlign: 'center'}}>Order Online</td>
                                                    </tr>
                                                  </tbody></table>
                                                {/*[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]*/}
                                                {/*[if !vml]><!*/}
                                                <table cellPadding={0} cellSpacing={0} className="icons-inner" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', display: 'inline-block', marginRight: '-4px', paddingLeft: '0px', paddingRight: '0px'}}>
                                                  {/*<![endif]*/}
                                                  <tbody><tr>
                                                      <td style={{textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '25px', paddingRight: '25px'}}><img align="center" alt="Pizza Icon" className="icon" height={32} src="https://i.ibb.co/kHMyDsx/Frame-41.png" style={{display: 'block', height: 'auto', border: 0}} width={32} /></td>
                                                    </tr>
                                                    <tr>
                                                      <td style={{fontFamily: 'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif', fontSize: '13px', color: '#ffffff', verticalAlign: 'middle', letterSpacing: 'undefined', textAlign: 'center'}}>Our Menu</td>
                                                    </tr>
                                                  </tbody></table>
                                                {/*[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]*/}
                                                {/*[if !vml]><!*/}
                                                <table cellPadding={0} cellSpacing={0} className="icons-inner" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', display: 'inline-block', marginRight: '-4px', paddingLeft: '0px', paddingRight: '0px'}}>
                                                  {/*<![endif]*/}
                                                  <tbody><tr>
                                                      <td style={{textAlign: 'center', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '25px', paddingRight: '25px'}}><img align="center" alt="Map Pin" className="icon" height={32} src="https://i.ibb.co/G03pr6Z/Frame-40.png" style={{display: 'block', height: 'auto', border: 0}} width={32} /></td>
                                                    </tr>
                                                    <tr>
                                                      <td style={{fontFamily: 'Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif', fontSize: '13px', color: '#ffffff', verticalAlign: 'middle', letterSpacing: 'undefined', textAlign: 'center'}}>Find a Cafe</td>
                                                    </tr>
                                                  </tbody></table>
                                              </td>
                                            </tr>
                                          </tbody></table>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row row-7" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" border={0} cellPadding={0} cellSpacing={0} className="row-content stack" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', backgroundColor: '#0d1b2a', color: '#000000'}} width={640}>
                          <tbody>
                            <tr>
                              <td className="column" style={{msoTableLspace: '0pt', msoTableRspace: '0pt', fontWeight: 400, textAlign: 'left', verticalAlign: 'top', paddingTop: '5px', paddingBottom: '5px', borderTop: '0px', borderRight: '0px', borderBottom: '0px', borderLeft: '0px'}} width="100%">
                                <table border={0} cellPadding={0} cellSpacing={0} className="image_block" role="presentation" style={{msoTableLspace: '0pt', msoTableRspace: '0pt'}} width="100%">
                                  <tbody><tr>
                                      <td style={{width: '100%', paddingRight: '0px', paddingLeft: '0px'}}>
                                        <div align="center" style={{lineHeight: '10px'}}><img src="https://i.ibb.co/2qXkVjZ/Yum-Trip-Logo.jpg" style={{display: 'block', height: 'auto', border: 0, width: '320px', maxWidth: '100%'}} width={320} /></div>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody></table>
        
      );
    }
  

  export default NewComponent;
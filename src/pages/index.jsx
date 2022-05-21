import React from "react";
import NavBar from "../components/navbar/navbar.component";
import { Col, Row, Button, Image } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class MainPage extends React.Component{
    render(){

        return(
            <div>
                <NavBar/>
                
                <div className="main">

                    <div  className="section1" id="section1">
                        <div className="container-fluid pfix">
                            <Row className="">
                                <Col xs={{span:10, offset: 1}} sm={{span:10, offset: 1}} md={{span:10, offset: 1}} lg={{span: 6, offset: 1}} xl={{span: 6, offset: 1}} className="">
                                    <h1 className="header-style">NFTS FOR <br/>REAL WORLD USE</h1>
                                        <p className="nf p1 pb-4">
                                            Blending The Power Of NFTs and Real Life<br/>
                                            Business.  We Reward Our Community And<br/>
                                            Raise Veteran Mental Health Awareness By<br/>
                                            Lowering The Barrier Of NFT Entry.
                                        </p>
                                    <div class="d-grid gap-3 d-md-block">
                                        <Button variant="primary" className="btn-lg">MINT</Button>
                                        <Button variant="secondary" className="ml-md-4 btn-lg">HOW TO BUY</Button>
                                    </div>
                                    <Row>
                                        <Col xs={12} sm={12} md={9} lg={9} xl={9} className="pt-5">
                                            <Row className="stats">
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className="text-center pl-md-0">
                                                    <h3 className="df nums stat-shadow">5000</h3>
                                                    <p className="nf desc">Total Supply</p>
                                                </Col>
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className=" text-center ">
                                                <h3 className="df nums stat-shadow">350</h3>
                                                    <p className="nf desc">1/1 Customs</p>
                                                </Col>
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className="text-center">
                                                <h3 className="df nums stat-shadow"><sup className="symbol">$</sup>200</h3>
                                                <p className="nf desc">Mint Price</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={5} xl={5} className="">
                                    <Image src="assets/img/LuckyStuffyBunnySitting-02.png" className="hero" />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                    <Image src="assets/img/Stuffing.svg" className="stuffing" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    
                    
                    <div className="section2" id="section2">
                        <div className="container-fluid pfix pt-5">
                            <Row className="pt-5">
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="">
                                    <Image src="assets/img/family-portraits-wall.png" className="portraits mt-sm-4" />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="pt-3">
                                    <h1 className="header-style text-center" id="ourstory">OUR <br/>FAMILY STORY</h1>
                                    <p className="nf p2 story px-5 py-3">
                                    StuffyBunnys is a family oriented NFT project with real world utility. We’re 
                                    producing the first NFT based Children’s book and will be producing an actual 
                                    StuffyBunny stuffed animal collection. Profit sharing with our community and 
                                    the ability to make your very own custom StuffyBunny NFT make this project unique. <br/><br/>
                                    Fully doxxed team, ERC-721 contract (low gas fees), developing ability to Mint with 
                                    a credit card and we’re deflationary. Join our discord today to learn about NFTs, 
                                    get to know the community and see everything we’re building.
                                    </p>
                                </Col>
                            </Row>
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <Image src="assets/img/seamed-heart-01.png" className="heart" />
                            </Col>
                        </Row>
                        </div>
                    </div>
                    <div className="section3" id="section3">
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-5">
                                <h1 className="header-style text-center pt-5" id="family">FAMILY <br/>MEMBERS</h1>
                            </Col>
                        </Row>
                        <div className="container">
                        <Row className="pt-5">
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center p-5">
                                <Image src="assets/img/chadieb.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">CHAD BAKER</h3>
                                <h6 className="nf text-center title">Chief Operations Officer</h6>
                                <a target="_blank" href="https://twitter.com/B7ChadieB" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center p-5">
                                <Image src="assets/img/whisper.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">WHISPER</h3>
                                <h6 className="nf text-center title">Com/Discord Manager</h6>
                                <a target="_blank" href="https://twitter.com/whisper0829" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center p-5">
                                <Image src="assets/img/anthony.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">ANTHONY</h3>
                                <h6 className="nf text-center title">Artist/Co-Owner</h6>
                                <a target="_blank" href="https://twitter.com/NightManWins" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                        </Row>
                        </div>
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-5">
                                <h1 className="header-style text-center pb-5 " id="roadmap">THE <br/>ROADMAP</h1>
                            </Col>
                        </Row>
                        <div className="container-fluid rocket-bunny">
                            <Row>
                           <Col xs={{span:8, offset: 2}} sm={{span:8, offset: 2}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}} xl={{span:6, offset: 3}} className=" d-flex justify-content-center">
                            </Col>
                                </Row>
                            <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <VerticalTimeline>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 April-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}   
                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Launch, Airdrops, IRL Bunny Prototype</h4>
                                        <p>
                                            <ul>
                                                <li>April 15
                                                    <ul>
                                                        <li>Launch</li>
                                                    </ul>
                                                </li>
                                                <li>April 20
                                                    <ul>
                                                        <li>Make sure all airdrops have been made to correct wallets</li>
                                                    </ul>
                                                </li>
                                                <li>May 1
                                                    <ul>
                                                        <li>First IRL bunny to be created announced/ celeb partnership</li>
                                                        <li>Prototype to begin development (size, materials, patterns etc.)</li>
                                                    </ul>
                                                </li>
                                                <li>June 1
                                                    <ul>
                                                        <li>Childrens book development to begin. (story, art, publisher)</li>
                                                        <li>Sign on JonnyLuckyGirl for author, self publish, need artist*</li>
                                                        <li>Additional person added to team to help with bunny and book manufacturing</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">NFT Drops, New HQ, Beers</h4>
                                        <p>
                                            <ul>
                                                <li>July 1
                                                    <ul>
                                                        <li>Anthony to start new line of NFT drops ( Brewing Co.)</li>
                                                        <li>Finding warehouse and HQ of StuffyBunnys CA or TX</li>
                                                        
                                                    </ul>
                                                </li>
                                                <li>August 1
                                                    <ul>
                                                        <li>LLC started for Brewing Co.</li>
                                                        <li>Scouting spots for location CA or TX</li>
                                                    </ul>
                                                </li>
                                                <li>September 1
                                                    <ul>
                                                        <li>Dropping LuckyBunnys NFT line (5k generatives)</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">3D Artist, Manufacturing, and Marketing IRL Bunnies</h4>
                                        <p>
                                            <ul>
                                                <li>October 1
                                                    <ul>
                                                        <li>Find artist to create 3-D StuffyBunnys NFT </li>
                                                        <li>Figure out how to integrate StuffyBunnys into the Metaverse</li>
                                                    </ul>
                                                </li>
                                                <li>November 1
                                                    <ul>
                                                        <li>Manufacturing of first bunny to be done and ready to launch for xmas</li>
                                                    </ul>
                                                </li>
                                                <li>December 1
                                                    <ul>
                                                        <li>Marketing for Real life bunnys to start for holiday season</li>
                                                        <li>Anthony to start artwork for 3rd collection of Bunnys NFT drop</li>
                                                    </ul>
                                                </li>
                                                
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 January-March"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q1</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Production and Voting System</h4>
                                       <p>
                                           
                                                    <ul>
                                                        <li>Start production of 2nd and 3rd Real StuffyBunnys</li>
                                                        <li>Set up community vote system to decide which bunnies</li>
                                                    </ul>
                                               
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 April-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Staffing And Bunny Drop</h4>
                                       <p>
                                            <ul>
                                                <li>Staffing put in place to manage this side of the business full time</li>
                                                <li>3rd Bunnys NFT drop (# and business utility to be determined)</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Release 2nd and 3rd IRL Bunny Drops, Children's Book, And 3D StuffyBunny NFT</h4>
                                        <p>
                                          <ul>
                                                <li>Q3
                                                    <ul>
                                                        <li>Release of 2nd and 3rd Real StuffyBunnys</li>
                                                        <li>Release of StuffyBunnys Children book</li>
                                                        <li>Release 3D StuffyBunnys NFT</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                       <p>
                                            <ul>
                                                <li>Start manufacturing of 4th and 5th Real StuffyBunnys </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 January-March"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q1</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Partnerships</h4>
                                        <p>
                                            <ul>
                                                <li>Begin partnerships with established businesses to help/advise them to create their own NFT </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 April-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                       <p>
                                            <ul>
                                                <li>Release of 4th and 5th Real StuffyBunnys</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                        <p>
                                            <ul>
                                                <li>Start manufacturing of 6th and 7th Real StuffyBunnys</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Xmas Season</h4>
                                       <p>
                                            <ul>
                                                <li>Release of 6th and 7th Real StuffyBunnys for Xmas season</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                          className="vertical-timeline-element--education"
                                          date="2025"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}
                                      >
                                    <h3 className="vertical-timeline-element-title">2025</h3>
                                        <h4 className="vertical-timeline-element-subtitle">The Future</h4>
                                       <p>My goal at this point is to acquire rights to a old cartoon not in production anymore. Such as Doug, Hey! Arnold, Jetsons, Rocket Power etc. Then to release a NFT line and allow holders to have rights to their characters of the show. Re launch the show with new episodes, movies, re-runs etc.
                                        </p>
                                    <p>Also, the plan is to release 2 additional Real StuffyBunnys every 6 months to add to the collection. We will establish a voting process on all of these. I will also need to acquire “likeness rights and permissions” from studios or celebrities to release the Real StuffyBunnys. This is not a difficult process, it just requires capital, a strong product and some negotiation skills. 
</p>
                                </VerticalTimelineElement>
                                    </VerticalTimeline>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    
                    <div className="section4 pt-5" id="section4">
                        <div className="container pt-5">
                        <Row className="htb">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <h1 className="header-style text-center" id="howtobuy">HOW TO BUY</h1>
                            </Col>
                        </Row>
                        
                        <Row className="htbinfo p-5">
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center  pb-5 ">
                                <Image src="assets/img/NFT.svg" className="htbimg" />
                                <h5 className="pt-4 df text-center">WHAT IS A NFT</h5>
                                <p className="nf text-center htbtxt">
                                    NFT stans for non-fungible token.  An asset that is non-fungible
                                    cannot be arbitrarily swapped with another - it is one of a kind.  
                                    This stands in contrast to a fungible asset that can be swapped 
                                    for another indiscriminately.<a className="primary-purp" target="_blank" href="http://Beincrypto.com/learn/how-to-mint-an-nft/" rel="noreferrer">Read More</a>
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center  pb-5 ">
                                <Image src="assets/img/Wallet.svg" className="htbimg1" />
                                <h5 className="pt-4 df text-center">HOW TO ATTACH WALLET</h5>
                                <p className="nf text-center htbtxt">
                                    Details Coming Soon
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center pb-5 ">
                                <Image src="assets/img/Fiat.svg" className="htbimg2" />
                                <h5 className="pt-4 df text-center">BUY WITH DEBIT</h5>
                                <p className="nf text-center htbtxt">
                                    Details Coming Soon.
                                </p>
                            </Col>
                        </Row>
                            </div>
                        <Row className="htbbtm">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                             <Image src="assets/img/htbbtm.svg" className="htbsmokeimg" />
                            </Col>
                        </Row>
                    </div>

                    <div className="section5 pb-5">
                        <Row className="soc">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Image src="assets/img/stuffybunny.svg" className="stufbun" />
                            </Col>
                        </Row>
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <a target="_blank" href="https://twitter.com/OfficialSB_NFT" rel="noreferrer"><Image src="assets/img/Twitter.svg" className="socicon" /></a>
                                <a target="_blank" href="https://www.instagram.com/stuffybunnysnft/?utm_medium=copy_link" rel="noreferrer"><Image src="assets/img/Instagram.svg" className="socicon" /></a>
                                <a target="_blank" href="https://discord.com/invite/stuffybunny" rel="noreferrer"><Image src="assets/img/Discord.svg" className="socicon" /></a>
                                <Image src="assets/img/Opensea.svg" className="socicon" />
                            </Col>
                        </Row>
                    </div>

                    <div className="footer">
                        <Row className="">
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="fsec text-center">
                                <p className="nf">&copy; 2022 Stuffy Bunny NFT, LLC</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="img-fluid text-center pt-3 pt-md-4">
                                <a target="_blank" href="https://www.nftpumps.com/" rel="noreferrer"><Image src="assets/img/nft-pumps.png" className="nftpumps" /></a>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="fsec text-center">
                                <Row className="">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-end">
                                        <p className="nf">Privacy Policy</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-start">
                                        <p className="nf">Terms of Service</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
            

        )
    }
}

export default MainPage;
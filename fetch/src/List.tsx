import React, { useEffect, useState } from "react"
import { UserData } from "./UserData";

import './style.scss';



interface Response {
    id: string;
    firstName?: string;
    lastName: string;
    maidenName: string;
    age: string;

}



export const List:React.FC<Response> = () => {

    const [data, setData] = useState<Response[] >([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError]= useState<string>("")

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
    }

    const fetchApi = async() =>{
        try {
            setLoading(true);
            const allData = await fetch(`https://dummyjson.com/products`);
            const request = await allData.json();
            console.log(request);
            setData(request);
        } catch (err:any) {
            console.error(err)
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchApi()
    },[])


    const DataType = ()=>{


        if(loading){
            return <div>Loading...</div>
        }

        if(error){ <p>404 Error Found...</p>
        }

        return (
            <>

            
            <header style={{marginTop: "20px 0"}}>
                <div className="cont" >
                    <div className="link" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <a href="">Home</a>

                        <div className="logo">
                            <button type="submit" onClick={handleClick}>Click</button>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                <h1>List of Names</h1>
            </section>
            </>
        )

    }

    const Deals = ()=>{
        return (
            <>
            <div>
  {/* NAVIGATION BAR/COMPANY LOGO */}
                <header className="container">
                    <a href="#"><img src="/logo.png" alt="Company logo" /></a>
                    <div className="navbar">
                    <ul>
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#destination">destination</a></li>
                        <li><a href="#pricing">pricing</a></li>
                    </ul>
                    </div>
                </header>
                {/* HEADER CONTENT */}
                <div className="header">
                    <div className="content">
                    <h1><span>Go</span> where <br />you feel most <br /><span>Alive</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt voluptatem quidem esse, at ex tempora facilis numquam doloremque explicabo!</p>
                    <div className="button">
                        <a className="btn" href="#">Let's go</a>
                        <a href=""><img src="/Group 64.png" alt="" /></a>
                    </div>
                    </div>
                    <div className="page-icon">
                    </div>
                </div>
                {/* PAGE WITH PLACES */}
                <section>
                    <div className="page-img">
                    <div className="images">
                        <h5 className="amount">$500</h5>
                        <div className="location">
                        <h6 className="places"><span className="material-symbols-outlined">location_on</span>Roma,Italy</h6>
                        </div>
                    </div>
                    <div className="images">
                        <h5 className="amount">$450</h5>
                        <div className="location">
                        <h6 className="places"><span className="material-symbols-outlined">location_on</span>California,USA</h6>
                        </div>
                    </div>
                    <div className="images">
                        <h5 className="amount">$750</h5>
                        <div className="location">
                        <h6 className="places"><span className="material-symbols-outlined">
                            location_on
                            </span>Zurich,Switzerland</h6>
                        </div>
                    </div>
                    <div className="images">
                        <h5 className="amount">$%999</h5>
                        <div className="location">
                        <h6 className="places"><span className="material-symbols-outlined">
                            location_on
                            </span>Imerovigil,Santoriin</h6>
                        </div>
                    </div>
                    </div>
                </section>
                {/* INFORMATION */}
                <section id="pricing">
                    <div className="information">
                    <div className="context1">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti sed illo similique aliquam sapiente explicabo autem <br /> quaerat tempore aperiam temporibus repellendus ratione <br />quos recusandae dolores, beatae sequi laborum? Vitae, tempora!</p>
                    </div>
                    <div className="context2">
                        <h2>Why you should <br />go with us?</h2>
                    </div>
                    </div>
                    <div className="img-text1">
                    <div className="image-1">
                    </div>
                    <div className="tour-info">
                        <div className="img-text2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sed eligendi, iusto voluptates in deserunt excepturi facere qui suscipit ut earum illo itaque non dicta cumque dignissimos totam, a perferendis!</p>
                        </div>
                        <div className="img-text2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sed eligendi, iusto voluptates in deserunt excepturi facere qui suscipit ut earum illo itaque non dicta cumque dignissimos totam, a perferendis!</p>
                        </div>
                        <div className="img-text2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sed eligendi, iusto voluptates in deserunt excepturi facere qui suscipit ut earum illo itaque non dicta cumque dignissimos totam, a perferendis!</p>
                        </div>
                    </div>
                    </div>
                </section>
                {/* LOGOS */}
                <section>
                    <div className="logos">
                    <div className="logo-icon">
                    </div>
                    </div>
                </section>
                {/* TRIP DESTINATION */}
                <section id="destination">
                    <div className="trip">
                    <div className="trip-context">
                        <h2>Our trip <br />Documentations</h2>
                    </div>
                    <div className="trip-context1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Culpa ipsam voluptate excepturi. Perferendis iure, <br />repellendus ab cupiditate numquam sint eum non <br />molestias cumque quis obcaecati magni officia quaerat <br /> nihil omnis!</p>
                    </div>
                    </div>
                    <div className="photo">
                    </div>
                </section>
                {/* PEOPLES THOUGHTS */}
                <section id="about">
                    <div className="custormer">
                    <h2>What Our <br /> Custormers Say?</h2>
                    </div>
                    <div className="tweet">
                    <div className="ellipse1">
                        <div className="ellipse-flex">
                        <div className="img-name">
                            <div className="cus-img">
                            </div>
                            <div className="name">
                            <h5>Name Surname</h5>
                            <h6>Description</h6>
                            </div>
                        </div>
                        <p>"All base UI elelmts are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality vidoes sharing on desktop, moblie and tablet"</p>
                        </div>
                    </div>
                    <div className="ellipse1">
                        <div className="ellipse-flex">
                        <div className="img-name">
                            <div className="cus-img">
                            </div>
                            <div className="name">
                            <h5>Name Surname</h5>
                            <h6>Description</h6>
                            </div>
                        </div>
                        <p>"All base UI elelmts are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality vidoes sharing on desktop, moblie and tablet"</p>
                        </div>
                    </div>
                    <div className="ellipse1">
                        <div className="ellipse-flex">
                        <div className="img-name">
                            <div className="cus-img">
                            </div>
                            <div className="name">
                            <h5>Name Surname</h5>
                            <h6>Description</h6>
                            </div>
                        </div>
                        <p>"All base UI elelmts are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality vidoes sharing on desktop, moblie and tablet"</p>
                        </div>
                    </div>
                    </div>
                </section>
                {/* SUBSCRIPTIONS PLATFORM */}
                <section>
                    <div className="platform">
                    <div className="main-item">
                        <div className="news">
                        <h2>Subscribe to out newsletter</h2>
                        </div>
                        <div className="form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Enter Your Email" required />
                        <button>SEND</button>
                        </div>
                    </div>
                    </div>
                </section>
                {/* PAGE ENDING */}
                <footer>
                    <div className="con-detail">
                    <div className="con-bk">
                        <div className="con-logo">
                        <p>Going on an adventure is not just <br />about fun, it's about yourself and <br />entertaining yourself</p>
                        </div>
                        <div className="con-contact">
                        <h4>Useful links</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Destination</p>
                        <p>pricing</p>
                        </div>
                        <div className="con-contact">
                        <h4>Support</h4>
                        <p>get in touch</p>
                        <p>help center</p>
                        <p>live chat</p>
                        <p>how to work</p>
                        </div>
                        <div className="con-contact">
                        <h4>Contact</h4>
                        <p>Email:incredible1916@gmail.com</p>
                        <p>09167677611</p>
                        <div className="media">
                            <i className="fa fa-facebook" />
                            <i className="fa fa-linkedin" />
                            <i className="fa fa-twitter" />
                            <i className="fa fa-instagram" />
                        </div>
                        </div>
                    </div>
                    <div className="design-info">
                        <p>Akinsanmi Akinyemi 𝕔2023 All Rights Reserved</p>
                        <a href="#"><i className="fa fa-arrow-up" /></a>
                    </div>
                    </div>
                </footer>
                </div>

            </>
        )
    }
    

  return (
    <>
    {DataType()}
    {Deals()}
    <UserData />
    </>
  )
}

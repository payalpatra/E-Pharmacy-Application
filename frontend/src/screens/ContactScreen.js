import React, { useState } from 'react'

function ContactScreen() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `Your Full Name is ${data.fullName}. Your Email address ${data.email} and Your message is ${data.message}. Thank For Your Response`
        );
    };

    return (
        <div>
        <section className="main_heading pt-5">
            <div className="text-center">
                <h1 className="display-4">Contact Us</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-xxl-8 col-10 col-md-8 mx-auto">
                        <form onSubmit={formSubmit} >
                            <div className="mb-3">
                                <label for="exampleInputtext1"
                                    className="form-label">Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleInputtext1"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name"
                                    required="" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                    required="" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="pr-4">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="radio" name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1" required="" />
                                    <label className="form-check-label" for="inlineRadio1">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                        value="option2" required="" />
                                    <label className="form-check-label" for="inlineRadio2">Male</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleDataList"
                                    className="form-label">Select City</label>
                                <input
                                    className="form-control"
                                    list="datalistOptions"
                                    id="exampleDataList"
                                    placeholder="Type to search..."
                                    required="" />
                                <datalist id="datalistOptions">
                                    <option value="San Francisco"></option>
                                    <option value="New York"></option>
                                    <option value="Seattle"></option>
                                    <option value="Los Angeles"></option>
                                    <option value="Chicago"></option>
                                    <option value="Bhubaneswar"></option>
                                </datalist>
                            </div>
                            <div>

                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    required=""
                                    rows="3"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <div className="form-file">
                                    <input type="file" className="form-file-input" id="customFile" required="" />
                                    <label className="form-file-label" for="customFile">
                                        <span className="form-file-text">Choose file...</span>
                                        <span className="form-file-button">Browse</span>
                                    </label>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default ContactScreen

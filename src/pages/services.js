const Services = () => {
    return (
        <>
            <h5 className="text-center mt-4"><strong>Services</strong></h5>
            <div className="container-fluid row service mt-4" id="service">
                <div className="col-6 col-sm-4 col-md-3 mb-1">
                    <div className="card service-card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://www.datocms-assets.com/14946/1590690690-front-end.jpg" className="service-card-img" />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-titl text-center">Front-End Development</h6>
                            {/* <p className="card-text">with Html, CSS, SASS, Bootstrap, material ui,  Reactjs, Nextjs.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-1">
                    <div className="card service-card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://codecondo.com/wp-content/uploads/2017/09/What-is-back-end-development.jpg" className="service-card-img" />

                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title text-center">Back-End Development</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#!" className="btn btn-primary">Button</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-1">
                    <div className="card service-card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img className="service-card-img" src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bug_software_issue_tracking_computer_screen.jpg?itok=6qfIHR5y" />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title text-center">Testing and Bugs Fixing</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#!" className="btn btn-primary">Button</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-1">
                    <div className="card service-card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img className="service-card-img" src="data:image/jpeg;base64,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" />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title text-center">Deployment</h6>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#!" className="btn btn-primary">Button</a> */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services;

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand text-white" href="#" style={{ fontStyle: "normal" }}>PERFORMA <i class="fa fa-product-hunt text-warning" aria-hidden="true"></i></a>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <li className="nav-item active">
                        <a className="nav-link text-light mr-2" href="#home"><i class="fa fa-home" ></i> Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-2" href="#about"><i class="fa fa-user-circle" aria-hidden="true"></i> About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-2" href="#about"><i class="fa fa-briefcase" aria-hidden="true"></i> Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-2" href="#service"><i class="fa fa-phone-square" aria-hidden="true"></i> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Header;
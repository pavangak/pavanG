import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
          <div className="nav-logo">
              <h1 id='logo'>PG</h1>
          </div>
          <div className='navart'>
            <div className="Navbar_div">Home</div>
            <div className="Navbar_div">About</div>
            <div className="Navbar_div">Garrely</div>
            <div className="Navbar_div">Contact</div>
          </div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  )
}

export default Navbar

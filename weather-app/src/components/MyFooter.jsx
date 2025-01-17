const MyFooter = () => {
  return (
    <footer className="d-flex justify-content-center text-black">
      <div className="container-fluid" id="footer">
        <div className="row mb-3">
          <div className="col-md-12 mt-1">
            <button type="button" className="bg-transparent border-0 p-0 pe-4">
              <i className="bi bi-facebook fs-4 text-black"></i>
            </button>
            <button type="button" className="bg-transparent border-0 p-0 pe-4">
              <i className="bi bi-instagram fs-4 text-black"></i>
            </button>
            <button type="button" className="bg-transparent border-0 p-0 pe-4">
              <i className="bi bi-twitter fs-4 text-black"></i>
            </button>
            <button type="button" className="bg-transparent border-0 p-0 pe-4">
              <i className="bi bi-youtube fs-4 text-black"></i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <p>Shop</p>
          </div>
          <div className="col-md-3">
            <p>Chi Siamo</p>
          </div>
          <div className="col-md-3">
            <p>Help Center</p>
          </div>
          <div className="col-md-3">
            <p>Contatti</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <p>FAQ</p>
          </div>
          <div className="col-md-3">
            <p>Area Personale</p>
          </div>
          <div className="col-md-3">
            <p>Luoghi Recenti</p>
          </div>
          <div className="col-md-3">
            <p>Corporate Information</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <p>Privacy</p>
          </div>
          <div className="col-md-3">
            <p>Legal Notices</p>
          </div>
          <div className="col-md-3">
            <p>Cookie Preferences</p>
          </div>
          <div className="col-md-3">
            <p>Terms of Use</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <p>Contact Us</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;

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
          <div className="col-md-4">
            <p>Chi Siamo</p>
          </div>
          <div className="col-md-4">
            <p>Help Center</p>
          </div>
          <div className="col-md-4">
            <p>Contatti</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>FAQ</p>
          </div>
          <div className="col-md-4">
            <p>Area Personale</p>
          </div>
          <div className="col-md-4">
            <p>Luoghi Recenti</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>Privacy</p>
          </div>
          <div className="col-md-4">
            <p>Legal Notices</p>
          </div>
          <div className="col-md-4">
            <p>Cookie Preferences</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;

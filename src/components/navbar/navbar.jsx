export default function Navbar(){
    return(
       <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#"><h3 class="text-danger">Store</h3></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link links1" href="#mc">men's clothing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links1" href="#j">jewelery</a>
              </li><li class="nav-item">
                <a class="nav-link links1" href="#e">electronics</a>
              </li><li class="nav-item">
                <a class="nav-link links1" href="#w">women's clothing</a>
            </li></ul>
          </div>
        </div>
      </nav>
    )
}
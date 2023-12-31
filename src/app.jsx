import Random from "./random"
import "./index.css"
function App() {
      return <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<section className="back">
<nav className="top">
<li><a href="">Best Sellers</a></li>
<li><a href="">Gift Ideas</a></li>
<li><a href="">New Releases</a></li>
<li><a href="">Today's Deals</a></li>
<li><a href="">Customer Services</a></li>

</nav>

<div className="logo">
      <img src="https://themewagon.github.io/eflyer/images/logo.png" alt="" />
</div>
<section className="center">
      <div className="ham">
      <i class="fa fa-bars" ></i>
      
      </div>
      <div className="btn">
            <button>All Category</button>
      </div>
      <div className="sum">
      <div className="seacrh">
    <input type="text" class="form-control" placeholder="Search this blog"></input> 
      </div>
      <button className="find"><i class="fa fa-search" ></i></button>
      </div>
     
      <div className="btn2">
            <button>English</button>
      </div>
      <div className="cart">
            <div className="icon">
            <i class="fa fa-shopping-cart" ></i>
            </div>
            <div className="name"><p>Cart</p></div>
      </div>
      <div className="person">
      <div className="icon">
      <i class="fa fa-male" ></i>
      </div>
            <div className="name">
                  <p>Person</p>
            </div>
      </div>
</section>
<section className="all">
<section className="heading">
      <section className="centre">
      <div>
      <i class="fa fa-arrow-circle-left" ></i>
      </div>
      <div className="big">
            <h1>GET START </h1>
           <h1> YOUR FAVRIOT SHOPING </h1>
      </div>
      <div><i class="fa fa-arrow-circle-right" ></i></div></section>

     <div className="btn3">
            <button >Buy Now</button> 
            </div>
            <p>Man and Woman Fashion</p>
            

</section>
<section className="shirt">
      <div className="first">
            <h3>Man T-Shirt</h3>
            <div className="price"><p className="orange">price</p>
            <p>$30</p></div>
            <img src="https://themewagon.github.io/eflyer/images/tshirt-img.png" alt="" />

      </div>
      <div className="first">
            <h3>Man T-Shirt</h3>
            <div className="price"><p className="orange">price</p>
            <p>$30</p></div>
            <img src="https://themewagon.github.io/eflyer/images/dress-shirt-img.png" alt="" />

      </div>
      <div className="first">
            <h3>Woman Shirt</h3>
            <div className="price"> <div className="orange"><p>price</p></div>
            <p >$30</p></div>
            <img src="https://themewagon.github.io/eflyer/images/women-clothes-img.png" alt="" />


      </div>

</section>
</section>
<section className="downbutton">
<div className="down">
<div className="inbtn"><i class="fa fa-arrow-circle-left" ></i></div>
<div><i class="fa fa-arrow-circle-right" ></i></div>
</div>

<div className="elect">
      <h1>Electronic</h1>
</div>
</section>
<section className="shirt">
      <div className="first">
            <h3>Laptop</h3>
            <div className="price"><p className="orange"> Start price</p>
            <p>$100</p></div>
            <img src="https://themewagon.github.io/eflyer/images/laptop-img.png" alt="" />

      </div>
      <div className="first">
            <h3>Mobile</h3>
            <div className="price"><p className="orange">Start Price</p>
            <p>$100</p></div>
            <img src="https://themewagon.github.io/eflyer/images/mobile-img.png" alt="" />

      </div>
      <div className="first">
            <h3>Computer</h3>
            <div className="price"> <div className="orange"><p>Start price</p></div>
            <p >$100</p></div>
            <img src="https://themewagon.github.io/eflyer/images/computer-img.png" alt="" />


      </div>

</section>


<footer className="last">
<h1 className="endhead"> Eflyer</h1>
 <div className="end">
     <div> <h4>Your Email</h4></div>
      <div className="change"><h4>SUBCRIBE</h4></div>
</div>
<div className="line"></div>
<ul className="lastname">
<li><a href="">Best Sellers</a></li>
<li><a href="">Gift Ideas</a></li>
<li><a href="">New Releases</a></li>
<li><a href="">Today's Deals</a></li>
<li><a href="">Customer Services</a></li>
</ul>
<div className="number">
<p>Help Line Number :</p>
<p className="change"> &nbsp;03411075695</p>
</div>
<div className="copyright">
      <p>© 2020 All Rights Reserved. Design by  </p>
      <p className="change">&nbsp; Free html Templates</p>
</div>
</footer>
</section>




<Random />
</div>

}
export default App



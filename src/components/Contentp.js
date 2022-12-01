import React from "react";

function Content() {
  return (
    <>
      <div>
        <section className="">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="Images/banner-1.jpg"
                  alt="First slide"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 "
                  src="Images/banner-1.jpg"
                  alt="Second slide"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="Images/banner-1.jpg"
                  alt="Third slide"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h3 className="text-center mt-4 text-secondary">About us</h3>
              </div>
            </div>
            <div className="row">
              <p className="mt-4 mb-5">
                Gym and Fitness was founded in 2002 as a family owned and
                operated business specialising in supplying high-quality gym
                equipment at great prices. Instead of being just another gym
                equipment retailer, our founders wanted to be the best in the
                industry and set their minds to doing so! Over the last two
                decades Gym and Fitness has grown into one of Australia’s
                largest online fitness equipment retailers, helping thousands of
                customers live longer, happier and healthier lives. OUR VALUES
                For 20 years helping customers reach their fitness goals has
                been at the heart of what we do and why we do it! We live and
                breathe our six core values and four brand promises — which
                speak of our commitment to our customers, staff, the industry
                and our business as a whole.
              </p>
            </div>
          </div>
        </section>

        <section className="" id="destinations">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h3 className="text-center mt-4 text-secondary">Plans</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">Gold</h4>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">Silver</h4>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">basic</h4>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente esse necessitatibus neque sequi doloribus.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="" id="places">
          <div className="container">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center text-secondary mt-4">
                Places and Description
              </h3>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Tourist Places
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Best Destination
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Best Heritages
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light mt-5" id="tourist">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 mb-4">
                <h3 className="text-center mt-4 text-secondary">Trainers</h3>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Anna Deynah
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    diet & meal expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    John Doe
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    weight gain & weight loss expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Maria Kate
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    yoga & zumba expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Content;

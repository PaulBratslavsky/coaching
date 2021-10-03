import React from 'react'

export default function Faqs() {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section-title left-align wow fadeInUp">
                        <p className="subtitle">
                            <i className="fal fa-book"></i>
                            What You Learn
                        </p>
                        <h3 className="title">Do You Want to Transform Your Smart Life ?</h3>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturSed ut perspiciatis omnis iste natus</p>
                    </div>
                  </div> 
                <div className="col-lg-6">
                    <div className="accordion accordion-style mb-xl-30 wow fadeInDown" id="accordion">
                        <div className="card">
                            <div className="card-header">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#ItemOne" aria-expanded="true" aria-controls="ItemOne">
                                    How to Become a Life Coach
                                </button>
                            </div>
                            <div id="ItemOne" className="collapse show" aria-labelledby="ItemOne" data-parent="#accordion">
                                <div className="card-body">
                                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#ItemTwo" aria-expanded="false" aria-controls="ItemTwo">
                                    How to Feel Better
                                </button>
                            </div>
                            <div id="ItemTwo" className="collapse" aria-labelledby="ItemTwo" data-parent="#accordion">
                                <div className="card-body">
                                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#ItemThree" aria-expanded="false" aria-controls="ItemThree">
                                    How to Solve Any Problem
                                </button>
                            </div>
                            <div id="ItemThree" className="collapse" aria-labelledby="ItemThree" data-parent="#accordion">
                                <div className="card-body">
                                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#ItemFour" aria-expanded="false" aria-controls="ItemFour">
                                    We Teach You How to Take Massive Action.
                                </button>
                            </div>
                            <div id="ItemFour" className="collapse" aria-labelledby="ItemFour" data-parent="#accordion">
                                <div className="card-body">
                                    Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

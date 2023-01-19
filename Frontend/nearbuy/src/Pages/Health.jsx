import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Divider } from '@chakra-ui/react'

const Health = () => {
  return (
    <Container  maxW="90%" margin="auto"  marginTop="125px" border="2px solid red">
      <Container className="wrapper-content wrapper-content--ud" infinite-scroll="">
        <Box display="flex"
          justifyContent="space-between">
              <nav className="fl-row">
                <a href="/">Nearbuy</a>
                
                  
                <a href="/bhubaneswar/c/all-offers">Deals in Bhubaneswar</a>

                <a  href="/health">All Health Deals in Bhubaneswar</a>

              </nav>
          </Box>
          <Divider borderColor="#79d392" w='100px' m='auto' />

          {/* <div className="margin-bottom-s">





            <div className="row">
              <div className="col-xs-12 col-s-4 col-l-3">
                <div className="city-name">
                  <p className="txt-primary font-weight-semibold font-lg">Promos &amp; Filters</p>
                </div>
              </div>
              <div className="col-xs-12 col-s-8 col-l-9">
                <div className="row">
                  <div className="col-s-6">

                    <h1 className="txt-primary font-weight-semibold font-lg line-height-default">All Health Deals in Bhubaneswar</h1>
                  </div>
                  <div className="col-s-6">
                    <sort-options><div className="sorter sort-buttons flt-right">
                      <button className="active">Near me</button><button>Popular</button><button>What's New</button><button>Price (High to Low)</button><button>Price (Low to High)</button>
                    </div></sort-options>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-s-4 col-m-4 col-l-3 filter">
              <promo-slider><div className="position-relative  promo-slider-wrapper">
                <div className="all-promo-wrapper">
                  <div className="promo-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0.6s;">
                    <div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">



                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold white-space-normal">Win Rs 500 instant off code</p>
                            </div>


                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm"> Valid on all prepaid deals | No minimum purchase</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">NBLUCKY</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 02 Feb 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div><div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">

                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold">
                                25% OFF
                              </p>


                            </div>




                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm">Get discount code of 25% value | All Restaurant Deals</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">FOODY</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 31 Dec 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div><div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">

                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold">
                                25% OFF
                              </p>


                            </div>




                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm"> Get discount code of 25% value | All Spa Deals</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">RELAX</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 31 Dec 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div><div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">

                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold">
                                25% OFF
                              </p>


                            </div>




                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm"> Get discount code of 25% value | All Salon Deals</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">STYLE</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 31 Dec 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div><div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">

                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold">
                                25% OFF
                              </p>


                            </div>




                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm"> Get discount code of 25% value | All Activities Deals</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">FUN25</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 31 Dec 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div><div className="promo-cont">
                      <promo-card initindex="1"><div className="promo" ga-impression="">
                        <div className="block margin-reset clearfix overflow-hidden">

                          <div className="block__inner local-promo">

                            <div className="promo__price">
                              <p className="h5 txt-primary font-weight-bold">
                                5% OFF
                              </p>


                            </div>




                            <div className="promo__off">


                            </div>


                            <div className="promo__title">
                              <p className="line-height-xs font-weight-semibold font-sm">5% Instant discount upto ₹100 | Valid for new users only.</p>
                            </div>


                            <div className="promo__code clearfix position-relative">
                              <div className="promo__code__text">WELCOME</div>
                              <div className="promo__code__copy">
                                <div className="tooltip-wrapper">
                                  <button className="font-weight-semibold">Copy</button>
                                  <div className="tooltip tooltip--left"> Code copied
                                    <span className="arrow"></span>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>




                          <div className="block__footer block__footer--sm bg-white">
                            <div className="row">
                              <div className="col-m-7 col-s-7">

                                <div className="promo__validity">
                                  <div className="txt-left">
                                    <p className="line-height-xs">Valid till 31 Dec 2023</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-m-5 col-s-5">

                                <div className="promo__more">
                                  <div className="txt-right">
                                    <button className="line-height-xs">Know more</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div></promo-card>
                    </div>
                  </div>
                </div>

                <div className="nav-pane">
                  <button className="prev hide">

                    <i className="nb-icon nb-icon_chevron-left"></i>
                  </button>
                  <button className="next">

                    <i className="nb-icon nb-icon_chevron-right"></i>
                  </button>
                </div>
              </div>

                <promo-modal>
                  <div className="modal_wrapper promo-offer-modal modal-hide overlay" closepopup="">

                  </div>
                  <textarea className="copy-text"></textarea></promo-modal>

                <textarea className="copy-text"></textarea>



              </promo-slider>
              <div className="filter-wrapper card-main">
                <div>
                  <category-filter-tree><aside className="filter-categories">
                    <p className="h6 font-weight-light margin-bottom-m category-heading txt-primary">Categories</p>
                    <ul className="list-block menu">
                      <li className="close">
                        <a className="menu-header menu-header-arrow-hide">
                          <span>Health &amp; Wellness</span>
                          <span className="count flt-right">(2)</span>
                        </a>

                      </li>
                    </ul>
                  </aside>
                    
                  </category-filter-tree>


                </div>
              </div>
            </div>
            <div className="col-s-8 col-m-8 col-l-9 listing-grid">

              <merchant-listing-grid>
                <div className="row fl-row fl-row--wrap fl-row--full-gutter">
                  <div className="col-xs-12 col-s-12 col-m-6 col-l-4 fl-column">
                    <merchant-list-card pagetype="listing"><a className="card-main card-main--equal-height cursor-pointer" same-height="" href="/online/wellcure-haryana?merchantId=341167&amp;contextPayload=%7B%22collectionPermalink%22:%22all-health-deals%22%7D">
                      <div className="card-main__content card-main__content--lg">

                        <div className="">
                          <div className="fl-column position-relative">
                            <Image className="card-main__img img-responsive" src="https://img4.nbstatic.in/tr:w-350/60475a7379600c000c8c15bc.jpg" style="max-height: 155px; border-radius: 3px;" data-lzled="true"/>

                          </div>
                          <div className="fl-column">
                            <h2 className="card-main__heading margin-top-s">
                              Wellcure

                              <span className="card-main__value line-height-xs display-inline-block font-weight-regular display-block margin-top-xs">Online Deal</span>
                            </h2>


                          </div>

                        </div>


                        <div className="card-list margin-top-s">
                          <div className="card-main">

                            <div className="fl-row fl-row--middle fl-row--start margin-bottom-xs">
                              <p className="tag tag--delight tag--small white-space-nowrap txt-uppercase margin-bottom-zero line-height-default bg-delight-1">Deals</p>
                              <p className="card-main__value txt-primary line-height-primary font-weight-semibold">
                                Health Live Courses, E learning and Workshops
                                from
                                <i className="nb-icon nb-icon--sm nb-icon_rupee"></i>209

                              </p>
                            </div>


                          </div>
                        </div>
                      </div>

                      <div className="card-main__footer">



                        <div className="section bg-primary content-footer border-radius--bottom">
                          <div className="fl-row fl-row--middle">
                            <div className="fl-column">
                              <p className="card-main__field line-height-xs font-weight-semibold txt-secondary bought-count">7 Bought</p>
                            </div>
                            <div className="fl-column">

                            </div>
                          </div>
                        </div>
                      </div>
                    </a></merchant-list-card>
                  </div><div className="col-xs-12 col-s-12 col-m-6 col-l-4 fl-column">
                    <merchant-list-card pagetype="listing"><a className="card-main card-main--equal-height cursor-pointer" same-height="" href="/online/redcliffe-labs-karnataka?merchantId=349905&amp;contextPayload=%7B%22collectionPermalink%22:%22all-health-deals%22%7D">
                      <div className="card-main__content card-main__content--lg">

                        <div className="">
                          <div className="fl-column position-relative">
                            <Image className="card-main__img img-responsive" src="https://img4.nbstatic.in/tr:w-350/6312e16b54f372000bd2a4fb.jpg" style="max-height: 155px; border-radius: 3px;" data-lzled="true"/>

                          </div>
                          <div className="fl-column">
                            <h2 className="card-main__heading margin-top-s">
                              RedCliffe Labs

                              <span className="card-main__value line-height-xs display-inline-block font-weight-regular display-block margin-top-xs">Online Deal</span>
                            </h2>


                          </div>

                        </div>


                        <div className="card-list margin-top-s">
                          <div className="card-main">

                            <div className="fl-row fl-row--middle fl-row--start margin-bottom-xs">
                              <p className="tag tag--delight tag--small white-space-nowrap txt-uppercase margin-bottom-zero line-height-default bg-delight-1">Deals</p>
                              <p className="card-main__value txt-primary line-height-primary font-weight-semibold">
                                Health Checkup Packages
                                from
                                <i className="nb-icon nb-icon--sm nb-icon_rupee"></i>999

                              </p>
                            </div>


                          </div>
                        </div>
                      </div>

                      <div className="card-main__footer">



                        <div className="section bg-primary content-footer border-radius--bottom">
                          <div className="fl-row fl-row--middle">
                            <div className="fl-column">
                              <p className="card-main__field line-height-xs font-weight-semibold txt-secondary bought-count">15 Bought</p>
                            </div>
                            <div className="fl-column">

                            </div>
                          </div>
                        </div>
                      </div>
                    </a></merchant-list-card>
                  </div>
                </div>



                <div className="row fl-row fl-row--wrap fl-row--full-gutter">
                </div>



                <div className="loaders__block-level loaders__block-level--grey-base hide"></div></merchant-listing-grid>
              <div className="row txt-center">
                <button className="btn_cream" tabIndex="0">VIEW ALL OFFERS</button>
              </div>
            </div>
          </div> */}
      </Container>
    </Container>
  )
}

export default Health

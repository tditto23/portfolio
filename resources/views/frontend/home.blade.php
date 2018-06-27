@extends('layouts.frontend.master')
@section('content')
    <section id="content">

        <div class="content-wrap">

            <div class="container clearfix">

                <div class="heading-block nobottomborder center">
                    <h1>Hello! We are a <span>New York</span> based Creative Agency</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi, et perspiciatis.</span>
                </div>

                <div class="fslider bottommargin" data-animation="fade">
                    <div class="flexslider">
                        <div class="slider-wrap">
                            <div class="slide">
                                <a href="#">
                                    <img src="images/portfolio/1/full/1.jpg" alt="Slide 1">
                                </a>
                                <div class="flex-caption slider-caption-bg">Ultra Responsive Layout</div>
                            </div>
                            <div class="slide">
                                <a href="#">
                                    <img src="images/portfolio/1/full/2.jpg" alt="Slide 2">
                                </a>
                                <div class="flex-caption slider-caption-bg slider-caption-bottom-right">Retina Graphics Support</div>
                            </div>
                            <div class="slide">
                                <a href="#">
                                    <img src="images/portfolio/1/full/3.jpg" alt="Slide 3">
                                </a>
                                <div class="flex-caption slider-caption-bg">Custom Google WebFonts</div>
                            </div>
                            <div class="slide">
                                <a href="#">
                                    <img src="images/portfolio/1/full/4.jpg" alt="Slide 4">
                                </a>
                                <div class="flex-caption slider-caption-bg slider-caption-bottom-right">400+ HTML5 Templates Included</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="promo promo-border bottommargin">
                    <h3>Call us today at <span>+91.22.57412541</span> or Email us at <span>support@canvas.com</span></h3>
                    <span>We strive to provide Our Customers with Top Notch Support to make their Theme Experience Wonderful</span>
                    <a href="#" class="button button-xlarge button-rounded">Start Browsing</a>
                </div>

                <div id="portfolio-ajax-wrap">
                    <div id="portfolio-ajax-container"></div>
                </div>

                <div id="portfolio-ajax-loader"><img src="images/preloader-dark.gif" alt="Preloader"></div>

                <!-- Portfolio Filter
                ============================================= -->
                <ul id="portfolio-filter" class="portfolio-filter clearfix" data-container="#portfolio">

                    <li class="activeFilter"><a href="#" data-filter="*">Show All</a></li>
                    <li><a href="#" data-filter=".pf-icons">Icons</a></li>
                    <li><a href="#" data-filter=".pf-illustrations">Illustrations</a></li>
                    <li><a href="#" data-filter=".pf-uielements">UI Elements</a></li>
                    <li><a href="#" data-filter=".pf-media">Media</a></li>
                    <li><a href="#" data-filter=".pf-graphics">Graphics</a></li>

                </ul><!-- #portfolio-filter end -->

                <div id="portfolio-shuffle" class="portfolio-shuffle" data-container="#portfolio">
                    <i class="icon-random"></i>
                </div>

                <div class="clear"></div>

                <!-- Portfolio Items
                ============================================= -->
                <div id="portfolio" class="portfolio grid-container portfolio-nomargin portfolio-ajax clearfix">

                    <article id="portfolio-item-1" data-loader="include/ajax/portfolio-ajax-image.php" class="portfolio-item pf-media pf-icons">
                        <div class="portfolio-image">
                            <a href="portfolio-single.html">
                                <img src="images/portfolio/4/1.jpg" alt="Open Imagination">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Open Imagination</a></h3>
                            <span><a href="#">Media</a>, <a href="#">Icons</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-2" data-loader="include/ajax/portfolio-ajax-image.php" class="portfolio-item pf-illustrations">
                        <div class="portfolio-image">
                            <a href="portfolio-single.html">
                                <img src="images/portfolio/4/2.jpg" alt="Locked Steel Gate">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Locked Steel Gate</a></h3>
                            <span><a href="#">Illustrations</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-3" data-loader="include/ajax/portfolio-ajax-video.php" class="portfolio-item pf-graphics pf-uielements">
                        <div class="portfolio-image">
                            <a href="#">
                                <img src="images/portfolio/4/3.jpg" alt="Mac Sunglasses">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-video.html">Mac Sunglasses</a></h3>
                            <span><a href="#">Graphics</a>, <a href="#">UI Elements</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-4" data-loader="include/ajax/portfolio-ajax-slider.php" class="portfolio-item pf-icons pf-illustrations">
                        <div class="portfolio-image">
                            <div class="fslider" data-arrows="false" data-speed="400" data-pause="4000">
                                <div class="flexslider">
                                    <div class="slider-wrap">
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/4.jpg" alt="Morning Dew"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/4-1.jpg" alt="Morning Dew"></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-overlay" data-lightbox="gallery">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-gallery.html">Morning Dew</a></h3>
                            <span><a href="#">Icons</a>, <a href="#">Illustrations</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-5" data-loader="include/ajax/portfolio-ajax-image.php" class="portfolio-item pf-uielements pf-media">
                        <div class="portfolio-image">
                            <a href="portfolio-single.html">
                                <img src="images/portfolio/4/5.jpg" alt="Console Activity">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Console Activity</a></h3>
                            <span><a href="#">UI Elements</a>, <a href="#">Media</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-6" data-loader="include/ajax/portfolio-ajax-gallery.php" class="portfolio-item pf-graphics pf-illustrations">
                        <div class="portfolio-image">
                            <div class="fslider" data-arrows="false">
                                <div class="flexslider">
                                    <div class="slider-wrap">
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/6.jpg" alt="Shake It"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/6-1.jpg" alt="Shake It"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/6-2.jpg" alt="Shake It"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/6-3.jpg" alt="Shake It"></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-overlay" data-lightbox="gallery">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-gallery.html">Shake It!</a></h3>
                            <span><a href="#">Illustrations</a>, <a href="#">Graphics</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-7" data-loader="include/ajax/portfolio-ajax-video.php" class="portfolio-item pf-uielements pf-icons">
                        <div class="portfolio-image">
                            <a href="portfolio-single-video.html">
                                <img src="images/portfolio/4/7.jpg" alt="Backpack Contents">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-video.html">Backpack Contents</a></h3>
                            <span><a href="#">UI Elements</a>, <a href="#">Icons</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-8" data-loader="include/ajax/portfolio-ajax-image.php" class="portfolio-item pf-graphics">
                        <div class="portfolio-image">
                            <a href="portfolio-single.html">
                                <img src="images/portfolio/4/8.jpg" alt="Sunset Bulb Glow">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Sunset Bulb Glow</a></h3>
                            <span><a href="#">Graphics</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-9" data-loader="include/ajax/portfolio-ajax-slider.php" class="portfolio-item pf-illustrations pf-icons">
                        <div class="portfolio-image">
                            <div class="fslider" data-arrows="false" data-speed="650" data-pause="3500" data-animation="fade">
                                <div class="flexslider">
                                    <div class="slider-wrap">
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/9.jpg" alt="Bridge Side"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/9-1.jpg" alt="Bridge Side"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/9-2.jpg" alt="Bridge Side"></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-overlay" data-lightbox="gallery">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Bridge Side</a></h3>
                            <span><a href="#">Illustrations</a>, <a href="#">Icons</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-10" data-loader="include/ajax/portfolio-ajax-video.php" class="portfolio-item pf-graphics pf-media pf-uielements">
                        <div class="portfolio-image">
                            <a href="portfolio-single-video.html">
                                <img src="images/portfolio/4/10.jpg" alt="Study Table">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-video.html">Study Table</a></h3>
                            <span><a href="#">Graphics</a>, <a href="#">Media</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-11" data-loader="include/ajax/portfolio-ajax-image.php" class="portfolio-item pf-media pf-icons">
                        <div class="portfolio-image">
                            <a href="portfolio-single.html">
                                <img src="images/portfolio/4/11.jpg" alt="Workspace Stuff">
                            </a>
                            <div class="portfolio-overlay">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single.html">Workspace Stuff</a></h3>
                            <span><a href="#">Media</a>, <a href="#">Icons</a></span>
                        </div>
                    </article>

                    <article id="portfolio-item-12" data-loader="include/ajax/portfolio-ajax-gallery.php" class="portfolio-item pf-illustrations pf-graphics">
                        <div class="portfolio-image">
                            <div class="fslider" data-arrows="false" data-speed="700" data-pause="7000">
                                <div class="flexslider">
                                    <div class="slider-wrap">
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/12.jpg" alt="Fixed Aperture"></a></div>
                                        <div class="slide"><a href="portfolio-single-gallery.html"><img src="images/portfolio/4/12-1.jpg" alt="Fixed Aperture"></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-overlay" data-lightbox="gallery">
                                <a href="#" class="center-icon"><i class="icon-line-expand"></i></a>
                            </div>
                        </div>
                        <div class="portfolio-desc">
                            <h3><a href="portfolio-single-gallery.html">Fixed Aperture</a></h3>
                            <span><a href="#">Illustrations</a>, <a href="#">Graphics</a></span>
                        </div>
                    </article>

                </div><!-- #portfolio end -->

            </div>

            <div class="section footer-stick">

                <h4 class="uppercase center">What <span>Clients</span> Say?</h4>

                <div class="fslider testimonial testimonial-full" data-animation="fade" data-arrows="false">
                    <div class="flexslider">
                        <div class="slider-wrap">
                            <div class="slide">
                                <div class="testi-image">
                                    <a href="#"><img src="images/testimonials/3.jpg" alt="Customer Testimonails"></a>
                                </div>
                                <div class="testi-content">
                                    <p>Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. Repellendus, vero numquam?</p>
                                    <div class="testi-meta">
                                        Steve Jobs
                                        <span>Apple Inc.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="testi-image">
                                    <a href="#"><img src="images/testimonials/2.jpg" alt="Customer Testimonails"></a>
                                </div>
                                <div class="testi-content">
                                    <p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
                                    <div class="testi-meta">
                                        Collis Ta'eed
                                        <span>Envato Inc.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div class="testi-image">
                                    <a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails"></a>
                                </div>
                                <div class="testi-content">
                                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
                                    <div class="testi-meta">
                                        John Doe
                                        <span>XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section><!-- #content end -->

@endsection
/**
 * Dynamic Footer Injection System
 * This script dynamically loads the footer into all pages
 */

(function() {
    'use strict';

    // Footer HTML template
    var footerHTML = `
        <footer id="site-footer" class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                        <div class="widget-footer">
                            <img src="images/logo-footer.svg" class="footer-logo" alt="">
                            <div class="footer-social list-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=61558631245925" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/via-nara-interior-styling-house-7792732a5/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.instagram.com/vianara.my/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                        <div class="widget-footer">
                            <h6>Contacts</h6>
                            <ul class="footer-list">
                                <li class="footer-list-item">
                                    <span class="list-item-icon"><i class="ot-flaticon-place"></i></span>
                                    <span class="list-item-text">113-1, Jalan Medang Serai, KL</span>
                                </li>
                                <li class="footer-list-item">
                                    <span class="list-item-icon"><i class="ot-flaticon-mail"></i></span>
                                    <span class="list-item-text">vianara.my@gmail.com</span>
                                </li>
                                <li class="footer-list-item">
                                    <span class="list-item-icon"><i class="ot-flaticon-phone-call"></i></span>
                                    <span class="list-item-text">+012 2824 660</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                        <div class="widget-footer widget-contact">
                            <h6>Realised Projects</h6>
                            <ul>
                                <li><a href="realized.html">Modern Classic</a></li>
                                <li><a href="realized.html">Modern Minimalist</a></li>
                                <li><a href="realized.html">Modern Mid-Century</a></li>
                                <li><a href="realized.html">Modern Luxe</a></li>
                                <li><a href="realized.html">Contemporary Post-Modern</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="widget-footer footer-widget-subcribe">
                            <h6>Products</h6>
                            <ul>
                                <li><a href="products.html">Objects</a></li>
                                <li><a href="products.html">Kitchen</a></li>
                                <li><a href="products.html">Wall Systems</a></li>
                                <li><a href="products.html">Track Systems</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer><!-- #site-footer -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 mb-4 mb-lg-0">
                        <p>Copyright © 2024 - 2026 via NARA Develop by <a class="text-light" href="https://aeroer.live/" target="_blank"> Aeroer Live </a>. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-5 col-md-12 align-self-center">
                        <ul class="icon-list-items inline-items justify-content-lg-end">
                            <li class="icon-list-item inline-item">
                                <a href="#"><span class="icon-list-text"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to inject footer
    function injectFooter() {
        var pageElement = document.getElementById('page');
        if (pageElement) {
            // Check if footer already exists
            var existingFooter = document.getElementById('site-footer');
            if (existingFooter) {
                return; // Footer already exists, don't inject again
            }

            // Create a temporary container
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = footerHTML;
            
            // Get footer elements
            var footer = tempDiv.querySelector('footer');
            var footerBottom = tempDiv.querySelector('.footer-bottom');
            
            // Insert footer before closing #page div
            if (footer) {
                pageElement.appendChild(footer);
            }
            if (footerBottom) {
                pageElement.appendChild(footerBottom);
            }
        }
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                injectFooter();
            });
        } else {
            // DOM is already ready
            injectFooter();
        }
    }

    // Start initialization
    init();

})();


/**
 * Dynamic Header Injection System
 * This script dynamically loads the header and side panel into all pages
 */

(function() {
    'use strict';

    // Get current page name for active menu highlighting
    function getCurrentPage() {
        var path = window.location.pathname;
        var page = path.split("/").pop() || "index.html";
        return page;
    }

    // Set active menu item based on current page
    function setActiveMenu(currentPage) {
        // Remove all active classes first
        var menuItems = document.querySelectorAll('#site-navigation .menu li a, #menu-main-menu li a');
        menuItems.forEach(function(item) {
            item.parentElement.classList.remove('current-menu-item');
        });

        // Set active based on current page
        var pageMap = {
            'index.html': 'Home',
            'about-us.html': 'About US',
            'realized.html': 'Realised Projects',
            'products.html': 'Products',
            'magazine.html': 'Magazine',
            'blog.html': 'Magazine',
            'contact.html': 'Contact'
        };

        var activeText = pageMap[currentPage] || '';
        if (activeText) {
            menuItems.forEach(function(item) {
                if (item.textContent.trim() === activeText) {
                    item.parentElement.classList.add('current-menu-item');
                }
            });
        }
    }

    // Header HTML template
    var headerHTML = `
        <header id="site-header" class="site-header header-transparent">
            <!-- Main Header start -->
            <div class="octf-main-header is-fixed">
                <div class="octf-area-wrap">
                    <div class="container-fluid octf-mainbar-container">
                        <div class="octf-mainbar">
                            <div class="octf-mainbar-row octf-row">
                                <div class="octf-col logo-col no-padding">
                                    <div id="site-logo" class="site-logo">
                                        <a href="index.html">
                                            <img src="images/logo.svg" alt="VIANARA Logo" class="">
                                        </a>
                                    </div>
                                </div>
                                <div class="octf-col menu-col no-padding">
                                    <nav id="site-navigation" class="main-navigation">
                                        <ul class="menu">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About US</a></li>
                                            <li class="menu-item-has-children"><a href="realized.html">Realised Projects</a>
                                                <ul class="sub-menu">
                                                    <li><a href="realized.html">Modern Classic</a></li>
                                                    <li><a href="realized.html">Modern Minimalist</a></li>
                                                    <li><a href="realized.html">Modern Mid-Century</a></li>
                                                    <li><a href="realized.html">Modern Luxe</a></li>
                                                    <li><a href="realized.html">Contemporary Post-Modern</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="products.html">Products</a></li>
                                            <li class="menu-item-has-children"><a href="magazine.html">Magazine</a>
                                                <ul class="sub-menu">
                                                    <li><a href="magazine.html">Magazine Listing</a></li>
                                                    <li><a href="blog.html">Interior Artist Dr Nasrin Rabiei Talks</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="octf-col cta-col text-right no-padding">
                                    <!-- Call To Action -->
                                    <div class="octf-btn-cta">
                                        <div class="octf-sidepanel octf-cta-header">
                                            <div class="site-overlay panel-overlay"></div>
                                            <div id="panel-btn" class="panel-btn octf-cta-icons">
                                                <i class="ot-flaticon-menu"></i>
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_mobile">
                <div class="container-fluid">
                    <div class="octf-mainbar-row octf-row">
                        <div class="octf-col">
                            <div class="mlogo_wrapper clearfix">
                                <div class="mobile_logo">
                                    <a href="index.html">
                                        <img src="images/logo.svg" alt="VIANARA Logo">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="octf-col justify-content-end">
                            <div class="octf-menu-mobile octf-cta-header">
                                <div id="mmenu-toggle" class="mmenu-toggle">
                                    <button><i class="ot-flaticon-menu"></i></button>
                                </div>
                                <div class="site-overlay mmenu-overlay"></div>
                                <div id="mmenu-wrapper" class="mmenu-wrapper on-right">
                                    <div class="mmenu-inner">
                                        <a class="mmenu-close" href="#"><i class="ot-flaticon-right-arrow"></i></a>
                                        <div class="mobile-nav">
                                            <ul id="menu-main-menu" class="mobile_mainmenu none-style">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li class="menu-item-has-children"><a href="realized.html">Realised Projects</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="realized.html">Modern Classic</a></li>
                                                        <li><a href="realized.html">Modern Minimalist</a></li>
                                                        <li><a href="realized.html">Modern Mid-Century</a></li>
                                                        <li><a href="realized.html">Modern Luxe</a></li>
                                                        <li><a href="realized.html">Contemporary Post-Modern</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="products.html">Products</a></li>
                                                <li class="menu-item-has-children"><a href="magazine.html">Magazine</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="magazine.html">Magazine Listing</a></li>
                                                        <li><a href="blog.html">Interior Artist Dr Nasrin Rabiei Talks</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;

    // Side Panel HTML template
    var sidePanelHTML = `
        <div id="side-panel" class="side-panel">
            <a href="#" class="side-panel-close"><i class="ot-flaticon-close-1"></i></a>
            <div class="side-panel-block">
                <div class="side-panel-wrap">
                    <div class="the-logo">
                        <a href="index.html">
                            <img src="images/logo-footer.svg" alt="VIA NARA">
                        </a>                    
                    </div>
                    <div class="ot-heading">
                        <h2 class="main-heaing">Our Gallery</h2>
                    </div>
                    <div class="image-gallery">
                        <div id="gallery-1" class="gallery galleryid-102 gallery-columns-3 gallery-size-thumbnail">
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product22.png">
                                        <img src="images/album/01.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product02.png">
                                        <img src="images/album/02.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product04.png">
                                        <img src="images/album/03.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product16B.png">
                                        <img src="images/album/04.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product13.png">
                                        <img src="images/album/05.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                            <figure class="gallery-item">
                                <div class="gallery-icon landscape">
                                    <a href="images/products/Product32.png">
                                        <img src="images/album/06.png" class="" alt="">
                                    </a>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div class="ot-heading">
                        <h2 class="main-heading">Contact Info</h2>
                    </div>
                    <div class="side-panel-cinfo">
                        <ul class="panel-cinfo">
                            <li class="panel-list-item">
                                <span class="panel-list-icon"><i class="ot-flaticon-place"></i></span>
                                <span class="panel-list-text">113-1, Jalan Medang Serai, KL</span>
                            </li>
                            <li class="panel-list-item">
                                <span class="panel-list-icon"><i class="ot-flaticon-mail"></i></span>
                                <span class="panel-list-text">vianara.my@gmail.com</span>
                            </li>
                            <li class="panel-list-item">
                                <span class="panel-list-icon"><i class="ot-flaticon-phone-call"></i></span>
                                <span class="panel-list-text">+012 2824 660</span>
                            </li>
                        </ul>
                    </div>
                    <div class="side-panel-social">
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=61558631245925" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/via-nara-interior-styling-house-7792732a5/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/vianara.my/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to inject header
    function injectHeader() {
        var pageElement = document.getElementById('page');
        if (pageElement) {
            // Create a temporary container
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = headerHTML;
            
            // Insert header as first child of #page
            var header = tempDiv.querySelector('header');
            if (header) {
                pageElement.insertBefore(header, pageElement.firstChild);
            }
        }
    }

    // Function to inject side panel
    function injectSidePanel() {
        var pageElement = document.getElementById('page');
        if (pageElement) {
            // Create a temporary container
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = sidePanelHTML;
            
            // Insert side panel after header
            var sidePanel = tempDiv.querySelector('#side-panel');
            var header = document.getElementById('site-header');
            if (sidePanel && header) {
                header.parentNode.insertBefore(sidePanel, header.nextSibling);
            }
        }
    }

    // Initialize side panel functionality
    function initSidePanel() {
        // Wait for jQuery to be available
        if (typeof jQuery === 'undefined') {
            // If jQuery is not loaded yet, wait for it
            setTimeout(initSidePanel, 50);
            return;
        }

        var $ = jQuery;
        var element = $('#panel-btn');
        var sidebar = $('#side-panel');

        if (element.length && sidebar.length) {
            function panel_handler(e) {
                e.preventDefault();
                var isActive = !element.hasClass('active');

                element.toggleClass('active', isActive);
                sidebar.toggleClass('side-panel-open', isActive);
                $('body').toggleClass('side-panel-active', isActive);
                return false;
            }

            // Remove any existing handlers to prevent duplicates
            $('#panel-btn, .side-panel-close, .panel-overlay').off('click');
            
            // Attach event handlers
            $('#panel-btn, .side-panel-close, .panel-overlay').on('click', panel_handler);
        } else {
            // Retry if elements not found yet
            setTimeout(initSidePanel, 100);
        }
    }

    // Initialize mobile menu functionality
    function initMobileMenu() {
        // Wait for jQuery to be available
        if (typeof jQuery === 'undefined') {
            setTimeout(initMobileMenu, 50);
            return;
        }

        var $ = jQuery;
        var element = $('#mmenu-toggle');
        var mmenu = $('#mmenu-wrapper');

        if (element.length && mmenu.length) {
            function mmenu_handler() {
                var isActive = !element.hasClass('active');

                element.toggleClass('active', isActive);
                mmenu.toggleClass('mmenu-open', isActive);
                $('body').toggleClass('mmenu-active', isActive);
                return false;
            }

            // Remove any existing handlers to prevent duplicates
            $('#mmenu-toggle, .mmenu-close, .mmenu-overlay').off('click');
            
            // Attach event handlers
            $('#mmenu-toggle, .mmenu-close, .mmenu-overlay').on('click', mmenu_handler);

            // Add arrow indicators for submenus
            $('.mmenu-wrapper li:has(ul)').prepend('<span class="arrow"><i class="ot-flaticon-next"></i></span>');
            $('.mmenu-wrapper .mobile_mainmenu > li span.arrow').off('click').on('click', function() {
                $(this).parent().find('> ul').stop(true, true).slideToggle();
                $(this).toggleClass('active');
            });
        }
    }

    // Initialize when DOM is ready
    function init() {
        function doInit() {
            injectHeader();
            injectSidePanel();
            setActiveMenu(getCurrentPage());
            
            // Initialize side panel and mobile menu immediately after injection
            // jQuery should be available since it's loaded before this script
            if (typeof jQuery !== 'undefined') {
                // Use a small delay to ensure DOM is updated
                setTimeout(function() {
                    initSidePanel();
                    initMobileMenu();
                }, 10);
            } else {
                // If jQuery not available, wait for it
                var checkJQuery = setInterval(function() {
                    if (typeof jQuery !== 'undefined') {
                        clearInterval(checkJQuery);
                        setTimeout(function() {
                            initSidePanel();
                            initMobileMenu();
                        }, 10);
                    }
                }, 50);
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', doInit);
        } else {
            // DOM is already ready
            doInit();
        }
    }

    // Start initialization
    init();

})();


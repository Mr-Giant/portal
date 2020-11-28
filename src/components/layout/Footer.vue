<template>
    <div>
        <footer class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <router-link to="/">
                                    <!-- <img src="../../assets/images/black-logo.png" alt="logo"> -->
                                    <b><a>WELLPAY</a></b>
                                </router-link>
                                <p>wellpay为所有用户提供安全，快捷，原价的服务。我们不断创新，恪守诚信，立志成为同行业领跑者。</p>
                            </div>

                            <ul class="social-links">
                                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget pl-5">
                            <h3>公司</h3>
                            <ul class="list">
                                <li><router-link to="/about-us">关于我们</router-link></li>
                                <li><router-link to="/features-1">特色产品</router-link></li>
                                <li><router-link to="/features-2">其他产品</router-link></li>
                                <li><router-link to="/contact">联系我们</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>支持</h3>
                            <ul class="list">
                                <!-- <li><router-link to="/faq">常问问题</router-link></li>
                                <li><router-link to="/privacy-policy">隐私政策</router-link></li>
                                <li><router-link to="/terms-condition">条款与协议</router-link></li> -->
                                <li><router-link to="/">常问问题</router-link></li>
                                <li><router-link to="/">隐私政策</router-link></li>
                                <li><router-link to="/">条款与协议</router-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-footer-widget">
                            <h3>地址</h3>
                            <ul class="footer-contact-info">
                                <li><span>邮箱:</span> <a href="mailto:hello@vibion.com">hello@vibion.com</a></li>
                                <li><span>电话:</span> <a href="tel:+321984754">+ (321) 984 754</a></li>
                                <li><span>传真:</span> <a href="tel:+12129876543">+1-212-9876543</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="copyright-area">
                    <p>Copyright @2020 wellpay. All rights reserved <a href="/" target="_blank">wellpay.com</a></p>
                </div>
            </div>

            <div class="map-image"><img src="../../assets/images/map.png" alt="map"></div>
        </footer>
        <!-- End Footer Area -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top">
                <i class="fas fa-arrow-up"></i>
            </div>
        </back-to-top>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
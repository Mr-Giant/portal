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
                                    <b><a>WELLPAYS</a></b>
                                </router-link>
                                <p>wellpays为所有用户提供安全，快捷，原价的服务。我们不断创新，恪守诚信，立志成为同行业领跑者。</p>
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
                                <li><router-link to="/features-1">USDT系统</router-link></li>
                                <li><router-link to="/features-2">人民币系统</router-link></li>
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
                            <h3>联系</h3>
                            <ul class="footer-contact-info">
                                <li><span>skype:</span> <a href="#">live:7daae3efabdd1638</a></li>
                                <li><span>telegram:</span> <a href="#">@wellpay1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="copyright-area">
                    <p>Copyright @2020 wellpays. All rights reserved <a href="/" target="_blank">wellpays.net</a></p>
                </div>
            </div>

            <div class="map-image"><img src="../../assets/images/map.png" alt="map"></div>
        </footer>

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
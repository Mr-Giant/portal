<template>
    <div class="features-area ptb-70 bg-f6f4f8">
        <div class="container">
            <div class="section-title">
                <h2>我们的特色</h2>
                <div class="bar"></div>
                <p>应你所需</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon bg-c679e3">
                            <i class="flaticon-piggy-bank"></i>
                        </div>
                        <h3>行业领先</h3>
                         <router-link to="/features-1" class="read-more-btn">
                            <p>技术团队行业顶尖,紧跟时代脉搏。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>
                
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon">
                            <i class="flaticon-settings"></i>
                        </div>
                        <h3>7x24小时不间断服务</h3>
                        <router-link to="/features-1" class="read-more-btn">
                            <p>7X24小时运维客服在线为您排忧解难。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon bg-eb6b3d">
                            <i class="flaticon-cursor"></i>
                        </div>
                        <h3>接口规范</h3>
                        <router-link to="/features-1" class="read-more-btn">
                            <p>标准接口流程及文档，并提供对接辅导。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon bg-cdf1d8">
                            <i class="flaticon-menu"></i>
                        </div>
                        <h3>财务安全</h3>
                        <router-link to="/features-1" class="read-more-btn">
                            <p>掌握财务大权,密钥独立掌控。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon">
                            <i class="flaticon-wallet"></i>
                        </div>
                        <h3>成本低廉</h3>
                         <router-link to="/features-1" class="read-more-btn">
                            <p>费用合理,简单易用,售前教学。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>
                 <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-features-box">
                        <div class="icon bg-f78acb">
                            <i class="flaticon-alarm"></i>
                        </div>
                        <h3>系统稳定</h3>
                        <router-link to="/features-1" class="read-more-btn">
                            <p>投入实战的系统,经历考验。</p>
                            了解更多
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeaturesTwo'
    }
</script>
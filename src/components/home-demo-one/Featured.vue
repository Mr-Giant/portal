<template>
    <div class="featured-boxes-area">
        <div class="container">
            <div class="featured-boxes-inner">
                <div class="row m-0">
                    <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div class="single-featured-box">
                            <div class="icon color-fb7756">
                                <i class="flaticon-piggy-bank"></i>
                            </div>
                            <h3>系统稳定，支持轮循</h3>
                            <p>后台可添加多个收款账户， 自动轮循，减小被封几率， 做到单日金额不限额。</p>
                            <router-link to="/features-1" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div class="single-featured-box">
                            <div class="icon color-facd60">
                                <i class="flaticon-data-encryption"></i>
                            </div>
                            <h3>好友分销,订单返佣</h3>
                            <p>可邀请下级好友开通账户， 享受订单返佣</p>
                            <router-link to="/features-1" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div class="single-featured-box">
                            <div class="icon color-1ac0c6">
                                <i class="flaticon-wallet"></i>
                            </div>
                            <h3>实时通知，自动回调</h3>
                            <p> 每笔订单都会实时通知，让您实时掌握您的资金动向 </p>
                            <router-link to="/features-1" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div class="single-featured-box">
                            <div class="icon">
                                <i class="flaticon-shield"></i>
                            </div>
                            <h3>安全又可靠</h3>
                            <p>提供专业的接入文档，可在线协助，解答问题帮助您完成搭建。</p>
                            <router-link to="/features-1" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Featured'
    }
</script>
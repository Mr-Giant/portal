<template>
    <div class="featured-boxes-area">
        <div class="container">
            <div class="featured-boxes-inner">
                <div class="row m-0">
                    <div class="col-lg-4 col-sm-6 col-md-6" style="border-right: 1px solid #eeeeee;">
                        <div class="single-featured-box">
                            <div class="icon color-fb7756">
                                <i class="flaticon-piggy-bank"></i>
                            </div>
                            <h3>USDT收付系统</h3>
                            <!-- <p>WELLPAYS系统经过长时间实用考验,系统稳定性能优良。</p> -->
                            <p>基于区块链技术和美元1:1的USDT数字货币的收付款及代收系统，具有账户匿名,资金安全,抗监控等优良特性.系统所有流程全自动、使用简单、流程高效、维护轻松。</p>
                            <router-link to="/USDTRP" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 col-md-6" style="border-right: 1px solid #eeeeee;">
                        <div class="single-featured-box">
                            <div class="icon color-facd60">
                                <i class="flaticon-data-encryption"></i>
                            </div>
                            <h3>USDT钱包系统</h3>
                            <p>不同于常见的数字货币钱包系统，wellpay-USDT钱包使用特种加密,保持所有钱包离线，密钥二次特化加密离线保存，资金安全。</p>
                            <router-link to="/USDTWallet" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 col-md-6" style="border-right: 1px solid #eeeeee;">
                        <div class="single-featured-box">
                            <div class="icon color-1ac0c6">
                                <i class="flaticon-wallet"></i>
                            </div>
                            <h3>RMB 收付系统</h3>
                            <!-- <p> 所有系统提供7X24小时维护，并可以根据客户需要提供性能升级功能扩展。 </p> -->
                            <p> 支付系统仅需持卡付款人开通网上银行即可使用。本服务以各大银行发行的银行卡作为支付资质，帮助商户解决与用户间的交易付款问题，用户通过对应的网上银行，即可轻松完成线上交易。 </p>
                            <router-link to="/RMB" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div>

                    <!-- <div class="col-lg-3 col-sm-6 col-md-6 p-0">
                        <div class="single-featured-box">
                            <div class="icon">
                                <i class="flaticon-shield"></i>
                            </div>
                            <h3>安全可靠</h3>
                            <p>WELLPAYS将客户的资产安全放在首位,财务、资金客户独立掌握。</p>
                            <router-link to="/USDTRP" class="read-more-btn">了解更多</router-link>
                        </div>
                    </div> -->
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
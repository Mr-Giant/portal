<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="luvion-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <!-- <img src="../../assets/images/logo.png" alt="image"> -->
                        <!-- <img src="../../assets/images/black-logo.png" alt="image"> -->
                        <!-- <a style="color: #fff;font-size: 30px;"><b>WELLPAYS</b></a> -->
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                    <a style="font-size: 30px;"><b>WELLPAYS</b></a>
                            </li>
                        </ul>
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent">
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </b-navbar-toggle>

                    <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link to="/#" class="nav-link">
                                    首页 
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/USDTRP" class="nav-link">
                                    USDT收付系统
                                </router-link>
                            </li>
                            
                            <li class="nav-item">
                                <router-link to="/USDTWallet" class="nav-link">
                                    USDT钱包系统
                                </router-link>
                            </li>

                             <li class="nav-item">
                                <router-link to="/RMB" class="nav-link">
                                    RMB系统 
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">
                                    联系我们
                                </router-link>
                            </li>
                        </ul>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data(){
            return {
                isSticky: false
            }
        },

        mounted(){
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    that.isSticky = true
                } else {
                    that.isSticky = false
                }
            })
        }
    }
</script>
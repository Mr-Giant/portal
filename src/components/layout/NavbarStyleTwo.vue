<template>
    <div :class="['navbar-area navbar-style-two', {'is-sticky': isSticky}]">
        <div class="luvion-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <!-- <img src="../../assets/images/black-logo.png" alt="image"> -->
                        <a style="color: #000;font-size: 30px;"><b>WELLPAYS</b></a>
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
                                <router-link to="/features-1" class="nav-link">
                                    USDT收付系统
                                </router-link>
                            </li>
                            
                            <li class="nav-item">
                                <router-link to="/features-3" class="nav-link">
                                    USDT钱包系统
                                </router-link>
                            </li>

                             <li class="nav-item">
                                <router-link to="/features-2" class="nav-link">
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
        name: 'NavbarStyleTwo',
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
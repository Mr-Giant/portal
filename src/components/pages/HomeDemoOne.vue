<template>
    <div>
        <Navbar />
        <MainBanner />
        <Featured />
        <Services />
        <!-- <ServicesTwo /> -->
        <!-- <ServicesThree /> -->
        <!-- <Comparisons /> -->
        <FeaturesTwo />
        <!-- <Invoicing /> -->
        <!-- <FunFacts /> -->
        <!-- <Feedback /> -->
        <ReadyToTalk />
        <!-- <Partner /> -->
        <!-- <AppDownload /> -->
        <!-- <AccountCreate /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import MainBanner from '../home-demo-one/MainBanner'
import Featured from '../home-demo-one/Featured'
import Services from '../home-demo-one/Services'
// import ServicesTwo from '../home-demo-one/ServicesTwo'
// import ServicesThree from '../home-demo-one/ServicesThree'
// import Comparisons from '../home-demo-one/Comparisons'
import FeaturesTwo from '../home-demo-one/FeaturesTwo'
// import Invoicing from '../home-demo-one/Invoicing'
// import FunFacts from '../home-demo-one/FunFacts'
// import Feedback from '../home-demo-one/Feedback'
import ReadyToTalk from '../home-demo-one/ReadyToTalk'
// import Partner from '../home-demo-one/Partner'
// import AppDownload from '../home-demo-one/AppDownload'
// import AccountCreate from '../home-demo-one/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'HomeDemoOne',
    components: {
        Navbar,
        MainBanner,
        Featured,
        Services,
        // ServicesTwo,
        // ServicesThree,
        // Comparisons,
        FeaturesTwo,
        // Invoicing,
        // FunFacts,
        // Feedback,
        ReadyToTalk,
        // Partner,
        // AppDownload,
        // AccountCreate,
        Footer,
    }
}
</script>

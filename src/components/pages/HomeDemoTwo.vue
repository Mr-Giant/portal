<template>
    <div>
        <Navbar />
        <MainBanner />
        <Featured />
        <HowItWorks />
        <Services />
        <ServicesTwo />
        <ServicesThree />
        <ServicesFour />
        <Comparisons />
        <FeaturesTwo />
        <Invoicing />
        <FunFacts />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <AppDownload />
        <Blog />
        <AccountCreate />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import MainBanner from '../home-demo-two/MainBanner'
import Featured from '../home-demo-two/Featured'
import HowItWorks from '../home-demo-two/HowItWorks'
import Services from '../home-demo-two/Services'
import ServicesTwo from '../home-demo-two/ServicesTwo'
import ServicesThree from '../home-demo-two/ServicesThree'
import ServicesFour from '../home-demo-two/ServicesFour'
import Comparisons from '../home-demo-two/Comparisons'
import FeaturesTwo from '../home-demo-two/FeaturesTwo'
import Invoicing from '../home-demo-two/Invoicing'
import FunFacts from '../home-demo-two/FunFacts'
import Feedback from '../home-demo-two/Feedback'
import ReadyToTalk from '../home-demo-two/ReadyToTalk'
import Partner from '../home-demo-two/Partner'
import AppDownload from '../home-demo-two/AppDownload'
import Blog from '../home-demo-two/Blog'
import AccountCreate from '../home-demo-two/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'HomeDemoTwo',
    components: {
        Navbar,
        MainBanner,
        Featured,
        HowItWorks,
        Services,
        ServicesTwo,
        ServicesThree,
        ServicesFour,
        Comparisons,
        FeaturesTwo,
        Invoicing,
        FunFacts,
        Feedback,
        ReadyToTalk,
        Partner,
        AppDownload,
        Blog,
        AccountCreate,
        Footer,
    }
}
</script>

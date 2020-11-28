<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Information />
        <Services />
        <ServicesTwo />
        <ServicesThree />
        <Invoicing />
        <FunFacts />
        <Feedback />
        <ReadyToTalk />
        <Partner />
        <AppDownload />
        <AccountCreate />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layout/NavbarStyleTwo'
import MainBanner from '../home-demo-three/MainBanner'
import Information from '../home-demo-three/Information'
import Services from '../home-demo-three/Services'
import ServicesTwo from '../home-demo-three/ServicesTwo' 
import ServicesThree from '../home-demo-three/ServicesThree' 
import Invoicing from '../home-demo-three/Invoicing'
import FunFacts from '../home-demo-three/FunFacts'
import Feedback from '../home-demo-two/Feedback'
import ReadyToTalk from '../home-demo-three/ReadyToTalk'
import Partner from '../home-demo-three/Partner'
import AppDownload from '../home-demo-three/AppDownload'
import AccountCreate from '../home-demo-three/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'HomeDemoThree',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Information,
        Services,
        ServicesTwo,
        ServicesThree,
        Invoicing,
        FunFacts,
        Feedback,
        ReadyToTalk,
        Partner,
        AppDownload,
        AccountCreate,
        Footer,
    }
}
</script>
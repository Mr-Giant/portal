<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <!-- <Features /> -->
        <Services />
        <ServicesTwo />
        <ServicesThree />
        <!-- <ServicesFour /> -->
        <!-- <FeatureTwo /> -->
        <ReadyToTalk />
        <!-- <Partner /> -->
        <!-- <AppDownload /> -->
        <!-- <AccountCreate /> -->
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layout/Navbar'
import PageTitle from '../features-two/PageTitle'
// import Features from '../features-two/Features'
import Services from '../features-two/Services'
import ServicesTwo from '../features-two/ServicesTwo'
import ServicesThree from '../features-two/ServicesThree'
// import ServicesFour from '../features-two/ServicesFour'
// import FeatureTwo from '../features-two/FeatureTwo'
import ReadyToTalk from '../features-two/ReadyToTalk'
// import Partner from '../features-two/Partner'
// import AppDownload from '../features-two/AppDownload'
// import AccountCreate from '../features-two/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'FeaturesTwo',
    components: {
        NavbarStyleTwo,
        PageTitle,
        // Features,
        Services,
        ServicesTwo,
        ServicesThree,
        // ServicesFour,
        // FeatureTwo,
        ReadyToTalk,
        // Partner,
        // AppDownload,
        // AccountCreate,
        Footer,
    }
}
</script>
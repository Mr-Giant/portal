<template>
    <div>
        <Navbar />
        <PageTitle />
        <Services />
        <ServicesTwo />
        <ServicesThree />
        <!-- <ServicesFour/> -->
        <ReadyToTalk />
        <!-- <Partner /> -->
        <!-- <AppDownload /> -->
        <!-- <AccountCreate /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../features-one/PageTitle'
import Services from '../features-one/Services'
import ServicesTwo from '../features-one/ServicesTwo'
import ServicesThree from '../features-one/ServicesThree'
// import ServicesFour from '../features-one/ServicesFour'
import ReadyToTalk from '../features-one/ReadyToTalk'
// import Partner from '../features-one/Partner'
// import AppDownload from '../features-one/AppDownload'
// import AccountCreate from '../features-one/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'FeaturesOne',
    components: {
        Navbar,
        PageTitle,
        Services,
        ServicesTwo,
        ServicesThree,
        // ServicesFour,
        ReadyToTalk,
        // Partner,
        // AppDownload,
        // AccountCreate,
        Footer,
    }
}
</script>
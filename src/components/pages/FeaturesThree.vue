<template>
    <div>
        <Navbar />
        <PageTitle />
        <Services />
        <ServicesTwo />
        <!-- <ServicesThree /> -->
        <ReadyToTalk />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../features-three/PageTitle'
import Services from '../features-three/Services'
import ServicesTwo from '../features-three/ServicesTwo'
// import ServicesThree from '../features-three/ServicesThree'
import ReadyToTalk from '../features-three/ReadyToTalk'
import Footer from '../layout/Footer'

export default {
    name: 'FeaturesOne',
    components: {
        Navbar,
        PageTitle,
        Services,
        ServicesTwo,
        // ServicesThree,
        ReadyToTalk,
        Footer,
    }
}
</script>
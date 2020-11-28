<template>
    <div>
        <Navbar />
        <PageTitle />
        <About />
        <!-- <Team /> -->
        <ReadyToTalk />
        <!-- <Partner /> -->
        <!-- <AppDownload /> -->
        <!-- <AccountCreate /> -->
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../about-us/PageTitle'
import About from '../about-us/About'
// import Team from '../about-us/Team'
import ReadyToTalk from '../about-us/ReadyToTalk'
// import Partner from '../about-us/Partner'
// import AppDownload from '../about-us/AppDownload'
// import AccountCreate from '../about-us/AccountCreate'
import Footer from '../layout/Footer'

export default {
    name: 'AboutUs',
    components: {
        Navbar,
        PageTitle,
        About,
        // Team,
        ReadyToTalk,
        // Partner,
        // AppDownload,
        // AccountCreate,
        Footer,
    }
}
</script>
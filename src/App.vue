<template>
  <div>
    <Preloader v-if="isLoading" />
    <router-view></router-view>
  </div>
</template>

<script>
    import Preloader from './components/layout/Preloader'

    export default {
        name: 'App',
        components: {
            Preloader,
        },
        data() {
            return {
                isLoading: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000)
        }
    }
</script>
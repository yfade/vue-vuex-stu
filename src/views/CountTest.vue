<template>
    <div>
        <p>click {{count}} 次，count是{{msg1}}</p>
        <button @click="incre">+</button>&nbsp;
        <button @click="decre({name:'ls'})">-</button>
        <button @click="dodel">-</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: "CountTest",
        data() {
            return {}
        },
        methods: {
            /*incre() {
                let promise = this.$store.dispatch('increment');
                console.log('dispatch result :' + promise)
            },
            decre() {
                this.$store.dispatch('decrement', {name: 'zs'});
            }*/
            ...mapActions({incre:'increment'}),
            ...mapActions({decre:'decrement'}),
            dodel(){
                this.decre({name:'ww'})
            }

        },

        computed: {
            ...mapState(['count']),
            ...mapGetters({msg1:'msg'}),
        }
    }
</script>

<style scoped>

</style>
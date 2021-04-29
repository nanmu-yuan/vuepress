<template>
   <div>
    <div>123</div>
    <div>{{msg}}</div>
    <div>
        <img :src="$withBase('/images/picker-logo.png')" alt="">
    </div>
   </div>
</template>
<script>
export default {
    name:'demo',
    data () {
        return {
            msg:'123'
        }
    }
}
</script>
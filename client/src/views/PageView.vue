<template>
    <div class="pageView">
        <h1>{{memo.title}}</h1>
        <p>글번호 : {{memo.id}}</p>
        <p>작성자 : {{memo.writer}}</p>
        <p>{{memo.memo}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo : {}
        }
    },
    created() {
        console.log(this.$route.params.id);
        this.$http.get(`/api/memo/list/${this.$route.params.id}`)
            .then((res) => {
            this.memo = res.data;})
    }
}
</script>
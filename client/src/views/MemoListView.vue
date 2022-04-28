<template>
    <div class="memolist">
        <h1>Memo</h1>
        <table>
            <tr>
                <td>No.</td>
                <td>Title</td>
                <td>Writer</td>
            </tr>
            <tr v-for="(item,index) in memo" :key="index">
                <td>{{item.id}}</td>
                <td @click="$router.push(`/list/${item.id}`)">{{item.title}}</td>
                <td>{{item.writer}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo : []
        }
    },
    created() {
        this.$http.get('/api/memo')
            .then((res) =>{
                this.memo = res.data;
            })
    }
}
</script>
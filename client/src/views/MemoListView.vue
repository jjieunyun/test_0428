<template>
    <div class="memolist">
        <h1>Memo</h1>
        <table>
            <tr class="subject">
                <td>No.</td>
                <td>Title</td>
                <td>Writer</td>
            </tr>
            <tr v-for="(item,index) in memo" :key="index">
                <td class="contents">{{item.id}}</td>
                <td class="contents" @click="$router.push(`/list/${item.id}`)">{{item.title}}</td>
                <td class="contents">{{item.writer}}</td>
                <!--수정버튼을 눌렀을 때, updateForm화면으로 이동
                    이동할 때 가져가야 할값 : 메모아이디-->
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo :  [{
        "id" : 1,
        "title" : "첫번째 메모",
        "memo" : "첫번째 메모의 내용!",
        "writer" : "김"
            }]
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

<style scoped>
table {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0px;
}
.subject {
    font-weight: bold;
}

.subject > td {
    padding: 8px;
    background-color: rgb(235, 233, 233);
}

.contents {
    padding: 5px;
}

button {
    margin: 5px;
    background-color: transparent;
    border: 1px solid lightslategray;
    border-radius: 3px;
    padding: 3px 5px;
    
}
</style>
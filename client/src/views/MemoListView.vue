<template>
    <div class="memolist">
        <h1>Memo</h1>
        <table>
            <tr class="subject">
                <td>No.</td>
                <td>Title</td>
                <td>Writer</td>
                <td>Modify</td>
                <td>Delete</td>
            </tr>
            <tr v-for="(item,index) in memo" :key="index">
                <td class="contents">{{item.id}}</td>
                <td class="contents" @click="$router.push(`/list/${item.id}`)">{{item.title}}</td>
                <td class="contents">{{item.writer}}</td>
                <!--수정버튼을 눌렀을 때, updateForm화면으로 이동
                    이동할 때 가져가야 할값 : 메모아이디-->
                <td><button @click="$router.push(`/update/${item.id}`)">Mod</button></td>
                <!--삭제버튼을 누르면 삭제할 메모의 아이디를 넘겨준다 -> 삭제 -->
                <td><button @click="deleteMemo(item.id)">Del</button></td>
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
    },
    methods : {
        deleteMemo(id) {
            //axios를 통해 id값을 가진 memo를 삭제
            this.$http.delete(`/api/memo/${id}`)
                .then((res) => {
    //서버쪽에서 params로 id를 받아서 메모 배열을 삭제하는 api를만들고 client로 보낸다.
    //값이 삭제된 메모의 배열을 새로 받아오고
    //data안의 memo에 할당해서 출력한다.
                    this.memo = res.data;
                })
        }
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
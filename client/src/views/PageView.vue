<template>
    <div class="pageView">
        <div class="box">
            <div class="title">
                <h1>{{memo.title}}</h1>
            </div>
            <div class="subject">
                <p><span>No. </span>{{memo.id}}</p>
                <p><span>Name : </span>{{memo.writer}}</p>
            </div>
            <div class="memobox"><p>{{memo.memo}}</p></div>
            <div class="buttons">
                <button @click="$router.push(`/update/${memo.id}`)">Modify</button>
                    <!--삭제버튼을 누르면 삭제할 메모의 아이디를 넘겨준다 -> 삭제 -->
                <button @click="deleteMemo(memo.id)">Delete</button>
            </div>
        </div>
        </div>
        
</template>

<script>
export default {
    data() {
        return {
            memo : {
        "id" : 1,
        "title" : "첫번째 메모",
        "memo" : "첫번째 메모의 내용!",
        "writer" : "김"
    }
        }
    },
    created() {
        //console.log(this.$route.params.id)
        this.$http.get(`/api/memo/list/${this.$route.params.id}`)
            .then((res) => {
            this.memo = res.data;})
    },
    methods : {
        deleteMemo(id) {

             if(confirm("Memo를 삭제 하시겠습니까?"))
                {
                    //axios를 통해 id값을 가진 memo를 삭제
            this.$http.delete(`/api/memo/${id}`)
                .then((res) => {
                //서버쪽에서 params로 id를 받아서 메모 배열을 삭제하는 api를만들고 client로 보낸다.
                //값이 삭제된 메모의 배열을 새로 받아오고
                //data안의 memo에 할당해서 출력한다.
                this.memo = res.data;
                alert('Memo를 삭제했습니다.');
                this.$router.push('/')
                })
            }
        }
    }
}
</script>

<style scoped>
.pageView {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    
}

h1 {
    margin-bottom: 10px;
}

.title {
    text-align: center;
    width: 450px;
    border-bottom: 1px solid lightslategray;
    margin-bottom: 10px;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

.subject {
    color: lightslategray;
    font-size: 0.9em;

}
.subject span {
    font-weight: bold;
}

.subject > p {
    text-align: start;
}

.memobox {
    height: 15rem;
}

button {
    margin: 5px;
    background-color: transparent;
    border: 1px solid lightslategray;
    border-radius: 3px;
    padding: 3px 5px;
    
}

.buttons {
    width: 100%;
    position: relative;
    text-align: right;
}

</style>
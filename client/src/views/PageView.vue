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
            <p>{{memo.memo}}</p>
            
        </div>
        </div>
        
</template>

<script>
export default {
    data() {
        return {
            memo : { },
        }
    },
    created() {
        //console.log(this.$route.params.id)
        this.$http.get(`/api/memo/list/${this.$route.params.id}`)
            .then((res) => {
            this.memo = res.data;})
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

</style>
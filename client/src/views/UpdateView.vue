<template>
    <div class="writeView">
        <h1>Modify Your Memo</h1>
        <form action="/api/memo/update" method="post">
            <input name="id" type="hidden" v-model="memo.id">
            <label for="">Title : </label>
            <input name="title" type="text" v-model="memo.title"> <br><br>
            <label for="">name : </label>
            <input name="writer" type="text" v-model="memo.writer"> <br><br>
            <textarea name="memo" id="" cols="50" rows="10" 
                v-model="memo.memo"></textarea>
            <br>
            <input class="submit" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo : { }
        }
    },
    created() {
        this.$http.get(`/api/memo/list/${this.$route.params.id}`)
            .then((res) => {
            this.memo = res.data;})
    }
}
</script>

<style scoped>

label {
    font-weight: bold;
}

.submit {
    margin: 5px;
    background-color: transparent;
    border: 1px solid lightslategray;
    border-radius: 3px;
    padding: 3px 5px;
    
}

input {
    border: none;
    border-bottom: 1px solid lightslategrey;
}


</style>
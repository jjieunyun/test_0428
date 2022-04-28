<template>
    <div class="search">
        <h1>Search by Writer's NAME </h1>
        <input type="text" v-model="writer"> 
        <button @click="searchWriter">Click</button>
        
        <br><br><br><br><br>
        <table>
                <tr class="subject">
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
            writer : '',
            memo : [],
        }
    },
    methods : {
        searchWriter() {
            this.$http.get(`/api/memo/${this.writer}`)
            .then((res) =>{
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

td {
    padding: 5px;
}

button {
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
<template>
    <div class="writeView">
        <h1>Update Your Memo</h1>
        <form action="/api/memo/write" method="post">
            <label for="">Title : </label>
            <input name="title" type="text"> <br><br>
            <label for="">name : </label>
            <input name="writer" type="text"> <br><br>
            <textarea name="memo" id="" cols="50" rows="10"></textarea>
            <br>
            <input class="submit" type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
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
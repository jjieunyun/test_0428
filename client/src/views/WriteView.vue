<template>
    <div class="writeView">
        <h1>메모를 작성해주세요</h1>
        <form action="/api/memo/write" method="post">
            <label for="">Title : </label>
            <input name="title" type="text"> <br><br>
            <label for="">name : </label>
            <input name="writer" type="text"> <br><br>
            <textarea name="memo" id="" cols="30" rows="10"></textarea>
            <br>
            <input type="submit" value="submit">
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
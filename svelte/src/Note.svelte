<script>
    // A note is defined as an image with a caption
    export let caption;
    export let base64;
</script>

<div class="note-view">
    <img src="{base64}" alt="captioned media" class="note-image">
    <h1>{caption}</h1>
</div>

<style>
    .note-view {
        position: absolute;
        background-color: #181414;
        height: 100vh;
        margin: 10px 32px 10px 21rem;
        padding: 12px;
        color: white;
    }
    .note-image {
        max-width: 900px;
    }
</style>
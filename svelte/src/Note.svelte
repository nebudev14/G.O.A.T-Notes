<script>
    // A note is defined as an image with a caption
    export let caption;
    export let base64;
    export let url;
    export let time;
</script>

<div class="note-view">
    <img src="{base64}" alt="captioned media" class="note-image">
    <h1>{caption}</h1>
    <br>
    <h3>
        <a href="{url}" target="_blank">
            {url}
        </a>
    </h3>
    <br>
    <br>
    <p>{time}</p>
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

    a {
        color: #1DA57A;
    }

    p {
        color: gray;
    }
</style>
<script>
    // A note is defined as an image with a caption
    export let caption;
    export let base64;
    export let url;
    export let time;

    let modalActive = false;

    const triggerModal = (bool) => {
        console.log("The Modal is now: " + modalActive)
        modalActive = bool;
    }
</script>

<div class="note-view">
    <img
        src={base64}
        alt={"captioned media: " + caption}
        class="note-image"
        id="active-image"
        on:click={() => triggerModal(true)}
    />
    <h1>{caption}</h1>
    <br />
    <h3>
        <a href={url} target="_blank">
            {url}
        </a>
    </h3>
    <br />
    <br />
    <p>{time}</p>

    <div id="myModal" class="modal {modalActive == true ? 'modal-active' : ''}" on:click={() => triggerModal(false)}>
        <img class="modal-content" src={base64} alt={caption}>
      
        <div id="caption">{caption}</div>
    </div>
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
        cursor: pointer;
    }

    a {
        color: #1da57a;
    }

    p {
        color: gray;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.7);
    }

    .modal-active {
        display: block !important;
    }

    .modal-content, #caption {
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.2s;
        max-width: 50%;
        animation-name: zoom;
        animation-duration: 0.2s;
        z-index: 2;
    }

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)}
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
}
</style>

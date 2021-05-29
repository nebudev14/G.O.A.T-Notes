<script>
    // huge json, will remove later
    import images from '../base64strings.json';
    import Note from './Note.svelte';
    let notes = [""];
    chrome.storage.local.get(['notes'], function(result) {
        notes = result.notes
    });
    console.log(notes);  
    const handleClick = (e) => selected = e;
    let selected = 0;
</script>

<div class="container">
    <ul class="list-group">
        {#each notes as note, i}
            <li class="{selected == i ? 'selected' : ''}"
            
            on:click={() => handleClick(i)}>
                {note.caption == "" ? "Unnamed Note" : note.caption}
            </li>
        {/each}
    </ul>
    <Note caption={notes[selected].caption} base64={notes[selected].base64}/>
</div>

<style>
    .container {
        position: relative;
    }
    .list-group {
        position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            width: 20rem;
            height: 100vh;
            background-color: #181414;
            overflow: hidden;
        }
        .list-group li {
            font-weight: 400;
            height: 3vh;
            color: white;
            padding: 1em .5em 1em .5em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 200ms ease;
        }
        .list-group li:hover {
            background-color: #312d2d;
            cursor: pointer;
        }
    .selected {
        background-color: #1DA57A !important;
    }
</style>
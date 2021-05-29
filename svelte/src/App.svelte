<script>
    import Sidebar from './Sidebar.svelte';
    import NotesList from './NotesList.svelte';
</script>
<Sidebar/>

<main>
    <NotesList/>
</main>

<style>
    * {
    margin: 0;
    padding: 0;
}

main {
    margin: 0;
    padding: 0;
    margin-left: 16rem;
}
</style>
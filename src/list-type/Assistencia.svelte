<script>
    import { Button } from "carbon-components-svelte";
</script>

<main>
    <p>This is Assistência page.</p>
    <a href="#/">home</a>
    <br />
    <Button on:click={() => window.electron.closeApp()}>Primary button</Button>
    <Button kind="danger" on:click={() => window.electron.makeListAssistencia()}>Call Jar File</Button>
</main>

<style>
</style>
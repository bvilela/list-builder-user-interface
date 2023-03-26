<script>
    import { Button } from "carbon-components-svelte";
</script>

<main>
    <p>This is Assistência page.</p>
    <a href="#/">home</a>
    <br />
    <Button on:click={() => window.api.titlebar("destroy")}>Primary button</Button>
    <Button kind="danger" on:click={() => window.api.titlebar("kill")}>Call Jar File</Button>
</main>

<style>
</style>
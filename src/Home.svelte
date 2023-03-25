<script>
    import Grid from "svelte-grid-responsive";
    import ListCard from "./shared/ListCard.svelte";
</script>

<main>
    <Grid container gutter={12}>
        <Grid md=12>
            <h3>Escolha a lista desejada:</h3>
        </Grid>
        <Grid lg=2.4 md=4>
            <ListCard link="assistencia" title="Assistência"/>
        </Grid>
        <Grid lg=2.4 md=4>
            <ListCard link="designacao" title="Designações"/>
        </Grid>
        <Grid lg=2.4 md=4>
            <ListCard link="limpeza" title="Limpeza"/>
        </Grid>
        <Grid lg=2.4 md=4>
            <ListCard link="vida-crista" title="Nossa Vida e Ministério"/>
        </Grid>
        <Grid lg=2.4 md=4>
            <ListCard link="oradores" title="Oradores"/>
        </Grid>
    </Grid>
</main>

<style>
</style>

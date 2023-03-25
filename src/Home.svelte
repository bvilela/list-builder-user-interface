<script>
    import Grid from "svelte-grid-responsive";
    import ListCard from "./shared/ListCard.svelte";
</script>

<main>
    <Grid container gutter={12}>
        <Grid md={12}>
            <h3>Escolha a lista desejada:</h3>
        </Grid>
        <Grid md={4}>
            <ListCard link="assistencia" title="Assistência"/>
        </Grid>
        <Grid md={4}>
            <ListCard link="designacao" title="Designações"/>
        </Grid>
        <Grid md={4}>
            <ListCard link="limpeza" title="Limpeza"/>
        </Grid>
        <Grid md={4}>
            <div>Nossa Vida e Ministério</div>
        </Grid>
        <Grid md={4}>
            <div>Oradores</div>
        </Grid>
    </Grid>
</main>

<style>
</style>

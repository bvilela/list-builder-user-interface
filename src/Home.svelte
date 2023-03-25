<script>
    import Grid from "svelte-grid-responsive";
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
    } from "@smui/card";
</script>

<main>
    <Grid container gutter={12}>
        <Grid md={12}>
            <h3>Escolha a lista desejada:</h3>
        </Grid>
        <Grid md={4}>
            <div class="card-display">
                <div class="card-container">
                    <Card>
                        <Media class="card-media-16x9" aspectRatio="16x9">
                            <MediaContent>
                                <h2 class="mdc-typography--headline6 title-center">
                                    Assistência
                                </h2>
                            </MediaContent>
                        </Media>
                        <!-- <Content style="color: #888;"
                            >Here's some gray text down here.</Content
                        > -->
                    </Card>
                </div>
            </div></Grid
        >
        <Grid md={4}>
            <div>Designações</div>
        </Grid>
        <Grid md={4}>
            <div>Limpeza</div>
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
    .title-center {
        color: #000;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>

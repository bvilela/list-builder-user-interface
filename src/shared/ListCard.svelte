<script>
    import Card, { Media } from "@smui/card";
    export let link;
    export let title;
    let className = link;
</script>

<main>
    <a href="#/{link}">
        <div class="card-display">
            <div class="card-container">
                <Card class={className}>
                    <Media class="card-media-16x9" aspectRatio="16x9">
                        <h3 class="mdc-typography--headline6 title-center">
                            {title}
                        </h3>
                    </Media>
                </Card>
            </div>
        </div>
    </a>
</main>

<style>
    .title-center {
        text-align: center;
        font-weight: 500;
        color: #000;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    :global(.card-container .assistencia) {
        background-color: #dce6f2;
    }

    :global(.card-container .designacao) {
        background-color: #c82626;
    }

    :global(.card-container .designacao .title-center) {
        color: #fff;
    }

    :global(.card-container .limpeza) {
        background-color: #2b9644;
        color: #fff;
    }

    :global(.card-container .vida-crista) {
        background-color: #392047;
    }

    :global(.card-container .vida-crista .title-center) {
        color: #fff;
    }

    :global(.card-container .oradores) {
        background-color: #e6d8be;
        color: #fff;
    }
</style>

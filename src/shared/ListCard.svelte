<script>
    import Card, { Media, MediaContent } from "@smui/card";
    export let link;
    export let title;
</script>

<main>
    <a href="#/{link}">
        <div class="card-display">
            <div class="card-container">
                <Card>
                    <Media class="card-media-16x9" aspectRatio="16x9">
                        <MediaContent>
                            <h2 class="mdc-typography--headline6 title-center">
                                {title}
                            </h2>
                        </MediaContent>
                    </Media>
                </Card>
            </div>
        </div>
    </a>
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

<script>
    import { Dropdown, Button } from "carbon-components-svelte";
    import Grid from "svelte-grid-responsive";

    export let title;
    let reuniaoMeioSemana = [
        { id: "0", text: "Segunda-feira" },
        { id: "1", text: "Terça-feira" },
        { id: "2", text: "Quarta-feira" },
        { id: "3", text: "Quinta-feira" },
        { id: "4", text: "Sexta-feira" },
    ];
    let reuniaoFimSemana = [
        { id: "0", text: "Sábado" },
        { id: "1", text: "Domingo" },
    ];
</script>

<Grid container gutter={12}>
    <Grid md={12}>
        <h1>{title}</h1>
    </Grid>
    <Grid md={3}>
        <Dropdown
            titleText="Reunião Meio de Semana"
            selectedId="0"
            items={reuniaoMeioSemana}
        />
    </Grid>
    <Grid md={3}>
        <Dropdown
            titleText="Reunião Fim de Semana"
            selectedId="0"
            items={reuniaoFimSemana}
        />
    </Grid>
    <Grid md={4}>
        <Button>Primary button</Button>
    </Grid>
</Grid>

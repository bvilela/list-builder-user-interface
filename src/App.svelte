<script>
    import Router from 'svelte-spa-router'
    import Home from './Home.svelte';
    import Assistencia from './list-type/Assistencia.svelte';
    import Designacoes from './list-type/Designacoes.svelte';
    import Limpeza from './list-type/Limpeza.svelte';
    import Oradores from './list-type/Oradores.svelte';
    import VidaCrista from './list-type/VidaCrista.svelte';

    const routes = {
        "/": Home,
        "/assistencia": Assistencia,
        "/designacao": Designacoes,
        "/limpeza": Limpeza,
        "/vida-crista": VidaCrista,
        "/oradores": Oradores
    };
</script>

<main>
    <Router {routes}/>
</main>

<style>
</style>
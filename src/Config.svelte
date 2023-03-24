<script>
	export let title;
</script>

<div class="container">
    <div class="d-flex justify-content-center">
        <h1 class="mt-3">{title}</h1>
    </div>

    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Configurações Gerais</h5>
            <h6 class="card-subtitle mb-2 text-muted">Dias de Reunião</h6>
            <div class="row align-items-end">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="select-endweek-day">Meio de Semana</label>
                        <select class="form-control" id="select-endweek-day">
                            <option selected>Selecione...</option>
                            <option value="1">Segunda-feira</option>
                            <option value="2">Terça-feira</option>
                            <option value="3">Quarta-feira</option>
                            <option value="4">Quinta-feira</option>
                            <option value="5">Sexta-feira</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="select-endweek-day">Fim de Semana</label>
                        <select class="form-control" id="select-endweek-day">
                            <option selected>Selecione...</option>
                            <option value="1">Sábado</option>
                            <option value="2">Domingo</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2">
                    <button type="button" class="btn btn-primary align-middle">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</div>
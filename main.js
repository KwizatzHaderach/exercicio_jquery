$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const listaTarefas = $('<li></li>').text(tarefa);
        listaTarefas.appendTo('ul');
        $(listaTarefas).fadeIn();
        $('#tarefa').val('');

        listaTarefas.on('click', function() {
            $(this).toggleClass('riscado');
        });
    });
});

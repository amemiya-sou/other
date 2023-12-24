document.getElementById('file-input').addEventListener('change', function () {
    document.getElementById('upload-form').submit();
});

function adjustPokemonSuggestions() {
    for (var i = 1; i <= 6; i++) {
        var pokemonId = 'pokemon' + i;
        var suggestionsId = 'pokemon' + i + 'suggestions';
        var pokemon = document.getElementById(pokemonId);
        var suggestions = document.getElementById(suggestionsId);
        suggestions.style.width = getComputedStyle(pokemon).width;
        var rect = pokemon.getBoundingClientRect();
        suggestions.style.left = rect.left + 'px';
    }
}
window.addEventListener('DOMContentLoaded', adjustPokemonSuggestions);
window.addEventListener('resize', adjustPokemonSuggestions);

$(function () {
    $('.check').on('click', function () {
        if ($(this).prop('checked')) {
            $('.check').prop('checked', false);
            $(this).prop('checked', true);
        }
    });
});

$(function () {
    $("#party_form").on("keydown", function (ev) {
        if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
            return false;
        } else {
            return true;
        }
    });
});

$(function () {
    $("select").focus(function () {
        $(this).on("keydown", function (ev) {
            if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
                return false;
            } else {
                return true;
            }
        });
    });
});

$(document).ready(function () {
    $("#party_form").submit(function (event) {
        if (!$(".check:checked").length) {
            alert("ルールを選択してください。");
            event.preventDefault();
        }
    });
});


$(document).ready(function () {
    $("#party_form").submit(function (event) {

        var urlInput = $("#url");
        if (urlInput.val() === "") {
            alert("URLを入力してください。");
            event.preventDefault();
        }

        var nameInput = $("#name");
        if (nameInput.val() === "") {
            alert("制作者名を入力してください。");
            event.preventDefault();
        }

        var regulationInput = $("#regulation");
        var eventInput = $("#event");
        if (regulationInput.val() === "" && eventInput.val() === "") {
            alert("レギュレーションまたは大会名を選択してください。");
            event.preventDefault();
        }

        if (document.querySelector('.red-background')) {
            event.preventDefault();
            alert('フォルムを選択してください。');
        }
    });
});

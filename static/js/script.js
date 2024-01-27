//ファイルをアップロード
document.getElementById('file-input').addEventListener('click', function () {
    this.value = '';
});
document.getElementById('file-input').addEventListener('change', function () {
    document.getElementById('upload-form').submit();
    showLoading();
});
function showLoading() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('loading-overlay').style.display = 'flex';
}

//半角数字しか入力させない
document.addEventListener('DOMContentLoaded', function () {
    var rankInput = document.getElementById('ranking');
    rankInput.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var convertedValue = inputValue.replace(/[０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
        });
        rankInput.value = convertedValue;
    });
});

//どちらかしか選ばせない
function updateSelect(selectedId, targetId) {
    var selectedValue = document.getElementById(selectedId).value;
    var targetSelect = document.getElementById(targetId);

    if (selectedValue !== "") {
        targetSelect.value = "";
    }
}

//ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.getElementById('closeButton');

    function closeMenu() {
        hamburgerMenu.style.right = '-280px';
        overlay.style.display = 'none';
        document.body.classList.remove('overflow-hidden');
    }

    menuButton.addEventListener('click', function () {
        if (hamburgerMenu.style.right === '0px') {
            closeMenu();
        } else {
            hamburgerMenu.style.right = '0px';
            overlay.style.display = 'block';
            document.body.classList.add('overflow-hidden');
        }
    });

    closeButton.addEventListener('click', closeMenu);

    overlay.addEventListener('click', closeMenu);
});

//フォルム候補の横幅を変える
function setPokemonWidth() {
    for (var i = 1; i <= 6; i++) {
        var pokemonId = 'pokemon' + i;
        var suggestionsId = pokemonId + 'suggestions';

        var pokemonWidth = document.getElementById(pokemonId).offsetWidth;
        var newPokemonWidth = pokemonWidth + 1;
        document.getElementById(suggestionsId).style.width = newPokemonWidth + 'px';
    }
}
window.addEventListener('load', setPokemonWidth);
window.addEventListener('resize', setPokemonWidth);

//エンターで送信させない
$(function () {
    $("#party_form").on("keydown", function (ev) {
        if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13)) {
            return false;
        } else {
            return true;
        }
    });
});

//必須項目が空だと警告を出す
$(document).ready(function () {
    $("#party_form").submit(function (event) {

        var flags = {
            rule: false,
            regulation: false,
            url: false,
            name: false,
            red: false
        };

        var urlInput = $("#rule");
        if (urlInput.val() === "") {
            alert("ルールを選択してください。");
            event.preventDefault();
        } else {
            flags.rule = true;
        }

        var reguInput = $("#regulation");
        var eventInput = $("#event")

        if (reguInput.val() === "" && eventInput.val() === "") {
            alert("レギュレーションもしくは大会名を選択してください。");
            event.preventDefault();
        } else {
            flags.regulation = true;
        }

        var urlInput = $("#url");
        if (urlInput.val() === "") {
            alert("URLを入力してください。");
            event.preventDefault();
        } else {
            flags.url = true;
        }

        var urlInput = $("#name");
        if (urlInput.val() === "") {
            alert("制作者名を入力してください。");
            event.preventDefault();
        } else {
            flags.name = true;
        }

        if (document.querySelector('.red-background')) {
            event.preventDefault();
            alert('フォルムを選択してください。');
        } else {
            flags.red = true;
        }

        if (flags.rule && flags.regulation && flags.url && flags.name && flags.rule && flags.red) {
            var confirmed = confirm("入力した内容で送信しますか？");
            if (!confirmed) {
                event.preventDefault();
            }
        }
    });
});

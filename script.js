function changeLang(event) {
    const langs = document.getElementsByClassName('lang');

    for (element of langs) {
        if (element.classList.contains('lang_selected')) {
            element.classList.remove('lang_selected')
        }
        else {
            element.classList.add('lang_selected')
        }
    }
}
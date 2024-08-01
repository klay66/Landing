var myNav = document.getElementById('navbar')


window.onscroll = function () {

    console.log(window.scrollY)
    if (window.scrollY >= 100) {

        myNav.style.backgroundColor = 'white'

    } else {
        myNav.style.backgroundColor = 'transparent'
    }

}
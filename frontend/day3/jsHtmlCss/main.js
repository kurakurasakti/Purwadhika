window.onscroll = function() {navbarSolid()};

function navbarSolid(){
    console.log(document.body.scrollTop)
    if (document.body.scrollTop>40 || document.documentElement.scrollTop>40) {
        document.getElementById('navbar').className += ' solid';
        document.getElementById('navbar').style.position = 'fixed'
        
    }
    else{
        document.getElementById('navbar').className = 'navbar'

    }
}
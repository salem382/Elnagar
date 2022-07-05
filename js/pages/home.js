/* start mainNav */

myMenuBar = document.querySelector('.navM');
myCloseButton = document.querySelector('.menuOverlay .close');
myMenuOverlay =document.querySelector('.menuOverlay');
mySideBar = document.querySelector('.sideBar');

myMenuBar.onclick = function () {

    console.log('done')
}

function closeMenuBar () {
    myMenuOverlay.style.left = '-100%';
    mySideBar.style.left = '-100%';
}
function openMenuBar () {
    myMenuOverlay.style.left = '0';
    mySideBar.style.left = '0';
}
myMenuBar.onclick = function () {
    openMenuBar();
}
myCloseButton.onclick = function () {
    closeMenuBar();
}
myMenuOverlay.onclick = function () {
    closeMenuBar();
}
window.onresize = function () {

    if (this.innerWidth > 767) {
        closeMenuBar();
    }
}

/* End mainNav*/

/* start slider */

var myContent = document.querySelector('.info .content'),
    myButtonsControls = document.querySelectorAll('.slider .buttons > li');

function removeActiveL () {
    
    for (var i = 0; i < myButtonsControls.length; i++) {

        myButtonsControls[i].classList.remove('active');
    }
}

    myButtonsControls.forEach ((ele, ind)=> {

        ele.onclick = function () {

            if (ind == 0) {
                myContent.style.left = '0';
                removeActiveL ();
                ele.classList.add('active');
            }
            else if (ind == 1) {
                myContent.style.left = '100' + '%';
                removeActiveL ();
                ele.classList.add('active');
            }
            else if (ind == 2) {
                myContent.style.left = '200' + '%';
                removeActiveL ();
                ele.classList.add('active');
            }
        }
    })
  

/* End slider */


/* start opinions */

var myOpinionsSon = document.querySelector('.opinions .son'),
    opinionsControls = document.querySelectorAll('.opinions .controls > li');

function removeActive () {
    
    for (var i = 0; i < opinionsControls.length; i++) {

        opinionsControls[i].classList.remove('active');
    }
}

    opinionsControls.forEach ((ele, ind)=> {

        ele.onclick = function () {

            if (ind == 0) {
                myOpinionsSon.style.left = '0';
                removeActive();
                ele.classList.add('active');
            }
            else if (ind == 1) {
                myOpinionsSon.style.left = '100' + '%';
                removeActive();
                ele.classList.add('active');
            }
            else if (ind == 2) {
                myOpinionsSon.style.left = '200' + '%';
                removeActive();
                ele.classList.add('active');
            }
        }
    })
  

/* End opinions*/

AOS.init();
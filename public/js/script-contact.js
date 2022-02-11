const $form = document.querySelector('#form');
const $botonMail = document.querySelector('#mail');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
/*     e.preventDefault();  */
    const form = new FormData(this);
    $botonMail.setAttribute('href', `mailto:facundomamani120@gmail.com?subject=${form.get('nombre')}${form.get('email')}&body=${form.get('mensaje')}`);
    $botonMail.click();
}
// Header
const headerHome = document.querySelector('#header')
headerHome.innerHTML = `
    <a href="../index.html"><img id="logo" src="./assets/logo/logo.png" alt="logo da Yotei"></a>
`
const headerPages = document.querySelector('#header')
headerPages.innerHTML = `
    <a href="../index.html"><img id="logo" src="../assets/logo/logo.png" alt="logo da Yotei"></a>
`

//Footer
const footer = document.querySelector('#footer')
footer.innerHTML = `
    <h1 class="app-name">Yotei</h1>
    <p>Desenvolvido por Camila da Rosa</p>
    <div id="social-links">
        <a href="https://www.linkedin.com/in/caamiladarosa/" target="_blank" alt="Ícone do linkedin"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="mailto:caamiladarosa@gmail.com" target="_blank" alt="Ícone do e-mail"><ion-icon name="mail"></ion-icon></a>
    </div>
`

// Home button
const btnHome = document.querySelector('#button-home');
btnHome.addEventListener("click", function() {
    window.location.href = "./pages/createListOptions.html";

});

// Create list without saving
const btnCreateList = document.querySelector('#create-list');
btnCreateList.addEventListener("click", function() {
    window.location.href = "https://caamiladarosa.github.io/yotei/pages/createList.html";
});

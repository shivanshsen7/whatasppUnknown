let openBtn = document.getElementsByClassName("open")[0];
openBtn.addEventListener("click", () => {
    let number = document.getElementById("country-code").value +
        document.getElementById("mobile-number").value; 
    let fwdURL = `https://wa.me/${number}`;
    window.open(fwdURL);
    // console.log(fwdURL)

})
var installed = false;

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        // console.log("SW registered!");
        // console.log(registration);

    }).catch(error => {
        // console.log("SW registration failed!");
    });
}


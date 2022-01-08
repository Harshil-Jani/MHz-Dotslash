function takeshot() {
    let div =
        document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
}

const screenshot = document.getElementById("screenshot");
screenshot.addEventListener("click", ()=>{
        let div = document.getElementById('body');
        html2canvas(div).then(
            function (canvas) {
                document
                .getElementById('output')
                .appendChild(canvas);
            })
})
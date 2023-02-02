document.querySelector('.container-button').addEventListener('click', function () {
    var myinput = document.querySelector("input").value;
    urlgen(myinput);
    pushToterminal(myinput);

});
document.querySelector('.container-textinput').addEventListener('keyup', function (e) {
    var myinput = document.querySelector("input").value;
    pushToterminal(myinput);
    if (e.which === 13) {
        urlgen(myinput);
    }
});

function urlgen(myinput) {
    var url = "https://api.giphy.com/v1/gifs/search?api_key=VJUKwkZa2x9WyhKubMbZC5xuWQs4SEzx&q=" + myinput + "&limit=25&offset=0&rating=g&lang=en";
    AJAXcaller(url);
}

function AJAXcaller(url) {
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {

        data1 = e.target.response;
        //pushToDOM(data1);
        var response = JSON.parse(data1);
        var imageURLs = response.data;
        console.log(imageURLs);
        imageURLs.forEach(function (image) {
            var src = image.images.fixed_height.url;
            console.log(src);
            var container = document.querySelector('.js-container');
            container.innerHTML = container.innerHTML + "<img class = \"container-image\" src = \" " + src + " \" >";


        });
        //}
    });
}


function pushToterminal(myinput) {
    console.log(myinput);
}

//function pushToDOM(data1) {
window.onload = () => {
    let regions = document.getElementsByClassName("region");
    for (var i = 0; i < regions.length; i++) {
        regions[i].onclick = (event) => {
            let region = event.currentTarget.innerHTML;
            let flags = "";
            fetch("https://restcountries.com/v3.1/region/" + region)
                    .then(function (response) {
                        return response.json();
                    }).then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    flags += `<img class="flags" src="${data[i].flags.png}" alt="${data[i].name.common}"/>`;
                }
                document.getElementById("flags").innerHTML = flags;
                // Capturar evento click en cada bandera
                let flagElements = document.getElementsByClassName("flags");
                for (let j = 0; j < flagElements.length; j++) {
                    flagElements[j].onclick = (event) => {
                        alert(event.currentTarget.alt);
                    };
                    
                }
            });
        };
    }
};




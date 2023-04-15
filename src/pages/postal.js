import React from 'react';

const PostalLookup = () => {

       async function getData(url) {
        return  fetch(`https://api.zippopotam.us/us/` + url)
          .then(response => response.json())
          .then(json => {return json })
      }


    async function handleClick(event) {
        event.preventDefault();
        let input = document.querySelector("#postal");
       const data = await getData(input.value);
       console.log( data );
       document.getElementById("result").innerHTML = data.country + "</br>  " + data["country abbreviation"]
       + "</br>  " + data["post code"]
       + "</br>  " + data.places[0]["place name"]
       + "</br>  " + data.places[0]["state"];
    }


    function searchPostal(event) {
        event.preventDefault();
        let input = document.querySelector("#postal");
        console.log(input.value);
    }

    return (
        <div>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />


            <h1>Postal Lookup</h1>

            <form class="d-flex" role="search">
                <input class="form-control me-2"  placeholder="Search" aria-label="Search" id="postal" type="number" />
                <button class="btn btn-outline-success" type="submit" onClick={handleClick}>Search</ button>
            </form>

            <div id="result"></div>



        </div>
    );
};




export default PostalLookup; 
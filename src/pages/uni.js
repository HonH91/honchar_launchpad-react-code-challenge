import React from 'react';

const Universities = () => {

    async function getData(url) {
        return fetch(url)
            .then(response => response.json())
            .then(json => { return json })
    }

    async function handleOnLoad(event) {
        event.preventDefault();
        drowDropdown();
    }

    async function fillDropdown() {
        return await getData('https://countriesnow.space/api/v0.1/countries/info?returns=none');
    }

    async function drowDropdown() {
        let countriesList = await fillDropdown();

        let html = "";
        for (let i = 0; countriesList.data.length > i; i++) {
            html += "<option> " + countriesList.data[i].name + "</ option>";
        }
        document.getElementById("uni").innerHTML = html;
    }

    async function handleChoose(event) {
        event.preventDefault();
        let selectValue = document.querySelector("#uni");
        const data = await getData('http://universities.hipolabs.com/search?country=' + selectValue.value);
        console.log(data);
        console.log(data[0].country);

        let prepareResult = "";
        for (let i = 0; data.length > i; i++) {
            prepareResult += "<div>  " + "name: " + data[i].name + "</ div> "
                + "<div>  " + " link: " + data[i].web_pages[0] + "</ div> "
        }
        document.getElementById("result").innerHTML = prepareResult;
    }

    return (
        <div>
            <h1>Universities</h1>

            <form onChange={handleChoose} id="form">
                <select id='uni' onClick={handleOnLoad}>
                    <option>
                        choose country
                    </option>
                </select>
            </ form>
            <div id="result"></div>
        </div>
    );
};

export default Universities; 
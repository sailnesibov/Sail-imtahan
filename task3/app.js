const url = 'https://restcountries.com/v3.1/name/azerbaijan'


function getData() {
    const countryName = document.getElementById("countryName").value;
    const url = "https://restcountries.com/v3.1/name/" + countryName;

    axios.get(url).then(({ data }) => {
        console.log(data)
    })
}
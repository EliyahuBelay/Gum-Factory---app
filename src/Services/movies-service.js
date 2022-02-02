

export function getInfo(setApiData) {
    fetch("https://moviesmern.herokuapp.com/movies/all")
        .then(res => res.json())
        .then(data => setApiData(data.data))
        .catch(() => { console.log("error"); })
}

//a function that return a data from outside the app thru function *fetch*.
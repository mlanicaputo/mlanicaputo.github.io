function getTodaysDate(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${month}/${day}/${year}`;

    return fullDate;
}

document.getElementById("dateContainer").innerHTML = getTodaysDate();

function godz() {
    const currentHour = new Date().getHours();

    if (currentHour >= 20) {
        alert("The restaurant is closed after 8 p.m. from Monday to Friday");
    } else {
        alert("The restaurant is open until 8 p.m. from Monday to Friday");
    }
}
function urlify(url) {
    const urlParts = url.split(" ");
    const properUrl = urlParts.join("%20");
    return properUrl;
}

console.log(urlify("tauhida parveen"));
console.log(urlify("www.thinkful.com /tauh ida parv een"));
console.log(urlify("test"));

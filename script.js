var li, 
    a,
    navigation;

navigation = document.getElementById("navigation");

var navNames = [
    {"name": "Home", "href":"index.html"},
    {"name": "Catalog", "href":"catalog.html"},
    {"name": "About Us", "href":"about_us.html"},
    {"name": "Contacts", "href":"contacts.html"},
    {"name": "Portfolio", "href":"portfolio.html"},
    {"name": "Blog", "href":"blog.html"}
]

for(var i=0; i<navNames.length; i++) {
    li = document.createElement("li");
    a = document.createElement("a");
    navigation.appendChild(li);
    li.appendChild(a);
    li.setAttribute("class", "nav-item");
    a.innerHTML = navNames[i].name;
    a.setAttribute("href", navNames[i].href);
    a.setAttribute("class", "nav-link");
    if (document.location.href.indexOf(navNames[i].href) != -1) {
        document.getElementById('h1').innerHTML = navNames[i].name;
        li.setAttribute("class", "active");
    }
}

var strSomeWords = "Lorem ipsum dolor sit amet consectetur adipiscing";

function doDash(str){
    var strToArr = str.split(' ');
    for(var i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i].toLowerCase();
    }
    var strFromArr = strToArr.join('-');
    console.log(strFromArr);
}
doDash(strSomeWords)
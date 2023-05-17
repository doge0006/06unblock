function setCookie(e, t, o) {
    const n = new Date;
    n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
    let i = "expires=" + n.toUTCString();
    document.cookie = e + "=" + t + ";" + i + ";path=/"
}

function deleteCookie(e) {
    const t = new Date;
    t.setTime(t.getTime() + 864e5);
    let o = "expires=" + t.toUTCString();
    document.cookie = e + "=;" + o + ";path=/"
}

function getCookie(e) {
    let t = e + "=",
        o = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < o.length; e++) {
        let n = o[e];
        for (;
            " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return ""
}

function acceptCookieConsent() {
    deleteCookie("user_cookie_consent"), setCookie("user_cookie_consent", 1, 30), document.getElementById("cookieNotice").style.display = "none"
}
let cookie_consent = getCookie("user_cookie_consent");
"" != cookie_consent ? (document.getElementById("cookieNotice").style.display = "none", document.getElementById("acceptNoti").style.display = "block") : (document.getElementById("cookieNotice").style.display = "block", document.getElementById("acceptNoti").style.display = "none");
let inFrame;
try {
    inFrame = window !== top
} catch (e) {
    inFrame = !0
}
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const e = open("about:blank", "_blank");
    if (!e || e.closed) alert("Allow popups and redirects to hide this from showing up in your history.");
    else {
        const t = e.document,
            o = t.createElement("iframe"),
            i = o.style,
            n = t.createElement("link"),
            r = localStorage.getItem("name") || "My Drive - Google Drive",
            a = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        t.title = r, n.rel = "icon", n.href = a, o.src = location.href, i.position = "fixed", i.top = i.bottom = i.left = i.right = 0, i.border = i.outline = "none", i.width = i.height = "100%", t.head.appendChild(n), t.body.appendChild(o), location.replace("https://google.com")
    }
}
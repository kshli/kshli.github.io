const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1

const appAbout = $("#app-about")

const appShare = $("#app-share")
const appShareText = $("#app-share-text")

const btnOpen = $("#btn-open")

function showAbout() {
    appShare.css("display", "none")

    btnOpen.css("display", "none")
}

function showShare(url) {
    appAbout.css("display", "none")

    appShareText.text(url)
    btnOpen.attr("href", url)
}

if(window.location.hash) {
    const url = window.location.hash.substring(1)
    showShare(url)

    if(!isAndroid) window.location.href = url
}else{
    showAbout()
}
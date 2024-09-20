const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1

const appAbout = $("#app-about")

const appShare = $("#app-share")
const appShareText = $("#app-share-text")

const btnOpenBrowser = $("#btn-open-browser")

function showAbout() {
    appShare.css("display", "none")

    btnOpenBrowser.css("display", "none")
}

function showShare(url) {
    appAbout.css("display", "none")

    appShareText.text(url)
    btnOpenBrowser.attr("href", url)
}

if(window.location.hash && window.location.hash.length > 8) {
    const hashValue = window.location.hash.substring(1)
    const url = (hashValue.startsWith("https://") || hashValue.startsWith("http://")) 
        ? hashValue 
        : `https://${ hashValue }`

    showShare(url)

    if(!isAndroid) {
        window.location.href = url
    }else{
        window.location.href = `kitshn://${ url }`
    }
}else{
    showAbout()
}
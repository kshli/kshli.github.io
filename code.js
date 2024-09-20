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

if(window.location.hash) {
    const url = window.location.hash.substring(1)
    if(url.length > 8) {
        showShare(
            (url.startsWith("https://") || url.startsWith("http://")) 
                ? url
                : `https://${ url }`
        )

        if(!isAndroid) {
            window.location.href = url
        }else{
            window.location.href = `kitshn://${ url }`
        }
    }else{
        showAbout()
    }
}else{
    showAbout()
}
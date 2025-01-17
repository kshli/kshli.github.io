const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

const appAbout = $("#app-about")

const appShare = $("#app-share")
const appShareText = $("#app-share-text")

const btnOpenBrowser = $("#btn-open-browser")
const btnDownloadApp = $("#btn-download-app")

if(isIOS) {
    btnDownloadApp.attr("href", "https://apps.apple.com/us/app/kitshn-for-tandoor/id6740168361")
}else{
    btnDownloadApp.attr("href", "https://play.google.com/store/apps/details?id=de.kitshn.android")
}

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

    if(isAndroid) {
        window.location.href = `kitshn://${ url }`
    }else if(isIOS) {
        window.location.href = `kitshn://${ encodeURIComponent(url) }`
    }else{
        window.location.href = url
    }

    btoa()
}else{
    showAbout()
}
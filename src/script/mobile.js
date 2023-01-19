function detectMobileDevice(agent) {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]
  
    return mobileRegex.some(mobile => agent.match(mobile))
}

let isMobile = false
document.addEventListener("DOMContentLoaded", (event) => {
    isMobile = detectMobileDevice(window.navigator.userAgent)
})
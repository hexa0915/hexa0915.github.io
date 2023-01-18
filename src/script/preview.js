let youtubeAPI = document.createElement("script")
youtubeAPI.src = 'https://www.youtube.com/iframe_api'

var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(youtubeAPI, firstScript);

let previewPlayer;
function onYouTubePlayerAPIReady() {
    previewPlayer = new YT.Player('preview', {
        width: '1280',
        height: '720',
        videoId: 'nUrYVH4BE2A',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 1,
            mute: 1,
            showInfo: 0,
            modestbranding: 1,
            playlist: 'nUrYVH4BE2A',
            rel: 0,
            loop: 1
        }
    })
}

function onPlayerReady(event) {
    event.target.setPlaybackQuality('hd720')
    event.target.playVideo()

    event.target.setVolume(0)
    event.target.unMute()

    setTimeout(volumeUp, 1, 0, event)
}

function volumeUp(volume, event) {
    event.target.setVolume(volume + 1)
    if (volume < 10) {
        setTimeout(volumeUp, 1, volume + 1, event)
    }
}

function onStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        document.querySelector('#preview-cover').style.backgroundColor = "rgba(0, 0, 0, 1)"
        previewPlayer.loadVideoById('nUrYVH4BE2A', 5.67, 'hd720')
        document.querySelector('#preview-cover').style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let previewCover = document.querySelector('#preview-cover')
    let previewVideo = previewCover.querySelector('#preview')

    const previewLoop = () => {
        let previewWidth = window.innerWidth
        let previewHeight = previewWidth / 16 * 9

        requestAnimationFrame(previewLoop)
    }

    requestAnimationFrame(previewLoop)
})
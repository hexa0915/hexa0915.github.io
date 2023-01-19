document.addEventListener('DOMContentLoaded', (event) => {
    let previewVideo = document.querySelector('#preview')

    previewVideo.addEventListener("load", (event) => {
        previewVideo.play()
    })
})
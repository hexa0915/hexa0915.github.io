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
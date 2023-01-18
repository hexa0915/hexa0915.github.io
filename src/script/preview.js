document.addEventListener('DOMContentLoaded', (event) => {
    let preview = document.querySelector('.preview')
    let previewCover = document.querySelector('.preview-cover')
    const previewLoop = () => {
        let previewWidth = window.innerWidth
        let previewHeight = previewWidth / 16 * 9

        requestAnimationFrame(previewLoop)
    }

    requestAnimationFrame(previewLoop)
})

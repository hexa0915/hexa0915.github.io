document.addEventListener('DOMContentLoaded', (event) => {
    let previewVideo = document.querySelector('#preview-video')
    let previewCover = document.querySelector('#preview-cover')

    const previewSize = () => {
        if (!isMobile) {
            let preview_width = window.innerWidth
            let preview_height = window.innerHeight
            if (preview_width / 16 * 9 > preview_height) { //세로 레터박스 생김
                previewVideo.style.transform = 
                    `scale(${(preview_width / 16 * 9) / preview_height})`
                previewCover.style.transform = 
                    `scale(${(preview_width / 16 * 9) / preview_height})`
            } else if (preview_width / 16 * 9 < preview_height) { //가로 레터박스 생김
                previewVideo.style.transform = `scale(1)`
                previewCover.style.transform = `scale(1)`
            }
        }

        requestAnimationFrame(previewSize)
    }

    requestAnimationFrame(previewSize)
})
/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

const countries = ["United states", "Canada", "Mexico", "Brazil", "Argentina", "Sweden",
    "Turkey", "England", "Ireland", "Finland", "Norway", "India", "Sri Lanka",
    "China", "Russia", "Australia", "Singapore", "Malaysia"
]

const places = [
    "Oral care", "Health care", "Fashion brands", "Jewelry brands",
    "Real estate companies", "Premium Apparel", "Health and wellness supplements",
    "Gym industry", "CRM tools", "Fintech apps", "Gaming apps", "Tech services",
    "Project management tools", "e-commerce brands", "SAAS brands",
]


const countriesContainer = document.querySelector(".countries-container")
const placeContainer = document.querySelector(".places-container")

function addSlidingPlace(place, container){
    
    const imageContainer = `
            <div class="tw-min-w-fit tw-p-2 tw-px-3 tw-w-max tw-h-[50px]
                        tw-border-solid tw-border-[1px] tw-flex 
                        tw-rounded-md tw-border-white/15
                        tw-place-items-center tw-place-content-center
                        tw-overflow-clip sliding-image">
                ${place}
            </div>
    `

    container.innerHTML += imageContainer

}


countries.forEach( img => addSlidingPlace(img, countriesContainer))
countries.forEach( img => addSlidingPlace(img, countriesContainer))

places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))


/**
 * Video showcase grid — custom play / mute controls
 * (no seekbar, no fullscreen button by design)
 */

document.querySelectorAll(".video-tile").forEach((tile) => {
    const video = tile.querySelector("video")
    const playBtn = tile.querySelector(".video-play-btn")
    const muteBtn = tile.querySelector(".video-mute-btn")
    const playIcon = playBtn.querySelector("i")
    const muteIcon = muteBtn.querySelector("i")

    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play()
            playIcon.classList.remove("bi-play-fill")
            playIcon.classList.add("bi-pause-fill")
        } else {
            video.pause()
            playIcon.classList.remove("bi-pause-fill")
            playIcon.classList.add("bi-play-fill")
        }
    })

    muteBtn.addEventListener("click", () => {
        video.muted = !video.muted
        muteIcon.classList.remove(video.muted ? "bi-volume-up-fill" : "bi-volume-mute-fill")
        muteIcon.classList.add(video.muted ? "bi-volume-mute-fill" : "bi-volume-up-fill")
    })

    video.addEventListener("ended", () => {
        playIcon.classList.remove("bi-pause-fill")
        playIcon.classList.add("bi-play-fill")
    })
})


const faqAccordion = document.querySelectorAll('.faq-accordion')

faqAccordion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        let content = this.nextElementSibling
        
        // content.classList.toggle('!tw-hidden')
        if (content.style.maxHeight === '200px') {
            content.style.maxHeight = '0px'
            content.style.padding = '0px 18px'

        } else {
            content.style.maxHeight = '200px'
            content.style.padding = '20px 18px'
        }
    })
})


// ------------- "Learn more" popup ---------------

const learnMoreBtn = document.getElementById("learn-more-btn")
const learnMoreModal = document.getElementById("learn-more-modal")
const modalCloseBtn = document.getElementById("modal-close-btn")

function openLearnMoreModal() {
    learnMoreModal.classList.add("active")
    document.body.style.overflow = "hidden"
}

function closeLearnMoreModal() {
    learnMoreModal.classList.remove("active")
    document.body.style.overflow = ""
}

if (learnMoreBtn && learnMoreModal) {
    learnMoreBtn.addEventListener("click", openLearnMoreModal)
    modalCloseBtn.addEventListener("click", closeLearnMoreModal)

    // close when clicking the dark backdrop (outside the modal box)
    learnMoreModal.addEventListener("click", (e) => {
        if (e.target === learnMoreModal) closeLearnMoreModal()
    })

    // close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLearnMoreModal()
    })
}



// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})

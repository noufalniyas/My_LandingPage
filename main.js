const menu = document.querySelector(".menu");
const closebar = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-Navbar")
const mobileNavList = document.querySelector(".nav-Mobilelist")


            menu.addEventListener("click", () => {
                mobileNav.style.display ="block"
                mobileNavList.style.display ="block"
                menu.style.display = "none"
                closebar.style.display = "block"
            })

            closebar.addEventListener("click", () => {
                mobileNav.style.display ="none"
                closebar.style.display = "none"
                menu.style.display = "block"
            })


    

    
    let startVal = 0;
    let interval = 2000
    const  countVal = document.querySelector("#countVal")
    
    const endVal = parseInt(countVal.getAttribute("data-value"))
    let distance = parseInt(Math.floor(interval / endVal ))
    
    const counterIncrement = setInterval(() => {
            startVal += 1;
            countVal.textContent = `${startVal}+`
            if(startVal >= endVal) {
                clearInterval(counterIncrement)
            }
        }, distance)


        // my form
        document.querySelector(".my-form").addEventListener("submit", function (e) {
        
            setTimeout(() => {
                e.target.reset(); // Reset the form fields
            }, 100); 
        });
        
        

       
    
    // console.log(val)

// testimonial slider

// const slideWrapper = document.querySelector(".slide-wrapper");
// const testimonials = document.querySelectorAll(".testimonialCard");
// let currentIndex = 0;

// function showNextSlide() {
//     currentIndex++;
//     if (currentIndex >= testimonials.length) {
//         currentIndex = 0;
//     } 
//     const offset = -currentIndex * 100; // Calculate the offset for the slide
//     slideWrapper.style.transform = `translateX(${offset}%)`;
// }

// // Automatically change the slide every 4 seconds
// setInterval(showNextSlide, 4000);

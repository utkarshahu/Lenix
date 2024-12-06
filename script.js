// Lenis ka ek naya instance banaya gaya hai, jo smooth scrolling handle karega
const lenis = new Lenis(); // 'new' ka matlab hai ek nayi Lenis instance create karna, jo CDN se import kiya gaya hai

// Scroll event ke liye listener lagaya, jo har scroll par data ko console me log karega
lenis.on('scroll', (e) => { // 'on' function ek event listener attach karta hai, yahan 'scroll' event ke liye
    console.log(e); // Har scroll event ka data console me dikhayega
});

// Smooth scrolling ko continuous update karne ke liye ek function banaya gaya
function raf(time) { // 'raf' function ek frame ke time par call hoga
    lenis.raf(time); // Lenis ke scroll ko us waqt ke hisaab se update karega
    requestAnimationFrame(raf); // Browser ko bolta hai ki yeh function har frame par chalaye
}

// Smooth scrolling ke liye initial requestAnimationFrame call kiya
requestAnimationFrame(raf); // Har second ko 60 frames ke hisaab se break karta hai aur har frame me scroll update karta hai
// Select all the last 3 divs and their parent wrapper
const lastThreeDivs = document.querySelectorAll('.w-full.h-screen:nth-last-child(-n+3)');
const parentWrapper = lastThreeDivs[0].parentElement;

// Create a new wrapper div for horizontal scroll
const horizontalWrapper = document.createElement('div');
horizontalWrapper.style.cssText = `
    display: flex;
    flex-direction: row;
    width: 300vw; // 100vw for each div
    height: 100vh;
    position: relative;
`;

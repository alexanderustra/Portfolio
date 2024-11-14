import SwipeNavigator from "./components/navegationSwipe"
export const AboutMe = ()=>{

    return (
        <div id="container">
            <div>
                <h1>Alexander Ustra</h1>
                <h3>Frond End and UX Designer</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa asperiores facilis quae eum beatae. Adipisci ipsam voluptate provident minima nobis, facere eius vitae neque veniam? Perspiciatis corrupti eos sit!</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptatibus itaque iusto quam a enim fugiat deserunt cum, placeat eos, distinctio magni unde asperiores voluptates expedita nulla nesciunt quas eligendi.</p>

                <p>aleustrsa2004@gmail.com</p>
            </div>
            <div>

            </div>
            <button>Contact Me</button>
            <h4>In whatever it is, but the Best</h4>
            <SwipeNavigator
            onSwipeLeft={(navigate) => navigate('/contact')}
            onSwipeRight={(navigate) => navigate('/')}
            />
        </div>
    )
}
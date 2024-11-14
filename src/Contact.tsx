import SwipeNavigator from "./components/navegationSwipe"
export const Contact = ()=>{

    return (
        <div id="container">
            <h1>Contact</h1>
            <input type="text" placeholder="Email" />
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <button>Send</button>
            <SwipeNavigator
            onSwipeRight={(navigate) => navigate('/aboutMe')}
            />
        </div>
    )
}
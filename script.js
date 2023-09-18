// Coded by Deku/Faizal
// Random Quotes
const quotes = [
    'Quotes : 1 “All men are not created equal.” – Izuku Midoriya',
    'Quotes : 2 “My motivation might seem trivial compared to yours, but I can’t lose, either.  I have to live up to the hopes of those who supported me.” – Izuku Midoriya',
    'Quotes : 3 “Don’t worry about what other people think. Hold your head up high and plunge forward.” – Izuku Midoriya',
    'Quotes : 4 “When the enemy becomes certain of their victory, that will be our chance.” – Izuku Midoriya',
    'Quotes : 5 “Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!” – Izuku Midoriya',
    'Quotes : 6 “Whatever you say All Might, I’ll step up to this challenge! As long as you’re by my side, I can do anything. That’s how I feel anyway.” – Izuku Midoriya',
    'Quotes : 7 “I have to work harder than anyone else to make it! I’ll never catch up otherwise… I want be like you… Like you! The strongest hero.” – Izuku Midoriya',
    'Quotes : 8 “A smiling, dependable, cool hero…That’s what I wanna be! That’s why I’m giving it everything. For everyone!” – Izuku Midoriya',
    'Quotes : 9 “The deeper the darkness the more dazzling the light shines!” – Izuku Midoriya',
    'Quotes : 10 “Dreams can become reality!” – Izuku Midoriya',
    'Quotes : 11 “I’m not gonna be your worthless punching bag-Deku forever… Kacchan, I’m… I’m the Deku who always does his best!” – Izuku Midoriya',
    'Quotes : 12 “It’s like All-Might said… Giving help that’s not asked for… is what makes a true hero!” – Izuku Midoriya',
    'Quotes : 13 “If I can’t save one little girl right in front of me… Then how can I ever hope to be a hero who saves everyone?” – Izuku Midoriya',
    'Quotes : 14 “If all the villains attacking tonight are on his level… everyone’s in trouble. And they might be after us students. I need to tell Mr. Aizawa and the Wild, Wild Pussycats what I know. If my actions can save any of them… Then I’ve gotta do something.” – Izuku Midoriya',
    'Quotes : 15 “Should we have let people die, all in the name of the law? Isn’t it a hero’s job to save people?” – Shoto Todoroki',
    'Quotes : 16 “If you wanna stop this, then stand up” Because I’ve got one thing to say to you. Never forget who you want to become!” -Shoto Todoroki',
    'Quotes : 17 “Get a hold of yourself, you’re an adult aren’t you?” – Shoto Todoroki',
    'Quotes : 18 “I’ll win with my mom’s power alone. I’ll never use your power in battle!”– Shoto Todoroki',
    'Quotes : 19 “Heroes and villains both thrive on violence, but we’re still categorized. “You’re good” “You’re evil”. That’s how it is! Symbol of peace? Hah! In the end you’re just a tool for violence, made to keep us down. And violence only breeds more violence.” – Shigaraki Tomura',
    'Quotes : 20 “It’s not bad to dream. But you also have to consider what’s realistic.” – All Might',
    'Quotes : 21 “Whether you win or lose, looking back and learning from your experience is a part of life.” – All Might',
    'Quotes : 22 “I just wanna love, live and die my way. My normal way. I wanna be even more like the people I love.” – Toga Himiko',
]
// Show Random Quotes in HTML Quotes Box
function shuff() {
    document.getElementById("quotes").innerHTML = randquotes();
}
// Random Quotes Generated
function randquotes() {
    let randomindex = Math.floor(Math.random() * 22)
    return quotes[randomindex]
}


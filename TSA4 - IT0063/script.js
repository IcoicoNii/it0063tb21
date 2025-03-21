let curr, prev;

function showCard(card){
    curr = card;
    let currentCard = document.getElementById(curr).style;
    currentCard.transform = 'translateY(0px)';
    currentCard.opacity = '100%';
    

    prev = curr;


}

function mainMenu(){
    let previousCard = document.getElementById(prev).style;
    previousCard.transform = '';
    previousCard.opacity = '';
}

function toWriteTitleCover(word, element, callback) {
    let i = 0;
    const wordInterval = setInterval(() => {
        element.textContent += word[i];
        i++;

        if (i === word.length) {
            clearInterval(wordInterval);
            if(callback){
                callback()
            }
        }
    }, 90);
}


const words = ['Olá, eu sou o', 'Marcelo Inácio', 'FRONT-END WEB DEVELOPER'];
const elements = [
    document.querySelector('#title-one'),
    document.querySelector('#title-two'),
    document.querySelector('#title-three')
];


function sequence(i){
    if(i < words.length){
        toWriteTitleCover(words[i], elements[i], ()=>{
            sequence(i+1)
        })
    }
}

sequence(0)
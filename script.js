function first() {
    // что-то делаем;
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
};

first();
second(); 


//callback функция;

function learnJS(lang, callback) {
    console.log("Я изучаю", lang);
    callback();
}
learnJS("JavaScript", function() {
    console.log("Я изучил callback функцию")
});
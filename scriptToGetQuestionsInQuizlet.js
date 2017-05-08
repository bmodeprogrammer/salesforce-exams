// https://quizlet.com/106454899/salesforce-app-builder-certification-flash-cards/
//questions
document.querySelector('.TermText.notranslate.lang-en.qWord')

//answers
document.querySelectorAll('.TermText.notranslate.lang-en.qDef')


let questions = [].slice.call(document.querySelectorAll(".TermText.notranslate.lang-en.qWord")).map(obj => {

    let splitInner = obj.innerHTML.split('<br><br>'),
        question = {};
    question.question = splitInner && Array.isArray(code.splitInner) && splitInner[0];
    if (splitInner.length > 1) {
        question.answers = [];
        splitInner[1].split('<br>').forEach(pa => {
            question.answers.push(pa);
        });
    }
    return question;
});

let answers = [].slice.call(document.querySelectorAll(".TermText.notranslate.lang-en.qDef")).map(obj => obj.textContent);

let finalObjects = [];

for (let i = 0; i < questions.length; i++) {
    let obj = {};
    obj.question = questions[i];
    obj.answer = answers[i];
    finalObjects.push(obj);
}

var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(finalObjects));
var dlAnchorElem = document.createElement('a');
dlAnchorElem.setAttribute("href", dataStr);
dlAnchorElem.setAttribute("download", "appbuilder.json");
document.body.appendChild(dlAnchorElem);
dlAnchorElem.click();

console.log(finalObjects);
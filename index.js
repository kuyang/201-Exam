let DevCandidatesArray = [];
let elTable = document.getElementById('Table');
let elForm = document.getElementById('Form');

let DevCandidates = function(name, codeSchool, language){
    this.name = name;
    this.codeSchool = codeSchool;
    this.language = language;
}

if(localStorage.length > 0){
    let getData = localStorage.getItem('DevCandidateStorage');
    DevCandidatesArray = JSON.parse(getData);
}else{
    let candidateOne = new DevCandidates('Jane Smith','Code Partners','JS, HTML, CSS');
    let candidateTwo = new DevCandidates('John Watts','Code Academy','JS,HTML,CSS');
    let candidateThree = new DevCandidates('Sam Shepard','Code Academy','JS,CSS,HTML');
    let candidateFour = new DevCandidates('Julia Owens','Code Academy','Python,HTML,JS,CSS');
    let candidateFive = new DevCandidates('Walter Smith','Khan Academy','Swift,HTML,CSS');
    let candidateSix = new DevCandidates('Pablo Suarez','Code Academy','Python, HTML, CSS,JS');

    DevCandidatesArray.push(candidateOne,candidateTwo,candidateThree,candidateFour,candidateFive,candidateSix);

}

function displayTableHeader(){
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elNameHeader = document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Candidate Name';

    let elSchoolHeader = document.createElement('th');
    elRow.appendChild(elProgramHeader);
    elSchoolHeader.innerHTML = 'Coding program';

    let elLanguageHeader = Document.createElement('th');
    elRow.appendChild(elLanguage);
    elLanguageHeader.innerHTML = 'Code Language';
}

displayTableHeader();
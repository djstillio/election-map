var makePolitician = function(name, partyColor)
{
var politician = {};
politician.name=name;
politician.partyColor=partyColor;
politician.electionResults= null;
politician.tallyTotalVotes= function()
{
  this.totalVotes=0;
  for(var i=0; i<this.electionResults.length; i++)
  {
    this.totalVotes= this.totalVotes+ this.electionResults[i];
  }
};

return politician;
}
var donald= makePolitician("Donald Trump", [128,0, 0]);
var hillary= makePolitician("Hillary Clinton", [0, 0, 128]);

donald.electionResults = [9,3,11,6,0,0,0,0,0,29,16,0,4,0,11,6,6,8,8,1,0,0,16,0,6,10,3,5,0,0,0,0,0,15,3,18,7,0,20,0,9,3,11,36,6,0,0,0,5,10,3];

hillary.electionResults = [0,0,0,0,55,9,7,3,3,0,0,3,0,20,0,0,0,0,0,3,10,11,0,10,0,0,0,0,6,4,14,5,29,0,0,0,0,7,0,4,0,0,0,0,0,3,13,8,0,0,0]

var setStateResults = function(state){
  theStates[state].winner = null;
  if (donald.electionResults[state] >hillary.electionResults[state])
  {
    theStates[state].winner= donald;
  }else if (hillary.electionResults[state]> donald.electionResults[state])
  {
    theStates[state].winner= hillary;
  }

var stateWinner= theStates[state].winner;

  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbrev = header.children[1];
  var body = stateInfoTable.children[1];
  var candidateOne = body.children[0];
  var nameOne = candidateOne.children[0];
  var resultsOne = candidateOne.children[1];
  var candidateTwo = body.children[1];
  var nameTwo = candidateTwo.children[0];
  var resultsTwo = candidateTwo.children[1];
  var winner = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "("+ theStates[state].nameAbbrev + ")";

  nameOne.innerText = donald.name;
  nameTwo.innerText = hillary.name;

  resultsOne.innerText = donald.electionResults[state];
  resultsTwo.innerText = hillary.electionResults[state];

  if(theStates[state].winner===null){
    winner.innerText = "DRAW";
  }else{
    winner.innerText = theStates[state].winner.name;
  }
}

donald.tallyTotalVotes();
hillary.tallyTotalVotes();

var winner="???";
var declareWinner = function()
{
  if(donald.totalVotes>hillary.totalVotes)
  {
    winner = donald.name;
  } else if (hillary.totalVotes >donald.totalVotes)
  {
    winner = hillary.name;
  } else {
    winner = "draw";
  }
};

declareWinner();

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = donald.name;
row.children[1].innerText = donald.totalVotes;
row.children[2].innerText = hillary.name;
row.children[3].innerText =
hillary.totalVotes;
row.children[5].innerText = winner;

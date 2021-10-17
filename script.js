const mathGrade = document.querySelector(".math-grade");

const mathGradeTotal = parseInt(mathGrade.innerHTML);

const mathGradeTotalElem = document.querySelectorAll(".math-total");

mathGradeTotalElem[0].innerHTML = mathGradeTotal;
mathGradeTotalElem[1].innerHTML = mathGradeTotal;

const physicsGrade = document.querySelector(".physics-grade");

const biologyGrade = document.querySelector(".biology-grade");

const chemistryGrade = document.querySelector(".chemistry-grade");

const scienceTotal =
  parseInt(physicsGrade.innerHTML) +
  parseInt(biologyGrade.innerHTML) +
  parseInt(chemistryGrade.innerHTML);

const scienceTotalElems = document.querySelectorAll(".science-total");

scienceTotalElems[0].innerHTML = scienceTotal;
scienceTotalElems[1].innerHTML = scienceTotal;

const danishGrade = document.querySelector(".danish-grade");

const englishGrade = document.querySelector(".english-grade");

const languageTotal =
  parseInt(danishGrade.innerHTML) + parseInt(englishGrade.innerHTML);

const languageTotalElems = document.querySelectorAll(".language-total");

languageTotalElems[0].innerHTML = languageTotal;
languageTotalElems[1].innerHTML = languageTotal;

const socialScienceGrade = document.querySelector(".social-science-grade");

const historyGrade = document.querySelector(".history-grade");

const geographyGrade = document.querySelector(".geography-grade");

const miscTotal =
  parseInt(socialScienceGrade.innerHTML) +
  parseInt(historyGrade.innerHTML) +
  parseInt(geographyGrade.innerHTML);

const miscTotalElems = document.querySelectorAll(".misc-total");

miscTotalElems[0].innerHTML = miscTotal;
miscTotalElems[1].innerHTML = miscTotal;

const grandTotal = mathGradeTotal + scienceTotal + languageTotal + miscTotal;

const grandTotalElems = document.querySelectorAll(".grand-total");

grandTotalElems[0].innerHTML = grandTotal;

const passOrFail = function (grandTotal) {
  if (grandTotal >= 150) {
    return "Pass";
  }
  return "Failed";
};

const passOrFailElem = document.querySelectorAll(".pass-failed");

passOrFailElem[0].innerHTML = passOrFail(grandTotal);

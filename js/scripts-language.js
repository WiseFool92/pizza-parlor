$(document).ready(function(){
  $("form#radio").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=q1]:checked").val();
    var question2 = $("input:radio[name=q2]:checked").val();
    var question3 = $("input:radio[name=q3]:checked").val();
    var question4 = $("input:radio[name=q4]:checked").val();
    var question5 = $("input:radio[name=q5]:checked").val();
    var question6 = $("input:radio[name=q6]:checked").val();
    var question7 = $("input:radio[name=q7]:checked").val();
    var question8 = $("input:radio[name=q8]:checked").val();
    var question9 = $("input:radio[name=q9]:checked").val();
    var question10 = $("input:radio[name=q10]:checked").val();
    var aResults = 0;
    var bResults = 0;
    var cResults = 0;

    var outcomesArray = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]

    for (let i = 0; i < 10; i++) {
      if (outcomesArray[i] === "a") {
        aResults += 1;
      }
      else if (outcomesArray[i] === "b") {
        bResults += 1;
      }
      else if (outcomesArray[i] === "c") {
        cResults += 1;
      }
    }
    
    // Defaults to a, then b for ties
    var initialVictor = "a";

    if (bResults > aResults && bResults >= cResults) {
      initialVictor = "b";
    }
    if (cResults > aResults && cResults > bResults) {
      initialVictor = "c";
    }

    if (initialVictor === "a") {
      $("#a-winner").removeClass("hidden");
      $("#b-winner").addClass("hidden");
      $("#c-winner").addClass("hidden");
    }
    else if (initialVictor === "b") {
      $("#b-winner").removeClass("hidden");
      $("#a-winner").addClass("hidden");
      $("#c-winner").addClass("hidden");
    }
    else if (initialVictor === "c") {
      $("#c-winner").removeClass("hidden");
      $("#a-winner").addClass("hidden");
      $("#b-winner").addClass("hidden");
    }
    
    });
});
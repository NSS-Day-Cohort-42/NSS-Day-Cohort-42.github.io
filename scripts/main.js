// initialize the tool-tip plugin for Bootstrap4
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$.ajax({
    url: "data/cohort.json"
}).done(cohortMembers)

.fail(function (error) {
    console.log("error", error);
});

//DEFINE SHUFFLE FUNCTION
const shuffle = (arr) => {
    //start at the end of the list...
    let currentIndex = arr.length, holdThisForASec, numberOutOfAHat;
    //as long as there are still more to choose from...
    while (0 !== currentIndex) {
        //get a random index, rounding down
        //bc math.random produces an int between 0 & 1.
        numberOutOfAHat = Math.floor(Math.random() * currentIndex);
        //decrement
        currentIndex -= 1;
        //let's say our current index is 25 right now
        // store the value of the object at index 25 in the var tempvalue
        holdThisForASec = arr[currentIndex];
        //then you can set the val of the object at the current index position
        //equal to the val of the object at the random index position
        arr[currentIndex] = arr[numberOutOfAHat];
        //then we can se the val of the object that used to be at our random index
        //equal to the value of the object at index 25 which we stored in the temp var
        arr[numberOutOfAHat] = holdThisForASec;
        // and we'll keep switchin em around until we get to index 0,
    }
    //then return the array!
    return arr;
}

//RENDER COHORT MEMBER LIST
function cohortMembers(list) {
    let data = list.cohort;
    data = shuffle(data) /* randomize order */
    data.forEach(item => {
        let studentContact = `
            <div class="studentContact">`

        if (item.portfolio != "") { /*If PORTFOLIO exists, render INTERNET ICON*/
            studentContact += `
                <a href=${item.portfolio} target="_blank">
                    <i class="fas fa-globe fa-2x contactIcons"></i>
                </a>`
        }

        if (item.frontend != "") { /*If FE DEMO exists, render YOUTUBE ICON*/
            studentContact += `
                <a href=${item.frontend} target="_blank">
                    <i class="fab fa-youtube fa-2x contactIcons"></i>
                </a>`
        }

        if (item.github != "") { /*If GITHUB exists, render GITHUB ICON*/
            studentContact += `
                <a href=${item.github} target="_blank">
                    <i class="fab fa-github fa-2x contactIcons"></i>
                </a>`
        }

        if (item.linkedIn != "") { /*If LINKEDIN exists, render LINKEDIN ICON*/
            studentContact += `
                <a href=${item.linkedIn} target="_blank">
                    <i class="fab fa-linkedin fa-2x contactIcons"></i>
                </a>`
        }

        if (item.email != null) { /*If EMAIL exists, render EMAIL ICON*/
            studentContact += `
                <a href=mailto:${item.email} target="_blank">
                    <i class="fas fa-envelope fa-2x contactIcons"></i>
                </a>`
        }

        //Close 'studentContact' div
        studentContact += `
            </div>`

        let studentInfo = `
            <div class="col-md-3 cohortMems">
                <img class="card-img-top pointer" src="images/classmates/${item.proImg}" alt="${item.firstName} ${item.lastName}" data-toggle="modal" data-target="#cohortMember${item.id}"/>
                <div class="card-body">
                    <h4 class="card-title title-font">
                        ${item.firstName} ${item.lastName}
                    </h4>`

        if (item.reelThemIn != "") { /*If QUOTE exists, render QUOTE*/
            studentInfo += `
                    <p class="card-text">
                        ${item.reelThemIn}
                    </p>`
        }

        studentInfo += studentContact

        if (item.resume != "") { /*If RESUME exists, render RESUME BUTTON*/
            const resumeButton = `
                    <div class="resumeDiv">
                        <center>
                            <button type="button" class="btn btn-outline-primary title-font bottom resumeButton" data-toggle="modal" data target="#cohortMember${item.id}">
                                <a class="resumeHyperlink" href="images/resumes/${item.resume}" download="${item.lastName}Resume">
                                    Download Resume
                                </a>
                            </button>
                        </center>
                    </div>`
            studentInfo += resumeButton
        }

        if(item.bio != "") { /*If BIO exists, render LEARN MORE BTN, MODAL, & BACK BTN*/
            const learnMoreButton = `
                    <div class="learnMoreButtonContain">
                        <center>
                            <button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#cohortMember${item.id}">
                                Learn More!
                            </button>
                        </center>
                    </div>`
                    
            studentInfo += learnMoreButton

            const modalInfo = `
                <div class="modal fade" id="cohortMember${item.id}" tabindex="-1" role="dialog" aria-labelledby="cohortMember${item.id}Label" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="student-name-modal">
                                    <h5 class="modal-title title-font" id="cohortMember${item.id}Label">
                                        ${item.firstName} ${item.lastName}
                                    </h5>
                                </div>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span class="close-modal" aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <center>
                                    <img src="images/classmates/${item.funImg}" alt="${item.firstName} ${item.lastName} fun"/>
                                </center>
                                <div class="bioContainer">
                                    ${item.bio}
                                </div>
                            </div>`

            studentInfo += modalInfo /*adds modal info*/
            studentInfo += studentContact /*adds contact info*/

            // creates back button
            const backButton = `
                            <div class="backButton">
                                <center>
                                    <button type="button" data-dismiss="modal" class="backButton btn btn-outline-primary title-font bottom" aria-label="Close">
                                        Back
                                    </button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>` /*closes modal dialog div*/

            studentInfo += backButton
        }
        else { /*closes cohortMems and card-body divs*/
            studentInfo += `
                </div>
            </div>
            `
        }

        document.getElementById("cohort").innerHTML += studentInfo;
    })
}

$.ajax({
  url: "data/techs.json"
}).done(techs)
  .fail(function (error) {
    console.log("error", error);
  });

function techs(list) {
    let data = list.techs;
    data.forEach(item => {
        document.getElementById("techs").innerHTML += `
            <div class="col-sm-2 technologies">
                <center>
                    <a href="${item.link}" target="_blank">
                        <img class="techs" src="images/techs/${item.image}" alt="${item.name}" data-toggle="tooltip" data-placement="top" title="${item.name}"/>
                    </a>
                <br />
                </center>
            </div>`
    })
}

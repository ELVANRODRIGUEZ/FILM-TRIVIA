// Here starts the Trivia Object ==================================

var TriviaObj = {
    // Create toggle variables to indicate game on and question on.
    gameOn: false,
    questionOn: false,

    // Create timer variables.
    questionTimer: 0,
    movieTimer: 0,
    totalTime: 0,

    // Create question counter variable.
    questionNumber: 0,
    rightAnswer: 0,

    // Create answer selection variable.
    selectedAnswer: "",

    // Create clockTimer variable to assign it a setInterval function.
    clockTimer: "",

    // Create waiting timer variables to control the game time.
    filmTime: 20500, // In milliseconds.
    answerTime: 20, // In seconds.
    showAnswerTime: 10000, // In milliseconds.

    questionsArr: [
        "Do you know what is the first movie we have record of?", // 1 
        "Do you know what is the oldest horror film we have record of?", // 2
        "Do you know what is the oldest sci-fi film we have record of?", // 3
        "Do you know which one has been the highest-grossing film once we adjust inflation?", // 4
        "Do you know which animated film earned his producer an Oscar for the first time?", // 5
        "Do you know who was the first Mexican woman to be nominated for an Oscar as Best Supporting actress?", // 6
        "Do you know which was the first boxing film to win the Oscar for Best Picture?", // 7
        "Do you know which one of the following was one of the most popular sci-fi films of the 80's?", // 8
        "Do you know which one was the first video game that was taken to the Hollywood industry?", // 9
        "Do you know which one has been the highest-grossing foreing-language Martial Arts film in the US?", // 10
        "Do you know which movie beat Crouching Tiger Hidden Dragon for the 2001 Best Picture Oscar?", // 11
        "Do you know which not US animated film was the first one on winning the Oscar for Best Animated Feature?", // 12
        "Do you know which movie has been the most successful on any Oscar ceremony?", // 13
        "Do you know which one has been the highest-grossing film worldwide in brute terms?", // 14
        "Do you know which one has been the most expensive movie ever filmed worldwide?" // 15
    ],

    answersObj: [
        [
            "A Trip to the Moon",
            "The Execution of Mary Stuart",
            "Roundhay Garden Scene", // This one.
            "Blacksmith Scene"
        ],
        [
            "Le Manoir du Diable", // This one.
            "The Curse of Frankenstein",
            "Dracula",
            "The Golem"
        ],
        [
            "Metropolis",
            "The Phantom Empire",
            "When Worlds Collide",
            "A Trip to the Moon" // This one.
        ],
        [
            "Ben-Hur",
            "Gone with the Wind", // This one.
            "Avatar",
            "Pirates of the Caribbean: Dead Men Tell No Tales"
        ],
        [
            "Snow White", // This one.
            "Dumbo",
            "Betty Boop",
            "Mickey Mouse"
        ],
        [
            "Salma Hayek for Frida",
            "Yalitza Aparicio for Roma",
            "Katy Jurado for Broken Lance", // This one.
            "Emile Kuri for The Heiress"
        ],
        [
            "The Champ (1931)",
            "Rocky (1976)", // This one.
            "Ali (2001)",
            "Million Dollar Baby (2004)"
        ],
        [
            "Star Wars",
            "Star Treck",
            "Superman I",
            "Back to the Future" // This one.
        ],
        [
            "Robocop",
            "Mario Bros", // This one.
            "Street Fighter",
            "Mortal Kombat"
        ],
        [
            "Enter the Dragon",
            "Universal Soldier",
            "Rush Hour",
            "Crouching Tiger Hidden Dragon" // This one.
        ],
        [
            "Gladiator", // This one.
            "Amores Perros",
            "Erin Brockovich",
            "Babilonia"
        ],
        [
            "My Neighbor Totoro",
            "Spirited Away", // This one.
            "Astroboy",
            "La Familia Telerín"
        ],
        [
            "Titanic",
            "Ben-Hur",
            "Lord of the Rings: The Return of the King", // This one.
            "Schindler's list"
        ],
        [
            "Titanic",
            "X-men",
            "Avatar", // This one.
            "Avengers"
        ],
        [
            "The Hobbit",
            "Pirates of the Caribbean: On Stranger Tides", // This one.
            "Justice League",
            "Terminator 2"
        ]

    ],

    rightAnswerArr: [
        "Roundhay Garden Scene is the oldes film we have record of. It was filmed in 1888.",
        "Le Manoir du Diable was the first horror movie ever filmed. It is from 1896.",
        "A Trip to the Moon was a tribut for the famous Jules Verne novel. It is from 1902.",
        "Gone with the Wind has been the highest-grossing film by now if we bring its budget to present value. It is from 1939.",
        "Snow White producer's Walt Disney was awarded for that movie with a honorary set of one normal-size Oscar and seven dwarves Oscars. It is from 1937.",
        "Katy Jurado was the first mexican actress to be Oscar nominated for her Supporting actress role in Broken Lance from 1955.",
        "Rocky was the first one of many nomineed films to win the Oscar for Best Film. It is from 1976.",
        "Back to the Futuer was a huge success and one of the most representative films of the 80's. It is from 1985.",
        "Mario Bros was the first popular video game taken to the big screen. It was a total fiasco though. It is from 1993.",
        "Crouching Tiger Hidden Dragon is one of the most enchanting Martial Arts film ever made. It was Oscar awarded for Best foreign film in 2001.",
        "Gladiator took the Oscar for Best Film on 2001. It catapulted Russell Crowe's acting carrer.",
        "Spirited Away, from Studio Ghilbi, a prolific japanese animation studio, was the second film to win the Oscar on that category and the first foreign film on doing it. It is from 2002.",
        "Lord of the Rings: The Return of the King has been, along with Ben-Hur and Titanic, the most awarded film in one Oscar festival, but this movie won the Oscar for all the nominations it had. It is from 2003. Along with the other two films of the trilogy, it won 17 Oscars out of 30 nominations.",
        "Avatar has been the highest-grossing film ever, with a worldwide gross of 2.7 Billion USD. It is from 2009.",
        "Pirates of the Caribbean: On Stranger Tides has been estimated for a $379,000,000 total cost. It is from 2011."

    ],

    rightAnswerNum: [2, 0, 3, 1, 0, 2, 1, 3, 1, 3, 0, 1, 2, 2, 1],

    gifAddress: [
        "https://media.giphy.com/media/d7p7B3dYKwTXBMS1Of/giphy.gif",
        "https://media.giphy.com/media/rTudHRu4IN8sGM0oKy/giphy.gif",
        "https://media.giphy.com/media/1iw3USXi6tPJsJulFn/giphy.gif",
        "https://media.giphy.com/media/fCTqTuyOA8Hn7oSu1e/giphy.gif",
        "https://media.giphy.com/media/4SZF1kejzUrhN2KFFJ/giphy.gif",
        "https://media.giphy.com/media/ctpMDAxdJRUMZS0N0m/giphy.gif",
        "https://media.giphy.com/media/1xopAspFxVi4XefnRO/200w.webp",
        "https://media.giphy.com/media/iB4K8gTwMWPrR8dnCN/giphy.gif",
        "https://media.giphy.com/media/5UuttqscKcLCI8dyHu/giphy.gif",
        "https://media.giphy.com/media/vcAvACLyZ3UIzqz4Qg/giphy.gif",
        "https://media.giphy.com/media/47C9tp5s3WujlyxsOe/giphy.gif",
        "https://media.giphy.com/media/l2iMsZ65yPbsqPxVkH/giphy.gif",
        "https://media.giphy.com/media/9rv2Y4DnhG1q0ydmHk/giphy.gif",
        "https://media.giphy.com/media/1wQe3TeRhcn7WWWewl/giphy.gif",
        "https://media.giphy.com/media/4N1z3QAc5t0hiKqOmx/giphy.gif"

    ],

    startGame() {
        $(".questions").html(
            "<div class='triviaText'><h3>Welcome to Film Trivia</h3><br>" +
            "<h5>Do your best to answer this film related questions " +
            "correctly to see a short animation of the answer. " +
            "If you answer incorrectly, no short will be played for you. " +
            "There is a time limit to answer each question. " +
            "Good luck!!!</h5><br>" +
            "<button id='start' class='btn btn-secondary'>Press to Start</button></div>"
        )
    },

    showQuestion() {
        if (this.questionOn) {
            if (this.questionNumber < 15) {

                $(".triviaText").html(
                    "<h4><b>" + this.questionsArr[this.questionNumber] + "</b></h4>"
                );
                $(".oneAnswer").each(function () {
                    $(this).html(
                        "<h4>" + TriviaObj.answersObj[TriviaObj.questionNumber][$(this).attr("tag")] + "</h4>"
                    );
                });
                $(".triviaText").append(
                    "<div id='timer'></div>"
                );

                this.questionTimer = 0;

                this.clockTimer = setInterval(this.timeCounter, 1000);
            } else if (this.totalTime == 0) {
                $(".triviaText").html(
                    "<h3><b>You didn't even play!!!</b></h3><br><br><br>" +
                    "<button id='start' class='btn btn-secondary'> " +
                    "Press to Reload</button></div>"
                );
                $(".oneAnswer").empty();
                this.questionOn = false;
                this.gameOn = false;
            } else {
                var formattedTotTime =
                    $(".triviaText").html(
                        "<h3><b>Thanks for playing!!!</b></h3><br><br>" +
                        "<h4>You finished the Film Trivia in: <br><br><b>" +
                        this.timeFormat(this.totalTime) + "</b></h4><br>" +
                        "<h4>And with a score of: <b>" + this.rightAnswer +
                        "</b> answers right.</h4><br>" +
                        "<button id='start' class='btn btn-secondary'> " +
                        "Press to Reload</button></div>"

                    );
                $(".oneAnswer").empty();
                this.questionOn = false;
                this.gameOn = false;
            }
        }
    },

    timeCounter() {
        TriviaObj.questionTimer++;
        $("#timer").html(
            "<br><br><h2>" + TriviaObj.questionTimer + "</h2>"
        );
        if (TriviaObj.questionTimer === TriviaObj.answerTime) {
            TriviaObj.questionNumber++;
            TriviaObj.stopCounter();
            TriviaObj.selectedAnswer = "noAnswer";
            TriviaObj.analyzeAnswer();
        }
    },

    stopCounter() {
        clearInterval(this.clockTimer);
    },

    analyzeAnswer() {

        this.questionOn = false;
        if (this.selectedAnswer == "noAnswer") {
            $(".triviaText").html(
                "<h4><b>Time's up!!!</b></h4><br><br>" +
                "<h5>No feedback for <b>unanswered</b> questions.</h5>"
            );
            $(".oneAnswer").css("background-color", "rgb(194, 194, 149)");
            setTimeout(function () {
                TriviaObj.questionOn = true;
                TriviaObj.showQuestion();
            }, this.showAnswerTime);
        } else if (this.selectedAnswer == this.rightAnswerNum[this.questionNumber]) {
            $(".triviaText").html(
                "<h4><b>You've got that right!!!</b><br><br><br></h4><h5>" +
                this.rightAnswerArr[this.questionNumber] + "</h5>"
            );
            $(".oneAnswer").css("background-color", "rgb(194, 194, 149)");
            this.showFilm();
            this.rightAnswer++;
        } else {
            $(".triviaText").html(
                "<h4><b>The answer is wrong.</b></h4><br><br><h5>" +
                this.rightAnswerArr[this.questionNumber] +
                "<br><br><b>No short film playing this time. Sorry!</b></h5>"
            );
            $(".oneAnswer").css("background-color", "rgb(194, 194, 149)");
            setTimeout(function () {
                TriviaObj.questionOn = true;
                TriviaObj.showQuestion();
            }, this.showAnswerTime);
        };

    },

    timeFormat(time) {

        var hours = Math.floor(time / 3600);
        var minutes = Math.floor(time / 60);
        var seconds = time - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (hours === 0) {
            hours = "00";
        } else if (hours < 10) {
            hours = "0" + hours;
        }

        return hours + "h:" + minutes + "m:" + seconds + "s";
    },

    showFilm() {
        var filmSound = new Audio("assets/sounds/FilmEffect.mp3");
        filmSound.volume = .55;
        filmSound.play();
        setTimeout(function () {
            $(".shortFilm").fadeIn(1500);
        }, 1500);

        $(".theaterPicLight").animate({
            opacity: 0
        }, 2500);
        $(".theaterPicDark").animate({
            opacity: 1
        }, 1500);

        $(".shortFilm").attr("src", this.gifAddress[this.questionNumber]);

        setTimeout(function () {
            $(".theaterPicLight").animate({
                opacity: 1
            }, 2500);
            $(".theaterPicDark").animate({
                opacity: 0
            }, 1500);
            $(".shortFilm").fadeOut(1500);
            setTimeout(function() {
            TriviaObj.questionOn = true;
            TriviaObj.showQuestion();
            }, 2000)
        }, this.filmTime);

    }


};

// Here ends the Trivia Object ====================================

// Here starts Event Listeners ====================================

$(".oneAnswer").on("mouseover", function () {
    if (TriviaObj.questionOn) {
        $(this).css("background-color", "rgb(131, 131, 100)"); //rgb(131, 131, 100)
        $(this).css("cursor", "grab");
    };

});

$(".oneAnswer").on("mouseout", function () {
    if (TriviaObj.questionOn) {
        $(this).css("background-color", "rgb(194, 194, 149)"); //rgb(131, 131, 100)
    };
});

$(".oneAnswer").on("click", function () {
    if (TriviaObj.questionOn) {
        $(".oneAnswer").css("cursor", "default");
        $(this).css("background-color", "rgb(194, 194, 149)");
        TriviaObj.selectedAnswer = $(this).attr("tag");
        TriviaObj.analyzeAnswer(TriviaObj.selectedAnswer);
        TriviaObj.selectedAnswer = "";
        TriviaObj.questionNumber++;
        TriviaObj.stopCounter();
        TriviaObj.totalTime = TriviaObj.totalTime + TriviaObj.questionTimer;
    }

});

$(document).on("click", "#start", function () {
    // Reset the game variables.
    TriviaObj.questionTimer = 0;
    TriviaObj.movieTimer = 0;
    TriviaObj.totalTime = 0;
    TriviaObj.questionNumber = 0;
    TriviaObj.rightAnswer = 0;
    TriviaObj.selectedAnswer = "";

    TriviaObj.gameOn = true;
    TriviaObj.questionOn = true;
    $(".triviaText").empty();
    TriviaObj.showQuestion();
});

// Here ends Event Listeners ======================================

// Calling function to start the game =============================

TriviaObj.startGame();
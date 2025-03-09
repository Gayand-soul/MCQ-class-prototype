
const questions = [
    {
        question:" Hur skapar du en klass i JavaScript?",
        answers: [
            {text: "function MyClass() {}", correct: false},
            {text: "class MyClass {}", correct: true},
            {text: "new Class MyClass {}", correct: false},
            {text: "prototype MyClass {}", correct: false},

        ]
    },
    {
        question:" Vad är syftet med prototype i JavaScript?",
        answers: [
            {text: "Att skapa en ny instans av en klass", correct: false},
            {text: "Att dela metoder mellan objekt av samma typ", correct: true},
            {text: "Att deklarera privata variabler", correct: false},
            {text: "Att skapa en ny variabel i en funktion", correct: false},

        ]
    },
    {
        question:" Vilken av följande kodrader lägger till en metod i en klass med hjälp av prototypkedjan?",
        answers: [
            {text: "function MyClass() { this.myMethod = function() {}; }", correct: false},
            {text: "class MyClass { prototype.myMethod() {} }", correct: false},
            {text: "let obj = new MyClass('prototype'); obj.myMethod = function() {};", correct: false},
            {text: "MyClass.prototype.myMethod = function() {};", correct: true},

        ]
    },

    {
        question:" Vad händer om du ändrar prototype på en befintlig funktion?",
        answers: [
            {text: "Ingenting förändras", correct: false},
            {text: "Det leder till en syntaxfel", correct: false},
            {text: "Alla instanser, både gamla och nya, får den nya prototypen", correct: false},
            {text: "Endast nya instanser får den nya prototypen", correct: true},

        ]
    },

    {
        question:" Hur skapar du en subklass i JavaScript med hjälp av class?",
        answers: [
            {text: "class SubClass inherits SuperClass {}", correct: false},
            {text: "class SubClass prototype SuperClass {}", correct: false},
            {text: "class SubClass child SuperClass {}", correct: false},
            {text: "class SubClass extends SuperClass {}", correct: true},

        ]
    },
    {
        question:"Vad skrivs ut i konsolen? ",
        code: ` class Animal {
                constructor(name) {
                    this.name = name;
                }

            speak() {
                console.log(\`${this.name} makes a noise\`);
                }
            }
        const dog = new Animal('Dog');
        dog.speak(); `,
        answers: [
            {text:" undefined makes a noise", correct: false},
            {text:"Error: speak is not defined", correct: false},
            {text:"null makes a noise", correct: false},
            {text:"Dog makes a noise", correct: true},
        ]

    },
    {
        question:"Vad skrivs ut i konsolen? ",
        code: ` function Person(name) {
                    this.name = name;
                }

                Person.prototype.sayHello = function() {
                console.log(\`Hello, my name is ${this.name}\`);
                };

                const p = new Person('Alice');
                p.sayHello();`,
        answers: [
            {text:" Hello, my name is Alice", correct: true},
            {text:"undefined", correct: false},
            {text:"Error: sayHello is not a function", correct: false},
            {text:"null", correct: false},
        ]

    },
    {
        question:"Vad händer när vi kör denna kod?",
        code: ` class Car {
                    constructor(brand) {
                        this.brand = brand;
                     }
                }

                Car.prototype.getBrand = () => {
                    return this.brand;
                };

                const myCar = new Car('Toyota');
                console.log(myCar.getBrand());`,
        answers: [
            {text:" Toyota", correct: false},
            {text:"undefined", correct: true},
            {text:"Error: getBrand is not a function", correct: false},
            {text:"null", correct: false},
        ]

    },

    {
        question:"Vilken av följande kodsnuttar skapar en giltig subklass av Animal?",
        code: ` class Animal {
                    constructor(name) {
                        this.name = name;
                }

                speak() {
                console.log(\`${this.name} makes a noise\`);
                    }
                }`,
        answers: [
            {text:` class Dog inherits Animal {
                        constructor(name) {
                        super(name);
                        }
                    }`, correct: false},
            {text:` class Dog extends Animal {
                         constructor(name) {
                         super(name);
                        }
                    }`, correct: true},
            {text:` class Dog implements Animal {
                        constructor(name) {
                        super(name);
                            }
                    }`, correct:false },
            {text:` class Dog {
                        constructor(name) {
                        this.name = name;
                            }
                    }`, correct: false},
        ]

    },
    {
        question:"Vad händer när vi kör denna kod?",
        code: ` function User(name) {
                    this.name = name;
                }

            User.prototype.getName = function() {
                return this.name;
            };

            const u1 = new User('Bob');
            User.prototype = {
                getName: function() {
                    return 'Overwritten!';
                }
            };

            console.log(u1.getName()); `,
        answers: [
            {text:" Overwritten", correct: false},
            {text:" Bob", correct: true},
            {text:"Error: getName is not a function", correct:false },
            {text:"undefined", correct: false},
        ]

    },
    {
        question: "Vilket är en fördel med arv i JavaScript?",
        answers: [
            {text:" Gör koden långsammare", correct: false},
            {text:"Förbjuder användning av prototype", correct: false},
            {text:"Ökar kodens komplexitet utan fördelar", correct:false },
            {text:"Förhindrar upprepning av kod", correct: true},
        ]

    },
    {
        question: "Vad skrivs ut i konsolen?",
        code: `console.log(this);`,
        answers: [
            {text:"undefined", correct: false},
            {text:" null", correct: false},
            {text:"{} (tomt objekt)", correct:false },
            {text:"window (i en webbläsare) eller global (i Node.js)", correct: true},
        ]

    },
    {
        question: "Vad skrivs ut i konsolen?",
        code: ` function Foo() {}

                Foo.prototype.bar = 42;
                Foo.prototype = {};

                const obj = new Foo();
                console.log(obj.bar);
                `,
        answers: [
            {text:"42", correct: false},
            {text:"underfined", correct: true},
            {text:"Error: bar is not defined", correct:false },
            {text:"null", correct: false},
        ]

    },
    {
        question: "Vad skrivs ut i konsolen?",
        code: ` class Parent {
                    constructor() {
                        this.value = 10;
                    }
                }

                class Child extends Parent {
                    constructor() {
                        super();
                        this.value = 20;
                    }
                }

                const obj = new Child();
                console.log(obj.value);

                                `,
        answers: [
            {text:"10", correct: false},
            {text:"20", correct: true},
            {text:"Error:super() måste anropas först", correct:false },
            {text:"underfined", correct: false},
        ]

    },
    {
        question: "Vilket av följande är det bästa sättet att lägga till en metod i Animal?",
        code: `function Animal (name) {
                this.name = name;}`,
        answers: [
            {text:`function Animal(name) {
                    this.name = name;
                    this.eat = function() { 
                        console.log(this.name + " is eating."); 
                    };
                }`, correct: false},
            {text:`Animal.prototype.eat = function() {
                    console.log(this.name + " is eating.");
                    };`, correct: true},
            {text:`let Animal = {
                        eat: function() { console.log("Eating."); }
                        }; `, correct:false },
            {text:`class Animal {
                    constructor(name) {
                        this.name = name;
                        }
                    }`, correct: false},
        ]

    },
    {
        question: "Vilket av följande är rätt sätt att länka Fish till Animal?",
        code: ` function Fish(name, waterType) {
                    Animal.call(this, name);
                    this.waterType = waterType;
                }`,
        answers: [
            {text:` Fish.prototype = new Animal();`, correct: false},
            {text:`Fish.prototype = Animal.prototype; `, correct: false},
            {text:` Fish.prototype = Object.create(Animal.prototype);
                    Fish.prototype.constructor = Fish;`, correct:true },
            {text:"Fish._proto_ = Animal", correct: false},
        ]

    },
    {
        question: "Vilket av följande skapar en korrekt instans av Fish?",
        code: `  function Fish(name, waterType) {
                    Animal.call(this, name);
                    this.waterType = waterType;
                    }
                    Fish.prototype = Object.create(Animal.prototype);
                    Fish.prototype.constructor = Fish;`,
        answers: [
            {text:`let fish = Fish("Nemo", "salt");`, correct: false},
            {text:`let fish = new Fish("Nemo", "salt"); `, correct: true},
            {text:`let fish = Object.create(Fish); `, correct:false },
            {text:` let fish = new Animal("Nemo");`, correct: false},
        ]

    },
    {
        question: "Vilket kommando kommer att returnera true?",
        code: ` function Animal(name) {
                    this.name = name;
                    }
                    Animal.prototype.eat = function() {
                        console.log(this.name + " is eating.");
                    };

                    function Fish(name, waterType) {
                        Animal.call(this, name);
                        this.waterType = waterType;
                    }
                    Fish.prototype = Object.create(Animal.prototype);
                    Fish.prototype.constructor = Fish;

                    let salmon = new Fish("Salmon", "freshwater");
   `,
        answers: [
            {text:"salmon instanceof Fish", correct: false},
            {text:"salmon instanceof Animal", correct: false},
            {text:"salmon.eat();", correct:false },
            {text:"Alla ovanstående", correct: true},
        ]

    },
    {
        question: "Hur skapar man arv i JavaScript med prototyp-metoden?",
        answers: [
            {text:" class Child extends Parent {}", correct: false},
            {text:"Child.prototype = new Parent();", correct: true},
            {text:"Object.assign(Child, Parent);", correct:false },
            {text:"Child = Object.create(Parent);", correct: false},
        ]

    },
    {
        question: "Vilket av följande används för att återställa konstruktören efter att ha ärvt via prototype?",
        answers: [
            {text:" Child.constructor = Parent;", correct: false},
            {text:"Child.prototype.constructor = Parent;", correct: false},
            {text:"Child.prototype.constructor = Child;", correct: true },
            {text:"Object.setPrototypeOf(Child, Parent);", correct: false},
        ]

    },
    {
        question: "Vad händer om du inte ställer in Child.prototype.constructor efter att ha ärvt från en annan funktion?",
        answers: [
            {text:" Child fungerar som vanligt utan problem", correct: false},
            {text:"Child kommer att använda Parent som sin konstruktör.", correct: true},
            {text:"Det kastas ett fel vid exekvering.", correct: false },
            {text:"Prototypkedjan bryts helt.", correct: false},
        ]

    },
    {
        question: "Vad returnerar följande kod?",
        code: ` function Animal() {}
                    Animal.prototype.legs = 4;

                    let dog = new Animal();
                    console.log(dog.legs);`,
        answers: [
            {text:"underfined", correct: false},
            {text:"null", correct: false},
            {text:"4", correct:true},
            {text:"Felkastning", correct: false},
        ]

    },
    {
        question: "Vad gör Object.create() i samband med arv?",
        answers: [
            {text:" Skapar en ny instans av ett objekt och kopierar egenskaper.", correct: false},
            {text:"Skapar ett nytt objekt med den angivna prototypen.", correct: true},
            {text:"Använder en klass för att skapa ett nytt objekt.", correct: false },
            {text:"Klonar objektet och skapar en ny konstruktor.", correct: false},
        ]

    },
    {
        question: "Vilken metod används för att kontrollera om en egenskap finns direkt på ett objekt och inte på dess prototyp?",
        answers: [
            {text:` obj.hasOwnProperty("propertyName")`, correct: true},
            {text:` "propertyName" in obj`, correct: false},
            {text:` Object.keys(obj).includes("propertyName")`, correct: false },
            {text:` obj.prototype.hasOwnProperty("propertyName")`, correct: false},
        ]

    },
    {
        question: "Vad händer om man ändrar en metod i Parent.prototype efter att en instans av Child har skapats?",
        answers: [
            {text:" Ändringen påverkar inte den befintliga Child-instansen.", correct: false},
            {text:"Ändringen gäller även för den befintliga Child-instansen.", correct: true},
            {text:"Det kastas ett fel.", correct: false },
            {text:"Bara nya Child-instanser påverkas.", correct: false},
        ]

    }

];

const codeElement = document.getElementById("code-snippet"); // Kodblock deklareras

const questionElement = document.getElementById("question"); //frågan deklareras
const answerButtons = document.getElementById("answer-btn");//svarsalternativ deklareras
const nextBtn = document.getElementById("next-btn"); //next button deklareras

//skapa fråge-index
let currentQuestionIndex = 0; //startas från 0
let score = 0;

//funktion för starta quizzet
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); //när ovan principer är OK, då kallas denna funktionen
}


function showQuestion(){
    //ta bort tidigare frågor o svar
    resetState();

    let currentQuestion = questions[currentQuestionIndex];// Hämtar den aktuella frågan
    let questionNumber = currentQuestionIndex + 1; //uppdatera frågans nr
    questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

    // Om frågan innehåller en kodsnutt
    if (currentQuestion.code) { // Om det finns kod i frågan
        codeElement.style.display = "block"; // Visa kodblocket
        codeElement.innerText = currentQuestion.code; // Lägg in kod
    } else {
        codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
    }

     //visa svaren
     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        //vid rätt svar
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //eventlisten to select answer
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//välja svar
function selectAnswer(x){
    const selectedBtn = x.target; //valda svarsalternativ
    const isCorrect = selectedBtn.dataset.correct === "true";//kontroll= om svaret är korrekt
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //efter rätt svar vad som sker...
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";//vida "next" button!

}


//score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
}

//visa nästa fråga eller invoke showscore funtion
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//...gå till nästa=klicka på nästa button
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//invoke start quiz!
startQuiz();
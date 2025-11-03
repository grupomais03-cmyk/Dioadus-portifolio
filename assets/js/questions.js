/** QUESTIONS TO QUIZ */
// Array of question grouped by category 

const questions = [
    {
        category: "Beginner Level",
        questions: [
            {
                question: "Qual é a tradução corretapara 'Olá, como você está?' em  inglês?",
                options:["A: Hello, what's your name?","B: Hello, how are you?","C: Hello, what's the weather like?","D: Hello, goodbye"
                ],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'livro' em inglês?",
                options: ["A: Book","B: Chair","C: Table","D: Car"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correcta para 'Eu gosto de ler' em inglês",
                options: ["A: I like to watch TV", "B: I like to read","C: I like to play sports","D: I like to eat"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'amigo' em inglês?",
                options: ["A: Family","B: Friend","C: Teacher","D: Student"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou bem' em inglês?",
                options: ["A: I'm tired","B: I'm fine","C: I'm happy","D: I'm sad"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'Casa' em inglês?",
                options: ["A: House","B: Car","C: Tree","D: Dog"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou bem' em inglês?",
                options: ["A: I'm tired","B: I'm fine","C: I'm happy","D: I'm sad"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'Comida' em inglês?",
                options: ["A: Food","B: Drink","C: Restaurant","D: Kitchen"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palavra correta para 'Eu gosoto de música' em inglês?",
                options: ["A: I like music","B: I like sports","C: I like reading","D: I like dancing"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palavra certa para 'Escola' em inglês",
                options: ["A: School","B: University","C: Library","D: Office"],
                correctAnswer: 0,
            },
            {
                question: "Qual é atradução correta para 'Eu estou estudando inglês' em inglês?",
                options: ["A: I'm studying math","B: I'm studying English","C: I'm studying science","D: I'm studying history"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'férias' em inglês?",
                options: ["A: Vacation","B: Holiday","C: Weekend","D: Both A and B"],
                correctAnswer: 3,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou cansado' em inglês?",
                options: ["A: I'm happy","B: I'm tired","C: I'm hungry","D: I'm thirsty"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'amizade' em inglês?",
                options: ["A: Friendship","B: Love","C: Family","D: Relationship"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou feliz' em inglês?",
                options: ["A: I'm sad","B: I'm happy","C: I'm tired","D: I'm angry"],
                correctAnswer: 1,
            }
        ]
    },
    {
        category: "Elementary Level",
        questions: [
            {
                question: "Qual é a tradução correta para 'Eu fui ao parque ontem' em inglês?",
                options: ["A: I went to the store yesterday","B: I went to the park yesterday","C: I went to school yesterday","D: I stayed home yesterday"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'comida' em inglês?",
                options: ["A: Food","B: Drink","C: Restaurant","D: Kitchen"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu gosto de música' em inglês?",
                options: ["A: Ilike music","B: I like sports", "C: I like reading","D: I like dancing"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palavra certa para 'Casa' em inglês?",
                options: ["A: House","B: Car","C: Tree", "D: Dog"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou estudando inglês' em inglês?",
                options: ["A: I'm studying math","B: I'm studying English","C: I'm studying science","D: I'm studying history"],
                correctAnswer: 1,
            }
        ]
    },
    {
        category: "Intermediate Level",
        questions: [
            {
                question: "Qual é a tradução correta para 'Eu estou procurando um emprego' em inglês?",
                options: ["A: I'm lokking for a job","B: I'm lokking for a house","C: I'm lokking for a car","D: I'm lokking for a friend"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palavra certa para 'tecnologia' em inglês?",
                options: ["A: Technology","B: Science","C: History", "D: Art"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou cansado' em inglês?",
                options: ["A: I'm happy","B: I'm tired","C: I'm hungry","D: I'm thisty"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'viagem' em inglês?",
                options: ["A: Travel","B: Vacation","C: Trip","D: All of the above"],
                correctAnswer: 3,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou planejando uma viagem' em inglês?",
                options: ["A: I'm planning a trip","B: I'm planning a party","C: I'm planning a meeting","D: I'm planning a project"],
                correctAnswer: 0,
            }
            
        ]
    },
    {
        category: "Upper Intermediate Level",
        questions: [
            {
                question: "Qual é a tradução correta para 'A mudança climiática é um problema global' em inglês?",
                options: ["A: Climate change is a local problem","B: Climate change is a global problem","C: Climate change is a personal problem","D: Climate change is not a problem"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'sustentabilidade' em inglês? ",
                options: ["A: Sustainability","B: Environment","C: Ecology","D: Conservation"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'Eu estou preocupado com o meio ambiente' em inglês?",
                ooptions: ["A: I'm concerned about the environment","B: I'm not concerned about the environment","C: I'm concerned about the politics","D: I'm concerned about economy"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palavra certa para 'inovação' em inglês?",
                options: ["A: Innovation","B: Tradition","C: Change","D: Progress"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'A tecnologia está mudando a forma como vivemos' em inglês?",
                options: ["A: Technology is changing the way we live","B: Tecnology is not changing the way we live","C: Technology is only changing the way we communicate","D: Technology is only changing the way we communicate"],
                correctAnswer: 0,
            }
        ]
    },
    {
        category: "Advanced Level",
        questions:[
            {
                question: "Qual é a tradução correta para 'A inteligência artificial tem implicações éticas' em inglês?",
                options: ["A: Artifical intellingence has no ethical implication","B: Artificial intelligence has ethical implication","C: Artificial inteligence is only used for entertaiment","D: Artificial intelligence is only used for business"],
                correctAnswer: 1,
            },
            {
                question: "Qual é a palavra certa para 'globalização' em inglês?",
                options: ["A: Globalization","B: Localization","C: Internationlization","D: Nationalization"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução corrreta para 'A economia global está interconectada' em inglês?",
                options: ["A: The global economy is interconnected","B: The global economy is not interconnnected","C: The global economy is only conneced through trade","D: The global economy is only connected throug finance"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a palvra certa para 'complexidade' em inglês?",
                options: ["A: Complexity","B: Simplicity","C: Difficulty","D: Ease"],
                correctAnswer: 0,
            },
            {
                question: "Qual é a tradução correta para 'A solução para o problema requer uma abordagem multidisciplinar' em inglês?",
                options: ["A: The solution to the problem requires a multidisciplinary approach","B: The solution to the problem requires a single approach","C: The solution to the problem is simple","D: The solution to the problem is not possible"],
                correctAnswer: 0,
            }
        ]
    }
];
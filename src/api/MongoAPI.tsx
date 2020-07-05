const mongoApiUrl = "http://localhost:27101";

function doRandom(obj: any){
    obj.title = obj.title + (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(9)
    obj.question = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(9) + obj.question;
    return obj;
}
export function mockApi(): Promise<any> {
    return new Promise((resolve) => {
        const a = Object.assign({}, mockObj[0]);
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        mockObj.push(doRandom(JSON.parse(JSON.stringify(a))));
        
        // mockObj.map(a => console.log(JSON.stringify(a)));
        resolve(mockObj);
    });
}

export function g(conditions: any): Promise<any> {
    return new Promise((resolve, err) => {
        resolve(mockObj);
    });
} 
export function getQueryFromConditions(conditions: any): any {
} 


const mockObj = [
    {
        title: "1.1.1.1 - There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. ",
        question: "There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. What is the probabil aperiam, eaque aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur??",
        answers: [
            {
                letter: "A",
                answer: "1/5",
                selected: false
            },
            {
                letter: "B",
                answer: "3/10"
            },
            {
                letter: "C",
                answer: "2/5"
            },
            {
                letter: "D",
                answer: "1/2"
            },
            {
                letter: "E",
                answer: "7/10"
            }
        ],
        correctLetter: "B",
        categories: [
            "Difficulty: 700-Level",
            "Geometry",
            "Probability",
            "Source: Other - Please specify"
        ],
        userAnswers: [
            {
                score: 10,
                post: `
                    Total ways of choosing any 3 out of 5 lengths = 5C3 = 10 ways
    
                    favorable cases which will NOT form Triangle = {2, 3, 5} {2, 3, 6} {2, 4, 6} = 3 cases
                    
                    Favorable Probability = 3/10
                    
                    Answer: Option B"`,
            },
            {
                score: 1,
                post: `2 Shitty answer shitty asnwser sdfghsdfghsgfdh,`
            },
            {
                score: 20,
                post: `3 Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 20,
                post: `4 Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 20,
                post: `5 Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 23,
                post: `6 Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`},
            {
                score: 2.5,
                post: `7 Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`}
        ]
    },

    {
        title: " 2 -There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm.",
        question: "4. There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. What is the probability that three randomly chosen line segments cannot form a triangle?",
        answers: [
            {
                letter: "A",
                answer: "420.69",
                selected: false
            },
            {
                letter: "B",
                answer: "3/10"
            },
            {
                letter: "C",
                answer: "2/5"
            },
            {
                letter: "D",
                answer: "1/2"
            },
            {
                letter: "E",
                answer: "7/10"
            }
        ],
        correctLetter: "B",
        categories: [
            "Difficulty: 700-Level",
            "Geometry",
            "Probability",
            "Source: Other - Please specify"
        ],
        userAnswers: [
            {
                score: 10,
                post: `Total ways of choosing any 3 out of 5 lengths = 5C3 = 10 ways
    
                    favorable cases which will NOT form Triangle = {2, 3, 5} {2, 3, 6} {2, 4, 6} = 3 cases
                    
                    Favorable Probability = 3/10
                    
                    Answer: Option B"`,
            },
            {
                score: 1,
                post: `Shitty answer shitty asnwser sdfghsdfghsgfdh,`
            },
            {
                score: 20,
                post: `Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 23,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`},
            {
                score: 2.5,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`}
        ]
    },{
        title: " 369.69 -There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm.",
        question: "69. There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. What is the probability that three randomly chosen line segments cannot form a triangle?",
        answers: [
            {
                letter: "A",
                answer: "6969",
                selected: false
            },
            {
                letter: "B",
                answer: "3/10"
            },
            {
                letter: "C",
                answer: "2/5"
            },
            {
                letter: "D",
                answer: "1/2"
            },
            {
                letter: "E",
                answer: "7/10"
            }
        ],
        correctLetter: "B",
        categories: [
            "Difficulty: 700-Level",
            "Geometry",
            "Probability",
            "Source: Other - Please specify"
        ],
        userAnswers: [
            {
                score: 10,
                post: `Total ways of choosing any 3 out of 5 lengths = 5C3 = 10 ways
    
                    favorable cases which will NOT form Triangle = {2, 3, 5} {2, 3, 6} {2, 4, 6} = 3 cases
                    
                    Favorable Probability = 3/10
                    
                    Answer: Option B"`,
            },
            {
                score: 1,
                post: `Shitty answer shitty asnwser sdfghsdfghsgfdh,`
            },
            {
                score: 20,
                post: `Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 23,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`},
            {
                score: 2.5,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`}
        ]
    },{
        title: " 420 -There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm.",
        question: "420.69 There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. What is the probability that three randomly chosen line segments cannot form a triangle?",
        answers: [
            {
                letter: "A",
                answer: "1/5",
                selected: false
            },
            {
                letter: "B",
                answer: "3/10"
            },
            {
                letter: "C",
                answer: "2/5"
            },
            {
                letter: "D",
                answer: "1/2"
            },
            {
                letter: "E",
                answer: "7/10"
            }
        ],
        correctLetter: "B",
        categories: [
            "Difficulty: 700-Level",
            "Geometry",
            "Probability",
            "Source: Other - Please specify"
        ],
        userAnswers: [
            {
                score: 10,
                post: `Total ways of choosing any 3 out of 5 lengths = 5C3 = 10 ways
    
                    favorable cases which will NOT form Triangle = {2, 3, 5} {2, 3, 6} {2, 4, 6} = 3 cases
                    
                    Favorable Probability = 3/10
                    
                    Answer: Option B"`,
            },
            {
                score: 1,
                post: `Shitty answer shitty asnwser sdfghsdfghsgfdh,`
            },
            {
                score: 20,
                post: `Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 23,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`},
            {
                score: 2.5,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`}
        ]
    },{
        title: " 529 -There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm.",
        question: "There are 5 line segments of lengths 2, 3, 4, 5 and 6 cm. What is the probability that three randomly chosen line segments cannot form a triangle?",
        answers: [
            {
                letter: "A",
                answer: "1/5",
                selected: false
            },
            {
                letter: "B",
                answer: "3/10"
            },
            {
                letter: "C",
                answer: "2/5"
            },
            {
                letter: "D",
                answer: "1/2"
            },
            {
                letter: "E",
                answer: "7/10"
            }
        ],
        correctLetter: "B",
        categories: [
            "Difficulty: 700-Level",
            "Geometry",
            "Probability",
            "Source: Other - Please specify"
        ],
        userAnswers: [
            {
                score: 10,
                post: `Total ways of choosing any 3 out of 5 lengths = 5C3 = 10 ways
    
                    favorable cases which will NOT form Triangle = {2, 3, 5} {2, 3, 6} {2, 4, 6} = 3 cases
                    
                    Favorable Probability = 3/10
                    
                    Answer: Option B"`,
            },
            {
                score: 1,
                post: `Shitty answer shitty asnwser sdfghsdfghsgfdh,`
            },
            {
                score: 20,
                post: `Answer good good good answer good ansdwerAnswer good good good answer good ansdwer Answer good good good answer good ansdwer
                    Answer choice B`
            },
            {
                score: 23,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`},
            {
                score: 2.5,
                post: `Total number of ways of selecting 3 lines from the 5 lines provided is 5C3 = 10
                    The lines chosen will not form a triangle when the sum of any two lines is not greater than the third line.
                    3 selections fall into this category : {2,3,5}, {2,3,6} and {2.4.6}.
                    Required probability = 3/10.
                    Answer choice B`}
        ]
    }

]
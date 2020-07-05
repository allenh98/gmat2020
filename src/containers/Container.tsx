import React, { Component } from 'react';
import { mockApi } from '../api/MongoAPI';
import SideBar from '../bars/SideBar';
import TopBar from '../bars/TopBar';
import './Containers.css';
import AnswerButton from '../answer-form/AnswerButton';
import Question from '../answer-form/Question';
import Solutions from '../answer-form/Solutions';
import '../answer-form/Answers.css';
import '../answer-form/Solutions.css';
import '../answer-form/Buttons.css';
import ViewSolutionsButton from '../answer-form/ViewSolutionsButton';
import MultipleChoiceBox from '../answer-form/MultipleChoiceBox';
// import image from '../../public/grayuser.png';





interface IContainerProps {

}

interface IContainerState {
    submitButtonClicked: boolean;
    viewButtonClicked: boolean;
    questionArr: any[];
    activeQuestion: any;
    currentQuestionIndex: number;
    activeSolution: any;
    
}


export default class Container extends React.Component<IContainerProps, IContainerState>{

    constructor(props: any) {
        super(props);
        this.state = {
            submitButtonClicked: false,
            viewButtonClicked: false,
            questionArr: [],
            activeQuestion: {},
            currentQuestionIndex: 0,
            activeSolution: {}
        };
    }

    componentDidMount = () => {
        mockApi()
            .then((res) => {
                // response is an array of "question" objects, which contain question, correct answer, solutions, etc.
                const defaultObj = res[0];
                defaultObj.answers.forEach((value: any) => {
                    value.selected = false;
                });

                this.setState({submitButtonClicked: false, 
                    questionArr: res,
                    activeQuestion: res[0],
                    currentQuestionIndex: 0
                 });
            })
            .catch((error) => {
                console.log('Error getting questions', error);
            })

    };

    onSidebarClick = (index: number) => {
        if (index < 0 || index >= this.state.questionArr.length){
            return;
        }
        this.state.activeQuestion.answers.forEach((value: any) => {
            value.selected = false;
        });
        if (this.state.currentQuestionIndex !== index){
            this.setState({
                submitButtonClicked: false,
                viewButtonClicked: false,
                activeQuestion: this.state.questionArr[index],                
                currentQuestionIndex: index
            })
        }
    }


    updateSelectedAnswer = (index: number) => {
        if (this.state.submitButtonClicked === false) {
            const newAnswer = this.state.activeQuestion.answers.map((item: any, i: number) => {
                if (i === index) {
                    item.selected = !item.selected;
                    return item;
                } else {
                    item.selected = false;
                    return item;    
                }
            })
            const activeQuestionToSet = Object.assign({}, this.state.activeQuestion);
            activeQuestionToSet.answers = newAnswer;
            this.setState({ activeQuestion: activeQuestionToSet });
        }
    }


    onSubmitButtonClicked = () => {        
        // show the first answer by default when submit is clicked, but do not hide it upon further submit clicks
        if (this.state.viewButtonClicked === false) {
            this.toggleViewSolution();
        }


        this.setState({ 
            submitButtonClicked: true 
        });

        
    }

    shouldDisableSubmit = () => {
        return this.state.activeQuestion.answers ? this.state.activeQuestion.answers.every((current : any) =>  current.selected === false || current.selected === undefined) : false;        
    }

    onPreviousButtonClick = () => {
        this.onSidebarClick(this.state.currentQuestionIndex - 1)
    }

    onForwardButtonClick = () => {
        this.onSidebarClick(this.state.currentQuestionIndex + 1)
    }

    toggleViewSolution = () => {
        if (this.state.viewButtonClicked === false){
            this.setState({
                viewButtonClicked: true,
                activeSolution: this.state.activeQuestion.userAnswers[0]            
            })
        } else {
            this.setState({
                viewButtonClicked: false,
                activeSolution: {}                  
            })
        }
    }



    render() {


        return (
            <div className="fullscreen">

                <TopBar/>
                


                {/* everything under the topBar */}
                <div className="mainContainer">
                    
                    {/* Forward and back buttons */}
                    <a className="sidebutton previous" onClick={this.onPreviousButtonClick}>&#8249;</a>
                    <a className="sidebutton next" onClick={this.onForwardButtonClick}>&#8250;</a>


                    <SideBar questionArr={this.state.questionArr} onSidebarClick={this.onSidebarClick} activeQuestion={this.state.activeQuestion} />
                    
                    {/* main square question/answer/solution centered column */}
                    <div id="Training" className="centered-column">
                            
                        
                        <Question question={this.state.activeQuestion.question} idx={this.state.currentQuestionIndex} total={this.state.questionArr.length}/>
                        <MultipleChoiceBox answers={this.state.activeQuestion.answers ? this.state.activeQuestion.answers : []}
                            correctLetter={this.state.activeQuestion.correctLetter} updateSelectedAnswer={this.updateSelectedAnswer}
                            submitButtonClicked={this.state.submitButtonClicked}
                        />
                        <form className="buttonsContainerLeft">
                            <AnswerButton onSubmitButtonClicked={this.onSubmitButtonClicked} doDisable={this.shouldDisableSubmit()} />
                            <ViewSolutionsButton  toggleViewSolution={this.toggleViewSolution} viewButtonClicked={this.state.viewButtonClicked}/>
                        </form>    
                        
                        {
                            this.state.viewButtonClicked && <Solutions solution={this.state.activeSolution} solutions={this.state.activeQuestion.userAnswers}/> 
                        }        
                      
                    </div>

                </div>
            </div>
        )
    }
}


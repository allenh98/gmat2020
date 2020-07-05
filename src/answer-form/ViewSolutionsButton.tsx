import React from 'react'

export default function ViewSolutionsButton(props: any) {
    console.log(props)
    return (
            props.viewButtonClicked ? 
            <button className="hide-solutions-button" type='button' onClick={ () => props.toggleViewSolution() }>Hide Solutions</button> :
            <button className="view-solutions-button" type='button' onClick={ () => props.toggleViewSolution() }>View Solutions</button>    
    )
}


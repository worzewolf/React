import React from 'react'


// return new component which add new class to root component
const withClass = (Component, className) => {
    return (props) => {
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}

export default withClass
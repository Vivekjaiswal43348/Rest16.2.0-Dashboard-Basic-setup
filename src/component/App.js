import * as React from 'react';

class FUDApp extends React.Component{
    render (){
        return (
            <div>
                <h2 style={{color: 'green'}}>Success!</h2>
                <h2 style={{color: 'red'}}>Failed!</h2>
                <h2 style={{color: 'yellow'}}>warning!!</h2>
            </div>
        );
    }
}
export default FUDApp;
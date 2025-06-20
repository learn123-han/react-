import React from 'react';
const UpdatedComp = OrigComp =>{
    class NewComp extends React.Component{
        render(){
            return <OrigComp name = "The User" />;
        }
    }
    return NewComp;
};
export default UpdatedComp;
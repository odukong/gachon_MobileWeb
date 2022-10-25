import React from "react";

function Dialog(props){
    const {id,title,className,color,children,check,Bcontexts}=props;

    return (
        <div id={id} className={className} 
            style={{borderTop:`10px solid ${color}`}}>
            <h3>{title}</h3>
            {children}
            {check===true ? <button>{Bcontexts}</button>:null}        
        </div>
    );
}

export default Dialog;
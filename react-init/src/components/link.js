
function Link (props){

    return(
    <><h1>ESTO ES UN LINK COMPONENT</h1><p>{props.enlace}</p>
    
    {props.children}
    </> 
    
    )
}

export default Link;
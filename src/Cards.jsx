
function Card(props) {
    return(
        <>
        <h1>{props.title}</h1>
        {props.children}
        </>
    )
}

function Skill() {
    return(
        
        <Card title="My Skills">
            <p>Javascript</p>
            <p>Python</p>
            <p>React</p>
        </Card>
        
    )
}

export default Skill
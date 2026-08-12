function ProfileCard(props) {
    return (
        <>
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <h4>{props.age}</h4>
        {props.children}
        </>
    )

}


function Profile(){
    const user={
        name:"Hitesh",
        role:"Quant Developer",
        age:29
    }
    return(

        <ProfileCard name={user.name} role={user.role} age={user.age}>
         <p>Javascript</p>
         <p>React</p>
         <p>Python</p>
        </ProfileCard>
        

    )
}
export default Profile
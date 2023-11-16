export const userProfileTile = (user: {id: number, name: string}) => {
    function showProfile() {
        alert("Hello " + user.name);
    }
    return (
       <div style={{margin : 10 + "px", border : "1px solid red"}}>
            <h1 onClick={showProfile}>{user.name}</h1>
            <p>Id : {user.id}</p>
       </div>
    )
}

export const userProfileTileGrid = (user: {id: number, name: string}) => {
    function showProfile() {
        alert("Hello " + user.name);
    }
    return (
       <div style={{margin : 10 + "px", border : "1px solid red", "display" : "inline-block"}}>
            <h1 onClick={showProfile}>{user.name}</h1>
            <p>Id : {user.id}</p>
       </div>
    )

}



const UserList = (UserProfileTileComponent: any) => (() => {

    let users = [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
    ]

    return (
        <>
            {users.map((user) => (<UserProfileTileComponent {...user}/>))}
        </>
    )

})

export default UserList(userProfileTileGrid);
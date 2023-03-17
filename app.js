console.log("Message to developer")
function AlertMsg()
{
    const Hi=()=>{alert("Message from Javascript Alert")}
 return<div><button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<AlertMsg/>,document.getElementById('mydiv'))
// Code Keypad Component Here

function Keypad (){
    function seeWhatHappens(event){
        console.log(event.target.value);
    }


    return (
        <div>
            <input type="password" onChange={enterPass}></input>
        </div>
    )
}

function enterPass()
{
    console.log("Entering password...")
}

export default Keypad;
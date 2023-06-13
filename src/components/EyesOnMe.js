// Code EyesOnMe Component Here

function focus(){
    console.log('Good!')
}

function blur(){
    console.log("Hey! Eyes on me!")
}
function EyesOnMe(){
    return (<div>
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    </div>)
}

export default EyesOnMe;

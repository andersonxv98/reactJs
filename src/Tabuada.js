function Tabuada(n){
    n = 1;
    const element = (
        creatH3(n)
    );
    return element
};

function creatH3(n){
    let arr = [];
    arr.push(<h1>Tabuada do {n}!</h1>);
    for (let index = 1; index < 11; index++) {
        const element = <h3>{index} X {n} = {index *n}</h3>;
        arr.push(element);
    }
    return arr;
};
export default Tabuada;
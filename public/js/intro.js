//Script credits to ottomated: https://ottomated.net/

let header = document.querySelector('#intro');
let anim = [
    { t: "", ms: 400 },
    { t: "|", ms: 200 },
    { t: "", ms: 200 },
    { t: "|", ms: 200 },
    { t: "", ms: 100 },
    { t: "C|", ms: 100 },
    { t: "CO|", ms: 100 },
    { t: "CON|", ms: 100 },
    { t: "CONN|", ms: 100 },
    { t: "CONNO|", ms: 100 },
    { t: "CONNOR|", ms: 100 },
    { t: "CONNOR |", ms: 100 },
    { t: "CONNOR M|", ms: 100 },
    { t: "CONNOR MC|", ms: 100 },
    { t: "CONNOR MCL|", ms: 100 },
    { t: "CONNOR MCLO|", ms: 100 },
    { t: "CONNOR MCLOO|", ms: 100 },
    { t: "CONNOR MCLOON|", ms: 200 },
    { t: "CONNOR MCLOON ", ms: 200 },
    { t: "CONNOR MCLOON|", ms: 200 },
    { t: "CONNOR MCLOON ", ms: 200 },
    { t: "CONNOR MCLOON|", ms: 200 },
    { t: "CONNOR MCLOON", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        window.localStorage.stepDenominator = 1;
    }
}
update();
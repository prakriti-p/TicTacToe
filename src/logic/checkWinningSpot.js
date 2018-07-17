export default function checkWinningSpot(_stateObject, player) {   
    var spot = 0;
    if(_stateObject[4].value === _stateObject[7].value && _stateObject[7].value === player && _stateObject[1].value === "") spot = 1;
    if(_stateObject[5].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[1].value === "") spot = 1;
    if(_stateObject[2].value === _stateObject[3].value && _stateObject[3].value === player && _stateObject[1].value === "") spot = 1;
    if(_stateObject[1].value === _stateObject[3].value && _stateObject[3].value === player && _stateObject[2].value === "") spot = 2;
    if(_stateObject[5].value === _stateObject[8].value && _stateObject[8].value === player && _stateObject[2].value === "") spot = 2;
    if(_stateObject[1].value === _stateObject[2].value && _stateObject[2].value === player && _stateObject[3].value === "") spot = 3;
    if(_stateObject[5].value === _stateObject[7].value && _stateObject[7].value === player && _stateObject[3].value === "") spot = 3;
    if(_stateObject[6].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[3].value === "") spot = 3;
    if(_stateObject[1].value === _stateObject[7].value && _stateObject[7].value === player && _stateObject[4].value === "") spot = 4;
    if(_stateObject[5].value === _stateObject[6].value && _stateObject[6].value === player && _stateObject[4].value === "") spot = 4;
    if(_stateObject[4].value === _stateObject[6].value && _stateObject[6].value === player && _stateObject[5].value === "") spot = 5;
    if(_stateObject[2].value === _stateObject[8].value && _stateObject[8].value === player && _stateObject[5].value === "") spot = 5;
    if(_stateObject[3].value === _stateObject[7].value && _stateObject[7].value === player && _stateObject[5].value === "") spot = 5;
    if(_stateObject[1].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[5].value === "") spot = 5;
    if(_stateObject[3].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[6].value === "") spot = 6;
    if(_stateObject[4].value === _stateObject[5].value && _stateObject[5].value === player && _stateObject[6].value === "") spot = 6;
    if(_stateObject[1].value === _stateObject[4].value && _stateObject[4].value === player && _stateObject[7].value === "") spot = 7;
    if(_stateObject[3].value === _stateObject[5].value && _stateObject[5].value === player && _stateObject[7].value === "") spot = 7;
    if(_stateObject[8].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[7].value === "") spot = 7;
    if(_stateObject[2].value === _stateObject[5].value && _stateObject[5].value === player && _stateObject[8].value === "") spot = 8;
    if(_stateObject[7].value === _stateObject[9].value && _stateObject[9].value === player && _stateObject[8].value === "") spot = 8;
    if(_stateObject[1].value === _stateObject[5].value && _stateObject[5].value === player && _stateObject[9].value === "") spot = 9;
    if(_stateObject[3].value === _stateObject[6].value && _stateObject[6].value === player && _stateObject[9].value === "") spot = 9;
    if(_stateObject[7].value === _stateObject[8].value && _stateObject[8].value === player && _stateObject[9].value === "") spot = 9;
    return spot;
}



 

function saturdayFun(string = "roller-skate") {
    console.log(`This Saturday, I want to ${string}!`);
};

saturdayFun()

const mondayWork = function(work = "go to the office") {
    console.log(`This Monday, I want to ${work}`);
};
mondayWork('bathe my dog!');


function wrapAdjective(quo = '*') {
    return function(status = "special") {
        return `You are ${quo} ${status} ${quo}!`
    }
}
wrapAdjective('||')('funny');
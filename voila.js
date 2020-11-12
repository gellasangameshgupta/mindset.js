function randomGenerator(num) {
    return Math.floor(Math.random() * num)
}

const mindSet = {
    playerName: ['Dhoni', 'Sachin', 'Gilchrist', 'Watson'],
    yourMindSet: ['Cool', 'Tough', 'Flexible', 'Never Give Up'],
    advice: ['Do not lose your temper', 'Do not think that you cannot do it', 'You are more reliable than you think']

}

let personalMindset = []

for (let set in mindSet) {
    let idx = randomGenerator(mindSet[set].length)

    switch(set) {
        case 'playerName':
            personalMindset.push(`Your favorite player is "${mindSet[set][idx]}".`)
            break
        case 'yourMindset':
            personalMindset.push(`Your mindset is "${mindSet[set][idx]}".`)
            break
        case 'advice':
            personalMindset.push(`I advice you "${mindSet[set][idx]}".`)
            break
        default:
            personalMindset.push('There is no other info, sorry :(')
            break
    }
}

function mindSet_1(mind) {
    const pushed = personalMindset.join('\n')
    console.log(pushed)
}

mindSet_1(mindSet)
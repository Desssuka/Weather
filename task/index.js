const solution = (str) => {
    let counter = 0
    const arr = str.split('').reduce((acc, v) => {
        if (v !== acc && v !== 'B'){
            acc=v
            counter+=1
        }
        if (v === 'B'){
            counter+=1
        }
        return acc
    },'R')
    return counter
}
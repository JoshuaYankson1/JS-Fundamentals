const numTimes = Number(process.argv[2]);

if (isNaN(numTimes)){
    console.log('Missing number of occurrences');
} else{
    const repeatingTimes = 'C is fun'.repeat(1);
    for (let loop = 0; loop < numTimes; loop++){
        console.log(repeatingTimes);
    }
    
}
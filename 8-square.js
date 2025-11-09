const size = Number(process.argv[2]);

if (isNaN(size))
{
    console.log('Missing size');
} else {
    repeating = 'X'.repeat(size)
    for (let loop = 0; loop < size; loop++){
        console.log(repeating);
    }
};
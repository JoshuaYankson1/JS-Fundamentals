const firstArgument = Number(process.argv[2]);

if (isNaN(firstArgument)){
    console.log('Not a number');
} else {
    console.log(`My number: ${Math.floor(firstArgument)}`);
}
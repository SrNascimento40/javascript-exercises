const umADez = []
for (let i = 0; i <= 10; i++) {
    umADez.push(i)
}

console.log(umADez);

for (let n = 1; n < 10; n++) {
    console.log(`\ntabuada do ${n}\n`);
    for (let y = 0; y < umADez.length; y++) {
        console.log(`${n} x ${umADez[y]} = ${n*umADez[y]}`);
    }
}
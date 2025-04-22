 for(let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i, new Date().getSeconds()), 1000);
 }
 console.log('\noutput with with no Promise\n')
 setTimeout(() => console.log('\noutput with using Promise\n'), 1000);
 (async () => {
    for (let i = 0; i < 4; i++) {
        await sleep(1000);
        console.log(i, new Date().getSeconds());
    }
    })();
    async function sleep(timing) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), timing);
        })
    }






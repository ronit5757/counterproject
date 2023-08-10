const counters = document.querySelectorAll('.counter');

counters.forEach((counter) =>{

    counter.innerHTML=0;

    const updatecounter = () =>{
        const targetcount = +counter.getAttribute('data-target');
        console.log(targetcount);

        const startingcount = Number(counter.innerHTML);
        
        const incr = targetcount/200;
        if(startingcount<targetcount)
        {
            counter.innerHTML = `${startingcount +incr}`;
            setTimeout(updatecounter, 5);
        }
        else{
            counter.innerHTML =targetcount;
        }
    }

    updatecounter();

})
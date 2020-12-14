function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start() = function(){

        if(running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();

    };

    this.stop() = function(){
        if(!running)
            throw new Error('Stopwatch has stopped.');

        running = false;
        endTime = new Date();  

        //calculate seconds in milliseconds and convert to seconds 
        //then add this value to duration variable
        const seconds = (endTime.getTime() - startTime.getTime() / 1000);
        duration += seconds;
    };

    this.reset() = function(){
        //set variables to their initial values
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;        
    };

}
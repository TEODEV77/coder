class Counter {

    static globalCount = 0;

    constructor(responsible){
        this.responsible = responsible;
        this.count = 0;
    }
    getIndividualCount(){
        return this.count;
    }
    
    increment(){
        this.count++;
        Counter.globalCount++;
    }

    getResponsible(){
        return this.responsible;
    }

    getGlobalCount(){
        return Counter.globalCount;
    }
}

const counter1 = new Counter("Test 1");
counter1.increment();
counter1.increment();

const counter2 = new Counter("Test 2");
counter2.increment();
counter2.increment();
counter2.increment();

const counter3 = new Counter("Test 3");
counter3.increment();
counter3.increment();

console.log(counter1.getGlobalCount())




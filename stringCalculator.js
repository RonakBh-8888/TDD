function add(numbers) {
    if(numbers){
        let numarr =  numbers.split(",");
        let totalVal =  numarr.reduce((total, num)=> total + parseInt(num),0);
        return totalVal;
    }
    return 0;
}

module.exports = add;
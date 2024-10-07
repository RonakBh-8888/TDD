function add(numbers) {
    if(numbers){
        let numarr =  numbers.split(",");
        let totalVal =  numarr.reduce((total, num)=> {
            if(!isNaN(num)){
               return total + Number(num);
            }

            return total;
            
        },0);
        return totalVal;
    }
    return 0;
}

module.exports = add;
export const maxProfit = function (prices) {
    let maxProfit = 0;
    let minValue = prices[0];
    for(let i = 0; i < prices.length; i++){
       if(minValue > prices[i]){
            minValue = prices[i];
        } else {
            maxProfit = Math.max(maxProfit,prices[i] - minValue)
        }
    }
    return maxProfit
};
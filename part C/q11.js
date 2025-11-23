function createWallet()
{
    let balence = 0 ;
    return{
        addMoney:function(amount){
            balence += amount;
        
        },
        checkBalence: function()
        {
            return balence;
        }
    };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet.checkBalence());

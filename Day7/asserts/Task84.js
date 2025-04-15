function Account(accno,balance)
{
    this.accno=accno;
    this.balance=balance;
    this.deposit= function(credit){
        this.balance=this.balance+credit
        return `Your new balance is ${this.balance}`
    }
    this.withdraw= function(debit)
    {
        this.balance=this.balance-debit
         return `Your new balance is ${this.balance}`
    }
}

let accno1=new Account("34567",45000)
console.log(accno1);


console.log(accno1.deposit(15000));
console.log(accno1.withdraw(10000));


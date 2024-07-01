// First created the Customer class:
class customer {
    fisrtName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNo: number;
    

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNo: number){
        this.fisrtName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNo = mobileNo;
    }

    customerInfo(){
        let print = console.log(`\nName: ${this.fisrtName}${this.lastName} \nGender: ${this.gender} \nAge: ${this.age} \nMobile Number: ${this.mobileNo}`);

        return print;
    };

};




class bankAccount implements iBankAccount  {
    bankBalence: number = 100;
    
    
    bankAccount(){
        this.bankBalence = 100;
    }
    
    debit(amount: number): string{
        let statment: string = "Sorry, You have insufficient balence!!";
        if(amount > 0){
            statment = "The amount you entered is wrong!!";
            if(this.bankBalence > amount){
                let newBalence: number = this.bankBalence - amount;
                statment = "Transaction successful!! new account balence is: " + newBalence;
            }else{
                statment = "You don't have enough money to do this transaction!!"
            }
        }
        
        return statment;
    };
    
    credit(amount: number): string{
        let statement: string = "Transaction Failed!!";
        if(amount > 0){
            this.bankBalence = this.bankBalence + amount;
            if(amount == 100){
                this.bankBalence = this.bankBalence - 1;
            }else{
                statement = "Your account has been credited successfully!!";
            }
        };
        return statement;
    };
    
}


interface iBankAccount {
    debit(amount: number): string;
    credit(amount: number): string;
}


// Check the Appilication:
let custumer1 = new customer("Tahir", "Fayyaz", "Gender", 21, 3182997727);
custumer1.customerInfo();

let account1 =new bankAccount();
console.log(account1.credit(501));
console.log(account1.debit(20));
console.log(account1.credit(10));
console.log(account1.debit(81));

// New account
let customer2 = new customer("Babar", "Azam", "Male", 35, 316475821);
customer2.customerInfo();

let account2 = new bankAccount();
console.log(account2.credit(130));
console.log(account2.debit(30));
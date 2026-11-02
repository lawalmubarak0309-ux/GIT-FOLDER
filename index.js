class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(70000);

console.log(account.getBalance());
let name = "bola"
console.log(name)
var customer = /** @class */ (function () {
    function customer(Name, Address, Mobile) {
        this.Name = Name;
        this.Address = Address;
        this.Mobile = Mobile;
    }
    customer.prototype.display = function () {
        console.log("Name:" + this.Name);
        console.log("Address:" + this.Address);
        console.log("Mobile:" + this.Mobile);
    };
    return customer;
}());
var C = new customer("Ravi", "Pune", "9999888666");
console.log(C.display());

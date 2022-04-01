class customer
{
  Name : String;
  Address : String;
  Mobile : String;

  constructor(Name:String,Address:String,Mobile:String)
          {
             this.Name=Name;
             this.Address=Address;
              this.Mobile=Mobile;
          }

          display()
          {
            console.log("Name:"+this.Name);
            console.log("Address:"+this.Address);
           console.log("Mobile:"+this.Mobile);
          }	
      } 
       
let C=new customer("Ravi","Pune","9999888666");
console.log(C.display());

  


class HotelRoom 
{   
   private HotelName:string;
   private NumOfSqFeet:number;
   private hasTv:boolean;
   protected hasWifi:boolean;

   constructor(HotelName:string,NumOfSqFeet:number,hasTv:boolean,hasWifi:boolean) 
   {   
      this.HotelName = HotelName;
      this.NumOfSqFeet = NumOfSqFeet;
      this.hasTv = hasTv;
      this.hasWifi = hasWifi;
   }   

   public getHotelName()
   {
       return this.HotelName;
   }

   public getNumOfSqFeet()
   {
       return this.NumOfSqFeet;
   }

   public gethasTv()
   {
       return this.hasTv;
   }

   public gethasWifi()
   {
       return this.hasWifi;
   }  

public getRatePerSqFeet():number
 {
    return 0;
}
 
calculateTariff()
{
    return (this.getRatePerSqFeet() * this.getNumOfSqFeet());
}
}

class DeluxeRoom extends HotelRoom
{
    private RatePerSqFeet: number;
    constructor(HotelName:string,NumOfSqFeet:number,hasTv:boolean,hasWifi:boolean,RatePerSqFeet:number ) 
    {
        super(HotelName, NumOfSqFeet,hasTv,hasWifi);
        this.RatePerSqFeet=10;
        if(this.hasWifi)
        {
            this.RatePerSqFeet= this.RatePerSqFeet+2;
        }
        else
        {
            this.RatePerSqFeet= this.RatePerSqFeet;
        }
    }
    public getRatePerSqFeet(): number 
    {
    return this.RatePerSqFeet;
    }
}

class DeluxeSeaViewRoom extends HotelRoom
{
    private RatePerSqFeet: number;
    constructor(HotelName:string,NumOfSqFeet:number,hasTv:boolean,hasWifi:boolean) 
    {
        super(HotelName,NumOfSqFeet,hasTv,hasWifi);
    }
}

class SuiteRoom extends HotelRoom   
{
    protected RatePerSqFeet: number;
    constructor(HotelName:string,NumOfSqFeet:number,hasTv:boolean,hasWifi:boolean,RatePerSqFeet:number) 
    {
        super(HotelName,NumOfSqFeet,hasTv,hasWifi);     
    }
}

var d1 = new DeluxeRoom("Taj",3200,true,true,10);
console.log("Room Tariff per day is:" +d1.calculateTariff());
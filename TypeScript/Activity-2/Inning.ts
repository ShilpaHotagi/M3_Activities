class Innings
{
	TeamName:String;
	Inning:String;
	Runs:number;

        constructor(TeamName:String,Inning:String,Runs:number)
          {
             this.TeamName=TeamName;
             this.Inning=Inning;
              this.Runs=Runs;
          }

    DisplayInningsDetails()
       {
           console.log("Enter The TeamName:"+this.TeamName);
           console.log("Enter Session:"+this.Inning);
          console.log("Enter Runs:"+this.Runs);
       }	

    display()
     {
       if(this.Inning=="First")
        {
             console.log("Name: "+this.TeamName);
            console.log("Scored: "+this.Runs);
            console.log("Need "+(this.Runs+1)+" to win ");
        }
      else 
       {
           console.log("Name: "+this.TeamName);
           console.log("Scored: "+this.Runs);
           console.log("Match Ended.");
       }
   }
}
let Inn=new Innings("Australia","First",200);
console.log(Inn.DisplayInningsDetails());
console.log(Inn.display());

let Inn1=new Innings("Australia","Second",200);
console.log(Inn1.DisplayInningsDetails());
console.log(Inn1.display());
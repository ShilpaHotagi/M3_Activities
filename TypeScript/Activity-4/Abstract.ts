abstract class Match
{

	private currentScore:number;
	private currentOver:number;
	private target:number; 
	
 constructor(currentScore:number,currentOver:number,target:number) 
    {
        this.currentScore = currentScore;
        this.currentOver = currentOver;
        this.target = target;
		
		// TODO Auto-generated constructor stub
	}

public getCurrentScore():number 
    {
	  return this.currentScore;
    }

public getCurrentOver():number 
    {
	  return this.currentOver;
    }

public getTarget():number 
    {
	  return this.target;
    }

 abstract calculateRunRate():number;
 abstract calculateBalls():number;

 abstract display():void;

}


 class ODIMatch extends Match 
{

	


	override calculateRunRate():number 
    {
		// TODO Auto-generated method stub
		return ((this.getTarget()-this.getCurrentScore())/(50-this.getCurrentOver()));
		
	}

	override calculateBalls():number 
    {
		// TODO Auto-generated method stub
		
		return 6*(50-this.getCurrentOver());
	}
	
	public display():void
	{
		console.log("Need "+(this.getTarget()-this.getCurrentScore())+" runs in "+<number>this.calculateBalls() + " balls");
		console.log("Required Runrate: "+this.calculateRunRate());
		
	}
    
}

 class T20Match extends Match
{

	public T20Match()
    {
		// TODO Auto-generated constructor stub
	}

	override calculateRunRate():number 
    {
		return ((this.getTarget()-this.getCurrentScore())/(20-this.getCurrentOver()));
	}

	override calculateBalls():number
    {
		// TODO Auto-generated method stub
		return 6*(20-this.getCurrentOver());
	}
	public display():void 
	{
		console.log("Need "+(this.getTarget()-this.getCurrentScore())+" runs in "+<number>this.calculateBalls() + " balls");
		console.log("Required Runrate: "+this.calculateRunRate());
		
	}

}

 class TestMatch extends Match
{

	public TestMatch() {
		
		// TODO Auto-generated constructor stub
	}

	override calculateRunRate():number
    {
		return ((this.getTarget()-this.getCurrentScore())/(90-this.getCurrentOver()));
	}
	override calculateBalls():number
    {
		// TODO Auto-generated method stub
		return 6*(90-this.getCurrentOver());
	}
	public display():void
	{
		console.log("Need "+(this.getTarget()-this.getCurrentScore())+" runs in "+<number>this.calculateBalls() + " balls");
		console.log("Required Runrate: "+this.calculateRunRate());
		
	}
}

console.log("Enter The Match Format");
console.log("1.ODI");
console.log("2.T20Match");
console.log("3.TestMatch");

      // TODO Auto-generated method stub
	
		
		console.log("Enter the Current Score");
		
		let cScore:number;		
		
		console.log("Enter the Current Over");
		
		let cOver:number;

		console.log("Enter the Target Score");
		
		let tScore:number;
		
		console.log("Requirements:");
		
		switch(c)
		{
		case 1: ODIMatch o1 =new ODIMatch();
				o1.setCurrentScore(cScore);
				o1.setCurrentOver(cOver);
				o1.setTarget(tScore);
				o1.display();
			break;
			
		case 2: T20Match tt1 = new T20Match();
				tt1.setCurrentScore(cScore);
				tt1.setCurrentOver(cOver);
				tt1.setTarget(tScore);
				tt1.display();
			break;
		
		case 3: TestMatch t1 = new TestMatch();
				t1.setCurrentScore(cScore);
				t1.setCurrentOver(cOver);
				t1.setTarget(tScore);
				t1.display();
			break;
			
		default: System.exit(0);
		}
		
		scanner.close();

}
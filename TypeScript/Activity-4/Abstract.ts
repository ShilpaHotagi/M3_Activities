export abstract class Match {
    
    private currentScore:number;
    private currentOver: number;
    private target:number; 
  
    constructor(currentScore: number,currentOver: number, target: number) {
      this.currentScore = currentScore;
      this.currentOver = currentOver;
      this.target = target;
    }

public getCurrentScore() 
{
	return this.currentScore;
}

public getCurrentOver() 
{
	return this.currentOver;
}

public getTarget() 
{
	return this.target;
}

public getcalculateRunRate():number
{
    return 0;
}
 
public getcalculateBalls():number
{
    return 0;
}
}
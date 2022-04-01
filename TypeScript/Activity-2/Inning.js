var Innings = /** @class */ (function () {
    function Innings(TeamName, Inning, Runs) {
        this.TeamName = TeamName;
        this.Inning = Inning;
        this.Runs = Runs;
    }
    Innings.prototype.DisplayInningsDetails = function () {
        console.log("Enter The TeamName:" + this.TeamName);
        console.log("Enter Session:" + this.Inning);
        console.log("Enter Runs:" + this.Runs);
    };
    Innings.prototype.display = function () {
        if (this.Inning == "First") {
            console.log("Name: " + this.TeamName);
            console.log("Scored: " + this.Runs);
            console.log("Need " + (this.Runs + 1) + " to win ");
        }
        else {
            console.log("Name: " + this.TeamName);
            console.log("Scored: " + this.Runs);
            console.log("Match Ended.");
        }
    };
    return Innings;
}());
var Inn = new Innings("Australia", "First", 200);
console.log(Inn.DisplayInningsDetails());
console.log(Inn.display());
var Inn1 = new Innings("Australia", "Second", 200);
console.log(Inn1.DisplayInningsDetails());
console.log(Inn1.display());

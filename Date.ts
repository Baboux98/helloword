export class MaDate {
    year : number;
    month : number;
    day : number;
  
    constructor (year:number, month:number, day:number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    getyear() : number {
        return this.year;
    }
    setyear(year : number){
       this.year = year ; 
    }
    getmonth() : number {
        return this.month;
    }
    setmonth(month: number ){
       this.month = month ; 
    }
    getday() : number{
        return this.day;
    }
    setday(day : number){
       this.day = day ; 
    }
    tostring(){
        return  this.year + "-"+this.month+"-"+this.day;
    }
    create(year:number, month:number, day:number){ 
        this.year = year;
        this.month = month;
        this.day = day;
        return  this.year + "-"+this.month+"-"+this.day;
    }
    setDate(year:number, month:number, day:number){ 
        this.year = year;
        this.month = month;
        this.day = day;
        return this.year + "-"+this.month+"-"+this.day;
    }
    yesterday(){
        this.day = this.day - 1;
        return this.year + "-"+this.month+"-"+this.day;
    }
    tomorrow(){
        this.day = this.day +1;
        return this.year + "-"+this.month+"-"+(this.day+1);
    }
    addDay(nbrDay? : number){
        if (!nbrDay){nbrDay=1;}
        return this.year + "-"+this.month+"-"+(this.day+nbrDay);
    }
    subDay(nbrDay? : number){
        if (!nbrDay){nbrDay=1;}
        return this.year + "-"+this.month+"-"+(this.day-nbrDay);
    }
    addmonth(nbrmonth? : number){
        if (!nbrmonth ){nbrmonth=1;}
        return this.year + "-" + (this.month+nbrmonth) + "-"+this.day;
    }
    submonth(nbrmonth? : number){
        if (!nbrmonth){nbrmonth = 1;}
        return this.year + "-" + (this.month-nbrmonth) + "-"+this.day;
    }
    addyear(nbryear? : number){
        if (!nbryear){nbryear=1;}
        return (this.year+nbryear) + "-" + this.month + "-"+this.day;
    }
    subyear(nbryear? : number){
        if (!nbryear){nbryear=1;}
        return (this.year-nbryear) + "-" + this.month + "-"+this.day;
    }
    
}
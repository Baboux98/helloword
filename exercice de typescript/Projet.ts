import { task } from "./task"
export class Projet {
    tasks : task [] = [];

    addTask(task: task){
       this.tasks.push(task);

    }
    getTask(position : number) : task{
        return this.tasks[position];
    }
    deleteTask(position : number){
        this.tasks.splice(position,1)
        
    }
    all(): void {
        for(var i = 0; i < this.tasks.length; i++)
            { 
                console.log(this.tasks[i]); 
            }

    }
    complete(): void{
        for(var i = 0; i < this.tasks.length; i++)
            { 
               let stock = new task;
               stock= this.tasks[i];
               if (stock.getchecked){
                    console.log(this.tasks[i]); 
               }
                
            }
    }
    uncomplete() : void {
        for(var i = 0; i < this.tasks.length; i++)
        { 
           let stock = new task;
           stock= this.tasks[i];
           if (!stock.getchecked){
                console.log(this.tasks[i]); 
           }
            
        }
    }

}
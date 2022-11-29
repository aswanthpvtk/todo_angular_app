import { Component } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  uid=""
  id=""
  title=""
  comp=""


  readValues=()=>
  {
    let data:any={"uid":this.uid,"id":this.id,"title":this.title,"comp":this.comp}
    console.log(data)

    
  }

}

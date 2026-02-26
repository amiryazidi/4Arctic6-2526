import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-suggestion',
  templateUrl: './detail-suggestion.component.html',
  styleUrl: './detail-suggestion.component.css'
})
export class DetailSuggestionComponent {

  id!:number

  constructor(private act: ActivatedRoute){}


  ngOnInit(){
    this.id=this.act.snapshot.params['id']
    console.log(this.id)
  }

}

import { Component, OnInit } from '@angular/core';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tags=[];
  constructor(private getData: TagsService ) { }

  ngOnInit() {
    this.getAllTags();
  }
  getAllTags()
  {
    this.getData.getAllTags().subscribe((data:any)=>{
      this.tags=data.tags
    });
    
  }

}

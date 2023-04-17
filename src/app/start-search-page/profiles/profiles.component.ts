import { Component } from '@angular/core';
import { DeveloperList } from 'src/app/model/dev-list';
import { Skill } from 'src/app/model/skills';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  developers:DeveloperList[] = [];
  skills:Skill[] = [];
  
  p: number = 1;
  itemsPerPage:number=5;
  totalProduct:any;

  constructor(private service: ServiceService){}

  ngOnInit(){
    this.getDevs();
  }

  getDevs(){
    this.service.getDevelopers().subscribe({
      next:(developers: DeveloperList[]) => {
        this.developers = developers;
        this.totalProduct=developers.length;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })

    this.getSkills();
  }

  getSkills(){
    this.service.getSkills().subscribe({
      next:(skills: Skill[]) => {
        this.skills = skills;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }


}

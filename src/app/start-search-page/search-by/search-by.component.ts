import { Component } from '@angular/core';
import { DeveloperList } from 'src/app/model/dev-list';
import { Skill } from 'src/app/model/skills';
import { Specialisation } from 'src/app/model/specialisation';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss']
})
export class SearchByComponent {

  developers:DeveloperList[] = [];
  skills:Skill[] = [];
  specialisations:Specialisation[] = [];

  isOpened:boolean=false;

  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  constructor(private service: ServiceService){}

  params = {
    sort:'',
    filter:{
      category:''
    }
  }

  ngOnInit():void{
    this.getDevs();
  }


  getDevs(){
    this.service.getDevelopers(this.params).subscribe({
      next:(developers: DeveloperList[]) => {
        this.developers = developers;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })

    this.getSkills();
    this.getSpec();
  }


  getSpec(){
    this.service.getSpecialisations().subscribe({
      next:(specialisations: Specialisation[]) => {
        this.specialisations = specialisations;
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
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

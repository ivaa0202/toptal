import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloperList } from 'src/app/model/dev-list';
import { Skill } from 'src/app/model/skills';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-one-profile',
  templateUrl: './one-profile.component.html',
  styleUrls: ['./one-profile.component.scss']
})

export class OneProfileComponent {

  developers: DeveloperList[] = [];
  skills: Skill[] = [];
  developerIndex: number = 0;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.getDev();
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) throw new Error('GDE?!')
    this.developerIndex = parseInt(id, 10)
  }


  getDev() {
    this.service.getDevelopers().subscribe({
      next: (developers: DeveloperList[]) => {
        this.developers = developers;
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.getSkill();
  }

  getSkill() {
    this.service.getSkills().subscribe({
      next: (skill: Skill[]) => {
        this.skills = skill;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


}



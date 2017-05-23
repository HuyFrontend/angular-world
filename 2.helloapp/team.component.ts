import {Component} from 'angular2/core';
import {TeamService} from './team.service'

@Component({
  selector: 'teams',
  template: `
    <h2>Team List</h2>
    {{ title }}
    <ul>
      <li *ngFor="#team of teamArray">
      {{ team }}
      </li>
    </ul>
  `,
  providers: [TeamService]
})

export class TeamsComponent {
  title = 'Premier Leage Teams';
  teamArray;
  constructor (teamService: TeamService) {
    this.teamArray = teamService.getAllTeams();
  }
}

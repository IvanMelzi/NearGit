import { Issue } from './../../components/models/issue.model';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gitService: ConfigService) { }

  public issues: Array<Issue> = [];
  public termToSearch: string = "";
  public showSkeleton: boolean = true;

  ngOnInit(): void {
    this.gitService.getGit("/repos/facebook/react/issues").then((data: Array<Issue>) => {
      this.issues = data;
      this.showSkeleton = false;
    }).catch(_ => {
      this.showSkeleton = false;
    });
  }

  public search(term: string): void {
    this.termToSearch = term;
  }
}

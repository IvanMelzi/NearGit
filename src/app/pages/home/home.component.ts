import { Issue } from './../../components/models/issue.model';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/services/services';

/**
 * Home Page. It shows all the issues.
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * Creates an instance of HomeComponent.
   * @param {ConfigService} gitService
   * @memberof HomeComponent
   */
  constructor(private gitService: ConfigService) { }

  /**
   * Issues.
   *
   * @type {Array<Issue>}
   * @memberof HomeComponent
   */
  public issues: Array<Issue> = [];

  /**
   * Value to search.
   *
   * @type {string}
   * @memberof HomeComponent
   */
  public termToSearch: string = "";

  /**
   * Flag that shows and hide the table skeleton.
   *
   * @type {boolean}
   * @memberof HomeComponent
   */
  public showSkeleton: boolean = true;

  /**
   * Get issues.
   *
   * @memberof HomeComponent
   */
  ngOnInit(): void {
    this.gitService.getGit("/repos/facebook/react/issues").then((data: Array<Issue>) => {
      this.issues = data;
      this.showSkeleton = false;
    }).catch(_ => {
      this.showSkeleton = false;
    });
  }

  /**
   * Send value to the table.
   *
   * @param {string} term
   * @memberof HomeComponent
   */
  public search(term: string): void {
    this.termToSearch = term;
  }
}

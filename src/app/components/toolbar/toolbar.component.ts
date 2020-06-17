import { Component } from '@angular/core';

/**
 * Toolbar.
 *
 * @export
 * @class ToolbarComponent
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent { 

  /**
   * Url to the repository.
   *
   * @private
   * @type {string}
   * @memberof ToolbarComponent
   */
  private _url : string = "https://github.com/IvanMelzi/NearGit";

  /**
   * Open the Repository in a new tab.
   *
   * @memberof ToolbarComponent
   */
  public goToRepo(): void {
    window.open(this._url, "_blank");
  }
}

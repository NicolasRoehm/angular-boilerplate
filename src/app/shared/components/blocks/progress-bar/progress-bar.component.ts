// Angular modules
import { Component } from '@angular/core';
import { Input }     from '@angular/core';
import { OnInit }    from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    standalone: true,
    imports: [NgIf, TranslateModule]
})
export class ProgressBarComponent implements OnInit
{
  @Input() withLabel : boolean = false;

  constructor() { }

  public ngOnInit() : void
  {
  }

}

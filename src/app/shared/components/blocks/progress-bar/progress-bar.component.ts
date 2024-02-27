// Angular modules
import { NgIf }            from '@angular/common';
import { Component }       from '@angular/core';
import { Input }           from '@angular/core';
import { OnInit }          from '@angular/core';

// External modules
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector    : 'app-progress-bar',
  templateUrl : './progress-bar.component.html',
  styleUrls   : ['./progress-bar.component.scss'],
  standalone  : true,
  imports     : [NgIf, TranslateModule]
})
export class ProgressBarComponent implements OnInit
{
  @Input() withLabel : boolean = false;

  constructor() { }

  public ngOnInit() : void
  {
  }

}

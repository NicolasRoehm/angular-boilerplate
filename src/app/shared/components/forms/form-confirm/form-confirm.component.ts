// Angular modules
import { Component }       from '@angular/core';
import { OnInit }          from '@angular/core';
import { Input }           from '@angular/core';
import { Output }          from '@angular/core';
import { EventEmitter }    from '@angular/core';
import { FormsModule }     from '@angular/forms';

// External modules
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector    : 'app-form-confirm',
  templateUrl : './form-confirm.component.html',
  styleUrls   : ['./form-confirm.component.scss'],
  standalone  : true,
  imports     : [FormsModule, TranslateModule]
})
export class FormConfirmComponent implements OnInit
{
  @Input()  data        : any;
  @Output() submitData  : EventEmitter<boolean> = new EventEmitter();
  @Output() submitClose : EventEmitter<null>    = new EventEmitter();

  constructor() { }

  public ngOnInit() : void
  {
  }

  // -------------------------------------------------------------------------------
  // NOTE Action -------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit() : Promise<void>
  {
    this.submitData.emit(true);
  }

  public onClickClose() : void
  {
    this.submitClose.emit();
  }

}

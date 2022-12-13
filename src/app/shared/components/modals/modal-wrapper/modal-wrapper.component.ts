// Angular modules
import { Component }                from '@angular/core';
import { Input }                    from '@angular/core';
import { OnInit }                   from '@angular/core';
import { ViewChild }                from '@angular/core';
import { EventEmitter }             from '@angular/core';
import { Type }                     from '@angular/core';

// External modules
import { NgbActiveModal }           from '@ng-bootstrap/ng-bootstrap';

// Directives
import { ModalWrapperDirective }    from '@directives/modal-wrapper.directive';

// Dynamic component loader - Angular
// https://angular.io/guide/dynamic-component-loader
// https://stackblitz.com/angular/bydvgpxaabj?file=src%2Fapp%2Fad-banner.component.ts

export class ModalForm
{
  constructor(public component : Type<any>, public data : any) {}
}

export interface FormComponent
{
  data        : any;
  submitData  : EventEmitter<any>;
  submitClose : EventEmitter<null>;
}

@Component({
  moduleId    : module.id,
  selector    : 'app-modal-wrapper',
  templateUrl : 'modal-wrapper.component.html',
  styleUrls   : ['modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit
{
  @Input() component     : any;
  @Input() componentData : any;
  @Input() modalData     : {
    title         : string,
    headerClasses : string,
    closable      : boolean,
  } = {
    title         : '',
    headerClasses : '',
    closable      : true,
  };

  @ViewChild(ModalWrapperDirective, { static : true }) modalWrapperHost !: ModalWrapperDirective;

  constructor(public activeModal : NgbActiveModal)
  {
  }

  public ngOnInit() : void
  {
    this.loadComponent();
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private loadComponent() : void
  {
    const modalForm = new ModalForm(this.component, this.componentData);

    const viewContainerRef = this.modalWrapperHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(modalForm.component);

    (<FormComponent>componentRef.instance).data = modalForm.data;
    (<FormComponent>componentRef.instance).submitClose.subscribe(() =>
    {
      this.submitClose();
    });
    (<FormComponent>componentRef.instance).submitData.subscribe(event =>
    {
      this.submitData(event);
    });
  }

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private submitData($event : any) : void
  {
    this.activeModal.close($event);
  }

  private submitClose() : void
  {
    this.activeModal.close();
  }

}

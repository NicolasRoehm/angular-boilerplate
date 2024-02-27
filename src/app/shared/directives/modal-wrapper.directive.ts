// Angular modules
import { Directive }        from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[modal-wrapper-host]',
    standalone: true,
})
export class ModalWrapperDirective
{
  constructor(public viewContainerRef : ViewContainerRef) { }
}

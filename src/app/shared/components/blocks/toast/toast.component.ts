// Angular modules
import { Component }    from '@angular/core';

// Services
import { ToastManager } from './toast.manager';

@Component({
  selector    : 'app-toast',
  templateUrl : './toast.component.html',
  styleUrls   : ['./toast.component.scss']
})
export class ToastComponent
{

  constructor(public toastManager : ToastManager) {}

}

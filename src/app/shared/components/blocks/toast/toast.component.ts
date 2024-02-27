// Angular modules
import { Component }    from '@angular/core';

// Services
import { ToastManager } from './toast.manager';
import { TranslateModule } from '@ngx-translate/core';
import { NgbToast, NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: true,
    imports: [NgFor, NgIf, NgbToast, NgbToastHeader, TranslateModule]
})
export class ToastComponent
{

  constructor(public toastManager : ToastManager) {}

}

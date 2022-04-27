// Angular modules
import { Injectable }       from '@angular/core';

// External modules
import { TranslateService } from '@ngx-translate/core';

export type ToastType = 'success' | 'info' | 'warning' | 'danger';

export class Toast
{
  header     ?: string;
  withHeader  : boolean = true;
  body        : string  = '';
  type        : ToastType = 'danger';
  autohide    : boolean = false;
  delay       : number  = 10000; // 10 sec
}

@Injectable({ providedIn : 'root' })
export class ToastManager
{
  constructor(private translateService : TranslateService)
  {
  }

  public toasts : Toast[] = [];

  public show(customToast : Toast) : void
  {
    const defaultToast = new Toast();
    const toast = Object.assign(defaultToast, customToast);
    if (!toast.header && toast.withHeader)
      toast.header = this.getTitleByType(toast.type);
    this.toasts.push(toast);
  }

  public remove(toast : Toast) : void
  {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  private getTitleByType(type : ToastType) : string
  {
    switch (type)
    {
      case 'danger' :
        return this.translateService.instant('ERROR');
      case 'warning' :
        return this.translateService.instant('WARNING');
    }
    return '';
  }

}

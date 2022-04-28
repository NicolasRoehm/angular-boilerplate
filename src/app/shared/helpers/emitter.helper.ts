// Angular modules
import { Injectable }   from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EmitterHelper
{
  public static emitAuthLoading : EventEmitter<boolean> = new EventEmitter();

  public static sendAuthLoading(state : boolean) : void
  {
    this.emitAuthLoading.emit(state); // NOTE Send state of auth loading
  }
}

// Angular modules
import { Injectable }   from '@angular/core';

// External modules
import { ArrayTyper }   from '@caliatys/array-typer';
import { gretch }       from 'gretchen';

// Internal modules
import { ToastManager } from '../components/blocks/toast/toast.manager';

// Services
import { MainService }  from './main.service';

// Helpers
import { StringHelper } from '../helpers/string.helper';

// Enums
import { Endpoint }     from '../enums/endpoint.enum';

@Injectable()
export class AppService extends MainService
{
  constructor(public toastManager : ToastManager)
  {
    super(toastManager);
  }

  // ----------------------------------------------------------------------------------------------
  // SECTION Methods ------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // public async getLastLines(siteId : string) : Promise<Line[]>
  // {
  //   const url      = StringHelper.interpolate(Endpoint.Site.GET_LAST_LINES, [ siteId ]);
  //   const opts     = this.prepareRequest(null, 'GET', 'AppService : getLastLines');
  //   const { data } = await gretch<any, any>(url, opts).json();

  //   if (!data)
  //     return [];

  //   return ArrayTyper.asArray(Line, data);
  // }

  // !SECTION Methods

  // ----------------------------------------------------------------------------------------------
  // SECTION Helpers ------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // !SECTION Helpers
}

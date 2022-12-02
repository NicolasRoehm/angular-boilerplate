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
  // SECTION Methods -----------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  public async authenticate(email : string, password : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // StorageHelper.removeToken();

    // const url  = Endpoint.AUTHENTICATE;
    // const opts = this.prepareRequest({ email, password }, 'POST', 'AppService : authenticate');
    // const { data } = await gretch<any, any>(url, opts).json();

    // if (!data)
    //   return false;

    // const userTokens = new UserTokens(data);
    // StorageHelper.setToken(userTokens);
    // return true;
  }

  public async forgotPassword(email : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // const url  = Endpoint.FORGOT_PASSWORD;
    // const opts = this.prepareRequest(email, 'POST', 'AuthService : forgotPassword');
    // const { data } = await gretch<any, any>(url, opts).json();

    // return !!data;
  }

  public async validateAccount(token : string, password : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // const url  = Endpoint.VALIDATE_ACCOUNT;
    // const opts = this.prepareRequest({ token, password }, 'POST', 'AuthService : validateAccount');
    // const { data } = await gretch<any, any>(url, opts).json();

    // return !!data;
  }

  // public async getLastLines(siteId : string) : Promise<Line[]>
  // {
  //   const url      = StringHelper.interpolate(Endpoint.GET_LAST_LINES, [ siteId ]);
  //   const opts     = this.prepareRequest(null, 'GET', 'AppService : getLastLines');
  //   const { data } = await gretch<any, any>(url, opts).json();

  //   if (!data)
  //     return [];

  //   return ArrayTyper.asArray(Line, data);
  // }

  // !SECTION Methods

  // ----------------------------------------------------------------------------------------------
  // SECTION Helpers -----------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // !SECTION Helpers
}

// Angular modules
import { Injectable }       from '@angular/core';
import { Router }           from '@angular/router';

// External modules
import { GretchOptions }    from 'gretchen';

// Internal modules
import { environment }      from '@env/environment';
import { ToastManager }     from '../components/blocks/toast/toast.manager';

// Helpers
import { StorageHelper }    from '../helpers/storage.helper';

@Injectable()
export class MainService
{
  constructor(public toastManager : ToastManager)
  {
  }

  public prepareRequest(body ?: any, method : 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST', from : string = '', headers: any = {}) : GretchOptions
  {
    // NOTE Prepare headers
    headers = Object.assign({
      'Content-Type' : 'application/json',
      'Accept'       : 'application/json'
    }, headers);

    // NOTE Add user token
    // const token = StorageHelper.getToken();
    // if (token)
    //   headers = { ...headers, ...{ Token : token.jwtToken, Authorization : `Bearer ${token.jwtToken}` } }; // ...{ Authorization : `Bearer ${token}`}

    // // NOTE Prepare options
    var self = this;
    return {
      credentials : 'include',
      baseURL : environment.apiBaseUrl,
      method  : method,
      body    : body ? JSON.stringify(body) : null,
      headers : headers,
      timeout : 990000,
      retry   : {
        attempts : 0
      },
      hooks : {
        async after({ status, error })
        {
          // NOTE Unauthorized
          if (status === 401)
          {
            // NOTE Refresh token
            // self.router.navigate(['/auth/login']);
            return;
          }

          if (!error)
            return;

          // NOTE Log error
          console.error(from + ' -> error', error);

          // NOTE Show error message in toast
          self.toastManager.quickShow(error);
        }
      }
    };
  }
}

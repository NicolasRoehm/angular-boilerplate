// Angular modules
import { Injectable }               from '@angular/core';
import { Router }                   from '@angular/router';

// External modules
import { ArrayTyper }               from '@caliatys/array-typer';
import { TranslateService }         from '@ngx-translate/core';
import axios                        from 'axios';
import { AxiosResponse }            from 'axios';
import { AxiosError }               from 'axios';
import { AxiosInstance }            from 'axios';
import { CreateAxiosDefaults }      from 'axios';

// Internal modules
import { ToastManager }             from '@blocks/toast/toast.manager';
import { environment }              from '@env/environment';

// Helpers
import { StorageHelper }            from '@helpers/storage.helper';

// Enums
import { Endpoint }                 from '@enums/endpoint.enum';

// Models

// Services
import { StoreService }             from './store.service';

@Injectable()
export class AppService
{
  // NOTE Default configuration
  private default : CreateAxiosDefaults = {
    withCredentials : true,
    timeout : 990000,
    headers : {
      'Content-Type' : 'application/json',
      'Accept'       : 'application/json',
    },
  };

  // NOTE Instances
  private api : AxiosInstance = axios.create({
    baseURL : environment.apiBaseUrl,
    ...this.default,
  });

  // NOTE Controller
  private controller : AbortController = new AbortController();

  constructor
  (
    private storeService     : StoreService,
    private toastManager     : ToastManager,
    private router           : Router,
    private translateService : TranslateService,
  )
  {
    this.initRequestInterceptor(this.api);
    this.initResponseInterceptor(this.api);

    this.initAuthHeader();
  }

  // ----------------------------------------------------------------------------------------------
  // SECTION Methods ------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  public async authenticate(email : string, password : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // StorageHelper.removeToken();

    // const url      = Endpoint.AUTHENTICATE;
    // const { data } = await this.api.post(url, { email, password });

    // if (!data)
    //   return false;

    // const authResponse = new AuthResponse(data);
    // StorageHelper.setToken(authResponse);
    // this.initAuthHeader();
    // return true;
  }

  public async forgotPassword(email : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // const url      = Endpoint.FORGOT_PASSWORD;
    // const { data } = await this.api.post(url, { email });

    // return !!data;
  }

  public async validateAccount(token : string, password : string) : Promise<boolean>
  {
    return Promise.resolve(true);

    // const url      = Endpoint.VALIDATE_ACCOUNT;
    // const { data } = await this.api.post(url, { token, password });

    // return !!data;
  }

  // public async getLastLines(siteId : string) : Promise<Line[]>
  // {
  //   const url      = StringHelper.interpolate(Endpoint.GET_LAST_LINES, [ siteId ]);
  //   const { data } = await this.api.get(url);

  //   if (!data)
  //     return [];

  //   return ArrayTyper.asArray(Line, data);
  // }

  // !SECTION Methods

  // ----------------------------------------------------------------------------------------------
  // SECTION Helpers ------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  private initAuthHeader() : void
  {
    // const token = StorageHelper.getToken();
    // if (!token)
    //   return;

    // this.api.defaults.headers.common['Authorization'] = `Bearer ${token.jwtToken}`;
    // this.api.defaults.headers.common['Token']         = token.jwtToken;
  }

  public initRequestInterceptor(instance : AxiosInstance) : void
  {
    instance.interceptors.request.use((config) =>
    {
      console.log('interceptors.request.config', config);
      this.storeService.setIsLoading(true);

      return config;
    },
    (error) =>
    {
      console.log('interceptors.request.error', error);
      this.storeService.setIsLoading(false);

      this.toastManager.quickShow(error);
      return Promise.reject(error);
    });
  }

  public initResponseInterceptor(instance : AxiosInstance) : void
  {
    instance.interceptors.response.use((response) =>
    {
      console.log('interceptors.response.response', response);
      this.storeService.setIsLoading(false);

      return response;
    },
    async (error : AxiosError) =>
    {
      console.log('interceptors.response.error', error);
      this.storeService.setIsLoading(false);

      // NOTE Prevent request canceled error
      if (error.code === 'ERR_CANCELED')
        return Promise.resolve(error);

      this.toastManager.quickShow(error.message);
      return Promise.reject(error);
    });
  }

  // !SECTION Helpers
}
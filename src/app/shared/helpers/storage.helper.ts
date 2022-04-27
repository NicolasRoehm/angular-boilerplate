// Angular modules
import { Injectable }  from '@angular/core';

// Internal modules
import { environment } from '@env/environment';

// Enums
import { StorageKey }  from '../enums/storage-key.enum';

// Models
// import { User }        from '../models/user.model';

@Injectable()
export class StorageHelper
{
  private static storagePrefix : string = environment.appName + '_' + environment.version + '_';

  // ----------------------------------------------------------------------------------------------
  // SECTION Methods ------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // NOTE Token

  // public static setUser(user : User) : void
  // {
  //   StorageHelper.setItem(StorageKey.USER, user);
  // }

  // public static removeUser() : void
  // {
  //   StorageHelper.removeItem(StorageKey.USER);
  // }

  // public static getUser() : User | null
  // {
  //   const data = StorageHelper.getItem(StorageKey.USER);
  //   return data ? new User(data) : null;
  // }

  // !SECTION Methods

  // ----------------------------------------------------------------------------------------------
  // SECTION LocalStorage -------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------

  public static setItem(key : string, value : any, prefix : boolean = true) : void
  {
    const itemKey = this.prefixer(key, prefix);
    localStorage.setItem(itemKey, JSON.stringify(value));
  }

  public static getItem(key : string, prefix : boolean = true) : any
  {
    const itemKey = this.prefixer(key, prefix);
    const res = localStorage.getItem(itemKey);
    if (res !== 'undefined')
      return JSON.parse(res as any);
    console.error('StorageHelper : getItem -> undefined key');
    return null;
  }

  public static removeItem(key : string, prefix : boolean = true) : void
  {
    const itemKey = this.prefixer(key, prefix);
    localStorage.removeItem(itemKey);
  }

  public static getKeys(all : boolean = false) : string[]
  {
    const keys : string[] = [];
    // NOTE Keys
    for (const key in localStorage)
      keys.push(key);
    if (all)
      return keys;
    // NOTE Prefixed keys
    return keys.filter((item) => item.startsWith(this.storagePrefix));
  }

  public static clearItems(all : boolean = false) : void
  {
    // NOTE Keys
    if (all)
    {
      localStorage.clear();
      return;
    }
    // NOTE Prefixed keys
    const prefixedKeys = this.getKeys();
    for (const prefixedKey of prefixedKeys)
      this.removeItem(prefixedKey, false);
  }

  public static clearItemsWithoutCurrentPrefix() : void
  {
    const allKeys = this.getKeys(true);
    for (const key of allKeys)
      if (!key.startsWith(this.storagePrefix))
        this.removeItem(key, false);
  }

  // !SECTION LocalStorage

  // NOTE Private

  private static prefixer(key : string, autoPrefix : boolean) : string
  {
    let itemKey = key;
    if (autoPrefix)
      itemKey = this.storagePrefix + key;
    return itemKey;
  }

}

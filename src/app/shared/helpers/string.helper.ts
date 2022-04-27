// Angular modules
import { Injectable } from '@angular/core';

@Injectable()
export class StringHelper
{
  /** JavaScript equivalent to printf/String.Format
   *  https://stackoverflow.com/a/31007976/7462178
   */
  public static interpolate(theString : string, argumentArray : string[]) : string
  {
    let regex = /%s/;
    let _r = function(p : string, c : string) { return p.replace(regex, c); };
    return argumentArray.reduce(_r, theString);
  }

  public static buildURIParams(parameters : object) : string
  {
    const parts = new URLSearchParams()

    for (const [key, value] of Object.entries(parameters))
    {
      if (key === undefined || value === undefined)
        continue;
      parts.append(key, value)
    }

    return '?' + parts.toString()
  }
}

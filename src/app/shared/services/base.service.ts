import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
    protected abstract resourceName: string;

    protected rawResourceString: string;
 
    protected abstract resourceBaseUrl: string;

    protected params: any;

    public environment = environment;
    constructor(protected http: HttpClient) {
        this.generateResourceUrl();
    }
    
    public getBaseApiUrl(): string {
        return this.environment.api
    }

    public getRawResourceString(): string {
        return this.rawResourceString;
    }

    public setResourceName(resource?: string, params?: any) {
    if (!resource) {
      resource = this.getRawResourceString();
    }
    this.resourceName = resource;
    this.params = params;
    this.generateResourceUrl(params);
  }

   public generateResourceUrl(params?: any) {
    this.params = params;
    this.resourceBaseUrl = `${this.getBaseApiUrl()}${this.resourceName}`;

    if (this.params) {
      this.resourceBaseUrl = this.buildUrlFromParams(
        this.resourceBaseUrl,
        params
      );
    }
  }

  public buildUrlFromParams(url: string, config: Params) {
    if (!config) {
      config = {};
    }

    for (const key in config) {
      url = url.replace('{' + key + '}', config[key]);
    }

    return url;
  }
}
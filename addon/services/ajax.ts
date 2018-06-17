import Service from '@ember/service';
import AjaxRequestMixin from '../mixins/ajax-request';

export default Service.extend(AjaxRequestMixin);

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    ajax: any;
  }
}

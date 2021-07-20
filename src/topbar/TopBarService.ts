import {BusyBarService, BusyBarOptions, HttpService} from "boost-web";
// @ts-ignore
import topbar from 'topbar';

export class TopBarService extends BusyBarService {
    createBar(options?: BusyBarOptions): any {
        options = {
            thickness: 4,
            color: 'rgba(0,0,0,.9)',
            ...options
        }
        topbar.config({
            barThickness: options.thickness,
            barColors: {
                '0': options.color,
                //'.3'       : 'rgba(41,  128, 185, .7)',
                '1.0': options.color
            },
        });
        return 1;
    }
    start(_: any): any {topbar.show()}
    stop(_: any): any {topbar.hide()}

    constructor(http: HttpService) {
        super(http)
    }
}
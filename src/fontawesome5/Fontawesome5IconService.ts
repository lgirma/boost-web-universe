import {IconService, IconOptions, MessageType} from "boost-web";

export interface Fontawesome5IconOptions extends IconOptions {
    iconType?: 'solid' | 'regular' | 'brand'
}

const MessageTypeIconTable = {
    [MessageType.NONE]: 'info-circle',
    [MessageType.INFO]: 'info-circle',
    [MessageType.WARNING]: 'exclamation-triangle',
    [MessageType.SUCCESS]: 'check-circle',
    [MessageType.ERROR]: 'times-circle'
}

const IconTypesTable = {'solid': 's', 'brand': 'b', 'regular': 'r'}

export class Fontawesome5IconService implements IconService<Fontawesome5IconOptions> {
    ico(key: string, options?: Fontawesome5IconOptions): string {
        if (key == null || key.trim().length == 0)
            return '';
        options = {
            iconType: 'solid',
            scale: 1,
            ...options
        }
        const icoType = IconTypesTable[options.iconType!]
        return `<i class="fa${icoType} fa-${key}${options.scale! > 1 ? ` fa-${options.scale}x` : ''}"></i>`
    }

    icoForMsg(message: MessageType): string {
        return MessageTypeIconTable[message];
    }

    icoKey(message: MessageType): string {
        return MessageTypeIconTable[message];
    }

}
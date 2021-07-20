import {ButtonOptions, ButtonService, MessageType, Size} from "boost-web";

const MessageClassTable = {
    [MessageType.WARNING]: 'warning',
    [MessageType.SUCCESS]: 'success',
    [MessageType.ERROR]: 'danger',
    [MessageType.INFO]: 'info',
    [MessageType.NONE]: 'primary',
}

export class Bootstrap5ButtonService implements ButtonService {
    attrs(options?: ButtonOptions): Partial<HTMLButtonElement> {
        options = {
            message: MessageType.NONE,
            size: Size.MD,
            ...options
        }
        let sizeCls = ''
        if (options.size == Size.LG || options.size == Size.XL)
            sizeCls = 'btn-lg'
        else if (options.size !== Size.MD)
            sizeCls = 'btn-sm'
        let msgClass = MessageClassTable[options.message!];
        return {className: `btn btn-${msgClass} ${sizeCls}`}
    }

    render(content: any, options?: ButtonOptions): string {
        let {className} = this.attrs(options)
        return `<button class="${className}">${content}</button>`
    }

}
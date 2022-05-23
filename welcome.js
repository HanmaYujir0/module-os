import os from 'os'
export  function welcome() {
    return `Привет юзер. Вижу ты зашел с ${os.type}`
}
// console.log(welcome());
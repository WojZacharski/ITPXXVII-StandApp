window.logging = true;
export const Logger = (...args) => {
    if(window.logging)
        console.log(...args)
};
export function deprecated(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // show deprecation info
        console.warn(`${name} is deprecated. You should use getByParam instead!`);
        // execute original method and return what it returns
        const result = originalMethod.apply(this, args);
        return result;
    };
}
//# sourceMappingURL=deprecated.js.map
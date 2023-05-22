export function deprecated(target: any, name: string, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    // show deprecation info
    console.warn(`${name} is deprecated. You should use getByParam instead!`);

    // execute original method and return what it returns
    const result = originalMethod.apply(this, args);
    return result;
  };
}

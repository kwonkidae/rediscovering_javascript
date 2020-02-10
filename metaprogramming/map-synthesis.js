const proxy = new Proxy(Map.prototype, {
  get: function (target, propertyName, receiver) {
    return receiver.get(propertyName);
  }
});

Reflect.setPrototypeOf(Map.prototype, proxy);

const langsAndAuthros = new Map([
  ['JavaScript', 'Eich'],
  ['Java', 'Gosling']
]);

console.log(langsAndAuthros.get('JavaScript'));
console.log(langsAndAuthros.JavaScript);
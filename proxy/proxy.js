const obj = {
  a: 1,
  b: function(b) {
    console.log(b);
  },
};

const a = {
  a: 4,
  b: new Proxy(obj.b, {
    apply: function(target, thisArg, args) {
      console.log('thisArg', thisArg);
      target(args);
    },
  }),
};

a.b('kkdosk');

var proxy = new Proxy(
  {
    a: 1,
  },
  {
    get: function(target, property, receiver) {
      // console.log(target, property, receiver);
      return { target, property, receiver };
    },
    set: function(target, property, receiver) {
      console.log({ target, property, receiver });
      return { target, property, receiver };
    },
  }
);

proxy.a = 5;

let user = {
  _name: 'Guest',
  get name() {
    return this._name;
  },
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return Reflect.get(...arguments);
  },
});

let admin = {
  __proto__: userProxy,
  _name: 'Admin',
};

console.log(admin.name);

// console.log(Reflect.get(proxy, 'getReceiver', { a: 1, b: 1 }));

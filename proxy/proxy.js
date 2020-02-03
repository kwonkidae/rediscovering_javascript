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

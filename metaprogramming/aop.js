const greet = function(message, name) {
  return `${message} ${name}!`;
};

const invokeGreet = function(func, name) {
  console.log(func('hi', name));
};

invokeGreet(greet, 'Bob');

const beforeAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {
    const message = args[0];
    const msgInCaps = message[0].toUpperCase() + message.slice(1);
    console.log('thisArg', thisArg);
    return Reflect.apply(target, thisArg, [msgInCaps, ...args.slice(1)]);
  },
});

invokeGreet(beforeAdvice, 'Bob');

const beforeAndAfterAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {
    console.log(args);
    const newArguments = ['Howdy', ...args.slice(1)];
    const result = Reflect.apply(target, thisArg, newArguments);
    return result.toUpperCase();
  },
});

invokeGreet(beforeAndAfterAdvice, 'Bob');

const aroundAdvice = new Proxy(greet, {
  apply: function(target, thisArg, args) {
    if (args[1] === 'Doc') {
      return "What's up, Doc?";
    } else {
      return Reflect.apply(target, thisArg, args);
    }
  },
});

invokeGreet(aroundAdvice, 'Bob');
invokeGreet(aroundAdvice, 'Doc');

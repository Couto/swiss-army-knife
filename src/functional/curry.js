// curry :: (* -> a) -> (* -> a)
const curry = fn => function cf(...args) {
  return (args.length >= fn.length) ?
    fn(...args) :
    (...newArgs) => cf(...[...args, ...newArgs]);
};

export default curry;

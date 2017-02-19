/*
 * Originally this function was used to organize callbacks, usually to manage
 * parallel xhr requests.
 * That use has mostly been deprecated in exchange of th Promise.all
 * however I'm keeping it for historical reasons, and I'm translating it to
 * es2015 mostly for fun.
 *
 * Given an array of functions, it will call every function,
 * in parallel.
 * Every function will have a trigger function as its last argument,
 * that should be called when the function is done.
 * If arguments are given to this trigger function, those will be passed
 * to the callback function.
 * The callback function will have as many arguments as those you passed
 * to the next function, by order.
 *
 * parallel([
 *  (next) => next(1, 2),
 *  (args1, args2, next) => next(),
 *  {
 *    fn: (next) => { next(4) },
 *    cb: (cancel, args4) => {
 *      // Call this function only when `fn` has ended
 *      // It's possible to cancel all future callbacks by calling
 *      // the 'cancel' function
 *    }
 *  }
 * ], (args1, args2, args4) => console.log('All done!'))
 */

export default (tasks, callback) => {
  let counter = 0;
  const results = {};
  // Flag to know if it should run callbacks
  let enabled = true;
  // function that will parse all the arguments from the tasks, and
  // it will call the callback arguments function given.
  const done = () => {
    // Sort the arguments to be in the same order that the tasks
    // given, and merge them into a single array
    const finalArgs = Object.keys(results).sort().map(val => results[val]);
    // If a callback function was given, call it, passing the
    // arguments
    if (callback) { callback(...finalArgs); }
  };
  // Setter to disable callbacks
  const cancel = () => { enabled = false; };
  // function that will be given to each task, so that each task can
  // notify when it's ready.
  const next = (id, ...args) => {
    // Save them in a final object
    results[id.idx] = (args.length) ? args : undefined;
    // Increment counter.
    counter += 1;
    // If the current task has an individual callback, call it,
    // passing the arguments given by the task to the next function
    // and the cancel function to give the option to disable future callbacks
    if (id.cb && enabled) { id.cb(...[cancel, ...args]); }
    // If the counter reached the total number of tasks, call the
    // 'done' function to parse the arguments for the final callback
    if (counter === tasks.length && enabled) { done(); }
  };

  tasks.forEach((task, index) => {
    // for each task in the array, check if has a property 'fn'
    // if has, run that property, otherwise the task should be
    // a function.
    // curry an object giving the current index of the task and
    // the individual callback if exists
    (task.fn || task)(next.bind(undefined, { idx: index, cb: task.cb }));
  });
};

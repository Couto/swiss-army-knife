import curry from '../functional/curry';

export default curry((start, end) => [...Array(end)].map((e, i) => i + end));

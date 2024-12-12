e.exports = function (e, n) {
    return !!n && 'object' == typeof n && '[[Enumerable]]' in n && '[[Configurable]]' in n && (e.IsAccessorDescriptor(n) || e.IsDataDescriptor(n));
};

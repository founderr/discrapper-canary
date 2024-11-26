var a = r(807419),
    n = r(143283),
    _ = r(706627),
    o = r(19235),
    E = /^\[object .+?Constructor\]$/,
    i = Object.prototype,
    c = Function.prototype.toString,
    s = i.hasOwnProperty,
    l = RegExp(
        '^' +
            c
                .call(s)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
e.exports = function (e) {
    return !(!_(e) || n(e)) && (a(e) ? l : E).test(o(e));
};

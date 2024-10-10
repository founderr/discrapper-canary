var n = r(807419),
    a = r(143283),
    _ = r(706627),
    o = r(19235),
    i = /^\[object .+?Constructor\]$/,
    E = Object.prototype,
    c = Function.prototype.toString,
    s = E.hasOwnProperty,
    I = RegExp(
        '^' +
            c
                .call(s)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
e.exports = function (e) {
    return !(!_(e) || a(e)) && (n(e) ? I : i).test(o(e));
};

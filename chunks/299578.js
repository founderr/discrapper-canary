var i = r(807419),
    a = r(143283),
    s = r(706627),
    o = r(19235),
    l = /[\\^$.*+?()[\]{}|]/g,
    u = /^\[object .+?Constructor\]$/,
    c = Object.prototype,
    d = Function.prototype.toString,
    f = c.hasOwnProperty,
    _ = RegExp(
        '^' +
            d
                .call(f)
                .replace(l, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
function h(e) {
    return !(!s(e) || a(e)) && (i(e) ? _ : u).test(o(e));
}
e.exports = h;

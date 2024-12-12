var i = r(867996),
    a = r(350780),
    s = r(661233),
    o = r(785775),
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

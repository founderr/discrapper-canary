var r = n(867996),
    i = n(350780),
    a = n(661233),
    o = n(785775),
    s = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    u = Object.prototype,
    c = Function.prototype.toString,
    d = u.hasOwnProperty,
    _ = RegExp(
        '^' +
            c
                .call(d)
                .replace(s, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
    );
function E(e) {
    return !(!a(e) || i(e)) && (r(e) ? _ : l).test(o(e));
}
e.exports = E;

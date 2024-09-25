var r = n(593007),
    i = n(382855),
    a = n(675717),
    o = n(526389),
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
    return !(!(0, a.Z)(e) || (0, i.Z)(e)) && ((0, r.Z)(e) ? _ : l).test((0, o.Z)(e));
}
t.Z = E;

var e = n(56135),
    o = Object.prototype,
    i = o.hasOwnProperty,
    u = o.toString,
    c = e ? e.toStringTag : void 0;
t.exports = function (t) {
    var r = i.call(t, c),
        n = t[c];
    try {
        t[c] = void 0;
        var e = !0;
    } catch (t) {}
    var o = u.call(t);
    return e && (r ? (t[c] = n) : delete t[c]), o;
};

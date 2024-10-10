var n = r(466293),
    a = Object.prototype,
    _ = a.hasOwnProperty,
    o = a.toString,
    i = n ? n.toStringTag : void 0;
e.exports = function (e) {
    var t = _.call(e, i),
        r = e[i];
    try {
        e[i] = void 0;
        var n = !0;
    } catch (e) {}
    var a = o.call(e);
    return n && (t ? (e[i] = r) : delete e[i]), a;
};

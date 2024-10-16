var n = r(466293),
    a = Object.prototype,
    _ = a.hasOwnProperty,
    o = a.toString,
    E = n ? n.toStringTag : void 0;
e.exports = function (e) {
    var t = _.call(e, E),
        r = e[E];
    try {
        e[E] = void 0;
        var n = !0;
    } catch (e) {}
    var a = o.call(e);
    return n && (t ? (e[E] = r) : delete e[E]), a;
};

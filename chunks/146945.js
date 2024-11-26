var a = r(466293),
    n = Object.prototype,
    _ = n.hasOwnProperty,
    o = n.toString,
    E = a ? a.toStringTag : void 0;
e.exports = function (e) {
    var t = _.call(e, E),
        r = e[E];
    try {
        e[E] = void 0;
        var a = !0;
    } catch (e) {}
    var n = o.call(e);
    return a && (t ? (e[E] = r) : delete e[E]), n;
};

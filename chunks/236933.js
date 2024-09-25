var r = n(334389),
    i = 'Expected a function';
function a(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError(i);
    var n = function () {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            a = n.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, r);
        return (n.cache = a.set(i, o) || a), o;
    };
    return (n.cache = new (a.Cache || r.Z)()), n;
}
(a.Cache = r.Z), (t.Z = a);

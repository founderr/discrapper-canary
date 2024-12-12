var i = r(660326),
    a = 'Expected a function';
function s(e, n) {
    if ('function' != typeof e || (null != n && 'function' != typeof n)) throw TypeError(a);
    var r = function () {
        var i = arguments,
            a = n ? n.apply(this, i) : i[0],
            s = r.cache;
        if (s.has(a)) return s.get(a);
        var o = e.apply(this, i);
        return (r.cache = s.set(a, o) || s), o;
    };
    return (r.cache = new (s.Cache || i)()), r;
}
(s.Cache = i), (e.exports = s);

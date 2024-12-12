var a = r(302767);
function n(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
    var r = function () {
        var a = arguments,
            n = t ? t.apply(this, a) : a[0],
            _ = r.cache;
        if (_.has(n)) return _.get(n);
        var o = e.apply(this, a);
        return (r.cache = _.set(n, o) || _), o;
    };
    return (r.cache = new (n.Cache || a)()), r;
}
(n.Cache = a), (e.exports = n);

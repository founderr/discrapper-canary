var n = r(302767);
function a(e, t) {
    if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
    var r = function () {
        var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            _ = r.cache;
        if (_.has(a)) return _.get(a);
        var o = e.apply(this, n);
        return (r.cache = _.set(a, o) || _), o;
    };
    return (r.cache = new (a.Cache || n)()), r;
}
(a.Cache = n), (e.exports = a);

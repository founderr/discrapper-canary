var t = 'Function.prototype.bind called on incompatible ',
    n = Array.prototype.slice,
    r = Object.prototype.toString,
    i = '[object Function]';
e.exports = function (e) {
    var a,
        o = this;
    if ('function' != typeof o || r.call(o) !== i) throw TypeError(t + o);
    for (
        var s = n.call(arguments, 1),
            l = function () {
                if (!(this instanceof a)) return o.apply(e, s.concat(n.call(arguments)));
                var t = o.apply(this, s.concat(n.call(arguments)));
                return Object(t) === t ? t : this;
            },
            u = Math.max(0, o.length - s.length),
            c = [],
            d = 0;
        d < u;
        d++
    )
        c.push('$' + d);
    if (((a = Function('binder', 'return function (' + c.join(',') + '){ return binder.apply(this,arguments); }')(l)), o.prototype)) {
        var _ = function () {};
        (_.prototype = o.prototype), (a.prototype = new _()), (_.prototype = null);
    }
    return a;
};

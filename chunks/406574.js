var n = 'Function.prototype.bind called on incompatible ',
    r = Array.prototype.slice,
    i = Object.prototype.toString,
    a = '[object Function]';
e.exports = function (e) {
    var s,
        o = this;
    if ('function' != typeof o || i.call(o) !== a) throw TypeError(n + o);
    for (
        var l = r.call(arguments, 1),
            u = function () {
                if (!(this instanceof s)) return o.apply(e, l.concat(r.call(arguments)));
                var n = o.apply(this, l.concat(r.call(arguments)));
                return Object(n) === n ? n : this;
            },
            c = Math.max(0, o.length - l.length),
            d = [],
            f = 0;
        f < c;
        f++
    )
        d.push('$' + f);
    if (((s = Function('binder', 'return function (' + d.join(',') + '){ return binder.apply(this,arguments); }')(u)), o.prototype)) {
        var _ = function () {};
        (_.prototype = o.prototype), (s.prototype = new _()), (_.prototype = null);
    }
    return s;
};

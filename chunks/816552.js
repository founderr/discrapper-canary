function i(e, n) {
    var r = n && n.cache ? n.cache : h,
        i = n && n.serializer ? n.serializer : f;
    return (n && n.strategy ? n.strategy : u)(e, {
        cache: r,
        serializer: i
    });
}
function a(e) {
    return null == e || 'number' == typeof e || 'boolean' == typeof e;
}
function s(e, n, r, i) {
    var s = a(i) ? i : r(i),
        o = n.get(s);
    return void 0 === o && ((o = e.call(this, i)), n.set(s, o)), o;
}
function o(e, n, r) {
    var i = Array.prototype.slice.call(arguments, 3),
        a = r(i),
        s = n.get(a);
    return void 0 === s && ((s = e.apply(this, i)), n.set(a, s)), s;
}
function l(e, n, r, i, a) {
    return r.bind(n, e, i, a);
}
function u(e, n) {
    var r = 1 === e.length ? s : o;
    return l(e, this, r, n.cache.create(), n.serializer);
}
function c(e, n) {
    return l(e, this, o, n.cache.create(), n.serializer);
}
function d(e, n) {
    return l(e, this, s, n.cache.create(), n.serializer);
}
r.d(n, {
    A: function () {
        return p;
    },
    H: function () {
        return i;
    }
});
var f = function () {
    return JSON.stringify(arguments);
};
function _() {
    this.cache = Object.create(null);
}
(_.prototype.get = function (e) {
    return this.cache[e];
}),
    (_.prototype.set = function (e, n) {
        this.cache[e] = n;
    });
var h = {
        create: function () {
            return new _();
        }
    },
    p = {
        variadic: c,
        monadic: d
    };

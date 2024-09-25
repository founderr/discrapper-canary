n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(646391),
    i = n(871074),
    a = n(662939),
    o = n(299188),
    s = n(35972);
function l(e, t, n) {
    if ((0, s.Z)()) {
        var u;
        l = r((u = i)).call(u);
    } else
        l = function (e, t, n) {
            var i = [null];
            a(i).apply(i, t);
            var s = new (r(Function).apply(e, i))();
            return n && (0, o.Z)(s, n.prototype), s;
        };
    return l.apply(null, arguments);
}

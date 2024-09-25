n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(815393),
    i = n(646391),
    a = n(146306),
    o = n(784148);
function s() {
    if ('undefined' != typeof Reflect && r) {
        var e;
        s = i((e = r)).call(e);
    } else
        s = function (e, t, n) {
            var r = (0, o.Z)(e, t);
            if (r) {
                var i = a(r, t);
                return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
            }
        };
    return s.apply(this, arguments);
}

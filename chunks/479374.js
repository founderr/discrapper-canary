var i = r(161581),
    a = r(955903),
    s = r(354848),
    o = r(474180),
    l = r(943329),
    u = r(641236),
    c = r(531379),
    d = r(42024),
    f = r(992051),
    _ = r(106295),
    h = a && a.prototype,
    p = u('species'),
    m = !1,
    g = s(i.PromiseRejectionEvent),
    E = o('Promise', function () {
        var e = l(a),
            n = e !== String(a);
        if ((!n && 66 === _) || (f && !(h.catch && h.finally))) return !0;
        if (!_ || _ < 51 || !/native code/.test(e)) {
            var r = new a(function (e) {
                    e(1);
                }),
                i = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((r.constructor = {})[p] = i), !(m = r.then(function () {}) instanceof i))) return !0;
        }
        return !n && (c || d) && !g;
    });
e.exports = {
    CONSTRUCTOR: E,
    REJECTION_EVENT: g,
    SUBCLASSING: m
};

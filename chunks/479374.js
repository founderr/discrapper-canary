var r = n(161581),
    i = n(955903),
    a = n(354848),
    s = n(474180),
    o = n(943329),
    l = n(641236),
    u = n(531379),
    c = n(42024),
    d = n(992051),
    f = n(106295),
    _ = i && i.prototype,
    h = l('species'),
    p = !1,
    m = a(r.PromiseRejectionEvent),
    g = s('Promise', function () {
        var e = o(i),
            t = e !== String(i);
        if ((!t && 66 === f) || (d && !(_.catch && _.finally))) return !0;
        if (!f || f < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[h] = r), !(p = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && (u || c) && !m;
    });
e.exports = {
    CONSTRUCTOR: g,
    REJECTION_EVENT: m,
    SUBCLASSING: p
};

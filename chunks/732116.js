var r = n(668530),
    i = n(197859),
    a = n(735471),
    o = n(902538),
    s = n(976396),
    l = n(360518),
    u = n(661338),
    c = n(252110),
    d = n(414629),
    _ = n(882708),
    E = i && i.prototype,
    f = l('species'),
    h = !1,
    p = a(r.PromiseRejectionEvent),
    m = o('Promise', function () {
        var e = s(i),
            t = e !== String(i);
        if ((!t && 66 === _) || (d && !(E.catch && E.finally))) return !0;
        if (!_ || _ < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[f] = r), !(h = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && (u || c) && !p;
    });
e.exports = {
    CONSTRUCTOR: m,
    REJECTION_EVENT: p,
    SUBCLASSING: h
};

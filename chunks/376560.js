r.d(n, {
    L: function () {
        return l;
    }
});
var i = r(304329),
    a = r(899497),
    s = r(977584),
    o = r(229579),
    l = function () {
        var e = 1 / 0,
            n = [];
        i.C.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var i = [];
                r.activeTargets.forEach(function (n) {
                    var r = new a.A(n.target),
                        l = (0, s.D)(n.target);
                    i.push(r), (n.lastReportedSize = (0, o.Y)(n.target, n.observedBox)), l < e && (e = l);
                }),
                    n.push(function () {
                        r.callback.call(r.observer, i, r.observer);
                    }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }
        });
        for (var r = 0, l = n; r < l.length; r++) (0, l[r])();
        return e;
    };

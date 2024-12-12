r.d(n, {
    M: function () {
        return c;
    }
});
var i = r(684342),
    a = r(391756),
    s = r(797578),
    o = r(876026),
    l = new Map(),
    u = function (e, n) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === n) return r;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, n) {
                var r = new s.r(e, n);
                o.C.push(r), l.set(e, r);
            }),
            (e.observe = function (e, n, r) {
                if (l.has(e)) {
                    var s = l.get(e);
                    0 > u(s.observationTargets, n) && (s.observationTargets.push(new a.Q(n, r && r.box)), (0, i.t)(1), i.p.schedule());
                }
            }),
            (e.unobserve = function (e, n) {
                if (l.has(e)) {
                    var r = l.get(e),
                        a = u(r.observationTargets, n);
                    a >= 0 && (r.observationTargets.splice(a, 1), (0, i.t)(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (l.has(e)) {
                    var n = l.get(e);
                    o.C.splice(o.C.indexOf(n), 1), l.delete(e), (0, i.t)(-n.observationTargets.length);
                }
            }),
            e
        );
    })();

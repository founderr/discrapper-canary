r.d(n, {
    M: function () {
        return c;
    }
});
var i = r(391997),
    a = r(644977),
    s = r(446315),
    o = r(312413),
    l = new WeakMap(),
    u = function (e, n) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === n) return r;
        return -1;
    },
    c = (function () {
        function e() {}
        return (
            (e.connect = function (e, n) {
                var r = new s.r(e, n);
                l.set(e, r);
            }),
            (e.observe = function (e, n, r) {
                var s = l.get(e),
                    c = 0 === s.observationTargets.length;
                0 > u(s.observationTargets, n) && (c && o.C.push(s), s.observationTargets.push(new a.Q(n, r && r.box)), (0, i.t)(1), i.p.schedule());
            }),
            (e.unobserve = function (e, n) {
                var r = l.get(e),
                    a = u(r.observationTargets, n),
                    s = 1 === r.observationTargets.length;
                a >= 0 && (s && o.C.splice(o.C.indexOf(r), 1), r.observationTargets.splice(a, 1), (0, i.t)(-1));
            }),
            (e.disconnect = function (e) {
                var n = this,
                    r = l.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return n.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }),
            e
        );
    })();

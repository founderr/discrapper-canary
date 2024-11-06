e.r(n),
    e.d(n, {
        installApplication: function () {
            return p;
        },
        performDefaultLibraryApplicationAction: function () {
            return C;
        },
        playApplication: function () {
            return l.a;
        },
        repairApplication: function () {
            return f;
        },
        updateApplication: function () {
            return h;
        }
    });
var i = e(51025),
    l = e(696748),
    o = e(812206),
    r = e(173747),
    a = e(7956),
    s = e(417363),
    c = e(941128),
    d = e(702523),
    u = e(981631);
function p(t, n, e) {
    let i = o.Z.getApplication(t);
    if (null == i) return;
    let l = r.Z.getTargetBuildId(i.id, n),
        a = r.Z.getTargetManifests(i.id, n);
    null != l && null != a && null != d.L && (0, d.L)(i, n, l, a, e);
}
function h(t, n) {
    let e = o.Z.getApplication(t);
    if (null != e) return i.li(e, n, r.Z.getTargetBuildId(e.id, n), r.Z.getTargetManifests(e.id, n));
}
function f(t, n, e) {
    let l = o.Z.getApplication(t);
    if (null != l) return i.cG(l, n, e);
}
function C(t, n) {
    let e = (0, a.i)(t, s.Z, c.Z),
        { analyticsParams: i } = n;
    switch (e) {
        case u.apO.PLAY:
            return (0, l.a)(t.id, t, { analyticsParams: i });
        case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
        case u.apO.UPDATE:
            return h(t.id, t.branchId);
    }
}

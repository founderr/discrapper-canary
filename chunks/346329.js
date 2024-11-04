n.r(e),
    n.d(e, {
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
var i = n(51025),
    l = n(696748),
    r = n(812206),
    o = n(173747),
    a = n(7956),
    s = n(417363),
    c = n(941128),
    d = n(702523),
    u = n(981631);
function p(t, e, n) {
    let i = r.Z.getApplication(t);
    if (null == i) return;
    let l = o.Z.getTargetBuildId(i.id, e),
        a = o.Z.getTargetManifests(i.id, e);
    null != l && null != a && null != d.L && (0, d.L)(i, e, l, a, n);
}
function h(t, e) {
    let n = r.Z.getApplication(t);
    if (null != n) return i.li(n, e, o.Z.getTargetBuildId(n.id, e), o.Z.getTargetManifests(n.id, e));
}
function f(t, e, n) {
    let l = r.Z.getApplication(t);
    if (null != l) return i.cG(l, e, n);
}
function C(t, e) {
    let n = (0, a.i)(t, s.Z, c.Z),
        { analyticsParams: i } = e;
    switch (n) {
        case u.apO.PLAY:
            return (0, l.a)(t.id, t, { analyticsParams: i });
        case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
        case u.apO.UPDATE:
            return h(t.id, t.branchId);
    }
}

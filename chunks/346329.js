n.r(e),
    n.d(e, {
        installApplication: function () {
            return p;
        },
        performDefaultLibraryApplicationAction: function () {
            return f;
        },
        playApplication: function () {
            return o.a;
        },
        repairApplication: function () {
            return h;
        },
        updateApplication: function () {
            return C;
        }
    });
var i = n(51025),
    o = n(696748),
    s = n(812206),
    a = n(173747),
    l = n(7956),
    r = n(417363),
    c = n(941128),
    d = n(702523),
    u = n(981631);
function p(t, e, n) {
    let i = s.Z.getApplication(t);
    if (null == i) return;
    let o = a.Z.getTargetBuildId(i.id, e),
        l = a.Z.getTargetManifests(i.id, e);
    null != o && null != l && null != d.L && (0, d.L)(i, e, o, l, n);
}
function C(t, e) {
    let n = s.Z.getApplication(t);
    if (null != n) return i.li(n, e, a.Z.getTargetBuildId(n.id, e), a.Z.getTargetManifests(n.id, e));
}
function h(t, e, n) {
    let o = s.Z.getApplication(t);
    if (null != o) return i.cG(o, e, n);
}
function f(t, e) {
    let n = (0, l.i)(t, r.Z, c.Z),
        { analyticsParams: i } = e;
    switch (n) {
        case u.apO.PLAY:
            return (0, o.a)(t.id, t, { analyticsParams: i });
        case u.apO.INSTALL:
            return p(t.id, t.branchId, i.source);
        case u.apO.UPDATE:
            return C(t.id, t.branchId);
    }
}

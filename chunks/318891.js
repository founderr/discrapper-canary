let i;
r.d(n, {
    RI: function () {
        return y;
    },
    jy: function () {
        return S;
    }
});
var a = r(570140),
    s = r(519938),
    o = r(317770),
    l = r(928518),
    u = r(592125),
    c = r(819640),
    d = r(366050),
    f = r(19780),
    _ = r(944486),
    h = r(914010),
    p = r(979651),
    m = r(636449),
    g = r(317381),
    E = r(719296),
    v = r(958185),
    I = r(981631);
function T(e, n) {
    if ((0, m.R)() || d.Z.isOpen(n)) return !1;
    if (null != i) {
        let e = i;
        a.Z.wait(() => s.xv(e));
    }
    a.Z.wait(() => s.bA(n, I.NYg.EMBED_IFRAME, { channel: e })), (i = n);
}
function b() {
    let e = i;
    null != e && d.Z.isOpen(e) && (a.Z.wait(() => s.xv(e)), (i = null));
}
function y(e) {
    let n = null != e ? e : i;
    null != n && d.Z.isOpen(n) && a.Z.wait(() => s.Cp(n));
}
function S(e) {
    let n = null != e ? e : i;
    null != n && d.Z.isOpen(n) && a.Z.wait(() => s.$Z(n));
}
function A() {
    let e = g.ZP.getConnectedActivityChannelId(),
        n = g.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : I.lds),
        r = u.Z.getChannel(e);
    return null == e || null == r || null == n ? b() : T(r, (0, E.Z)(e, n.applicationId));
}
function N() {
    return (0, v.Z)({
        LayerStore: c.Z,
        PopoutWindowStore: l.Z
    })
        ? y()
        : S();
}
class C extends o.Z {
    _initialize() {
        _.Z.addChangeListener(A), h.Z.addChangeListener(A), f.Z.addChangeListener(A), p.Z.addChangeListener(A), l.Z.addChangeListener(A), g.ZP.addChangeListener(A), c.Z.addChangeListener(N);
    }
    _terminate() {
        _.Z.removeChangeListener(A), h.Z.removeChangeListener(A), f.Z.removeChangeListener(A), p.Z.removeChangeListener(A), l.Z.removeChangeListener(A), g.ZP.removeChangeListener(A), c.Z.removeChangeListener(N);
    }
}
n.ZP = new C();

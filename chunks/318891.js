let r;
n.d(t, {
    RI: function () {
        return S;
    },
    jy: function () {
        return A;
    }
});
var i = n(570140),
    a = n(519938),
    o = n(317770),
    s = n(928518),
    l = n(592125),
    u = n(819640),
    c = n(366050),
    d = n(19780),
    _ = n(944486),
    E = n(914010),
    f = n(979651),
    h = n(317381),
    p = n(719296),
    m = n(958185),
    I = n(981631);
function T(e, t) {
    if (c.Z.isOpen(t)) return !1;
    i.Z.wait(() => a.bA(t, I.NYg.EMBED_IFRAME, { channel: e })), (r = t);
}
function g() {
    let e = r;
    null != e && c.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function A(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function v() {
    let e = h.ZP.getConnectedActivityChannelId(),
        t = h.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : I.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t ? g() : T(n, (0, p.Z)(e, t.applicationId));
}
function N() {
    return (0, m.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: s.Z
    })
        ? S()
        : A();
}
class O extends o.Z {
    _initialize() {
        _.Z.addChangeListener(v), E.Z.addChangeListener(v), d.Z.addChangeListener(v), f.Z.addChangeListener(v), s.Z.addChangeListener(v), h.ZP.addChangeListener(v), u.Z.addChangeListener(N);
    }
    _terminate() {
        _.Z.removeChangeListener(v), E.Z.removeChangeListener(v), d.Z.removeChangeListener(v), f.Z.removeChangeListener(v), s.Z.removeChangeListener(v), h.ZP.removeChangeListener(v), u.Z.removeChangeListener(N);
    }
}
t.ZP = new O();

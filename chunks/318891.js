let r;
n.d(t, {
    RI: function () {
        return b;
    },
    jy: function () {
        return I;
    }
});
var i = n(570140),
    a = n(519938),
    s = n(317770),
    o = n(928518),
    l = n(592125),
    u = n(819640),
    c = n(366050),
    d = n(19780),
    f = n(944486),
    _ = n(914010),
    p = n(979651),
    h = n(317381),
    m = n(316253),
    g = n(719296),
    E = n(958185),
    v = n(981631);
function b(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function I(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function T() {
    let e = h.ZP.getConnectedActivityChannelId(),
        t = h.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : v.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t
        ? (function () {
              let e = r;
              null != e && c.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
          })()
        : (function (e, t) {
              if ((0, m.Z)() || c.Z.isOpen(t)) return !1;
              if (null != r) {
                  let e = r;
                  i.Z.wait(() => a.xv(e));
              }
              i.Z.wait(() => a.bA(t, v.NYg.EMBED_IFRAME, { channel: e })), (r = t);
          })(n, (0, g.Z)(e, t.applicationId));
}
function S() {
    return (0, E.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: o.Z
    })
        ? b()
        : I();
}
class y extends s.Z {
    _initialize() {
        f.Z.addChangeListener(T), _.Z.addChangeListener(T), d.Z.addChangeListener(T), p.Z.addChangeListener(T), o.Z.addChangeListener(T), h.ZP.addChangeListener(T), u.Z.addChangeListener(S);
    }
    _terminate() {
        f.Z.removeChangeListener(T), _.Z.removeChangeListener(T), d.Z.removeChangeListener(T), p.Z.removeChangeListener(T), o.Z.removeChangeListener(T), h.ZP.removeChangeListener(T), u.Z.removeChangeListener(S);
    }
}
t.ZP = new y();

let r;
n.d(t, {
    RI: function () {
        return T;
    },
    jy: function () {
        return S;
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
    _ = n(944486),
    E = n(914010),
    f = n(979651),
    h = n(317381),
    p = n(719296),
    I = n(958185),
    m = n(981631);
function T(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.Cp(t));
}
function S(e) {
    let t = null != e ? e : r;
    null != t && c.Z.isOpen(t) && i.Z.wait(() => a.$Z(t));
}
function g() {
    let e = h.ZP.getConnectedActivityChannelId(),
        t = h.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : m.lds),
        n = l.Z.getChannel(e);
    return null == e || null == n || null == t
        ? (function () {
              let e = r;
              null != e && c.Z.isOpen(e) && (i.Z.wait(() => a.xv(e)), (r = null));
          })()
        : (function (e, t) {
              if (c.Z.isOpen(t)) return !1;
              if (null != r) {
                  let e = r;
                  i.Z.wait(() => a.xv(e));
              }
              i.Z.wait(() => a.bA(t, m.NYg.EMBED_IFRAME, { channel: e })), (r = t);
          })(n, (0, p.Z)(e, t.applicationId));
}
function A() {
    return (0, I.Z)({
        LayerStore: u.Z,
        PopoutWindowStore: o.Z
    })
        ? T()
        : S();
}
class N extends s.Z {
    _initialize() {
        _.Z.addChangeListener(g), E.Z.addChangeListener(g), d.Z.addChangeListener(g), f.Z.addChangeListener(g), o.Z.addChangeListener(g), h.ZP.addChangeListener(g), u.Z.addChangeListener(A);
    }
    _terminate() {
        _.Z.removeChangeListener(g), E.Z.removeChangeListener(g), d.Z.removeChangeListener(g), f.Z.removeChangeListener(g), o.Z.removeChangeListener(g), h.ZP.removeChangeListener(g), u.Z.removeChangeListener(A);
    }
}
t.ZP = new N();

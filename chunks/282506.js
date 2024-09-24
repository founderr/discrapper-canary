let i;
var a = n(570140),
    s = n(519938),
    r = n(317770),
    l = n(317381),
    o = n(928518),
    c = n(199902),
    d = n(592125),
    u = n(819640),
    _ = n(131951),
    E = n(366050),
    h = n(19780),
    m = n(944486),
    I = n(914010),
    g = n(979651),
    p = n(981631),
    T = n(65154);
function f() {
    var e;
    let t = i;
    if (null == t || !E.Z.isOpen(t)) return !1;
    a.Z.wait(() => s.xv(t)), null === (e = h.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), (i = null);
}
function S() {
    let e = h.Z.getChannelId(),
        t = i === e;
    return (function () {
        let e = h.Z.getChannelId(),
            t = m.Z.getChannelId();
        if (!_.Z.supports(T.AN.VIDEO) || o.Z.getWindowOpen(p.KJ3.CHANNEL_CALL_POPOUT)) return !0;
        let n = c.Z.getAllActiveStreams().length > 0,
            i =
                null != e &&
                Object.values(g.Z.getVideoVoiceStatesForChannel(e)).some((e) => {
                    let { userId: t } = e;
                    return !_.Z.isLocalVideoDisabled(t);
                });
        if (!(i || n)) return !0;
        let a = u.Z.hasLayers();
        return !(a && u.Z.getLayers().includes(p.S9g.RTC_DEBUG)) && (!!a || e === t || !1);
    })()
        ? f()
        : (!t && f(),
          null != e &&
              (function (e) {
                  var t;
                  let n = d.Z.getChannel(e);
                  if (null == n || E.Z.isOpen(e)) return !1;
                  a.Z.wait(() => s.bA(n.id, p.NYg.VIDEO, { channel: n })), null === (t = h.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), (i = e);
              })(e));
}
class C extends r.Z {
    _initialize() {
        m.Z.addChangeListener(S), I.Z.addChangeListener(S), h.Z.addChangeListener(S), g.Z.addChangeListener(S), u.Z.addChangeListener(S), c.Z.addChangeListener(S), o.Z.addChangeListener(S), _.Z.addChangeListener(S), l.ZP.addChangeListener(S);
    }
    _terminate() {
        m.Z.removeChangeListener(S), I.Z.removeChangeListener(S), h.Z.removeChangeListener(S), g.Z.removeChangeListener(S), u.Z.removeChangeListener(S), c.Z.removeChangeListener(S), o.Z.removeChangeListener(S), _.Z.removeChangeListener(S), l.ZP.removeChangeListener(S);
    }
}
t.Z = new C();

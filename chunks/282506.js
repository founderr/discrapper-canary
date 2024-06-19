let i;
var s = n(570140),
  l = n(519938),
  a = n(317770),
  r = n(317381),
  o = n(928518),
  c = n(199902),
  u = n(592125),
  d = n(819640),
  E = n(131951),
  h = n(366050),
  _ = n(19780),
  I = n(944486),
  m = n(914010),
  g = n(979651),
  p = n(981631),
  T = n(65154);

function N() {
  var e;
  let t = i;
  if (null == t || !h.Z.isOpen(t)) return !1;
  s.Z.wait(() => l.xv(t)), null === (e = _.Z.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), i = null
}

function S() {
  let e = _.Z.getChannelId(),
    t = i === e;
  return function() {
    let e = _.Z.getChannelId(),
      t = I.Z.getChannelId();
    if (!E.Z.supports(T.AN.VIDEO) || o.Z.getWindowOpen(p.KJ3.CHANNEL_CALL_POPOUT)) return !0;
    let n = c.Z.getAllActiveStreams().length > 0,
      i = null != e && Object.values(g.Z.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !E.Z.isLocalVideoDisabled(t)
      });
    if (!(i || n)) return !0;
    let s = d.Z.hasLayers();
    return !(s && d.Z.getLayers().includes(p.S9g.RTC_DEBUG)) && (!!s || e === t || !1)
  }() ? N() : (!t && N(), null != e && function(e) {
    var t;
    let n = u.Z.getChannel(e);
    if (null == n || h.Z.isOpen(e)) return !1;
    s.Z.wait(() => l.bA(n.id, p.NYg.VIDEO, {
      channel: n
    })), null === (t = _.Z.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), i = e
  }(e))
}
class C extends a.Z {
  _initialize() {
    I.Z.addChangeListener(S), m.Z.addChangeListener(S), _.Z.addChangeListener(S), g.Z.addChangeListener(S), d.Z.addChangeListener(S), c.Z.addChangeListener(S), o.Z.addChangeListener(S), E.Z.addChangeListener(S), r.ZP.addChangeListener(S)
  }
  _terminate() {
    I.Z.removeChangeListener(S), m.Z.removeChangeListener(S), _.Z.removeChangeListener(S), g.Z.removeChangeListener(S), d.Z.removeChangeListener(S), c.Z.removeChangeListener(S), o.Z.removeChangeListener(S), E.Z.removeChangeListener(S), r.ZP.removeChangeListener(S)
  }
}
t.Z = new C
"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("913144"),
  l = n("600965"),
  i = n("316272"),
  r = n("191225"),
  o = n("292687"),
  u = n("373469"),
  d = n("42203"),
  c = n("778588"),
  f = n("42887"),
  E = n("449501"),
  _ = n("945956"),
  h = n("18494"),
  C = n("162771"),
  I = n("800762"),
  T = n("49111"),
  S = n("353927");

function p() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = _.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function m() {
  let e = _.default.getChannelId(),
    t = a === e;
  return function() {
    let e = _.default.getChannelId(),
      t = h.default.getChannelId(),
      n = f.default.supports(S.Features.VIDEO);
    if (!n) return !0;
    let a = o.default.getWindowOpen(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
    if (a) return !0;
    let s = u.default.getAllActiveStreams().length > 0,
      l = null != e && Object.values(I.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(l || s)) return !0;
    let i = c.default.hasLayers(),
      r = i && c.default.getLayers().includes(T.Layers.RTC_DEBUG);
    if (r) return !1;
    if (i) return !0;
    let d = e === t;
    return !!d || !1
  }() ? p() : (!t && p(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(n.id, T.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = _.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class g extends i.default {
  _initialize() {
    h.default.addChangeListener(m), C.default.addChangeListener(m), _.default.addChangeListener(m), I.default.addChangeListener(m), c.default.addChangeListener(m), u.default.addChangeListener(m), o.default.addChangeListener(m), f.default.addChangeListener(m), r.default.addChangeListener(m)
  }
  _terminate() {
    h.default.removeChangeListener(m), C.default.removeChangeListener(m), _.default.removeChangeListener(m), I.default.removeChangeListener(m), c.default.removeChangeListener(m), u.default.removeChangeListener(m), o.default.removeChangeListener(m), f.default.removeChangeListener(m), r.default.removeChangeListener(m)
  }
}
var A = new g
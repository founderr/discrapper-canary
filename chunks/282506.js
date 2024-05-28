"use strict";
let a;
n.r(t);
var s = n("570140"),
  l = n("519938"),
  i = n("317770"),
  r = n("317381"),
  o = n("928518"),
  u = n("199902"),
  d = n("592125"),
  c = n("819640"),
  f = n("131951"),
  E = n("366050"),
  C = n("19780"),
  h = n("944486"),
  _ = n("914010"),
  S = n("979651"),
  m = n("981631"),
  p = n("65154");

function I() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = C.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function g() {
  let e = C.default.getChannelId(),
    t = a === e;
  return function() {
    let e = C.default.getChannelId(),
      t = h.default.getChannelId();
    if (!f.default.supports(p.Features.VIDEO) || o.default.getWindowOpen(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT)) return !0;
    let n = u.default.getAllActiveStreams().length > 0,
      a = null != e && Object.values(S.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(a || n)) return !0;
    let s = c.default.hasLayers();
    return !(s && c.default.getLayers().includes(m.Layers.RTC_DEBUG)) && (!!s || e === t || !1)
  }() ? I() : (!t && I(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(n.id, m.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = C.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class T extends i.default {
  _initialize() {
    h.default.addChangeListener(g), _.default.addChangeListener(g), C.default.addChangeListener(g), S.default.addChangeListener(g), c.default.addChangeListener(g), u.default.addChangeListener(g), o.default.addChangeListener(g), f.default.addChangeListener(g), r.default.addChangeListener(g)
  }
  _terminate() {
    h.default.removeChangeListener(g), _.default.removeChangeListener(g), C.default.removeChangeListener(g), S.default.removeChangeListener(g), c.default.removeChangeListener(g), u.default.removeChangeListener(g), o.default.removeChangeListener(g), f.default.removeChangeListener(g), r.default.removeChangeListener(g)
  }
}
t.default = new T
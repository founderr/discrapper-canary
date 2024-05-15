"use strict";
let a;
n.r(t);
var s = n("570140"),
  i = n("519938"),
  l = n("317770"),
  r = n("317381"),
  o = n("928518"),
  u = n("199902"),
  d = n("592125"),
  c = n("819640"),
  f = n("131951"),
  E = n("366050"),
  h = n("19780"),
  _ = n("944486"),
  C = n("914010"),
  m = n("979651"),
  p = n("981631"),
  S = n("65154");

function g() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => i.close(t)), null === (e = h.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function I() {
  let e = h.default.getChannelId(),
    t = a === e;
  return function() {
    let e = h.default.getChannelId(),
      t = _.default.getChannelId();
    if (!f.default.supports(S.Features.VIDEO) || o.default.getWindowOpen(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT)) return !0;
    let n = u.default.getAllActiveStreams().length > 0,
      a = null != e && Object.values(m.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(a || n)) return !0;
    let s = c.default.hasLayers();
    return !(s && c.default.getLayers().includes(p.Layers.RTC_DEBUG)) && (!!s || e === t || !1)
  }() ? g() : (!t && g(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => i.open(n.id, p.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = h.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class T extends l.default {
  _initialize() {
    _.default.addChangeListener(I), C.default.addChangeListener(I), h.default.addChangeListener(I), m.default.addChangeListener(I), c.default.addChangeListener(I), u.default.addChangeListener(I), o.default.addChangeListener(I), f.default.addChangeListener(I), r.default.addChangeListener(I)
  }
  _terminate() {
    _.default.removeChangeListener(I), C.default.removeChangeListener(I), h.default.removeChangeListener(I), m.default.removeChangeListener(I), c.default.removeChangeListener(I), u.default.removeChangeListener(I), o.default.removeChangeListener(I), f.default.removeChangeListener(I), r.default.removeChangeListener(I)
  }
}
t.default = new T
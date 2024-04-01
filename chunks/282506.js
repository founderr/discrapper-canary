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
  _ = n("19780"),
  h = n("944486"),
  C = n("914010"),
  S = n("979651"),
  m = n("981631"),
  I = n("65154");

function p() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = _.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function T() {
  let e = _.default.getChannelId(),
    t = a === e;
  return function() {
    let e = _.default.getChannelId(),
      t = h.default.getChannelId();
    if (!f.default.supports(I.Features.VIDEO) || o.default.getWindowOpen(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT)) return !0;
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
  }() ? p() : (!t && p(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(n.id, m.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = _.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class g extends i.default {
  _initialize() {
    h.default.addChangeListener(T), C.default.addChangeListener(T), _.default.addChangeListener(T), S.default.addChangeListener(T), c.default.addChangeListener(T), u.default.addChangeListener(T), o.default.addChangeListener(T), f.default.addChangeListener(T), r.default.addChangeListener(T)
  }
  _terminate() {
    h.default.removeChangeListener(T), C.default.removeChangeListener(T), _.default.removeChangeListener(T), S.default.removeChangeListener(T), c.default.removeChangeListener(T), u.default.removeChangeListener(T), o.default.removeChangeListener(T), f.default.removeChangeListener(T), r.default.removeChangeListener(T)
  }
}
t.default = new g
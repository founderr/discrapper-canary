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
  h = n("19780"),
  _ = n("944486"),
  C = n("914010"),
  m = n("979651"),
  S = n("981631"),
  I = n("65154");

function T() {
  var e;
  let t = a;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = h.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), a = null
}

function p() {
  let e = h.default.getChannelId(),
    t = a === e;
  return function() {
    let e = h.default.getChannelId(),
      t = _.default.getChannelId();
    if (!f.default.supports(I.Features.VIDEO) || o.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT)) return !0;
    let n = u.default.getAllActiveStreams().length > 0,
      a = null != e && Object.values(m.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(a || n)) return !0;
    let s = c.default.hasLayers();
    return !(s && c.default.getLayers().includes(S.Layers.RTC_DEBUG)) && (!!s || e === t || !1)
  }() ? T() : (!t && T(), null != e && function(e) {
    var t;
    let n = d.default.getChannel(e);
    if (null == n || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(n.id, S.PictureInPictureComponents.VIDEO, {
      channel: n
    })), null === (t = h.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), a = e
  }(e))
}
class g extends i.default {
  _initialize() {
    _.default.addChangeListener(p), C.default.addChangeListener(p), h.default.addChangeListener(p), m.default.addChangeListener(p), c.default.addChangeListener(p), u.default.addChangeListener(p), o.default.addChangeListener(p), f.default.addChangeListener(p), r.default.addChangeListener(p)
  }
  _terminate() {
    _.default.removeChangeListener(p), C.default.removeChangeListener(p), h.default.removeChangeListener(p), m.default.removeChangeListener(p), c.default.removeChangeListener(p), u.default.removeChangeListener(p), o.default.removeChangeListener(p), f.default.removeChangeListener(p), r.default.removeChangeListener(p)
  }
}
t.default = new g
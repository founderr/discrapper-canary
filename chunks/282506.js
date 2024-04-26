"use strict";
let n;
a.r(t);
var s = a("570140"),
  l = a("519938"),
  i = a("317770"),
  r = a("317381"),
  o = a("928518"),
  u = a("199902"),
  d = a("592125"),
  c = a("819640"),
  f = a("131951"),
  E = a("366050"),
  h = a("19780"),
  _ = a("944486"),
  C = a("914010"),
  m = a("979651"),
  S = a("981631"),
  p = a("65154");

function I() {
  var e;
  let t = n;
  if (null == t || !E.default.isOpen(t)) return !1;
  s.default.wait(() => l.close(t)), null === (e = h.default.getRTCConnection()) || void 0 === e || e.setPipOpen(!1), n = null
}

function T() {
  let e = h.default.getChannelId(),
    t = n === e;
  return function() {
    let e = h.default.getChannelId(),
      t = _.default.getChannelId();
    if (!f.default.supports(p.Features.VIDEO) || o.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT)) return !0;
    let a = u.default.getAllActiveStreams().length > 0,
      n = null != e && Object.values(m.default.getVideoVoiceStatesForChannel(e)).some(e => {
        let {
          userId: t
        } = e;
        return !f.default.isLocalVideoDisabled(t)
      });
    if (!(n || a)) return !0;
    let s = c.default.hasLayers();
    return !(s && c.default.getLayers().includes(S.Layers.RTC_DEBUG)) && (!!s || e === t || !1)
  }() ? I() : (!t && I(), null != e && function(e) {
    var t;
    let a = d.default.getChannel(e);
    if (null == a || E.default.isOpen(e)) return !1;
    s.default.wait(() => l.open(a.id, S.PictureInPictureComponents.VIDEO, {
      channel: a
    })), null === (t = h.default.getRTCConnection()) || void 0 === t || t.setPipOpen(!0), n = e
  }(e))
}
class g extends i.default {
  _initialize() {
    _.default.addChangeListener(T), C.default.addChangeListener(T), h.default.addChangeListener(T), m.default.addChangeListener(T), c.default.addChangeListener(T), u.default.addChangeListener(T), o.default.addChangeListener(T), f.default.addChangeListener(T), r.default.addChangeListener(T)
  }
  _terminate() {
    _.default.removeChangeListener(T), C.default.removeChangeListener(T), h.default.removeChangeListener(T), m.default.removeChangeListener(T), c.default.removeChangeListener(T), u.default.removeChangeListener(T), o.default.removeChangeListener(T), f.default.removeChangeListener(T), r.default.removeChangeListener(T)
  }
}
t.default = new g
"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("913144"),
  l = n("600965"),
  i = n("316272"),
  r = n("292687"),
  o = n("42203"),
  u = n("778588"),
  d = n("449501"),
  c = n("945956"),
  f = n("18494"),
  E = n("162771"),
  h = n("800762"),
  _ = n("191225"),
  C = n("420444"),
  I = n("320817"),
  S = n("49111");

function p() {
  let e = c.default.getChannelId(),
    t = _.default.getConnectedActivityChannelId(),
    n = _.default.getSelfEmbeddedActivityForChannel(null != t ? t : ""),
    i = o.default.getChannel(e),
    r = o.default.getChannel(t),
    u = null == t || (null == e || null == i) && (0, C.default)(t);
  if (u || null == t || null == r || null == n) return function() {
    let e = a;
    null != e && d.default.isOpen(e) && (s.default.wait(() => l.close(e)), a = null)
  }();
  {
    let e = (0, I.default)(t, n.applicationId);
    return function(e, t) {
      if (d.default.isOpen(t)) return !1;
      s.default.wait(() => l.open(t, S.PictureInPictureComponents.EMBED_IFRAME, {
        channel: e
      })), a = t
    }(r, e)
  }
}

function m() {
  let e = u.default.hasLayers(),
    t = r.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return e && !t ? function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => l.hide(e))
  }() : function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => l.show(e))
  }()
}
class T extends i.default {
  _initialize() {
    f.default.addChangeListener(p), E.default.addChangeListener(p), c.default.addChangeListener(p), h.default.addChangeListener(p), r.default.addChangeListener(p), _.default.addChangeListener(p), u.default.addChangeListener(m)
  }
  _terminate() {
    f.default.removeChangeListener(p), E.default.removeChangeListener(p), c.default.removeChangeListener(p), h.default.removeChangeListener(p), r.default.removeChangeListener(p), _.default.removeChangeListener(p), u.default.removeChangeListener(m)
  }
}
var g = new T
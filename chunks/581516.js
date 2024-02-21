"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var s = n("913144"),
  i = n("600965"),
  l = n("316272"),
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

function m() {
  let e = c.default.getChannelId(),
    t = _.default.getConnectedActivityChannelId(),
    n = _.default.getSelfEmbeddedActivityForChannel(null != t ? t : S.EMPTY_STRING_CHANNEL_ID),
    l = o.default.getChannel(e),
    r = o.default.getChannel(t),
    u = null == t || (null == e || null == l) && (0, C.default)(t);
  if (u || null == t || null == r || null == n) return function() {
    let e = a;
    null != e && d.default.isOpen(e) && (s.default.wait(() => i.close(e)), a = null)
  }();
  {
    let e = (0, I.default)(t, n.applicationId);
    return function(e, t) {
      if (d.default.isOpen(t)) return !1;
      s.default.wait(() => i.open(t, S.PictureInPictureComponents.EMBED_IFRAME, {
        channel: e
      })), a = t
    }(r, e)
  }
}

function p() {
  let e = u.default.hasLayers(),
    t = r.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return e && !t ? function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => i.hide(e))
  }() : function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => i.show(e))
  }()
}
class T extends l.default {
  _initialize() {
    f.default.addChangeListener(m), E.default.addChangeListener(m), c.default.addChangeListener(m), h.default.addChangeListener(m), r.default.addChangeListener(m), _.default.addChangeListener(m), u.default.addChangeListener(p)
  }
  _terminate() {
    f.default.removeChangeListener(m), E.default.removeChangeListener(m), c.default.removeChangeListener(m), h.default.removeChangeListener(m), r.default.removeChangeListener(m), _.default.removeChangeListener(m), u.default.removeChangeListener(p)
  }
}
var g = new T
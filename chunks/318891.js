"use strict";
let a;
n.r(t);
var s = n("570140"),
  l = n("519938"),
  i = n("317770"),
  r = n("928518"),
  o = n("592125"),
  u = n("819640"),
  d = n("366050"),
  c = n("19780"),
  f = n("944486"),
  E = n("914010"),
  h = n("979651"),
  _ = n("317381"),
  C = n("917107"),
  S = n("719296"),
  m = n("981631");

function p() {
  let e = c.default.getChannelId(),
    t = _.default.getConnectedActivityChannelId(),
    n = _.default.getSelfEmbeddedActivityForChannel(null != t ? t : m.EMPTY_STRING_SNOWFLAKE_ID),
    i = o.default.getChannel(e),
    r = o.default.getChannel(t);
  return null == t || (null == e || null == i) && (0, C.default)(t) || null == t || null == r || null == n ? function() {
    let e = a;
    null != e && d.default.isOpen(e) && (s.default.wait(() => l.close(e)), a = null)
  }() : function(e, t) {
    if (d.default.isOpen(t)) return !1;
    s.default.wait(() => l.open(t, m.PictureInPictureComponents.EMBED_IFRAME, {
      channel: e
    })), a = t
  }(r, (0, S.default)(t, n.applicationId))
}

function I() {
  let e = u.default.hasLayers(),
    t = r.default.getWindowOpen(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
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
    f.default.addChangeListener(p), E.default.addChangeListener(p), c.default.addChangeListener(p), h.default.addChangeListener(p), r.default.addChangeListener(p), _.default.addChangeListener(p), u.default.addChangeListener(I)
  }
  _terminate() {
    f.default.removeChangeListener(p), E.default.removeChangeListener(p), c.default.removeChangeListener(p), h.default.removeChangeListener(p), r.default.removeChangeListener(p), _.default.removeChangeListener(p), u.default.removeChangeListener(I)
  }
}
t.default = new T
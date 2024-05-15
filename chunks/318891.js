"use strict";
let a;
n.r(t);
var s = n("570140"),
  i = n("519938"),
  l = n("317770"),
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
  m = n("719296"),
  p = n("981631");

function S() {
  let e = c.default.getChannelId(),
    t = _.default.getConnectedActivityChannelId(),
    n = _.default.getSelfEmbeddedActivityForChannel(null != t ? t : p.EMPTY_STRING_SNOWFLAKE_ID),
    l = o.default.getChannel(e),
    r = o.default.getChannel(t);
  return null == t || (null == e || null == l) && (0, C.default)(t) || null == t || null == r || null == n ? function() {
    let e = a;
    null != e && d.default.isOpen(e) && (s.default.wait(() => i.close(e)), a = null)
  }() : function(e, t) {
    if (d.default.isOpen(t)) return !1;
    s.default.wait(() => i.open(t, p.PictureInPictureComponents.EMBED_IFRAME, {
      channel: e
    })), a = t
  }(r, (0, m.default)(t, n.applicationId))
}

function g() {
  let e = u.default.hasLayers(),
    t = r.default.getWindowOpen(p.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return e && !t ? function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => i.hide(e))
  }() : function() {
    let e = a;
    null != e && d.default.isOpen(e) && s.default.wait(() => i.show(e))
  }()
}
class I extends l.default {
  _initialize() {
    f.default.addChangeListener(S), E.default.addChangeListener(S), c.default.addChangeListener(S), h.default.addChangeListener(S), r.default.addChangeListener(S), _.default.addChangeListener(S), u.default.addChangeListener(g)
  }
  _terminate() {
    f.default.removeChangeListener(S), E.default.removeChangeListener(S), c.default.removeChangeListener(S), h.default.removeChangeListener(S), r.default.removeChangeListener(S), _.default.removeChangeListener(S), u.default.removeChangeListener(g)
  }
}
t.default = new I
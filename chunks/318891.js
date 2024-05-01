"use strict";
let n;
a.r(t);
var s = a("570140"),
  l = a("519938"),
  i = a("317770"),
  r = a("928518"),
  o = a("592125"),
  u = a("819640"),
  d = a("366050"),
  c = a("19780"),
  f = a("944486"),
  E = a("914010"),
  h = a("979651"),
  _ = a("317381"),
  C = a("917107"),
  m = a("719296"),
  S = a("981631");

function p() {
  let e = c.default.getChannelId(),
    t = _.default.getConnectedActivityChannelId(),
    a = _.default.getSelfEmbeddedActivityForChannel(null != t ? t : S.EMPTY_STRING_SNOWFLAKE_ID),
    i = o.default.getChannel(e),
    r = o.default.getChannel(t);
  return null == t || (null == e || null == i) && (0, C.default)(t) || null == t || null == r || null == a ? function() {
    let e = n;
    null != e && d.default.isOpen(e) && (s.default.wait(() => l.close(e)), n = null)
  }() : function(e, t) {
    if (d.default.isOpen(t)) return !1;
    s.default.wait(() => l.open(t, S.PictureInPictureComponents.EMBED_IFRAME, {
      channel: e
    })), n = t
  }(r, (0, m.default)(t, a.applicationId))
}

function I() {
  let e = u.default.hasLayers(),
    t = r.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return e && !t ? function() {
    let e = n;
    null != e && d.default.isOpen(e) && s.default.wait(() => l.hide(e))
  }() : function() {
    let e = n;
    null != e && d.default.isOpen(e) && s.default.wait(() => l.show(e))
  }()
}
class g extends i.default {
  _initialize() {
    f.default.addChangeListener(p), E.default.addChangeListener(p), c.default.addChangeListener(p), h.default.addChangeListener(p), r.default.addChangeListener(p), _.default.addChangeListener(p), u.default.addChangeListener(I)
  }
  _terminate() {
    f.default.removeChangeListener(p), E.default.removeChangeListener(p), c.default.removeChangeListener(p), h.default.removeChangeListener(p), r.default.removeChangeListener(p), _.default.removeChangeListener(p), u.default.removeChangeListener(I)
  }
}
t.default = new g
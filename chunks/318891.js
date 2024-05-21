"use strict";
let i;
n.r(t), n.d(t, {
  hidePIPEmbed: function() {
    return h
  },
  showPIPEmbed: function() {
    return A
  }
});
var r = n("570140"),
  a = n("519938"),
  s = n("317770"),
  o = n("928518"),
  l = n("592125"),
  u = n("819640"),
  d = n("366050"),
  _ = n("19780"),
  c = n("944486"),
  E = n("914010"),
  I = n("979651"),
  T = n("317381"),
  f = n("719296"),
  S = n("981631");

function h(e) {
  let t = null != e ? e : i;
  null != t && d.default.isOpen(t) && r.default.wait(() => a.hide(t))
}

function A(e) {
  let t = null != e ? e : i;
  null != t && d.default.isOpen(t) && r.default.wait(() => a.show(t))
}

function m() {
  let e = T.default.getConnectedActivityChannelId(),
    t = T.default.getSelfEmbeddedActivityForChannel(null != e ? e : S.EMPTY_STRING_SNOWFLAKE_ID),
    n = l.default.getChannel(e);
  return null == e || null == n || null == t ? function() {
    let e = i;
    null != e && d.default.isOpen(e) && (r.default.wait(() => a.close(e)), i = null)
  }() : function(e, t) {
    if (d.default.isOpen(t)) return !1;
    r.default.wait(() => a.open(t, S.PictureInPictureComponents.EMBED_IFRAME, {
      channel: e
    })), i = t
  }(n, (0, f.default)(e, t.applicationId))
}

function N() {
  let e = u.default.hasLayers(),
    t = o.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return e && !t ? h() : A()
}
class p extends s.default {
  _initialize() {
    c.default.addChangeListener(m), E.default.addChangeListener(m), _.default.addChangeListener(m), I.default.addChangeListener(m), o.default.addChangeListener(m), T.default.addChangeListener(m), u.default.addChangeListener(N)
  }
  _terminate() {
    c.default.removeChangeListener(m), E.default.removeChangeListener(m), _.default.removeChangeListener(m), I.default.removeChangeListener(m), o.default.removeChangeListener(m), T.default.removeChangeListener(m), u.default.removeChangeListener(N)
  }
}
t.default = new p
"use strict";
let i;
n.r(t), n.d(t, {
  hidePIPEmbed: function() {
    return A
  },
  showPIPEmbed: function() {
    return m
  }
});
var r = n("570140"),
  s = n("519938"),
  a = n("317770"),
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
  S = n("958185"),
  h = n("981631");

function A(e) {
  let t = null != e ? e : i;
  null != t && d.default.isOpen(t) && r.default.wait(() => s.hide(t))
}

function m(e) {
  let t = null != e ? e : i;
  null != t && d.default.isOpen(t) && r.default.wait(() => s.show(t))
}

function N() {
  let e = T.default.getConnectedActivityChannelId(),
    t = T.default.getSelfEmbeddedActivityForChannel(null != e ? e : h.EMPTY_STRING_SNOWFLAKE_ID),
    n = l.default.getChannel(e);
  return null == e || null == n || null == t ? function() {
    let e = i;
    null != e && d.default.isOpen(e) && (r.default.wait(() => s.close(e)), i = null)
  }() : function(e, t) {
    if (d.default.isOpen(t)) return !1;
    r.default.wait(() => s.open(t, h.PictureInPictureComponents.EMBED_IFRAME, {
      channel: e
    })), i = t
  }(n, (0, f.default)(e, t.applicationId))
}

function p() {
  return (0, S.default)({
    LayerStore: u.default,
    PopoutWindowStore: o.default
  }) ? A() : m()
}
class O extends a.default {
  _initialize() {
    c.default.addChangeListener(N), E.default.addChangeListener(N), _.default.addChangeListener(N), I.default.addChangeListener(N), o.default.addChangeListener(N), T.default.addChangeListener(N), u.default.addChangeListener(p)
  }
  _terminate() {
    c.default.removeChangeListener(N), E.default.removeChangeListener(N), _.default.removeChangeListener(N), I.default.removeChangeListener(N), o.default.removeChangeListener(N), T.default.removeChangeListener(N), u.default.removeChangeListener(p)
  }
}
t.default = new O
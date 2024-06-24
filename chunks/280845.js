t.d(n, {
  U: function() {
    return f
  },
  o: function() {
    return I
  }
}), t(47120);
var i = t(275726),
  a = t(442837),
  r = t(71619),
  l = t(665906),
  o = t(496675),
  u = t(594174),
  s = t(981631),
  d = t(231338);

function c(e, n, t) {
  let a;
  return (a = e.isPrivate() ? !e.isSystemDM() : t.can(d.Pl.SEND_MESSAGES, e) && t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type)
}

function E(e, n, t, i, a) {
  let r = n.hasFlag(s.iLy.EPHEMERAL),
    l = n.state === s.yb.SENT,
    o = !e.isArchivedThread() || a;
  return t && l && !r && !i && o
}

function f(e, n) {
  var t;
  let i = (0, l.tc)(e),
    [, u] = (0, r.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
    s = (0, a.e7)([o.Z], () => null != e && null != n && c(e, n, o.Z));
  return null != e && null != n && E(e, n, s, u, i)
}

function I(e, n) {
  var t;
  let i = (0, l.kn)(e),
    a = c(e, n, o.Z),
    s = u.default.getCurrentUser(),
    [, d] = (0, r.s5)(null == s ? void 0 : s.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
  return E(e, n, a, d, i)
}
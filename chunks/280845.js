t.d(n, {
  U: function() {
    return f
  },
  o: function() {
    return M
  }
}), t(47120);
var i = t(275726),
  a = t(442837),
  l = t(71619),
  r = t(665906),
  o = t(496675),
  u = t(594174),
  s = t(981631),
  c = t(231338);

function d(e, n, t) {
  let a;
  return (a = e.isPrivate() ? !e.isSystemDM() : t.can(c.Pl.SEND_MESSAGES, e) && t.can(c.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type)
}

function E(e, n, t, i, a) {
  let l = n.hasFlag(s.iLy.EPHEMERAL),
    r = n.state === s.yb.SENT,
    o = !e.isArchivedThread() || a;
  return t && r && !l && !i && o
}

function f(e, n) {
  var t;
  let i = (0, r.tc)(e),
    [, u] = (0, l.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
    s = (0, a.e7)([o.Z], () => null != e && null != n && d(e, n, o.Z));
  return null != e && null != n && E(e, n, s, u, i)
}

function M(e, n) {
  var t;
  let i = (0, r.kn)(e),
    a = d(e, n, o.Z),
    s = u.default.getCurrentUser(),
    [, c] = (0, l.s5)(null == s ? void 0 : s.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
  return E(e, n, a, c, i)
}
n.d(t, {
  U: function() {
return E;
  },
  o: function() {
return I;
  }
}), n(47120);
var i = n(275726),
  s = n(442837),
  a = n(71619),
  r = n(665906),
  l = n(496675),
  o = n(594174),
  c = n(981631),
  u = n(231338);

function d(e, t, n) {
  let s;
  return (s = e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(t.type);
}

function _(e, t, n, i, s) {
  let a = t.hasFlag(c.iLy.EPHEMERAL),
r = t.state === c.yb.SENT,
l = !e.isArchivedThread() || s;
  return n && r && !a && !i && l;
}

function E(e, t) {
  var n;
  let i = (0, r.tc)(e),
[, o] = (0, a.AB)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
c = (0, s.e7)([l.Z], () => null != e && null != t && d(e, t, l.Z));
  return null != e && null != t && _(e, t, c, o, i);
}

function I(e, t) {
  var n;
  let i = (0, r.kn)(e),
s = d(e, t, l.Z),
c = o.default.getCurrentUser(),
[, u] = (0, a.s5)(null == c ? void 0 : c.id, null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
  return _(e, t, s, u, i);
}
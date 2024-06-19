n.d(t, {
  $: function() {
    return u
  }
});
var l = n(442837),
  i = n(355298),
  s = n(88101),
  a = n(375954),
  r = n(699516),
  o = n(594174),
  c = n(981631);

function u(e) {
  let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
    n = t ? e.getRecipientId() : null,
    u = (0, s.P)(e.id, "dm_convo_starter");
  return (0, l.e7)([a.Z, i.Z, r.Z, o.default], () => {
    if (null != u || !t || i.Z.isMessageRequest(e.id) || null != n && r.Z.getRelationshipType(n) === c.OGo.BLOCKED) return !1;
    if (null != n) {
      let e = o.default.getUser(n);
      if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1
    }
    let l = a.Z.getMessages(e.id);
    return l.ready && !l.hasMoreBefore && !l.hasMoreAfter && l.length < 25 && !a.Z.hasCurrentUserSentMessage(e.id)
  }, [u, t, e.id, n])
}
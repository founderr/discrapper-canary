n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(493683),
  r = n(367907),
  o = n(205129),
  c = n(626135),
  u = n(981631),
  d = n(689938);

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      priorityMembers: n,
      partiedMembers: E
    } = e,
    h = i.useContext(c.AnalyticsContext),
    _ = n.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    I = 1 === E.length && 1 === n.length,
    m = n.length - E.length > 0;
  return (I || t) && !m && 0 !== _.length ? (0, s.jsx)(l.MenuItem, {
    id: "message",
    action: function() {
      a.Z.openPrivateChannel(_).then(t => r.ZP.trackWithMetadata(u.rMx.ACTIVITY_FEED_DM_VISITED, {
        source: {
          ...h.location,
          object: u.qAy.LIST_ITEM
        },
        channel_id: t,
        recipient_id: "string" == typeof _ ? _ : _[0],
        af_recently_played: !1,
        ...(0, o.y)(e)
      }))
    },
    label: d.Z.Messages.SEND_DM
  }) : null
}
"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("493683"),
  r = a("367907"),
  o = a("205129"),
  u = a("626135"),
  d = a("981631"),
  c = a("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      priorityMembers: a,
      partiedMembers: f
    } = e,
    E = s.useContext(u.AnalyticsContext),
    h = a.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    _ = 1 === f.length && 1 === a.length,
    C = a.length - f.length > 0;
  return (_ || t) && !C && 0 !== h.length ? (0, n.jsx)(l.MenuItem, {
    id: "message",
    action: function() {
      i.default.openPrivateChannel(h).then(t => r.default.trackWithMetadata(d.AnalyticEvents.ACTIVITY_FEED_DM_VISITED, {
        source: {
          ...E.location,
          object: d.AnalyticsObjects.LIST_ITEM
        },
        channel_id: t,
        recipient_id: "string" == typeof h ? h : h[0],
        af_recently_played: !1,
        ...(0, o.getPartyMetadata)(e)
      }))
    },
    label: c.default.Messages.SEND_DM
  }) : null
}
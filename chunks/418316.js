"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("924301");
n("57132");
var l = n("430824"),
  s = n("699516"),
  i = n("594174"),
  r = n("624138"),
  o = n("51144"),
  u = n("497089"),
  d = n("981631"),
  c = n("689938");

function f(e) {
  var t, n, f, h, E, m, p, S, g, _, N, I, T, C, A;
  let v = null !== (f = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== f ? f : d.EMPTY_STRING_SNOWFLAKE_ID,
    R = o.default.getName(i.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
  switch (e.type) {
    case u.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: "**".concat(R, "**")
      });
    case u.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED:
      let x = o.default.getName(i.default.getUser(null === (E = e.other_users) || void 0 === E ? void 0 : null === (h = E[0]) || void 0 === h ? void 0 : h.id)),
        M = o.default.getName(i.default.getUser(null === (p = e.other_users) || void 0 === p ? void 0 : null === (m = p[1]) || void 0 === m ? void 0 : m.id)),
        L = Math.max((null !== (g = null === (S = e.other_users) || void 0 === S ? void 0 : S.length) && void 0 !== g ? g : 0) - 2, 0);
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
        user: x,
        user2: M,
        count: L
      });
    case u.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let b = null !== (N = null === (_ = e.local_id) || void 0 === _ ? void 0 : _.split("_").pop()) && void 0 !== N ? N : "unknown";
      return "Update to build ".concat(b, " available!");
    case u.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
      let O = s.default.getRelationshipType(v) === d.RelationshipTypes.PENDING_OUTGOING;
      return null !== (I = e.body) && void 0 !== I ? I : "";
    case u.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED:
      let y = e.guild_scheduled_event_id,
        j = null != y ? a.default.getGuildScheduledEvent(y) : null,
        D = null == j ? void 0 : j.name,
        F = null === (T = l.default.getGuild(null == j ? void 0 : j.guild_id)) || void 0 === T ? void 0 : T.name,
        P = (0, a.isGuildEventEnded)(null != j ? j : void 0);
      return (0, r.isNullOrEmpty)(F) || (0, r.isNullOrEmpty)(D) || !P ? null !== (C = e.body) && void 0 !== C ? C : "" : c.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
        event_name: D,
        guild_name: F
      });
    case u.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
        username: "**".concat(R, "**")
      })
  }
  return null !== (A = e.body) && void 0 !== A ? A : ""
}
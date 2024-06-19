n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(924301);
n(57132);
var i = n(430824),
  l = n(699516),
  a = n(594174),
  r = n(624138),
  o = n(51144),
  c = n(497089),
  u = n(981631),
  d = n(689938);

function E(e) {
  var t, n, E, _, I, T, N, m, h, C, S, A, p, g, f;
  let O = null !== (E = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== E ? E : u.lds,
    R = o.ZP.getName(a.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
  switch (e.type) {
    case c.O7.INCOMING_FRIEND_REQUESTS:
      return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: "**".concat(R, "**")
      });
    case c.O7.FRIEND_REQUESTS_GROUPED:
      let M = o.ZP.getName(a.default.getUser(null === (I = e.other_users) || void 0 === I ? void 0 : null === (_ = I[0]) || void 0 === _ ? void 0 : _.id)),
        x = o.ZP.getName(a.default.getUser(null === (N = e.other_users) || void 0 === N ? void 0 : null === (T = N[1]) || void 0 === T ? void 0 : T.id)),
        v = Math.max((null !== (h = null === (m = e.other_users) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0) - 2, 0);
      return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
        user: M,
        user2: x,
        count: v
      });
    case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
      let L = null !== (S = null === (C = e.local_id) || void 0 === C ? void 0 : C.split("_").pop()) && void 0 !== S ? S : "unknown";
      return "Update to build ".concat(L, " available!");
    case c.DY.FRIEND_SUGGESTION_CREATED:
      let Z = l.Z.getRelationshipType(O) === u.OGo.PENDING_OUTGOING;
      return null !== (A = e.body) && void 0 !== A ? A : "";
    case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
      let P = e.guild_scheduled_event_id,
        D = null != P ? s.ZP.getGuildScheduledEvent(P) : null,
        j = null == D ? void 0 : D.name,
        U = null === (p = i.Z.getGuild(null == D ? void 0 : D.guild_id)) || void 0 === p ? void 0 : p.name,
        b = (0, s.Z2)(null != D ? D : void 0);
      return (0, r.Ew)(U) || (0, r.Ew)(j) || !b ? null !== (g = e.body) && void 0 !== g ? g : "" : d.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
        event_name: j,
        guild_name: U
      });
    case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
      return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
        username: "**".concat(R, "**")
      })
  }
  return null !== (f = e.body) && void 0 !== f ? f : ""
}
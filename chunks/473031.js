"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("922770"),
  a = n("267567"),
  r = n("998716"),
  s = n("834052"),
  d = n("42203"),
  o = n("957255"),
  c = n("945956"),
  f = n("697218"),
  E = n("374021"),
  v = n("398604"),
  g = n("152475"),
  S = n("202358"),
  h = n("598639"),
  m = n("189443"),
  N = n("841363"),
  p = n("822516"),
  C = n("93550"),
  _ = n("617347"),
  T = n("369404"),
  I = n("49111");

function x(e) {
  var t;
  let {
    guildEvent: n,
    guildId: x,
    truncate: D,
    onActionTaken: R,
    className: G,
    isNew: M
  } = e, {
    id: y,
    guild_id: L,
    channel_id: A,
    creator_id: U,
    name: j,
    description: V,
    entity_type: O,
    image: P,
    recurrence_rule: b
  } = n, k = (0, p.getNextRecurrenceIdInEvent)(n), F = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(y, k), [y, k]), w = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(L), [L]), H = (0, u.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(A), [A]), B = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), W = (0, u.useStateFromStores)([f.default], () => f.default.getUser(U), [U]), {
    speakers: z
  } = (0, S.default)({
    id: A,
    data: {
      guild: null,
      instance: H,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: L,
      instance: H
    }
  }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), q = (0, v.isGuildScheduledEventActive)(n), K = Y === A && null != Y && q, Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(I.Permissions.CONNECT, B), [B]), Q = (0, g.default)(n), {
    isMember: $,
    guild: ee
  } = (0, h.default)(L, y), et = (0, T.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: q,
    recurrenceId: k,
    onActionTaken: R
  }), en = (0, i.default)(x), el = w ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: y,
    parentGuildId: x,
    recurrenceId: e
  });
  return (0, l.jsx)(_.default, {
    guild: ee,
    channel: B,
    creator: W,
    name: j,
    entityType: O,
    description: null != V ? V : void 0,
    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != P ? (0, C.default)(n) : void 0,
    imageLocation: _.GuildEventBodyImageLocation.THUMBNAIL,
    isActive: q,
    isUserLurking: w,
    isJoined: K,
    isMember: $,
    isHub: en,
    speakers: Z,
    canConnect: X,
    speakerCount: J,
    rsvped: F,
    canInvite: Q,
    ...et,
    className: G,
    onClick: el,
    truncate: D,
    isNew: M,
    guildEventId: y,
    recurrenceRule: (0, m.recurrenceRuleFromServer)(b),
    recurrenceId: k
  })
}
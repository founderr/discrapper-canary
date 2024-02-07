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
  C = n("822516"),
  p = n("93550"),
  _ = n("617347"),
  I = n("369404"),
  T = n("49111");

function x(e) {
  var t;
  let {
    guildEvent: n,
    guildId: x,
    truncate: D,
    onActionTaken: G,
    className: R,
    isNew: L
  } = e, {
    id: M,
    guild_id: A,
    channel_id: U,
    creator_id: y,
    name: V,
    description: O,
    entity_type: P,
    image: j,
    recurrence_rule: k
  } = n, F = (0, C.getNextRecurrenceIdInEvent)(n), b = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(M, F), [M, F]), w = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(A), [A]), H = (0, u.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(U), [U]), B = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(U), [U]), W = (0, u.useStateFromStores)([f.default], () => f.default.getUser(y), [y]), {
    speakers: z
  } = (0, S.default)({
    id: U,
    data: {
      guild: null,
      instance: H,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: A,
      instance: H
    }
  }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), q = (0, v.isGuildScheduledEventActive)(n), K = Y === U && null != Y && q, Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(T.Permissions.CONNECT, B), [B]), Q = (0, g.default)(n), {
    isMember: $,
    guild: ee
  } = (0, h.default)(A, M), et = (0, I.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: q,
    recurrenceId: F,
    onActionTaken: G
  }), en = (0, i.default)(x), el = w ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: M,
    parentGuildId: x,
    recurrenceId: e
  });
  return (0, l.jsx)(_.default, {
    guild: ee,
    channel: B,
    creator: W,
    name: V,
    entityType: P,
    description: null != O ? O : void 0,
    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != j ? (0, p.default)(n) : void 0,
    imageLocation: _.GuildEventBodyImageLocation.THUMBNAIL,
    isActive: q,
    isUserLurking: w,
    isJoined: K,
    isMember: $,
    isHub: en,
    speakers: Z,
    canConnect: X,
    speakerCount: J,
    rsvped: b,
    canInvite: Q,
    ...et,
    className: R,
    onClick: el,
    truncate: D,
    isNew: L,
    guildEventId: M,
    recurrenceRule: (0, m.recurrenceRuleFromServer)(k),
    recurrenceId: F
  })
}
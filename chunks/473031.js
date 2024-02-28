"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  i = n("922770"),
  u = n("267567"),
  r = n("998716"),
  s = n("834052"),
  d = n("42203"),
  o = n("957255"),
  c = n("945956"),
  f = n("697218"),
  E = n("374021"),
  v = n("398604"),
  g = n("152475"),
  h = n("202358"),
  p = n("598639"),
  m = n("189443"),
  C = n("841363"),
  S = n("822516"),
  _ = n("93550"),
  N = n("617347"),
  I = n("369404"),
  T = n("49111");

function x(e) {
  var t;
  let {
    guildEvent: n,
    guildId: x,
    truncate: R,
    onActionTaken: M,
    className: L,
    isNew: G
  } = e, {
    id: D,
    guild_id: j,
    channel_id: k,
    creator_id: A,
    name: y,
    description: P,
    entity_type: V,
    image: U,
    recurrence_rule: b
  } = n, F = (0, S.getNextRecurrenceIdInEvent)(n), O = (0, a.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(D, F), [D, F]), w = (0, a.useStateFromStores)([u.default], () => u.default.isLurking(j), [j]), H = (0, a.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(k), [k]), B = (0, a.useStateFromStores)([d.default], () => d.default.getChannel(k), [k]), z = (0, a.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
    speakers: K
  } = (0, h.default)({
    id: k,
    data: {
      guild: null,
      instance: H,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: j,
      instance: H
    }
  }), q = (0, a.useStateFromStores)([c.default], () => c.default.getChannelId()), Y = (0, v.isGuildScheduledEventActive)(n), Z = q === k && null != q && Y, J = K.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), X = J.length, W = (0, a.useStateFromStores)([o.default], () => o.default.can(T.Permissions.CONNECT, B), [B]), Q = (0, g.default)(n), {
    isMember: $,
    guild: ee
  } = (0, p.default)(j, D), et = (0, I.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: Y,
    recurrenceId: F,
    onActionTaken: M
  }), en = (0, i.default)(x), el = w ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: D,
    parentGuildId: x,
    recurrenceId: e
  });
  return (0, l.jsx)(N.default, {
    guild: ee,
    channel: B,
    creator: z,
    name: y,
    entityType: V,
    description: null != P ? P : void 0,
    location: null !== (t = (0, C.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != U ? (0, _.default)(n) : void 0,
    imageLocation: N.GuildEventBodyImageLocation.THUMBNAIL,
    isActive: Y,
    isUserLurking: w,
    isJoined: Z,
    isMember: $,
    isHub: en,
    speakers: J,
    canConnect: W,
    speakerCount: X,
    rsvped: O,
    canInvite: Q,
    ...et,
    className: L,
    onClick: el,
    truncate: R,
    isNew: G,
    guildEventId: D,
    recurrenceRule: (0, m.recurrenceRuleFromServer)(b),
    recurrenceId: F
  })
}
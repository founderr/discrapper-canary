"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  i = n("724912"),
  u = n("41776"),
  s = n("501655"),
  d = n("427679"),
  r = n("592125"),
  o = n("496675"),
  c = n("19780"),
  f = n("594174"),
  E = n("15274"),
  g = n("924301"),
  v = n("951539"),
  h = n("146768"),
  m = n("592126"),
  N = n("236373"),
  C = n("230900"),
  _ = n("854698"),
  x = n("405613"),
  I = n("460838"),
  p = n("462179"),
  S = n("981631");

function T(e) {
  var t;
  let {
    guildEvent: n,
    guildId: T,
    truncate: L,
    onActionTaken: M,
    className: j,
    isNew: G
  } = e, {
    id: y,
    guild_id: k,
    channel_id: A,
    creator_id: D,
    name: R,
    description: P,
    entity_type: U,
    image: V,
    recurrence_rule: b
  } = n, O = (0, _.getNextRecurrenceIdInEvent)(n), F = (0, a.useStateFromStores)([g.default], () => g.default.isInterestedInEventRecurrence(y, O), [y, O]), w = (0, a.useStateFromStores)([u.default], () => u.default.isLurking(k), [k]), H = (0, a.useStateFromStores)([d.default], () => d.default.getStageInstanceByChannel(A), [A]), B = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(A), [A]), z = (0, a.useStateFromStores)([f.default], () => f.default.getUser(D), [D]), {
    speakers: J
  } = (0, h.default)({
    id: A,
    data: {
      guild: null,
      instance: H,
      speakers: [],
      participantCount: 0
    },
    context: {
      guildId: k,
      instance: H
    }
  }), Y = (0, a.useStateFromStores)([c.default], () => c.default.getChannelId()), K = (0, g.isGuildScheduledEventActive)(n), X = Y === A && null != Y && K, q = J.filter(e => e.type === s.StageChannelParticipantTypes.VOICE), W = q.length, Z = (0, a.useStateFromStores)([o.default], () => o.default.can(S.Permissions.CONNECT, B), [B]), Q = (0, v.default)(n), {
    isMember: $,
    guild: ee
  } = (0, m.default)(k, y), et = (0, p.default)({
    guild: ee,
    channel: B,
    guildScheduledEvent: n,
    isActive: K,
    recurrenceId: O,
    onActionTaken: M
  }), en = (0, i.default)(T), el = w ? void 0 : e => (0, E.openGuildEventDetails)({
    eventId: y,
    parentGuildId: T,
    recurrenceId: e
  });
  return (0, l.jsx)(I.default, {
    guild: ee,
    channel: B,
    creator: z,
    name: R,
    entityType: U,
    description: null != P ? P : void 0,
    location: null !== (t = (0, C.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
    imageSource: null != V ? (0, x.default)(n) : void 0,
    imageLocation: I.GuildEventBodyImageLocation.THUMBNAIL,
    isActive: K,
    isUserLurking: w,
    isJoined: X,
    isMember: $,
    isHub: en,
    speakers: q,
    canConnect: Z,
    speakerCount: W,
    rsvped: F,
    canInvite: Q,
    ...et,
    className: j,
    onClick: el,
    truncate: L,
    isNew: G,
    guildEvent: n,
    recurrenceRule: (0, N.recurrenceRuleFromServer)(b),
    recurrenceId: O
  })
}
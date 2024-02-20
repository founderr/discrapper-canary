"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  a = n("567469"),
  i = n("998716"),
  u = n("834052"),
  r = n("42203"),
  s = n("305961");

function d(e) {
  let {
    id: t,
    data: {
      guild: n,
      instance: d,
      speakers: o,
      participantCount: c
    },
    context: f
  } = e, E = (0, l.useStateFromStores)([s.default, r.default], () => {
    var e;
    return s.default.getGuild(null === (e = r.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
  }, [t]), v = (0, l.useStateFromStores)([u.default], () => u.default.getStageInstanceByChannel(t), [t]), g = (0, a.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), h = (0, a.useStageParticipantsCount)(t), p = null != v ? g : o, m = (null != v ? h : c) - p.length;
  return {
    channelId: t,
    guild: null != E ? E : n,
    stage: null != v ? v : d,
    speakers: p,
    audienceCount: m,
    context: f
  }
}
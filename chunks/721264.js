"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("808653");
var l = n("446674"),
  a = n("379881"),
  s = n("42203"),
  i = n("316133"),
  r = n("449008"),
  u = n("334572"),
  o = n("488464"),
  d = n("998716"),
  c = n("49111");

function f(e) {
  let {
    voiceState: t,
    userNick: n,
    user: l
  } = e, a = (0, i.getComparator)(t, n);
  return {
    user: l,
    voiceState: t,
    nick: n,
    comparator: a
  }
}

function h(e) {
  let [t] = (0, l.useStateFromStores)([o.default, s.default, a.default], () => {
    let t;
    t = e === c.FAVORITES ? Object.keys(a.default.getFavoriteChannels()).map(e => s.default.getChannel(e)).filter(r.isNotNullish).filter(e => e.isGuildStageVoice()) : o.default.getChannels(e);
    let n = t.reduce((e, t) => {
        let n = o.default.getMutableParticipants(t.id, d.StageChannelParticipantNamedIndex.SPEAKER);
        return e[t.id] = n.filter(e => e.type === d.StageChannelParticipantTypes.VOICE).map(f), e
      }, {}),
      l = t.reduce((e, t) => {
        let {
          id: n
        } = t;
        return e + o.default.getParticipantsVersion(n)
      }, 0);
    return [n, l]
  }, [e], u.isVersionEqual);
  return t
}
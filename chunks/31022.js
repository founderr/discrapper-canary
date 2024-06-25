n.d(t, {
  Z: function() {
    return g
  }
}), n(47120), n(724458);
var l = n(442837),
  i = n(853856),
  s = n(592125),
  r = n(938475),
  a = n(823379),
  o = n(136015),
  u = n(709054),
  c = n(565799),
  d = n(501655),
  h = n(981631);

function p(e) {
  let {
    voiceState: t,
    userNick: n,
    user: l
  } = e, i = (0, r.sQ)(t, n);
  return {
    user: l,
    voiceState: t,
    nick: n,
    comparator: i
  }
}

function g(e) {
  let [t] = (0, l.e7)([c.Z, s.Z, i.Z], () => {
    let t;
    let n = (t = e === h.I_8 ? u.default.keys(i.Z.getFavoriteChannels()).map(e => s.Z.getChannel(e)).filter(a.lm).filter(e => e.isGuildStageVoice()) : c.Z.getChannels(e)).reduce((e, t) => {
      let n = c.Z.getMutableParticipants(t.id, d.pV.SPEAKER);
      return e[t.id] = n.filter(e => e.type === d.Ui.VOICE).map(p), e
    }, {});
    return [n, t.reduce((e, t) => {
      let {
        id: n
      } = t;
      return e + c.Z.getParticipantsVersion(n)
    }, 0)]
  }, [e], o.Q);
  return t
}
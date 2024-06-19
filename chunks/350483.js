t(47120);
var i = t(735250);
t(470079);
var l = t(392711),
  o = t.n(l),
  r = t(481060),
  E = t(718528),
  u = t(905423),
  a = t(984933),
  s = t(914010),
  d = t(771845),
  _ = t(55589),
  c = t(585483),
  C = t(475468),
  A = t(981631),
  I = t(490897);

function S(e, n) {
  var t, i;
  return [{
    resourceId: e,
    type: I.W.GUILD_EVENT
  }, ...(t = e, i = n, t === A.ME ? _.Z.getPrivateChannelIds() : (0, E.Z)(t, i).map(e => e.id))]
}
n.Z = o().throttle(function(e, n) {
  var l, o;
  let E, {
      channelPredicate: _ = (e, n) => !0,
      guildPredicate: I = e => !0,
      guildFeaturePredicate: T = (e, n) => !1,
      withVoiceChannels: L = !1
    } = n,
    N = null !== (l = u.Z.getState().guildId) && void 0 !== l ? l : A.ME,
    O = u.Z.getState().channelId,
    D = function(e, n) {
      let t = [A.ME, ...d.ZP.getFlattenedGuildIds()],
        i = t.indexOf(e);
      return n > 0 ? t.slice(i).concat(t.slice(0, i), e) : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)))
    }(N, e),
    f = e > 0 ? 0 : D.length - 1,
    g = S(N, L),
    h = g.indexOf(O) + e;
  for (; null != N && "" !== N;) {
    if (E = g[h], I(N))
      for (; null != E && "" !== E;) {
        if ("string" == typeof E) {
          if (_(N, E)) return (0, C.K)(N, E, !1, L)
        } else if ("object" == typeof E && T(E.resourceId, E.type)) return N !== s.Z.getGuildId() && (0, C.K)(N, null === (o = a.ZP.getDefaultChannel(N)) || void 0 === o ? void 0 : o.id), (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("11250"), t.e("14262"), t.e("22347"), t.e("56236"), t.e("71088")]).then(t.bind(t, 17671));
          return n => (0, i.jsx)(e, {
            ...n,
            guildId: N
          })
        });
        h += e, E = g[h]
      }
    if (f += e, null == (N = D[f]) || "" === N) break;
    g = S(N, L), h = e < 0 ? g.length - 1 : 0
  }
  c.S.dispatch(A.CkL.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, A.aZC)
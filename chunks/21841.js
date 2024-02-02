"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l = n("884691"),
  a = n("298386"),
  s = n("446674"),
  i = n("750560"),
  r = n("427953"),
  o = n("191225"),
  u = n("534222"),
  d = n("170183"),
  c = n("130563"),
  f = n("233069"),
  h = n("373469"),
  C = n("271938"),
  p = n("42203"),
  m = n("305961"),
  E = n("10802"),
  g = n("957255"),
  I = n("945956"),
  S = n("282109"),
  _ = n("800762"),
  N = n("501981"),
  T = n("49111");

function A(e) {
  var t, n, A;
  let L = (0, s.useStateFromStores)([S.default], () => S.default.isMuted(e)),
    v = (0, s.useStateFromStores)([m.default], () => m.default.getGuild(e)),
    x = (null === (t = (0, d.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
    R = (0, u.useGuildActiveEvent)(e),
    M = (null === (n = (0, c.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
    O = (0, s.useStateFromStores)([C.default], () => C.default.getId()),
    {
      selectedVoiceGuildId: y,
      selectedVoiceChannelId: D
    } = (0, s.useStateFromStoresObject)([I.default], () => ({
      selectedVoiceGuildId: I.default.getGuildId(),
      selectedVoiceChannelId: I.default.getChannelId()
    })),
    b = y === e,
    j = (0, s.useStateFromStores)([h.default], () => !!b && null != h.default.getActiveStreamForUser(O, e)),
    G = null == v ? void 0 : v.afkChannelId,
    {
      guildHasVoice: U,
      guildHasVideo: P,
      selectedVoiceChannelHasVideo: w
    } = (0, s.useStateFromStoresObject)([_.default, p.default, g.default], () => {
      let t = !1,
        n = !1,
        l = _.default.getVoiceStates(e);
      for (let e in l) {
        let s = p.default.getBasicChannel(l[e].channelId);
        null != s && s.type !== a.ChannelTypes.GUILD_STAGE_VOICE && G !== s.id && g.default.canBasicChannel(T.BasicPermissions.VIEW_CHANNEL, s) && (t = !0, l[e].selfVideo && (n = !0))
      }
      return {
        guildHasVoice: t,
        guildHasVideo: n,
        selectedVoiceChannelHasVideo: null != D && _.default.hasVideo(D)
      }
    }, [G, e, D]),
    F = (0, s.useStateFromStores)([h.default], () => h.default.getAllApplicationStreams().some(t => t.guildId === e)),
    B = (0, s.useStateFromStoresObject)([_.default, E.default], () => {
      if (E.default.isSubscribedToMemberUpdates(e)) return {};
      let t = _.default.getVoiceStates(e),
        n = Object.keys(t);
      return 0 === n.length ? {} : {
        [e]: n.slice(0, 50)
      }
    }, [e]);
  (0, i.useSubscribeGuildMembers)(B);
  let V = (0, N.default)(e),
    H = (0, s.useStateFromStores)([o.default], () => o.default.getEmbeddedActivitiesForGuild(e)),
    k = (0, r.useIsActivitiesInTextEnabled)(null === (A = H[0]) || void 0 === A ? void 0 : A.channelId, "GuildMediaState"),
    Y = (0, s.useStateFromStores)([p.default], () => {
      if (k) return H.length > 0;
      for (let e of H) {
        let t = p.default.getChannel(e.channelId);
        if (null != t && (0, f.isVoiceChannel)(t.type)) return !0
      }
      return !1
    }),
    K = (0, s.useStateFromStores)([o.default], () => Array.from(o.default.getSelfEmbeddedActivities().values()).some(t => {
      let {
        guildId: n
      } = t;
      return n === e
    })),
    W = !1,
    Z = !1,
    z = !1,
    X = !1,
    Q = !1,
    q = !1;
  return b ? (W = !0, Z = (null == R ? void 0 : R.channel_id) === D, z = M, X = b && w, Q = j, q = K) : !L && (W = U, Z = null != R, z = x, X = P, Q = F, q = Y), l.useMemo(() => ({
    audio: W,
    video: X,
    screenshare: Q,
    liveStage: z,
    activeEvent: Z,
    activity: q,
    gaming: V,
    isCurrentUserConnected: b || M
  }), [W, X, Q, z, Z, q, b, M, V])
}
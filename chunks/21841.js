"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var l = n("884691"),
  a = n("298386"),
  s = n("446674"),
  i = n("427953"),
  r = n("191225"),
  o = n("534222"),
  u = n("170183"),
  d = n("130563"),
  c = n("233069"),
  f = n("373469"),
  h = n("271938"),
  C = n("42203"),
  p = n("305961"),
  m = n("957255"),
  E = n("945956"),
  g = n("282109"),
  I = n("800762"),
  S = n("501981"),
  _ = n("49111");

function N(e) {
  var t, n, N;
  let T = (0, s.useStateFromStores)([g.default], () => g.default.isMuted(e)),
    A = (0, s.useStateFromStores)([p.default], () => p.default.getGuild(e)),
    L = (null === (t = (0, u.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
    v = (0, o.useGuildActiveEvent)(e),
    x = (null === (n = (0, d.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
    R = (0, s.useStateFromStores)([h.default], () => h.default.getId()),
    {
      selectedVoiceGuildId: M,
      selectedVoiceChannelId: O
    } = (0, s.useStateFromStoresObject)([E.default], () => ({
      selectedVoiceGuildId: E.default.getGuildId(),
      selectedVoiceChannelId: E.default.getChannelId()
    })),
    y = M === e,
    D = (0, s.useStateFromStores)([f.default], () => !!y && null != f.default.getActiveStreamForUser(R, e)),
    b = null == A ? void 0 : A.afkChannelId,
    {
      guildHasVoice: j,
      guildHasVideo: G,
      selectedVoiceChannelHasVideo: U
    } = (0, s.useStateFromStoresObject)([I.default, C.default, m.default], () => {
      let t = !1,
        n = !1,
        l = I.default.getVoiceStates(e);
      for (let e in l) {
        let s = C.default.getBasicChannel(l[e].channelId);
        null != s && s.type !== a.ChannelTypes.GUILD_STAGE_VOICE && b !== s.id && m.default.canBasicChannel(_.BasicPermissions.VIEW_CHANNEL, s) && (t = !0, l[e].selfVideo && (n = !0))
      }
      return {
        guildHasVoice: t,
        guildHasVideo: n,
        selectedVoiceChannelHasVideo: null != O && I.default.hasVideo(O)
      }
    }, [b, e, O]),
    P = (0, s.useStateFromStores)([f.default], () => f.default.getAllApplicationStreams().some(t => t.guildId === e)),
    w = (0, S.default)(e),
    F = (0, s.useStateFromStores)([r.default], () => r.default.getEmbeddedActivitiesForGuild(e)),
    B = (0, i.useIsActivitiesInTextEnabled)(null === (N = F[0]) || void 0 === N ? void 0 : N.channelId, "GuildMediaState"),
    V = (0, s.useStateFromStores)([C.default], () => {
      if (B) return F.length > 0;
      for (let e of F) {
        let t = C.default.getChannel(e.channelId);
        if (null != t && (0, c.isVoiceChannel)(t.type)) return !0
      }
      return !1
    }),
    H = (0, s.useStateFromStores)([r.default], () => Array.from(r.default.getSelfEmbeddedActivities().values()).some(t => {
      let {
        guildId: n
      } = t;
      return n === e
    })),
    k = !1,
    Y = !1,
    K = !1,
    W = !1,
    Z = !1,
    z = !1;
  return y ? (k = !0, Y = (null == v ? void 0 : v.channel_id) === O, K = x, W = y && U, Z = D, z = H) : !T && (k = j, Y = null != v, K = L, W = G, Z = P, z = V), l.useMemo(() => ({
    audio: k,
    video: W,
    screenshare: Z,
    liveStage: K,
    activeEvent: Y,
    activity: z,
    gaming: w,
    isCurrentUserConnected: y || x
  }), [k, W, Z, K, Y, z, y, x, w])
}
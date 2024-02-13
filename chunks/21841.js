"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var l = n("884691"),
  a = n("917351"),
  s = n.n(a),
  i = n("298386"),
  r = n("446674"),
  u = n("862337"),
  o = n("666020"),
  d = n("427953"),
  c = n("191225"),
  f = n("534222"),
  h = n("170183"),
  C = n("130563"),
  p = n("233069"),
  m = n("373469"),
  E = n("271938"),
  g = n("42203"),
  I = n("525065"),
  _ = n("305961"),
  S = n("957255"),
  N = n("945956"),
  T = n("282109"),
  A = n("800762"),
  L = n("471374"),
  v = n("501981"),
  x = n("49111");
let R = [];

function M(e) {
  var t, n, a;
  let M = (0, r.useStateFromStores)([T.default], () => T.default.isMuted(e)),
    O = (0, r.useStateFromStores)([_.default], () => _.default.getGuild(e)),
    y = (null === (t = (0, h.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
    D = (0, f.useGuildActiveEvent)(e),
    b = (null === (n = (0, C.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
    j = (0, r.useStateFromStores)([E.default], () => E.default.getId()),
    {
      selectedVoiceGuildId: G,
      selectedVoiceChannelId: U
    } = (0, r.useStateFromStoresObject)([N.default], () => ({
      selectedVoiceGuildId: N.default.getGuildId(),
      selectedVoiceChannelId: N.default.getChannelId()
    })),
    P = G === e,
    w = (0, r.useStateFromStores)([m.default], () => !!P && null != m.default.getActiveStreamForUser(j, e)),
    F = null == O ? void 0 : O.afkChannelId,
    {
      guildHasVoice: B,
      guildHasVideo: V,
      selectedVoiceChannelHasVideo: H
    } = (0, r.useStateFromStoresObject)([A.default, g.default, S.default], () => {
      let t = !1,
        n = !1,
        l = A.default.getVoiceStates(e);
      for (let e in l) {
        let a = g.default.getBasicChannel(l[e].channelId);
        null != a && a.type !== i.ChannelTypes.GUILD_STAGE_VOICE && F !== a.id && S.default.canBasicChannel(x.BasicPermissions.VIEW_CHANNEL, a) && (t = !0, l[e].selfVideo && (n = !0))
      }
      return {
        guildHasVoice: t,
        guildHasVideo: n,
        selectedVoiceChannelHasVideo: null != U && A.default.hasVideo(U)
      }
    }, [F, e, U]),
    k = (0, r.useStateFromStores)([m.default], () => m.default.getAllApplicationStreams().some(t => t.guildId === e));
  ! function(e, t) {
    let n = l.useRef(new Set),
      a = l.useRef(new u.Timeout),
      {
        shouldSubscribeToGuildMemberUpdates: i
      } = L.default.useExperiment({
        location: "useGuildMediaState"
      }, {
        autoTrackExposure: !1
      }),
      d = (0, r.useStateFromStores)([I.default], () => {
        let t = I.default.getMemberCount(e);
        return null == t || t > 1e3
      }),
      c = (0, r.useStateFromStoresObject)([A.default], () => {
        if (!i || t || d) return R;
        let n = A.default.getVoiceStates(e),
          l = Object.keys(n);
        return 0 === l.length ? R : l.slice(0, 50)
      }, [e, t, d, i]);
    l.useEffect(() => {
      ! function(e, t, n, l, a) {
        let i = s.random(1e3, 1e4);
        l.start(i, () => {
          let l = new Set(t),
            s = t.filter(e => !n.has(e)),
            i = Array.from(n).filter(e => !l.has(e));
          (0, o.unsubscribeMembers)(e, i), (0, o.subscribeMembers)(e, s), a()
        })
      }(e, c, n.current, a.current, () => {
        n.current = new Set(c)
      })
    }, [e, c]), l.useEffect(() => () => {
      a.current.stop(), (0, o.unsubscribeMembers)(e, Array.from(n.current))
    }, [e])
  }(e, M);
  let Y = (0, v.default)(e),
    K = (0, r.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForGuild(e)),
    W = (0, d.useIsActivitiesInTextEnabled)(null === (a = K[0]) || void 0 === a ? void 0 : a.channelId, "GuildMediaState"),
    Z = (0, r.useStateFromStores)([g.default], () => {
      if (W) return K.length > 0;
      for (let e of K) {
        let t = g.default.getChannel(e.channelId);
        if (null != t && (0, p.isVoiceChannel)(t.type)) return !0
      }
      return !1
    }),
    z = (0, r.useStateFromStores)([c.default], () => Array.from(c.default.getSelfEmbeddedActivities().values()).some(t => {
      let {
        guildId: n
      } = t;
      return n === e
    })),
    X = !1,
    Q = !1,
    J = !1,
    q = !1,
    $ = !1,
    ee = !1;
  return P ? (X = !0, Q = (null == D ? void 0 : D.channel_id) === U, J = b, q = P && H, $ = w, ee = z) : !M && (X = B, Q = null != D, J = y, q = V, $ = k, ee = Z), l.useMemo(() => ({
    audio: X,
    video: q,
    screenshare: $,
    liveStage: J,
    activeEvent: Q,
    activity: ee,
    gaming: Y,
    isCurrentUserConnected: P || b
  }), [X, q, $, J, Q, ee, P, b, Y])
}
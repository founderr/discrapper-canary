n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  r = n(106351),
  a = n(442837),
  o = n(846519),
  u = n(941028),
  c = n(867176),
  d = n(317381),
  h = n(554747),
  p = n(146085),
  g = n(427679),
  m = n(131704),
  C = n(199902),
  E = n(314897),
  f = n(592125),
  _ = n(650774),
  I = n(430824),
  N = n(496675),
  Z = n(944486),
  S = n(9156),
  x = n(979651),
  L = n(709054),
  T = n(510601),
  v = n(901621),
  A = n(981631);
let M = [];

function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(A.S7T.VIEW_CHANNEL, e)
}

function O(e) {
  var t;
  let n = (0, a.e7)([S.ZP], () => S.ZP.isMuted(e)),
    i = (0, h.k5)(e);
  ! function(e, t) {
    let n = l.useRef(new Set),
      i = l.useRef(new o.V7),
      {
        shouldSubscribeToGuildMemberUpdates: r
      } = T.ZP.useExperiment({
        location: "useGuildMediaState"
      }, {
        autoTrackExposure: !1
      }),
      c = (0, a.e7)([_.Z], () => {
        let t = _.Z.getMemberCount(e);
        return null == t || t > 1e3
      }),
      d = (0, a.cj)([x.Z], () => {
        if (!r || t || c) return M;
        let n = Object.keys(x.Z.getVoiceStates(e));
        return 0 === n.length ? M : n.slice(0, 50)
      }, [e, t, c, r]);
    l.useEffect(() => {
      ! function(e, t, n, l, i) {
        let r = s().random(1e3, 1e4);
        l.start(r, () => {
          let l = new Set(t),
            s = t.filter(e => !n.has(e)),
            r = Array.from(n).filter(e => !l.has(e));
          (0, u.w5)(e, r), (0, u.ym)(e, s), i()
        })
      }(e, d, n.current, i.current, () => {
        n.current = new Set(d)
      })
    }, [e, d]), l.useEffect(() => () => {
      i.current.stop(), (0, u.w5)(e, Array.from(n.current))
    }, [e])
  }(e, n);
  let r = (0, v.Z)(e),
    A = (0, a.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForGuild(e)),
    O = (0, c.NX)(null === (t = A[0]) || void 0 === t ? void 0 : t.channelId, !1, "GuildMediaState"),
    {
      guildHasVoice: P,
      guildHasVideo: b,
      selectedVoiceChannelHasVideo: j
    } = (0, a.cj)([x.Z, f.Z, N.Z, I.Z, Z.Z], () => {
      var t;
      let l = Z.Z.getVoiceChannelId(),
        i = null === (t = I.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
        s = x.Z.getUsersWithVideo(e),
        r = x.Z.getVoiceStates(e),
        a = (() => {
          if (n) return !1;
          for (let e in r)
            if (R(f.Z.getBasicChannel(r[e].channelId), null != i ? i : void 0, N.Z)) return !0;
          return !1
        })();
      return {
        guildHasVoice: a,
        guildHasVideo: (() => {
          if (n) return !1;
          for (let e of s)
            if (R(f.Z.getBasicChannel(r[e].channelId), null != i ? i : void 0, N.Z)) return !0;
          return !1
        })(),
        selectedVoiceChannelHasVideo: null != l && x.Z.hasVideo(l)
      }
    }, [e, n]),
    y = E.default.getId();
  return (0, a.cj)([Z.Z, C.Z, g.Z, f.Z, N.Z, d.ZP], () => {
    var t, l, s;
    let a = Z.Z.getVoiceChannelId(),
      o = (null === (t = f.Z.getChannel(a)) || void 0 === t ? void 0 : t.guild_id) === e,
      u = !1,
      c = !1,
      h = !1,
      E = !1,
      _ = !1,
      I = !1;
    if (!o && n) return {
      audio: u,
      video: E,
      screenshare: _,
      liveStage: h,
      activeEvent: c,
      activity: I,
      gaming: r,
      isCurrentUserConnected: !1
    };
    let S = L.default.keys(g.Z.getStageInstancesByGuild(e)).some(e => {
        let t = f.Z.getChannel(e);
        return null != t && N.Z.can(p.gl, t)
      }),
      x = o && null !== (s = null === (l = f.Z.getChannel(a)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== s && s,
      T = !!o && null != C.Z.getActiveStreamForUser(y, e),
      v = C.Z.getAllApplicationStreams().some(t => t.guildId === e),
      M = o && j,
      R = (() => {
        if (O) return A.length > 0;
        for (let e of A) {
          let t = f.Z.getChannel(e.channelId);
          if (null != t && (0, m.vd)(t.type)) return !0
        }
        return !1
      })(),
      D = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return o ? (u = !0, c = (null == i ? void 0 : i.channel_id) === a, h = x, E = M, _ = T, I = D) : (u = P, c = null != i, h = S, E = b, _ = v, I = R), {
      audio: u,
      video: E,
      screenshare: _,
      liveStage: h,
      activeEvent: c,
      activity: I,
      gaming: r,
      isCurrentUserConnected: o || x
    }
  }, [y, A, r, i, e, O, n, b, P, j])
}
"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return y
  },
  useGetEventCardUsers: function() {
    return P
  },
  useGuildPopoutCards: function() {
    return D
  }
}), n("390547"), n("47120"), n("627341");
var i = n("392711"),
  r = n.n(i),
  a = n("278074"),
  s = n("442837"),
  o = n("317381"),
  l = n("841784"),
  u = n("924301"),
  d = n("565799"),
  _ = n("501655"),
  c = n("344185"),
  E = n("199902"),
  I = n("480294"),
  T = n("984933"),
  f = n("158776"),
  S = n("699516"),
  h = n("800599"),
  A = n("594174"),
  m = n("979651"),
  N = n("938475"),
  p = n("823379"),
  O = n("5192"),
  C = n("709054"),
  R = n("456774"),
  g = n("981631"),
  L = n("689938");
let v = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function D(e) {
  let t = e.id,
    n = (0, s.useStateFromStoresArray)([T.default, c.default], () => {
      let e = T.default.getChannels(t)[T.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === g.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(c.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    r = (0, s.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => ({
      category: R.CardCategory.EVENT,
      event: e
    })), [t]),
    d = (0, s.useStateFromStores)([S.default, N.default, o.default, m.default, f.default, E.default], () => {
      let i = S.default.getRelationships(),
        a = C.default.keys(i).filter(e => i[e] === g.RelationshipTypes.BLOCKED),
        s = r.map(e => {
          let {
            event: t
          } = e;
          return t.channel_id
        }),
        u = N.default.getVoiceStates(t),
        d = Object.keys(u);
      return 0 === d.length ? [] : d.filter(t => {
        let i = u[t].filter(p.isNotNullish);
        return !(0 === i.length || s.includes(t)) && null == i.find(e => {
          let {
            user: t
          } = e;
          return a.includes(t.id)
        }) && t !== e.afkChannelId && n.includes(t)
      }).map(e => {
        let t = o.default.getEmbeddedActivitiesForChannel(e);
        if (t.length > 0)
          for (let e of t) return {
            category: R.CardCategory.EMBEDDED_ACTIVITY,
            embeddedActivity: e
          };
        let n = u[e].filter(p.isNotNullish);
        for (let t of n) {
          let i = f.default.findActivity(t.user.id, M(t));
          if (null != i && !(0, l.default)(i)) return {
            category: R.CardCategory.GAMING,
            channelId: e,
            game: i,
            voiceStates: n
          }
        }
        let i = n.map(e => {
            let {
              user: t
            } = e;
            return t.id
          }),
          r = m.default.hasVideo(e),
          a = E.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId);
        return {
          category: R.CardCategory.HANGOUT,
          channelId: e,
          userIds: i,
          streamUserIds: a,
          channelHasVideo: r
        }
      })
    }, [n, r, e.afkChannelId, t]),
    _ = (0, s.useStateFromStores)([I.default], () => I.default.hasConsented(g.Consents.PERSONALIZATION)),
    A = (0, s.useStateFromStores)([h.default], () => h.default.getUserAffinities());
  if (0 === d.length && 0 === r.length) return 0 === n.length ? [] : n.slice(0, 2).map(e => ({
    category: R.CardCategory.EMPTY,
    channelId: e
  }));
  let O = _ && A.length > 0;
  return (function(e, t) {
    return (0, i.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = h.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, a.match)(e).with({
          category: R.CardCategory.EVENT
        }, () => 7).with({
          category: R.CardCategory.GAMING
        }, () => 6).with({
          category: R.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: a.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: R.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      return t ? ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivity" in e && (s += Math.max(...i([...e.embeddedActivity.userIds]))), "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(p.isNotNullish).map(e => {
        let {
          user: t
        } = e;
        return t.id
      }))))) : ("userIds" in e && (s += e.userIds.length), "embeddedActivity" in e && (s += [...e.embeddedActivity.userIds].length), "voiceStates" in e && (s += e.voiceStates.filter(p.isNotNullish).map(e => {
        let {
          user: t
        } = e;
        return t.id
      }).length)), s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })([...d, ...r], O).slice(0, 3)
}
let M = e => t => [g.ActivityTypes.PLAYING, g.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

function y(e, t, n) {
  let a = (0, s.useStateFromStoresArray)([E.default], () => E.default.getAllApplicationStreamsForChannel(n).map(e => e.ownerId), [n]),
    o = (0, s.useStateFromStoresArray)([I.default, h.default, A.default], () => {
      let t = I.default.hasConsented(g.Consents.PERSONALIZATION),
        n = h.default.getUserAffinities(),
        a = r()(e).map(e => A.default.getUser(e)).filter(p.isNotNullish).value();
      return t && n.length > 0 ? (0, i.orderBy)(a, [e => {
        var t, n;
        return null !== (n = null === (t = h.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      }], ["desc"]) : a
    }),
    l = o.slice(0, 7),
    u = Math.max(0, o.length - l.length),
    d = 1 === a.length ? a[0] : null,
    _ = O.default.getName(t, n, A.default.getUser(d)),
    c = null != d ? L.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: _
    }) : L.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMERS.format({
      streamerCount: a.length
    });
  return {
    totalUsers: o.length,
    usersToShow: l,
    othersCount: u,
    streamUserIds: a,
    streamerUsersText: c
  }
}

function P(e) {
  let t = (0, s.useStateFromStores)([d.default], () => null == e ? null : d.default.getParticipantCount(e.id, _.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, s.useStateFromStoresArray)([d.default], () => null == e ? [] : d.default.getMutableParticipants(e.id, _.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === _.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, s.useStateFromStoresArray)([N.default], () => null == e ? [] : N.default.getVoiceStatesForChannel(e).filter(p.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === g.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: e,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === g.ChannelTypes.GUILD_VOICE) {
    let e = i.slice(0, 7),
      t = Math.max(0, i.length - e.length);
    return {
      usersToShow: e,
      othersCount: t,
      audienceCount: null
    }
  }
  return {
    usersToShow: [],
    othersCount: 0,
    audienceCount: null
  }
}
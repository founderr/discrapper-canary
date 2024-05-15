"use strict";
n.r(t), n.d(t, {
  getCategoryIcon: function() {
    return F
  },
  getClickHandler: function() {
    return Y
  },
  getCount: function() {
    return V
  },
  getImage: function() {
    return x
  },
  getJoinButton: function() {
    return j
  },
  getSubtitle: function() {
    return H
  },
  useCardTitle: function() {
    return k
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("831209"),
  a = n("481060"),
  s = n("812206"),
  o = n("557135"),
  l = n("66999"),
  u = n("15274"),
  d = n("924301"),
  _ = n("703656"),
  c = n("881824"),
  E = n("922482"),
  I = n("592125"),
  T = n("271383"),
  f = n("496675"),
  S = n("594174"),
  h = n("979651"),
  A = n("366695"),
  m = n("305878"),
  N = n("119828"),
  p = n("737688"),
  O = n("158010"),
  C = n("944581"),
  R = n("645284"),
  g = n("632184"),
  L = n("26290"),
  v = n("51144"),
  D = n("59688"),
  M = n("623552"),
  y = n("718582"),
  P = n("126134"),
  U = n("981631"),
  b = n("765305"),
  G = n("689938"),
  w = n("181096");

function B(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = S.default.getUser(e);
      if (null == n) return null;
      let r = T.default.getNick(i, n.id);
      return null !== (t = null != r ? r : v.default.getGlobalName(n)) && void 0 !== t ? t : v.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) return 1 === a ? r[0] : (2 === a ? G.default.Messages.USER_SUMMARY_TWO : 3 === a ? G.default.Messages.USER_SUMMARY_THREE : G.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: a - 3
  })
}

function k(e, t) {
  let {
    category: n
  } = e, i = (0, y.useSortUserIdsByAffinity)(n === P.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, y.useSortUserIdsByAffinity)(n === P.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, y.useSortUserIdsByAffinity)(n === P.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), s = new Set;
  n === P.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    s = new Set([...s, ...e.userIds])
  });
  let o = (0, y.useSortUserIdsByAffinity)(n === P.CardCategory.EMBEDDED_ACTIVITY ? [...s] : []);
  switch (n) {
    case P.CardCategory.HANGOUT:
      if (r.length > 0) return B(r, t);
      return B(i, t);
    case P.CardCategory.EVENT:
      return e.event.name;
    case P.CardCategory.EMBEDDED_ACTIVITY:
      return B(o, t);
    case P.CardCategory.GAMING:
      return B(a, t);
    default:
      return null
  }
}

function V(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case P.CardCategory.EVENT:
      return [{
        icon: m.default,
        count: d.default.getUserCount(e.event.id, null)
      }];
    case P.CardCategory.HANGOUT:
      let {
        streamUserIds: n, userIds: i
      } = e;
      if (n.length > 0) return [{
        icon: O.default,
        count: i.length
      }];
      return [];
    case P.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: O.default,
        count: e.voiceUsersCount
      }, {
        icon: R.default,
        count: e.streamersCount
      }];
    case P.CardCategory.GAMING:
      return [{
        icon: O.default,
        count: e.voiceStates.length
      }];
    default:
      return []
  }
}

function x(e, t, n) {
  let {
    cardType: a
  } = D.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), o = a === P.GuildPeekCardTypes.WHAT, {
    category: l
  } = e;
  switch (l) {
    case P.CardCategory.GAMING:
      let {
        games: u
      } = e;
      if (null == u[0].application_id) return (0, i.jsx)(p.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(u[0].application_id),
        size: "xl",
        className: w.gameIcon
      });
    case P.CardCategory.EVENT:
      return (0, i.jsx)(m.default, {
        className: w.imageIcon
      });
    case P.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: d
      } = e;
      if (null == d[0].applicationId) return (0, i.jsx)(C.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(d[0].applicationId),
        size: "xl",
        className: w.gameIcon
      });
    case P.CardCategory.HANGOUT: {
      let {
        streamUserIds: a,
        userIds: s,
        channelHasVideo: l
      } = e;
      if (o) return a.length > 0 ? (0, i.jsx)(R.default, {
        className: w.imageIcon
      }) : l ? (0, i.jsx)(N.default, {
        className: w.imageIcon
      }) : (0, i.jsx)(g.default, {
        className: w.imageIcon
      });
      if (a.length > 0) {
        let e = e => (0, i.jsx)(L.TextBadge, {
          text: G.default.Messages.LIVE,
          color: r.default.STATUS_DANGER,
          className: e
        });
        if (null == n) return e();
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("img", {
            src: n,
            alt: "",
            height: 64,
            width: 64,
            className: w.streamPreview
          }), e(w.liveBadge)]
        })
      }
      let u = s.map(e => S.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(M.default, {
        guildId: t,
        users: u
      })
    }
  }
}

function F(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case P.CardCategory.GAMING:
      return p.default;
    case P.CardCategory.EVENT:
      return m.default;
    case P.CardCategory.EMBEDDED_ACTIVITY:
      return C.default;
    case P.CardCategory.HANGOUT: {
      let {
        streamUserIds: t
      } = e;
      if (t.length > 0) return R.default;
      return g.default
    }
  }
}

function H(e) {
  var t, n, i, r, a, o, l, u;
  let {
    category: d
  } = e;
  switch (d) {
    case P.CardCategory.GAMING:
      let {
        games: _, channelId: c
      } = e;
      if (1 === _.length) return G.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (n = I.default.getChannel(c)) || void 0 === n ? void 0 : n.name,
        gameName: _[0].name
      });
      return G.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
        numGames: _.length,
        channelName: null === (t = I.default.getChannel(c)) || void 0 === t ? void 0 : t.name
      });
    case P.CardCategory.EVENT:
      let {
        event: E
      } = e;
      if (E.entity_type === b.GuildScheduledEventEntityTypes.EXTERNAL) return E.entity_metadata.location;
      return null === (i = I.default.getChannel(E.channel_id)) || void 0 === i ? void 0 : i.name;
    case P.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: T
      } = e;
      if (1 === T.length) return G.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (a = I.default.getChannel(T[0].channelId)) || void 0 === a ? void 0 : a.name,
        gameName: null === (o = s.default.getApplication(T[0].applicationId)) || void 0 === o ? void 0 : o.name
      });
      return G.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
        channelName: null === (r = I.default.getChannel(T[0].channelId)) || void 0 === r ? void 0 : r.name,
        numActivities: T.length
      });
    case P.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        channelId: n
      } = e;
      if (t.length > 0) return G.default.Messages.STREAMING_IN_CHANNEL.format({
        channelName: null === (u = I.default.getChannel(n)) || void 0 === u ? void 0 : u.name
      });
      return null === (l = I.default.getChannel(n)) || void 0 === l ? void 0 : l.name
    }
    default:
      return null
  }
}

function Y(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case P.CardCategory.GAMING:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    case P.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, _.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case P.CardCategory.EVENT:
      return () => {
        (0, u.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case P.CardCategory.HANGOUT:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function j(e, t) {
  let {
    cardType: n
  } = D.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), {
    category: r
  } = e, s = null;
  if (null == (s = r === P.CardCategory.EVENT ? e.event.channel_id : r === P.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let d = h.default.isInChannel(s),
    T = d ? G.default.Messages.GUILD_POPOUT_JOINED : G.default.Messages.JOIN,
    S = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case P.CardCategory.HANGOUT:
        case P.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = I.default.getChannel(n);
            null != i && i.type === U.ChannelTypes.GUILD_VOICE && f.default.can(U.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case P.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = I.default.getChannel(n);
            null != i && i.type === U.ChannelTypes.GUILD_VOICE && f.default.can(U.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case P.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = I.default.getChannel(n);
            if (null == n || null == a || !f.default.can(U.Permissions.CONNECT, a)) {
              (0, u.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, E.connectOrLurkStage)(i, n);
              (0, c.navigateToStage)(e)
            };
            r === b.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === b.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
              channel: a,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    A = (0, i.jsx)(a.Button, {
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.GREEN,
      disabled: d,
      onClick: e => {
        e.stopPropagation(), null == S || S()
      },
      className: w.joinButton,
      children: T
    });
  return n === P.GuildPeekCardTypes.WHAT ? (0, i.jsx)("div", {
    className: w.joinButtonWrapper,
    children: A
  }) : A
}
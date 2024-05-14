"use strict";
n.r(t), n.d(t, {
  getCardTitle: function() {
    return B
  },
  getCategoryIcon: function() {
    return x
  },
  getClickHandler: function() {
    return H
  },
  getCount: function() {
    return k
  },
  getImage: function() {
    return V
  },
  getJoinButton: function() {
    return Y
  },
  getSubtitle: function() {
    return F
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
  y = n("126134"),
  P = n("981631"),
  U = n("765305"),
  b = n("689938"),
  G = n("181096");

function w(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = S.default.getUser(e);
      if (null == n) return null;
      let r = T.default.getNick(i, n.id);
      return null !== (t = null != r ? r : v.default.getGlobalName(n)) && void 0 !== t ? t : v.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) return 1 === a ? r[0] : (2 === a ? b.default.Messages.USER_SUMMARY_TWO : 3 === a ? b.default.Messages.USER_SUMMARY_THREE : b.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: a - 3
  })
}

function B(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case y.CardCategory.HANGOUT: {
      let {
        streamUserIds: n,
        userIds: i
      } = e;
      if (n.length > 0) return w(n, t);
      return w(i, t)
    }
    case y.CardCategory.EVENT:
      return e.event.name;
    case y.CardCategory.EMBEDDED_ACTIVITY: {
      let n = new Set;
      return e.embeddedActivities.forEach(e => {
        n = new Set([...n, ...e.userIds])
      }), w([...n], t)
    }
    case y.CardCategory.GAMING:
      return w(e.gameUserIds, t);
    default:
      return null
  }
}

function k(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case y.CardCategory.EVENT:
      return [{
        icon: m.default,
        count: d.default.getUserCount(e.event.id, null)
      }];
    case y.CardCategory.HANGOUT:
      let {
        streamUserIds: n, userIds: i
      } = e;
      if (n.length > 0) return [{
        icon: O.default,
        count: i.length
      }];
      return [];
    case y.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: O.default,
        count: e.voiceUsersCount
      }, {
        icon: R.default,
        count: e.streamersCount
      }];
    case y.CardCategory.GAMING:
      return [{
        icon: O.default,
        count: e.voiceStates.length
      }];
    default:
      return []
  }
}

function V(e, t, n) {
  let {
    cardType: a
  } = D.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), o = a === y.GuildPeekCardTypes.WHAT, {
    category: l
  } = e;
  switch (l) {
    case y.CardCategory.GAMING:
      let {
        games: u
      } = e;
      if (null == u[0].application_id) return (0, i.jsx)(p.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(u[0].application_id),
        size: "xl",
        className: G.gameIcon
      });
    case y.CardCategory.EVENT:
      return (0, i.jsx)(m.default, {
        className: G.imageIcon
      });
    case y.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: d
      } = e;
      if (null == d[0].applicationId) return (0, i.jsx)(C.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(d[0].applicationId),
        size: "xl",
        className: G.gameIcon
      });
    case y.CardCategory.HANGOUT: {
      let {
        streamUserIds: a,
        userIds: s,
        channelHasVideo: l
      } = e;
      if (o) return a.length > 0 ? (0, i.jsx)(R.default, {
        className: G.imageIcon
      }) : l ? (0, i.jsx)(N.default, {
        className: G.imageIcon
      }) : (0, i.jsx)(g.default, {
        className: G.imageIcon
      });
      if (a.length > 0) {
        let e = e => (0, i.jsx)(L.TextBadge, {
          text: b.default.Messages.LIVE,
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
            className: G.streamPreview
          }), e(G.liveBadge)]
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

function x(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case y.CardCategory.GAMING:
      return p.default;
    case y.CardCategory.EVENT:
      return m.default;
    case y.CardCategory.EMBEDDED_ACTIVITY:
      return C.default;
    case y.CardCategory.HANGOUT: {
      let {
        streamUserIds: t
      } = e;
      if (t.length > 0) return R.default;
      return g.default
    }
  }
}

function F(e) {
  var t, n, i, r, a, o, l, u;
  let {
    category: d
  } = e;
  switch (d) {
    case y.CardCategory.GAMING:
      let {
        games: _, channelId: c
      } = e;
      if (1 === _.length) return b.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (n = I.default.getChannel(c)) || void 0 === n ? void 0 : n.name,
        gameName: _[0].name
      });
      return b.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
        numGames: _.length,
        channelName: null === (t = I.default.getChannel(c)) || void 0 === t ? void 0 : t.name
      });
    case y.CardCategory.EVENT:
      let {
        event: E
      } = e;
      if (E.entity_type === U.GuildScheduledEventEntityTypes.EXTERNAL) return E.entity_metadata.location;
      return null === (i = I.default.getChannel(E.channel_id)) || void 0 === i ? void 0 : i.name;
    case y.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: T
      } = e;
      if (1 === T.length) return b.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (a = I.default.getChannel(T[0].channelId)) || void 0 === a ? void 0 : a.name,
        gameName: null === (o = s.default.getApplication(T[0].applicationId)) || void 0 === o ? void 0 : o.name
      });
      return b.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
        channelName: null === (r = I.default.getChannel(T[0].channelId)) || void 0 === r ? void 0 : r.name,
        numActivities: T.length
      });
    case y.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        channelId: n
      } = e;
      if (t.length > 0) return b.default.Messages.STREAMING_IN_CHANNEL.format({
        channelName: null === (u = I.default.getChannel(n)) || void 0 === u ? void 0 : u.name
      });
      return null === (l = I.default.getChannel(n)) || void 0 === l ? void 0 : l.name
    }
    default:
      return null
  }
}

function H(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case y.CardCategory.GAMING:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    case y.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, _.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case y.CardCategory.EVENT:
      return () => {
        (0, u.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case y.CardCategory.HANGOUT:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function Y(e, t) {
  let {
    cardType: n
  } = D.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), {
    category: r
  } = e, s = null;
  if (null == (s = r === y.CardCategory.EVENT ? e.event.channel_id : r === y.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let d = h.default.isInChannel(s),
    T = d ? b.default.Messages.GUILD_POPOUT_JOINED : b.default.Messages.JOIN,
    S = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case y.CardCategory.HANGOUT:
        case y.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = I.default.getChannel(n);
            null != i && i.type === P.ChannelTypes.GUILD_VOICE && f.default.can(P.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case y.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = I.default.getChannel(n);
            null != i && i.type === P.ChannelTypes.GUILD_VOICE && f.default.can(P.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case y.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = I.default.getChannel(n);
            if (null == n || null == a || !f.default.can(P.Permissions.CONNECT, a)) {
              (0, u.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, E.connectOrLurkStage)(i, n);
              (0, c.navigateToStage)(e)
            };
            r === U.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === U.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
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
      className: G.joinButton,
      children: T
    });
  return n === y.GuildPeekCardTypes.WHAT ? (0, i.jsx)("div", {
    className: G.joinButtonWrapper,
    children: A
  }) : A
}
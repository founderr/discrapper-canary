"use strict";
n.r(t), n.d(t, {
  getCardTitle: function() {
    return G
  },
  getCategoryIcon: function() {
    return k
  },
  getClickHandler: function() {
    return x
  },
  getCount: function() {
    return w
  },
  getImage: function() {
    return B
  },
  getJoinButton: function() {
    return F
  },
  getSubtitle: function() {
    return V
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
  N = n("737688"),
  p = n("158010"),
  O = n("944581"),
  C = n("645284"),
  R = n("632184"),
  g = n("26290"),
  L = n("51144"),
  v = n("623552"),
  D = n("126134"),
  M = n("981631"),
  y = n("765305"),
  P = n("689938"),
  U = n("181096");

function b(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = S.default.getUser(e);
      if (null == n) return null;
      let r = T.default.getNick(i, n.id);
      return null !== (t = null != r ? r : L.default.getGlobalName(n)) && void 0 !== t ? t : L.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) {
    if (1 === a) return r[0];
    if (2 === a) return P.default.Messages.USER_SUMMARY_TWO.format({
      first: r[0],
      second: r[1]
    });
    else if (3 === a) return P.default.Messages.USER_SUMMARY_THREE.format({
      first: r[0],
      second: r[1],
      third: r[2]
    });
    else return P.default.Messages.USER_SUMMARY_THREE_AND_OTHERS.format({
      first: r[0],
      second: r[1],
      third: r[2],
      count: a - 3
    })
  }
}

function G(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case D.CardCategory.HANGOUT: {
      let {
        streamUserIds: n,
        userIds: i
      } = e;
      if (n.length > 0) return b(n, t);
      return b(i, t)
    }
    case D.CardCategory.EVENT:
      return e.event.name;
    case D.CardCategory.EMBEDDED_ACTIVITY: {
      let n = new Set;
      return e.embeddedActivities.forEach(e => {
        n = new Set([...n, ...e.userIds])
      }), b([...n], t)
    }
    case D.CardCategory.GAMING:
      return b(e.gameUserIds, t);
    default:
      return null
  }
}

function w(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case D.CardCategory.EVENT:
      return [{
        icon: m.default,
        count: d.default.getUserCount(e.event.id, null)
      }];
    case D.CardCategory.HANGOUT:
      let {
        streamUserIds: n, userIds: i
      } = e;
      if (n.length > 0) return [{
        icon: p.default,
        count: i.length
      }];
      return [];
    case D.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: p.default,
        count: e.voiceUsersCount
      }, {
        icon: C.default,
        count: e.streamersCount
      }];
    case D.CardCategory.GAMING:
      return [{
        icon: p.default,
        count: e.voiceStates.length
      }];
    default:
      return []
  }
}

function B(e, t, n) {
  let {
    category: a
  } = e;
  switch (a) {
    case D.CardCategory.GAMING:
      let {
        games: o
      } = e;
      if (null == o[0].application_id) return (0, i.jsx)(N.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(o[0].application_id),
        size: "xl",
        className: U.gameIcon
      });
    case D.CardCategory.EVENT:
      return (0, i.jsx)(m.default, {});
    case D.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: l
      } = e;
      if (null == l[0].applicationId) return (0, i.jsx)(O.default, {});
      return (0, i.jsx)(A.default, {
        game: s.default.getApplication(l[0].applicationId),
        size: "xl",
        className: U.gameIcon
      });
    case D.CardCategory.HANGOUT: {
      let {
        streamUserIds: a,
        userIds: s
      } = e;
      if (a.length > 0) {
        let e = e => (0, i.jsx)(g.TextBadge, {
          text: P.default.Messages.LIVE,
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
            className: U.streamPreview
          }), e(U.liveBadge)]
        })
      }
      let o = s.map(e => S.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(v.default, {
        guildId: t,
        users: o
      })
    }
  }
}

function k(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case D.CardCategory.GAMING:
      return N.default;
    case D.CardCategory.EVENT:
      return m.default;
    case D.CardCategory.EMBEDDED_ACTIVITY:
      return O.default;
    case D.CardCategory.HANGOUT: {
      let {
        streamUserIds: t
      } = e;
      if (t.length > 0) return C.default;
      return R.default
    }
  }
}

function V(e) {
  var t, n, i, r, a, o, l, u;
  let {
    category: d
  } = e;
  switch (d) {
    case D.CardCategory.GAMING:
      let {
        games: _, channelId: c
      } = e;
      if (1 === _.length) return P.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (n = I.default.getChannel(c)) || void 0 === n ? void 0 : n.name,
        gameName: _[0].name
      });
      return P.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
        numGames: _.length,
        channelName: null === (t = I.default.getChannel(c)) || void 0 === t ? void 0 : t.name
      });
    case D.CardCategory.EVENT:
      let {
        event: E
      } = e;
      if (E.entity_type === y.GuildScheduledEventEntityTypes.EXTERNAL) return E.entity_metadata.location;
      return null === (i = I.default.getChannel(E.channel_id)) || void 0 === i ? void 0 : i.name;
    case D.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: T
      } = e;
      if (1 === T.length) return P.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (a = I.default.getChannel(T[0].channelId)) || void 0 === a ? void 0 : a.name,
        gameName: null === (o = s.default.getApplication(T[0].applicationId)) || void 0 === o ? void 0 : o.name
      });
      return P.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
        channelName: null === (r = I.default.getChannel(T[0].channelId)) || void 0 === r ? void 0 : r.name,
        numActivities: T.length
      });
    case D.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        channelId: n
      } = e;
      if (t.length > 0) return P.default.Messages.STREAMING_IN_CHANNEL.format({
        channelName: null === (u = I.default.getChannel(n)) || void 0 === u ? void 0 : u.name
      });
      return null === (l = I.default.getChannel(n)) || void 0 === l ? void 0 : l.name
    }
    default:
      return null
  }
}

function x(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case D.CardCategory.GAMING:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    case D.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, _.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case D.CardCategory.EVENT:
      return () => {
        (0, u.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case D.CardCategory.HANGOUT:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function F(e, t) {
  let {
    category: n
  } = e, r = null;
  if (null == (r = n === D.CardCategory.EVENT ? e.event.channel_id : n === D.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let s = h.default.isInChannel(r),
    d = s ? P.default.Messages.GUILD_POPOUT_JOINED : P.default.Messages.JOIN,
    T = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case D.CardCategory.HANGOUT:
        case D.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = I.default.getChannel(n);
            null != i && i.type === M.ChannelTypes.GUILD_VOICE && f.default.can(M.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case D.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = I.default.getChannel(n);
            null != i && i.type === M.ChannelTypes.GUILD_VOICE && f.default.can(M.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case D.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = I.default.getChannel(n);
            if (null == n || null == a || !f.default.can(M.Permissions.CONNECT, a)) {
              (0, u.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, E.connectOrLurkStage)(i, n);
              (0, c.navigateToStage)(e)
            };
            r === y.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === y.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
              channel: a,
              connected: h.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t);
  return (0, i.jsx)(a.Button, {
    size: a.Button.Sizes.MIN,
    color: a.Button.Colors.GREEN,
    disabled: s,
    onClick: e => {
      e.stopPropagation(), null == T || T()
    },
    className: U.joinButton,
    children: d
  })
}
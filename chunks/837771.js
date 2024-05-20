"use strict";
n.r(t), n.d(t, {
  getCategoryIcon: function() {
    return q
  },
  getClickHandler: function() {
    return $
  },
  getJoinButton: function() {
    return ee
  },
  getSubtitle: function() {
    return J
  },
  useCardTitle: function() {
    return Z
  },
  useCount: function() {
    return X
  },
  useImage: function() {
    return Q
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
  d = n("217804"),
  _ = n("703656"),
  c = n("881824"),
  E = n("922482"),
  I = n("565799"),
  T = n("501655"),
  f = n("427679"),
  S = n("592125"),
  h = n("271383"),
  A = n("496675"),
  m = n("594174"),
  N = n("979651"),
  p = n("366695"),
  O = n("305878"),
  C = n("737688"),
  R = n("242315"),
  g = n("158010"),
  L = n("944581"),
  v = n("645284"),
  D = n("632184"),
  M = n("170039"),
  y = n("26290"),
  P = n("51144"),
  U = n("59688"),
  b = n("912787"),
  G = n("623552"),
  w = n("718582"),
  k = n("177963"),
  B = n("835248"),
  V = n("437431"),
  x = n("874070"),
  F = n("185885"),
  H = n("126134"),
  Y = n("981631"),
  j = n("765305"),
  W = n("689938"),
  K = n("181096");

function z(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = m.default.getUser(e);
      if (null == n) return null;
      let r = h.default.getNick(i, n.id);
      return null !== (t = null != r ? r : P.default.getGlobalName(n)) && void 0 !== t ? t : P.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) return 1 === a ? r[0] : (2 === a ? W.default.Messages.USER_SUMMARY_TWO : 3 === a ? W.default.Messages.USER_SUMMARY_THREE : W.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: a - 3
  })
}

function Z(e, t) {
  let {
    category: n
  } = e, i = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), s = (0, b.default)(e), {
    usersToShow: o
  } = (0, w.useGetEventCardUsers)(s), l = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
  n === H.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case H.CardCategory.HANGOUT: {
      let n = z(l.length > 0 ? l : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = f.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
      }
      return n
    }
    case H.CardCategory.EVENT:
      return e.event.name;
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return z(d, t);
    case H.CardCategory.GAMING:
      return z(a, t);
    default:
      return null
  }
}

function X(e) {
  let {
    category: t
  } = e, n = (0, b.default)(e), {
    audienceCount: i
  } = (0, w.useGetEventCardUsers)(n);
  switch (t) {
    case H.CardCategory.EVENT:
      if (null != i) return [{
        icon: R.default,
        count: i
      }];
      return [];
    case H.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: a, channelId: s, isStage: o
      } = e;
      if (o) {
        var l;
        return [{
          icon: R.default,
          count: null !== (l = I.default.getParticipantCount(s, T.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
        }]
      }
      if (r.length > 0) return [{
        icon: g.default,
        count: a.length > 0 ? a.length : null
      }];
      return [];
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: g.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: v.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case H.CardCategory.GAMING:
      return [{
        icon: g.default,
        count: e.voiceStates.length > 0 ? e.voiceStates.length : null
      }, {
        icon: v.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    default:
      return []
  }
}

function Q(e, t, n) {
  let {
    cardType: a
  } = U.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), o = a === H.GuildPeekCardTypes.WHAT, {
    category: l
  } = e, u = (0, b.default)(e), {
    usersToShow: d
  } = (0, w.useGetEventCardUsers)(u);
  switch (l) {
    case H.CardCategory.GAMING:
      let {
        games: _
      } = e;
      if (null == _[0].application_id) return (0, i.jsx)(C.default, {});
      return (0, i.jsx)(p.default, {
        game: s.default.getApplication(_[0].application_id),
        size: "xl",
        className: K.gameIcon
      });
    case H.CardCategory.EVENT:
      if (d.length > 0 && !o) return (0, i.jsx)(G.default, {
        guildId: t,
        users: d
      });
      return e.isStage && !o ? (0, i.jsx)(V.default, {
        className: K.imageIcon
      }) : (0, i.jsx)(k.default, {
        className: K.imageIcon
      });
    case H.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: c
      } = e;
      if (null == c[0].applicationId) return (0, i.jsx)(L.default, {});
      return (0, i.jsx)(p.default, {
        game: s.default.getApplication(c[0].applicationId),
        size: "xl",
        className: K.gameIcon
      });
    case H.CardCategory.HANGOUT: {
      let {
        streamUserIds: a,
        userIds: s,
        channelHasVideo: l,
        isStage: u
      } = e;
      if (o) {
        if (u) return (0, i.jsx)(V.default, {
          className: K.imageIcon
        });
        if (a.length > 0) return (0, i.jsx)(B.default, {
          className: K.imageIcon
        });
        if (l) return (0, i.jsx)(x.default, {
          className: K.imageIcon
        });
        return (0, i.jsx)(F.default, {
          className: K.imageIcon
        })
      }
      let _ = u ? d : [];
      if (u) {
        if (0 === _.length) return (0, i.jsx)(V.default, {
          className: K.imageIcon
        });
        return (0, i.jsx)(G.default, {
          guildId: t,
          users: _
        })
      }
      if (a.length > 0) {
        let e = e => (0, i.jsx)(y.TextBadge, {
          text: W.default.Messages.LIVE,
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
            className: K.streamPreview
          }), e(K.liveBadge)]
        })
      }
      let c = s.map(e => m.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(G.default, {
        guildId: t,
        users: c
      })
    }
  }
}

function q(e) {
  let {
    category: t
  } = e;
  switch (t) {
    case H.CardCategory.GAMING:
      return C.default;
    case H.CardCategory.EVENT:
      return O.default;
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return L.default;
    case H.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        isStage: n
      } = e;
      if (n) return M.default;
      if (t.length > 0) return v.default;
      return D.default
    }
  }
}

function J(e) {
  var t, n, r, a, o, l, u;
  let {
    category: _
  } = e;
  switch (_) {
    case H.CardCategory.GAMING:
      let {
        games: c, channelId: E
      } = e;
      if (1 === c.length) return W.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (n = S.default.getChannel(E)) || void 0 === n ? void 0 : n.name,
        gameName: c[0].name
      });
      return W.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
        numGames: c.length,
        channelName: null === (t = S.default.getChannel(E)) || void 0 === t ? void 0 : t.name
      });
    case H.CardCategory.EVENT:
      let {
        event: I
      } = e, T = (0, d.getLocationDataForEvent)(I, S.default.getChannel(I.channel_id)), f = null == T ? void 0 : T.IconComponent, h = null == T ? void 0 : T.locationName;
      if (null != f && null != h) return (0, i.jsxs)("div", {
        className: K.inline,
        children: [(0, i.jsx)(f, {
          className: K.categoryIcon
        }), h]
      });
      return null;
    case H.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: A
      } = e;
      if (1 === A.length) return W.default.Messages.GAMING_IN_CHANNEL.format({
        channelName: null === (a = S.default.getChannel(A[0].channelId)) || void 0 === a ? void 0 : a.name,
        gameName: null === (o = s.default.getApplication(A[0].applicationId)) || void 0 === o ? void 0 : o.name
      });
      return W.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
        channelName: null === (r = S.default.getChannel(A[0].channelId)) || void 0 === r ? void 0 : r.name,
        numActivities: A.length
      });
    case H.CardCategory.HANGOUT: {
      let {
        streamUserIds: t,
        channelId: n
      } = e;
      if (t.length > 0) return W.default.Messages.STREAMING_IN_CHANNEL.format({
        channelName: null === (u = S.default.getChannel(n)) || void 0 === u ? void 0 : u.name
      });
      return null === (l = S.default.getChannel(n)) || void 0 === l ? void 0 : l.name
    }
    default:
      return null
  }
}

function $(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case H.CardCategory.GAMING:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, _.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case H.CardCategory.EVENT:
      return () => {
        (0, u.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case H.CardCategory.HANGOUT:
      return () => {
        (0, _.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function ee(e, t) {
  let {
    category: n
  } = e, r = null;
  if (null == (r = n === H.CardCategory.EVENT ? e.event.channel_id : n === H.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let s = N.default.isInChannel(r),
    d = s ? W.default.Messages.GUILD_POPOUT_JOINED : W.default.Messages.JOIN,
    I = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case H.CardCategory.HANGOUT:
        case H.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = S.default.getChannel(n);
            null != i && i.type === Y.ChannelTypes.GUILD_VOICE && A.default.can(Y.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: N.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case H.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = S.default.getChannel(n);
            null != i && i.type === Y.ChannelTypes.GUILD_VOICE && A.default.can(Y.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: N.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(t, n))
          };
        case H.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = S.default.getChannel(n);
            if (null == n || null == a || !A.default.can(Y.Permissions.CONNECT, a)) {
              (0, u.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, E.connectOrLurkStage)(i, n);
              (0, c.navigateToStage)(e)
            };
            r === j.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === j.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
              channel: a,
              connected: N.default.isInChannel(n),
              needSubscriptionToAccess: (0, l.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, _.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    T = (0, i.jsx)(a.Button, {
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.GREEN,
      disabled: s,
      onClick: e => {
        e.stopPropagation(), null == I || I()
      },
      className: K.joinButton,
      children: d
    });
  return (0, i.jsx)("div", {
    className: K.joinButtonWhatWrapper,
    children: T
  })
}
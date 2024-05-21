"use strict";
n.r(t), n.d(t, {
  getClickHandler: function() {
    return X
  },
  getJoinButton: function() {
    return Q
  },
  useCardTitle: function() {
    return W
  },
  useCount: function() {
    return K
  },
  useImage: function() {
    return z
  },
  useSubtitle: function() {
    return Z
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("831209"),
  a = n("481060"),
  s = n("812206"),
  o = n("557135"),
  l = n("471445"),
  u = n("66999"),
  d = n("15274"),
  _ = n("217804"),
  c = n("703656"),
  E = n("881824"),
  I = n("922482"),
  T = n("565799"),
  f = n("501655"),
  S = n("427679"),
  h = n("592125"),
  A = n("271383"),
  m = n("496675"),
  N = n("594174"),
  p = n("979651"),
  O = n("366695");
n("305878");
var C = n("737688"),
  R = n("242315"),
  g = n("158010"),
  L = n("944581"),
  v = n("645284");
n("632184"), n("170039");
var D = n("26290"),
  M = n("51144"),
  y = n("912787"),
  P = n("623552"),
  U = n("718582"),
  b = n("177963"),
  G = n("835248"),
  w = n("437431"),
  k = n("874070"),
  B = n("185885"),
  V = n("126134"),
  x = n("981631"),
  F = n("765305"),
  H = n("689938"),
  Y = n("181096");

function j(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = N.default.getUser(e);
      if (null == n) return null;
      let r = A.default.getNick(i, n.id);
      return null !== (t = null != r ? r : M.default.getGlobalName(n)) && void 0 !== t ? t : M.default.getUserTag(n)
    }).filter(e => null != e)),
    a = r.length;
  if (a > 0) return 1 === a ? r[0] : (2 === a ? H.default.Messages.USER_SUMMARY_TWO : 3 === a ? H.default.Messages.USER_SUMMARY_THREE : H.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: a - 3
  })
}

function W(e, t) {
  let {
    category: n
  } = e, i = (0, U.useSortUserIdsByAffinity)(n === V.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, U.useSortUserIdsByAffinity)(n === V.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, U.useSortUserIdsByAffinity)(n === V.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), s = (0, y.default)(e), {
    usersToShow: o
  } = (0, U.useGetEventCardUsers)(s), l = (0, U.useSortUserIdsByAffinity)(n === V.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
  n === V.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, U.useSortUserIdsByAffinity)(n === V.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case V.CardCategory.HANGOUT: {
      let n = j(l.length > 0 ? l : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = S.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
      }
      return n
    }
    case V.CardCategory.EVENT:
      return e.event.name;
    case V.CardCategory.EMBEDDED_ACTIVITY:
      return j(d, t);
    case V.CardCategory.GAMING:
      return j(a, t);
    default:
      return null
  }
}

function K(e) {
  let {
    category: t
  } = e, n = (0, y.default)(e), {
    audienceCount: i
  } = (0, U.useGetEventCardUsers)(n);
  switch (t) {
    case V.CardCategory.EVENT:
      if (null != i) return [{
        icon: R.default,
        count: i
      }];
      return [];
    case V.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: a, channelId: s, isStage: o
      } = e;
      if (o) {
        var l;
        return [{
          icon: R.default,
          count: null !== (l = T.default.getParticipantCount(s, f.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
        }]
      }
      if (r.length > 0) return [{
        icon: g.default,
        count: a.length > 0 ? a.length : null
      }];
      return [];
    case V.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: g.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: v.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case V.CardCategory.GAMING:
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

function z(e, t, n) {
  let {
    category: o
  } = e, l = (0, y.default)(e), {
    usersToShow: u
  } = (0, U.useGetEventCardUsers)(l);
  switch (o) {
    case V.CardCategory.GAMING:
      let {
        games: d
      } = e;
      if (null == d[0].application_id) return (0, i.jsx)(C.default, {});
      return (0, i.jsx)(O.default, {
        game: s.default.getApplication(d[0].application_id),
        size: "xl",
        className: Y.gameIcon
      });
    case V.CardCategory.EVENT:
      if (u.length > 0) return (0, i.jsx)(P.default, {
        guildId: t,
        users: u
      });
      return e.isStage ? (0, i.jsx)(w.default, {
        className: Y.imageIcon
      }) : (0, i.jsx)(b.default, {
        className: Y.imageIcon
      });
    case V.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: _
      } = e;
      if (null == _[0].applicationId) return (0, i.jsx)(L.default, {});
      return (0, i.jsx)(O.default, {
        game: s.default.getApplication(_[0].applicationId),
        size: "xl",
        className: Y.gameIcon
      });
    case V.CardCategory.HANGOUT: {
      let {
        streamUserIds: s,
        userIds: o,
        channelHasVideo: l,
        isStage: d
      } = e, _ = d ? u : [];
      if (d) {
        if (0 === _.length) return (0, i.jsx)(w.default, {
          className: Y.imageIcon
        });
        return (0, i.jsx)(P.default, {
          guildId: t,
          users: _
        })
      }
      if (s.length > 0) {
        let e;
        return (0, i.jsxs)(i.Fragment, {
          children: [null != n ? (0, i.jsx)("img", {
            src: n,
            alt: "",
            className: Y.streamPreview
          }) : (0, i.jsx)(a.Spinner, {
            className: Y.streamPreview
          }), (e = Y.liveBadge, (0, i.jsx)(D.TextBadge, {
            text: H.default.Messages.LIVE,
            color: r.default.STATUS_DANGER,
            className: e
          }))]
        })
      }
      let c = o.map(e => N.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(P.default, {
        guildId: t,
        users: c
      })
    }
  }
}

function Z(e) {
  var t, n, r, o;
  let {
    category: u
  } = e, d = (0, y.default)(e), c = (0, l.getChannelIconComponent)(d), {
    audienceCount: E
  } = (0, U.useGetEventCardUsers)(d);
  switch (u) {
    case V.CardCategory.GAMING:
      let {
        games: I, channelId: T
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(C.default, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: 1 === I.length ? I[0].name : H.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
            numGames: I.length
          })
        }), "•", null != c && (0, i.jsx)(c, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: null === (t = h.default.getChannel(T)) || void 0 === t ? void 0 : t.name
        })]
      });
    case V.CardCategory.EVENT:
      let {
        event: f
      } = e, S = (0, _.getLocationDataForEvent)(f, h.default.getChannel(f.channel_id)), A = null == S ? void 0 : S.IconComponent, m = null == S ? void 0 : S.locationName;
      if (null != A && null != m) return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(A, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: m
        }), null != E && E > 0 && (0, i.jsxs)(i.Fragment, {
          children: ["•", (0, i.jsx)(g.default, {
            className: Y.categoryIcon
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: Y.ellipsis,
            children: E
          })]
        })]
      });
      return null;
    case V.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: N
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(L.default, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: 1 === N.length ? null === (n = s.default.getApplication(N[0].applicationId)) || void 0 === n ? void 0 : n.name : H.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
            numActivities: N.length
          })
        }), "•", null != c && (0, i.jsx)(c, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: null === (r = h.default.getChannel(N[0].channelId)) || void 0 === r ? void 0 : r.name
        })]
      });
    case V.CardCategory.HANGOUT: {
      let {
        channelId: t
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [null != c && (0, i.jsx)(c, {
          className: Y.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Y.ellipsis,
          children: null === (o = h.default.getChannel(t)) || void 0 === o ? void 0 : o.name
        }), null != E && E > 0 && (0, i.jsxs)(i.Fragment, {
          children: ["•", (0, i.jsx)(g.default, {
            className: Y.categoryIcon
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: Y.ellipsis,
            children: E
          })]
        })]
      })
    }
    default:
      return null
  }
}

function X(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case V.CardCategory.GAMING:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    case V.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, c.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case V.CardCategory.EVENT:
      return () => {
        (0, d.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case V.CardCategory.HANGOUT:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function Q(e, t) {
  let {
    category: n
  } = e, r = null;
  if (null == (r = n === V.CardCategory.EVENT ? e.event.channel_id : n === V.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let s = p.default.isInChannel(r),
    l = s ? H.default.Messages.GUILD_POPOUT_JOINED : H.default.Messages.JOIN,
    _ = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case V.CardCategory.HANGOUT:
        case V.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = h.default.getChannel(n);
            null != i && i.type === x.ChannelTypes.GUILD_VOICE && m.default.can(x.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case V.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = h.default.getChannel(n);
            null != i && i.type === x.ChannelTypes.GUILD_VOICE && m.default.can(x.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case V.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, a = h.default.getChannel(n);
            if (null == n || null == a || !m.default.can(x.Permissions.CONNECT, a)) {
              (0, d.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let s = async () => {
              let e = await (0, I.connectOrLurkStage)(i, n);
              (0, E.navigateToStage)(e)
            };
            r === F.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? s() : r === F.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
              channel: a,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(i, n))
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
        e.stopPropagation(), null == _ || _()
      },
      className: Y.joinButton,
      children: l
    });
  return (0, i.jsx)("div", {
    className: Y.joinButtonWhatWrapper,
    children: T
  })
}
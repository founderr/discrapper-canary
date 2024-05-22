"use strict";
n.r(t), n.d(t, {
  getClickHandler: function() {
    return ee
  },
  getJoinButton: function() {
    return et
  },
  useCardTitle: function() {
    return Q
  },
  useCount: function() {
    return q
  },
  useImage: function() {
    return J
  },
  useSubtitle: function() {
    return $
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("831209"),
  s = n("442837"),
  a = n("481060"),
  o = n("812206"),
  l = n("557135"),
  u = n("66999"),
  d = n("15274"),
  _ = n("217804"),
  c = n("703656"),
  E = n("881824"),
  I = n("922482"),
  T = n("565799"),
  f = n("501655"),
  S = n("427679"),
  h = n("543882"),
  A = n("592125"),
  m = n("271383"),
  N = n("496675"),
  p = n("594174"),
  O = n("979651"),
  C = n("366695");
n("305878");
var R = n("119828"),
  g = n("737688"),
  L = n("242315"),
  v = n("630641"),
  D = n("158010"),
  M = n("944581"),
  y = n("645284"),
  P = n("632184"),
  U = n("170039"),
  b = n("26290"),
  G = n("51144"),
  w = n("912787"),
  k = n("623552"),
  B = n("718582"),
  V = n("177963"),
  x = n("835248"),
  F = n("437431"),
  H = n("874070"),
  Y = n("185885"),
  j = n("126134"),
  W = n("981631"),
  K = n("765305"),
  z = n("689938"),
  Z = n("181096");

function X(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = p.default.getUser(e);
      if (null == n) return null;
      let r = m.default.getNick(i, n.id);
      return null !== (t = null != r ? r : G.default.getGlobalName(n)) && void 0 !== t ? t : G.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? z.default.Messages.USER_SUMMARY_TWO : 3 === s ? z.default.Messages.USER_SUMMARY_THREE : z.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function Q(e, t) {
  let {
    category: n
  } = e, i = (0, B.useSortUserIdsByAffinity)(n === j.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, B.useSortUserIdsByAffinity)(n === j.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, B.useSortUserIdsByAffinity)(n === j.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), a = (0, w.default)(e), {
    usersToShow: o
  } = (0, B.useGetEventCardUsers)(a), l = (0, B.useSortUserIdsByAffinity)(n === j.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
  n === j.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, B.useSortUserIdsByAffinity)(n === j.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case j.CardCategory.HANGOUT: {
      let n = X(l.length > 0 ? l : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = S.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
      }
      return n
    }
    case j.CardCategory.EVENT:
      return e.event.name;
    case j.CardCategory.EMBEDDED_ACTIVITY:
      return X(d, t);
    case j.CardCategory.GAMING:
      return X(s, t);
    default:
      return null
  }
}

function q(e) {
  let {
    category: t
  } = e, n = (0, w.default)(e), {
    audienceCount: i
  } = (0, B.useGetEventCardUsers)(n);
  switch (t) {
    case j.CardCategory.EVENT:
      if (null != i) return [{
        icon: L.default,
        count: i
      }];
      return [];
    case j.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: s, channelId: a, isStage: o
      } = e;
      if (o) {
        var l;
        return [{
          icon: L.default,
          count: null !== (l = T.default.getParticipantCount(a, f.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
        }]
      }
      if (r.length > 0) return [{
        icon: D.default,
        count: s.length > 0 ? s.length : null
      }];
      return [];
    case j.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: D.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: y.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case j.CardCategory.GAMING:
      return [{
        icon: D.default,
        count: e.voiceStates.length > 0 ? e.voiceStates.length : null
      }, {
        icon: y.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    default:
      return []
  }
}

function J(e, t, n) {
  let {
    category: l
  } = e, u = (0, w.default)(e), {
    usersToShow: d
  } = (0, B.useGetEventCardUsers)(u), _ = (0, s.useStateFromStores)([h.default], () => l === j.CardCategory.HANGOUT ? h.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
  switch (l) {
    case j.CardCategory.GAMING:
      let {
        games: c
      } = e;
      if (null == c[0].application_id) return (0, i.jsx)(g.default, {});
      return (0, i.jsx)(C.default, {
        game: o.default.getApplication(c[0].application_id),
        size: "xl",
        className: Z.gameIcon
      });
    case j.CardCategory.EVENT:
      if (d.length > 0) return (0, i.jsx)(k.default, {
        guildId: t,
        users: d
      });
      return e.isStage ? (0, i.jsx)(F.default, {
        className: Z.imageIcon
      }) : (0, i.jsx)(V.default, {
        className: Z.imageIcon
      });
    case j.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: E
      } = e;
      if (null == E[0].applicationId) return (0, i.jsx)(M.default, {});
      return (0, i.jsx)(C.default, {
        game: o.default.getApplication(E[0].applicationId),
        size: "xl",
        className: Z.gameIcon
      });
    case j.CardCategory.HANGOUT: {
      let {
        streamUserIds: s,
        userIds: o,
        channelHasVideo: l,
        isStage: u
      } = e, c = u ? d : [];
      if (u) {
        if (0 === c.length) return (0, i.jsx)(F.default, {
          className: Z.imageIcon
        });
        return (0, i.jsx)(k.default, {
          guildId: t,
          users: c
        })
      }
      if (s.length > 0) {
        let e = e => (0, i.jsx)(b.TextBadge, {
          text: z.default.Messages.LIVE,
          color: r.default.STATUS_DANGER,
          className: e
        });
        if (_) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(a.Spinner, {
            className: Z.streamPreview
          }), e(Z.liveBadge)]
        });
        if (null != n) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("img", {
            src: n,
            alt: "",
            className: Z.streamPreview
          }), e(Z.liveBadge)]
        });
        let o = s.map(e => p.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(k.default, {
          guildId: t,
          users: o
        })
      }
      let E = o.map(e => p.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(k.default, {
        guildId: t,
        users: E
      })
    }
  }
}

function $(e) {
  var t, n, r, s;
  let {
    category: l
  } = e, u = (0, w.default)(e), d = function(e) {
    let t = (0, w.default)(e),
      {
        category: n
      } = e;
    return (null == t ? void 0 : t.isGuildStageVoice()) ? U.default : (n === j.CardCategory.GAMING || n === j.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === j.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? y.default : n === j.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? P.default : null != t && O.default.hasVideo(t.id) ? R.default : P.default
  }(e), {
    audienceCount: c
  } = (0, B.useGetEventCardUsers)(u);
  switch (l) {
    case j.CardCategory.GAMING:
      let {
        games: E, channelId: I
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.default, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: 1 === E.length ? E[0].name : z.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
            numGames: E.length
          })
        }), "•", null != d && (0, i.jsx)(d, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: null === (t = A.default.getChannel(I)) || void 0 === t ? void 0 : t.name
        })]
      });
    case j.CardCategory.EVENT:
      let {
        event: T
      } = e, f = (0, _.getLocationDataForEvent)(T, A.default.getChannel(T.channel_id)), S = null == f ? void 0 : f.IconComponent, h = null == f ? void 0 : f.locationName;
      if (null != S && null != h) return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(S, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: h
        }), null != c && c > 0 && (0, i.jsxs)(i.Fragment, {
          children: ["•", (0, i.jsx)(D.default, {
            className: Z.categoryIcon
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: Z.ellipsis,
            children: c
          })]
        })]
      });
      return null;
    case j.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: m
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(M.default, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: 1 === m.length ? null === (n = o.default.getApplication(m[0].applicationId)) || void 0 === n ? void 0 : n.name : z.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
            numActivities: m.length
          })
        }), "•", null != d && (0, i.jsx)(d, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: null === (r = A.default.getChannel(m[0].channelId)) || void 0 === r ? void 0 : r.name
        })]
      });
    case j.CardCategory.HANGOUT: {
      let {
        channelId: t
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [null != d && (0, i.jsx)(d, {
          className: Z.categoryIcon
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: Z.ellipsis,
          children: null === (s = A.default.getChannel(t)) || void 0 === s ? void 0 : s.name
        }), null != c && c > 0 && (0, i.jsxs)(i.Fragment, {
          children: ["•", (0, i.jsx)(D.default, {
            className: Z.categoryIcon
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: Z.ellipsis,
            children: c
          })]
        })]
      })
    }
    default:
      return null
  }
}

function ee(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case j.CardCategory.GAMING:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    case j.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, c.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case j.CardCategory.EVENT:
      return () => {
        (0, d.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case j.CardCategory.HANGOUT:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function et(e, t) {
  var n;
  let {
    category: r
  } = e, s = null, o = r === j.CardCategory.EVENT;
  if (null == (s = o ? e.event.channel_id : r === j.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
  let _ = null != s && O.default.isInChannel(s),
    T = o && (e.event.entity_type === K.GuildScheduledEventEntityTypes.EXTERNAL || e.event.entity_type === K.GuildScheduledEventEntityTypes.NONE) ? z.default.Messages.VIEW : _ ? z.default.Messages.GUILD_POPOUT_JOINED : z.default.Messages.JOIN,
    f = (null === (n = A.default.getChannel(s)) || void 0 === n ? void 0 : n.isGuildVocal()) && !N.default.can(W.Permissions.CONNECT, A.default.getChannel(s)),
    S = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case j.CardCategory.HANGOUT:
        case j.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = A.default.getChannel(n);
            null != i && i.type === W.ChannelTypes.GUILD_VOICE && N.default.can(W.Permissions.CONNECT, i) && (l.default.handleVoiceConnect({
              channel: i,
              connected: O.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case j.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = A.default.getChannel(n);
            null != i && i.type === W.ChannelTypes.GUILD_VOICE && N.default.can(W.Permissions.CONNECT, i) && (l.default.handleVoiceConnect({
              channel: i,
              connected: O.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case j.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, s = A.default.getChannel(n);
            if (null == n || null == s || !N.default.can(W.Permissions.CONNECT, s)) {
              (0, d.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let a = async () => {
              let e = await (0, I.connectOrLurkStage)(i, n);
              (0, E.navigateToStage)(e)
            };
            r === K.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === K.GuildScheduledEventEntityTypes.VOICE && (l.default.handleVoiceConnect({
              channel: s,
              connected: O.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    h = (0, i.jsxs)(a.Button, {
      size: a.Button.Sizes.MIN,
      innerClassName: Z.joinButtonInner,
      color: a.Button.Colors.GREEN,
      disabled: _ || f,
      onClick: e => {
        e.stopPropagation(), null == S || S()
      },
      className: Z.joinButton,
      children: [T, f && (0, i.jsx)(v.default, {
        width: 14,
        height: 14
      })]
    });
  return (0, i.jsx)("div", {
    className: Z.joinButtonWhatWrapper,
    children: h
  })
}
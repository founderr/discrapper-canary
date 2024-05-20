"use strict";
n.r(t), n.d(t, {
  getClickHandler: function() {
    return Q
  },
  getJoinButton: function() {
    return q
  },
  useCardTitle: function() {
    return K
  },
  useCount: function() {
    return z
  },
  useImage: function() {
    return Z
  },
  useSubtitle: function() {
    return X
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("831209"),
  s = n("481060"),
  a = n("812206"),
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
  y = n("59688"),
  P = n("912787"),
  U = n("623552"),
  b = n("718582"),
  G = n("177963"),
  w = n("835248"),
  k = n("437431"),
  B = n("874070"),
  V = n("185885"),
  x = n("126134"),
  F = n("981631"),
  H = n("765305"),
  Y = n("689938"),
  j = n("181096");

function W(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = N.default.getUser(e);
      if (null == n) return null;
      let r = A.default.getNick(i, n.id);
      return null !== (t = null != r ? r : M.default.getGlobalName(n)) && void 0 !== t ? t : M.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? Y.default.Messages.USER_SUMMARY_TWO : 3 === s ? Y.default.Messages.USER_SUMMARY_THREE : Y.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function K(e, t) {
  let {
    category: n
  } = e, i = (0, b.useSortUserIdsByAffinity)(n === x.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, b.useSortUserIdsByAffinity)(n === x.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, b.useSortUserIdsByAffinity)(n === x.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), a = (0, P.default)(e), {
    usersToShow: o
  } = (0, b.useGetEventCardUsers)(a), l = (0, b.useSortUserIdsByAffinity)(n === x.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
  n === x.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, b.useSortUserIdsByAffinity)(n === x.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case x.CardCategory.HANGOUT: {
      let n = W(l.length > 0 ? l : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = S.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
      }
      return n
    }
    case x.CardCategory.EVENT:
      return e.event.name;
    case x.CardCategory.EMBEDDED_ACTIVITY:
      return W(d, t);
    case x.CardCategory.GAMING:
      return W(s, t);
    default:
      return null
  }
}

function z(e) {
  let {
    category: t
  } = e, n = (0, P.default)(e), {
    audienceCount: i
  } = (0, b.useGetEventCardUsers)(n);
  switch (t) {
    case x.CardCategory.EVENT:
      if (null != i) return [{
        icon: R.default,
        count: i
      }];
      return [];
    case x.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: s, channelId: a, isStage: o
      } = e;
      if (o) {
        var l;
        return [{
          icon: R.default,
          count: null !== (l = T.default.getParticipantCount(a, f.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
        }]
      }
      if (r.length > 0) return [{
        icon: g.default,
        count: s.length > 0 ? s.length : null
      }];
      return [];
    case x.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: g.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: v.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case x.CardCategory.GAMING:
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

function Z(e, t, n) {
  let {
    cardType: s
  } = y.default.getCurrentConfig({
    location: "join_button"
  }, {
    autoTrackExposure: !1
  }), o = s === x.GuildPeekCardTypes.WHAT, {
    category: l
  } = e, u = (0, P.default)(e), {
    usersToShow: d
  } = (0, b.useGetEventCardUsers)(u);
  switch (l) {
    case x.CardCategory.GAMING:
      let {
        games: _
      } = e;
      if (null == _[0].application_id) return (0, i.jsx)(C.default, {});
      return (0, i.jsx)(O.default, {
        game: a.default.getApplication(_[0].application_id),
        size: "xl",
        className: j.gameIcon
      });
    case x.CardCategory.EVENT:
      if (d.length > 0 && !o) return (0, i.jsx)(U.default, {
        guildId: t,
        users: d
      });
      return e.isStage && !o ? (0, i.jsx)(k.default, {
        className: j.imageIcon
      }) : (0, i.jsx)(G.default, {
        className: j.imageIcon
      });
    case x.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: c
      } = e;
      if (null == c[0].applicationId) return (0, i.jsx)(L.default, {});
      return (0, i.jsx)(O.default, {
        game: a.default.getApplication(c[0].applicationId),
        size: "xl",
        className: j.gameIcon
      });
    case x.CardCategory.HANGOUT: {
      let {
        streamUserIds: s,
        userIds: a,
        channelHasVideo: l,
        isStage: u
      } = e;
      if (o) {
        if (u) return (0, i.jsx)(k.default, {
          className: j.imageIcon
        });
        if (s.length > 0) return (0, i.jsx)(w.default, {
          className: j.imageIcon
        });
        if (l) return (0, i.jsx)(B.default, {
          className: j.imageIcon
        });
        return (0, i.jsx)(V.default, {
          className: j.imageIcon
        })
      }
      let _ = u ? d : [];
      if (u) {
        if (0 === _.length) return (0, i.jsx)(k.default, {
          className: j.imageIcon
        });
        return (0, i.jsx)(U.default, {
          guildId: t,
          users: _
        })
      }
      if (s.length > 0) {
        let e = e => (0, i.jsx)(D.TextBadge, {
          text: Y.default.Messages.LIVE,
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
            className: j.streamPreview
          }), e(j.liveBadge)]
        })
      }
      let c = a.map(e => N.default.getUser(e)).filter(e => null != e);
      return (0, i.jsx)(U.default, {
        guildId: t,
        users: c
      })
    }
  }
}

function X(e) {
  var t, n, r, o;
  let {
    category: u
  } = e, d = (0, P.default)(e), c = (0, l.getChannelIconComponent)(d);
  switch (u) {
    case x.CardCategory.GAMING:
      let {
        games: E, channelId: I
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(C.default, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: 1 === E.length ? E[0].name : Y.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
            numGames: E.length
          })
        }), "•", null != c && (0, i.jsx)(c, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: null === (t = h.default.getChannel(I)) || void 0 === t ? void 0 : t.name
        })]
      });
    case x.CardCategory.EVENT:
      let {
        event: T
      } = e, f = (0, _.getLocationDataForEvent)(T, h.default.getChannel(T.channel_id)), S = null == f ? void 0 : f.IconComponent, A = null == f ? void 0 : f.locationName;
      if (null != S && null != A) return (0, i.jsxs)("div", {
        className: j.inline,
        children: [(0, i.jsx)(S, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: A
        })]
      });
      return null;
    case x.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: m
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(L.default, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: 1 === m.length ? null === (n = a.default.getApplication(m[0].applicationId)) || void 0 === n ? void 0 : n.name : Y.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
            numActivities: m.length
          })
        }), "•", null != c && (0, i.jsx)(c, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: null === (r = h.default.getChannel(m[0].channelId)) || void 0 === r ? void 0 : r.name
        })]
      });
    case x.CardCategory.HANGOUT: {
      let {
        channelId: t
      } = e;
      return (0, i.jsxs)(i.Fragment, {
        children: [null != c && (0, i.jsx)(c, {
          className: j.categoryIcon
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: j.ellipsis,
          children: null === (o = h.default.getChannel(t)) || void 0 === o ? void 0 : o.name
        })]
      })
    }
    default:
      return null
  }
}

function Q(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case x.CardCategory.GAMING:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    case x.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        (0, c.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case x.CardCategory.EVENT:
      return () => {
        (0, d.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case x.CardCategory.HANGOUT:
      return () => {
        (0, c.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function q(e, t) {
  let {
    category: n
  } = e, r = null;
  if (null == (r = n === x.CardCategory.EVENT ? e.event.channel_id : n === x.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId)) return;
  let a = p.default.isInChannel(r),
    l = a ? Y.default.Messages.GUILD_POPOUT_JOINED : Y.default.Messages.JOIN,
    _ = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case x.CardCategory.HANGOUT:
        case x.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = h.default.getChannel(n);
            null != i && i.type === F.ChannelTypes.GUILD_VOICE && m.default.can(F.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case x.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = h.default.getChannel(n);
            null != i && i.type === F.ChannelTypes.GUILD_VOICE && m.default.can(F.Permissions.CONNECT, i) && (o.default.handleVoiceConnect({
              channel: i,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(t, n))
          };
        case x.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, s = h.default.getChannel(n);
            if (null == n || null == s || !m.default.can(F.Permissions.CONNECT, s)) {
              (0, d.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let a = async () => {
              let e = await (0, I.connectOrLurkStage)(i, n);
              (0, E.navigateToStage)(e)
            };
            r === H.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === H.GuildScheduledEventEntityTypes.VOICE && (o.default.handleVoiceConnect({
              channel: s,
              connected: p.default.isInChannel(n),
              needSubscriptionToAccess: (0, u.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, c.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    T = (0, i.jsx)(s.Button, {
      size: s.Button.Sizes.MIN,
      color: s.Button.Colors.GREEN,
      disabled: a,
      onClick: e => {
        e.stopPropagation(), null == _ || _()
      },
      className: j.joinButton,
      children: l
    });
  return (0, i.jsx)("div", {
    className: j.joinButtonWhatWrapper,
    children: T
  })
}
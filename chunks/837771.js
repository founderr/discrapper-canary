"use strict";
n.r(t), n.d(t, {
  getClickHandler: function() {
    return es
  },
  getJoinButton: function() {
    return ea
  },
  useCardTitle: function() {
    return ee
  },
  useCount: function() {
    return et
  },
  useImage: function() {
    return en
  },
  useSubtitle: function() {
    return ei
  }
}), n("47120");
var i, r, s = n("735250");
n("470079");
var a = n("831209"),
  o = n("442837"),
  l = n("481060"),
  u = n("812206"),
  d = n("557135"),
  _ = n("66999"),
  c = n("15274"),
  E = n("217804"),
  I = n("703656"),
  T = n("881824"),
  f = n("922482"),
  S = n("565799"),
  h = n("501655"),
  A = n("427679"),
  m = n("543882"),
  N = n("592125"),
  p = n("271383"),
  O = n("496675"),
  C = n("800599"),
  R = n("594174"),
  g = n("979651"),
  L = n("366695");
n("305878");
var v = n("119828"),
  D = n("737688"),
  M = n("242315"),
  y = n("630641"),
  P = n("158010"),
  U = n("944581"),
  b = n("645284"),
  G = n("632184"),
  w = n("170039"),
  k = n("26290"),
  B = n("626135"),
  V = n("51144"),
  x = n("912787"),
  F = n("623552"),
  H = n("718582"),
  Y = n("177963"),
  j = n("835248"),
  W = n("437431"),
  K = n("874070"),
  z = n("185885"),
  Z = n("126134"),
  X = n("981631"),
  Q = n("765305"),
  q = n("689938"),
  J = n("181096");
(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";

function $(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = R.default.getUser(e);
      if (null == n) return null;
      let r = p.default.getNick(i, n.id);
      return null !== (t = null != r ? r : V.default.getGlobalName(n)) && void 0 !== t ? t : V.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? q.default.Messages.USER_SUMMARY_TWO : 3 === s ? q.default.Messages.USER_SUMMARY_THREE : q.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function ee(e, t) {
  let {
    category: n
  } = e, i = (0, H.useSortUserIdsByAffinity)(n === Z.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, H.useSortUserIdsByAffinity)(n === Z.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, H.useSortUserIdsByAffinity)(n === Z.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), a = (0, x.default)(e), {
    usersToShow: o
  } = (0, H.useGetEventCardUsers)(a), l = (0, H.useSortUserIdsByAffinity)(n === Z.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
  n === Z.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
    u = new Set([...u, ...e.userIds])
  });
  let d = (0, H.useSortUserIdsByAffinity)(n === Z.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
  switch (n) {
    case Z.CardCategory.HANGOUT: {
      let n = $(l.length > 0 ? l : r.length > 0 ? r : i, t);
      if (e.isStage) {
        var _, c;
        return null !== (c = null === (_ = A.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
      }
      return n
    }
    case Z.CardCategory.EVENT:
      return e.event.name;
    case Z.CardCategory.EMBEDDED_ACTIVITY:
      return $(d, t);
    case Z.CardCategory.GAMING:
      return $(s, t);
    default:
      return null
  }
}

function et(e) {
  let {
    category: t
  } = e, n = (0, x.default)(e), {
    audienceCount: i
  } = (0, H.useGetEventCardUsers)(n);
  switch (t) {
    case Z.CardCategory.EVENT:
      if (null != i) return [{
        icon: M.default,
        count: i
      }];
      return [];
    case Z.CardCategory.HANGOUT:
      let {
        streamUserIds: r, userIds: s, channelId: a, isStage: o
      } = e;
      if (o) {
        var l;
        return [{
          icon: M.default,
          count: null !== (l = S.default.getParticipantCount(a, h.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
        }]
      }
      if (r.length > 0) return [{
        icon: P.default,
        count: s.length > 0 ? s.length : null
      }];
      return [];
    case Z.CardCategory.EMBEDDED_ACTIVITY:
      return [{
        icon: P.default,
        count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
      }, {
        icon: b.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    case Z.CardCategory.GAMING:
      return [{
        icon: P.default,
        count: e.voiceStates.length > 0 ? e.voiceStates.length : null
      }, {
        icon: b.default,
        count: e.streamersCount > 0 ? e.streamersCount : null
      }];
    default:
      return []
  }
}

function en(e, t, n) {
  let {
    category: i
  } = e, r = (0, x.default)(e), {
    usersToShow: d
  } = (0, H.useGetEventCardUsers)(r), _ = (0, o.useStateFromStores)([m.default], () => i === Z.CardCategory.HANGOUT ? m.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
  switch (i) {
    case Z.CardCategory.GAMING:
      let {
        games: c
      } = e;
      if (null == c[0].application_id) return (0, s.jsx)(D.default, {});
      return (0, s.jsx)(L.default, {
        game: u.default.getApplication(c[0].application_id),
        size: "xl",
        className: J.gameIcon
      });
    case Z.CardCategory.EVENT:
      if (d.length > 0) return (0, s.jsx)(F.default, {
        guildId: t,
        users: d
      });
      return e.isStage ? (0, s.jsx)(W.default, {
        className: J.imageIcon
      }) : (0, s.jsx)(Y.default, {
        className: J.imageIcon
      });
    case Z.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: E
      } = e;
      if (null == E[0].applicationId) return (0, s.jsx)(U.default, {});
      return (0, s.jsx)(L.default, {
        game: u.default.getApplication(E[0].applicationId),
        size: "xl",
        className: J.gameIcon
      });
    case Z.CardCategory.HANGOUT: {
      let {
        streamUserIds: i,
        userIds: r,
        channelHasVideo: o,
        isStage: u
      } = e, c = u ? d : [];
      if (u) {
        if (0 === c.length) return (0, s.jsx)(W.default, {
          className: J.imageIcon
        });
        return (0, s.jsx)(F.default, {
          guildId: t,
          users: c
        })
      }
      if (i.length > 0) {
        let e = e => (0, s.jsx)(k.TextBadge, {
          text: q.default.Messages.LIVE,
          color: a.default.STATUS_DANGER,
          className: e
        });
        if (_) return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(l.Spinner, {
            className: J.streamPreview
          }), e(J.liveBadge)]
        });
        if (null != n) return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("img", {
            src: n,
            alt: "",
            className: J.streamPreview
          }), e(J.liveBadge)]
        });
        let r = i.map(e => R.default.getUser(e)).filter(e => null != e);
        return (0, s.jsx)(F.default, {
          guildId: t,
          users: r
        })
      }
      let E = r.map(e => R.default.getUser(e)).filter(e => null != e);
      return (0, s.jsx)(F.default, {
        guildId: t,
        users: E
      })
    }
  }
}

function ei(e) {
  var t, n, i, r;
  let {
    category: a
  } = e, o = (0, x.default)(e), d = function(e) {
    let t = (0, x.default)(e),
      {
        category: n
      } = e;
    return (null == t ? void 0 : t.isGuildStageVoice()) ? w.default : (n === Z.CardCategory.GAMING || n === Z.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === Z.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? b.default : n === Z.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? G.default : null != t && g.default.hasVideo(t.id) ? v.default : G.default
  }(e), {
    audienceCount: _
  } = (0, H.useGetEventCardUsers)(o);
  switch (a) {
    case Z.CardCategory.GAMING:
      let {
        games: c, channelId: I
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(D.default, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: 1 === c.length ? c[0].name : q.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
            numGames: c.length
          })
        }), "•", null != d && (0, s.jsx)(d, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: null === (t = N.default.getChannel(I)) || void 0 === t ? void 0 : t.name
        })]
      });
    case Z.CardCategory.EVENT:
      let {
        event: T
      } = e, f = (0, E.getLocationDataForEvent)(T, N.default.getChannel(T.channel_id)), S = null == f ? void 0 : f.IconComponent, h = null == f ? void 0 : f.locationName;
      if (null != S && null != h) return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(S, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: h
        }), null != _ && _ > 0 && (0, s.jsxs)(s.Fragment, {
          children: ["•", (0, s.jsx)(P.default, {
            className: J.categoryIcon
          }), (0, s.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: J.ellipsis,
            children: _
          })]
        })]
      });
      return null;
    case Z.CardCategory.EMBEDDED_ACTIVITY:
      let {
        embeddedActivities: A
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(U.default, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: 1 === A.length ? null === (n = u.default.getApplication(A[0].applicationId)) || void 0 === n ? void 0 : n.name : q.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
            numActivities: A.length
          })
        }), "•", null != d && (0, s.jsx)(d, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: null === (i = N.default.getChannel(A[0].channelId)) || void 0 === i ? void 0 : i.name
        })]
      });
    case Z.CardCategory.HANGOUT: {
      let {
        channelId: t
      } = e;
      return (0, s.jsxs)(s.Fragment, {
        children: [null != d && (0, s.jsx)(d, {
          className: J.categoryIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: J.ellipsis,
          children: null === (r = N.default.getChannel(t)) || void 0 === r ? void 0 : r.name
        }), null != _ && _ > 0 && (0, s.jsxs)(s.Fragment, {
          children: ["•", (0, s.jsx)(P.default, {
            className: J.categoryIcon
          }), (0, s.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: J.ellipsis,
            children: _
          })]
        })]
      })
    }
    default:
      return null
  }
}

function er(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, x.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = N.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = (0, H.getVoiceChannelUsers)(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_affinity_user_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = C.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), B.default.track(X.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function es(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case Z.CardCategory.GAMING:
      return () => {
        er(e, t, n, "card"), (0, I.transitionToGuild)(t, e.channelId)
      };
    case Z.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        er(e, t, n, "card"), (0, I.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case Z.CardCategory.EVENT:
      return () => {
        er(e, t, n, "card"), (0, c.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case Z.CardCategory.HANGOUT:
      return () => {
        er(e, t, n, "card"), (0, I.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function ea(e, t, n) {
  var i;
  let {
    category: r
  } = e, a = null, o = r === Z.CardCategory.EVENT;
  if (null == (a = o ? e.event.channel_id : r === Z.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
  let u = null != a && g.default.isInChannel(a),
    E = o && (e.event.entity_type === Q.GuildScheduledEventEntityTypes.EXTERNAL || e.event.entity_type === Q.GuildScheduledEventEntityTypes.NONE) ? q.default.Messages.VIEW : u ? q.default.Messages.GUILD_POPOUT_JOINED : q.default.Messages.JOIN,
    S = (null === (i = N.default.getChannel(a)) || void 0 === i ? void 0 : i.isGuildVocal()) && !O.default.can(X.Permissions.CONNECT, N.default.getChannel(a)),
    h = function(e, t) {
      let {
        category: n
      } = e;
      switch (n) {
        case Z.CardCategory.HANGOUT:
        case Z.CardCategory.GAMING:
          return () => {
            let {
              channelId: n
            } = e, i = N.default.getChannel(n);
            null != i && i.type === X.ChannelTypes.GUILD_VOICE && O.default.can(X.Permissions.CONNECT, i) && (d.default.handleVoiceConnect({
              channel: i,
              connected: g.default.isInChannel(n),
              needSubscriptionToAccess: (0, _.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, I.transitionToGuild)(t, n))
          };
        case Z.CardCategory.EMBEDDED_ACTIVITY:
          return () => {
            let {
              channelId: n
            } = e.embeddedActivities[0], i = N.default.getChannel(n);
            null != i && i.type === X.ChannelTypes.GUILD_VOICE && O.default.can(X.Permissions.CONNECT, i) && (d.default.handleVoiceConnect({
              channel: i,
              connected: g.default.isInChannel(n),
              needSubscriptionToAccess: (0, _.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, I.transitionToGuild)(t, n))
          };
        case Z.CardCategory.EVENT:
          return () => {
            let {
              event: t
            } = e, {
              channel_id: n,
              guild_id: i,
              entity_type: r
            } = t, s = N.default.getChannel(n);
            if (null == n || null == s || !O.default.can(X.Permissions.CONNECT, s)) {
              (0, c.openGuildEventDetails)({
                eventId: t.id
              });
              return
            }
            let a = async () => {
              let e = await (0, f.connectOrLurkStage)(i, n);
              (0, T.navigateToStage)(e)
            };
            r === Q.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === Q.GuildScheduledEventEntityTypes.VOICE && (d.default.handleVoiceConnect({
              channel: s,
              connected: g.default.isInChannel(n),
              needSubscriptionToAccess: (0, _.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
              locked: !1
            }), (0, I.transitionToGuild)(i, n))
          };
        default:
          return null
      }
    }(e, t),
    A = (0, s.jsxs)(l.Button, {
      size: l.Button.Sizes.MIN,
      innerClassName: J.joinButtonInner,
      color: l.Button.Colors.GREEN,
      disabled: u || S,
      onClick: i => {
        i.stopPropagation(), er(e, t, n, "join_button"), null == h || h()
      },
      className: J.joinButton,
      children: [E, S && (0, s.jsx)(y.default, {
        width: 14,
        height: 14
      })]
    });
  return (0, s.jsx)("div", {
    className: J.joinButtonWhatWrapper,
    children: A
  })
}
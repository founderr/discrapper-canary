"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("831209"),
  l = n("442837"),
  u = n("481060"),
  d = n("700582"),
  _ = n("812206"),
  c = n("924301"),
  E = n("565799"),
  I = n("501655"),
  T = n("427679"),
  f = n("543882"),
  S = n("592125"),
  h = n("496675"),
  A = n("594174"),
  m = n("979651"),
  N = n("366695"),
  p = n("119828"),
  O = n("737688"),
  C = n("242315"),
  R = n("630641"),
  g = n("158010"),
  L = n("944581"),
  v = n("645284"),
  D = n("632184"),
  M = n("170039"),
  y = n("26290"),
  P = n("806519"),
  U = n("912787"),
  b = n("623552"),
  G = n("718582"),
  w = n("177963"),
  k = n("835248"),
  B = n("437431"),
  V = n("874070"),
  x = n("185885"),
  F = n("126134"),
  H = n("981631"),
  Y = n("765305"),
  j = n("689938"),
  W = n("181096");

function K(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: W.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(d.default, {
        user: e,
        size: u.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: W.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(P.default, {
        width: 20,
        height: 20,
        mask: P.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: W.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(u.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: W.othersCount,
      children: ["+", n]
    }), r]
  })
}

function z(e) {
  var t;
  let {
    cardData: n,
    guildId: s,
    cardIndex: d
  } = e, {
    category: P
  } = n, [k, V] = r.useState(!1), x = P === F.CardCategory.HANGOUT && n.streamUserIds.length > 0, z = (0, l.useStateFromStores)([f.default], () => x ? f.default.getPreviewURL(s, n.channelId, n.streamUserIds[0]) : null), Z = (0, l.useStateFromStores)([f.default], () => P === F.CardCategory.HANGOUT ? f.default.getIsPreviewLoading(s, n.channelId, n.streamUserIds[0]) : null), X = P === F.CardCategory.HANGOUT && n.streamUserIds.length > 0 && null == z && !Z, Q = (0, l.useStateFromStores)([S.default], () => {
    let e = P === F.CardCategory.HANGOUT || P === F.CardCategory.GAMING ? n.channelId : P === F.CardCategory.EVENT ? n.event.channel_id : P === F.CardCategory.EMBEDDED_ACTIVITY ? n.embeddedActivities[0].channelId : null;
    return S.default.getChannel(e)
  }), q = (0, l.useStateFromStores)([c.default], () => c.default.getActiveEventByChannel(null == Q ? void 0 : Q.id)), {
    usersToShow: J,
    othersCount: $
  } = (0, G.useVoiceChannelUsers)(null !== (t = null == Q ? void 0 : Q.id) && void 0 !== t ? t : "", s), {
    usersToShow: ee
  } = (0, G.useGetEventCardUsers)(Q), et = function(e, t, n) {
    let {
      category: r
    } = e, s = (0, U.default)(e), {
      usersToShow: a
    } = (0, G.useGetEventCardUsers)(s), d = (0, l.useStateFromStores)([f.default], () => r === F.CardCategory.HANGOUT ? f.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (r) {
      case F.CardCategory.GAMING:
        let {
          games: c
        } = e;
        if (null == c[0].application_id) return (0, i.jsx)(O.default, {});
        return (0, i.jsx)(N.default, {
          game: _.default.getApplication(c[0].application_id),
          size: "xl",
          className: W.gameIcon
        });
      case F.CardCategory.EVENT:
        if (a.length > 0) return (0, i.jsx)(b.default, {
          guildId: t,
          users: a
        });
        return e.isStage ? (0, i.jsx)(B.default, {
          className: W.imageIcon
        }) : (0, i.jsx)(w.default, {
          className: W.imageIcon
        });
      case F.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: E
        } = e;
        if (null == E[0].applicationId) return (0, i.jsx)(L.default, {});
        return (0, i.jsx)(N.default, {
          game: _.default.getApplication(E[0].applicationId),
          size: "xl",
          className: W.gameIcon
        });
      case F.CardCategory.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: l,
          isStage: _
        } = e, c = _ ? a : [];
        if (_) {
          if (0 === c.length) return (0, i.jsx)(B.default, {
            className: W.imageIcon
          });
          return (0, i.jsx)(b.default, {
            guildId: t,
            users: c
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(y.TextBadge, {
            text: j.default.Messages.LIVE,
            color: o.default.STATUS_DANGER,
            className: e
          });
          if (d) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Spinner, {
              className: W.streamPreview
            }), e(W.liveBadge)]
          });
          if (null != n) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              src: n,
              alt: "",
              className: W.streamPreview
            }), e(W.liveBadge)]
          });
          let s = r.map(e => A.default.getUser(e)).filter(e => null != e);
          return (0, i.jsx)(b.default, {
            guildId: t,
            users: s
          })
        }
        let E = s.map(e => A.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(b.default, {
          guildId: t,
          users: E
        })
      }
    }
  }(n, s, z), en = function(e, t) {
    let {
      category: n
    } = e, i = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), a = (0, U.default)(e), {
      usersToShow: o
    } = (0, G.useGetEventCardUsers)(a), l = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
    n === F.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      u = new Set([...u, ...e.userIds])
    });
    let d = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
    switch (n) {
      case F.CardCategory.HANGOUT: {
        let n = (0, G.getUserNameString)(l.length > 0 ? l : r.length > 0 ? r : i, t);
        if (e.isStage) {
          var _, c;
          return null !== (c = null === (_ = T.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
        }
        return n
      }
      case F.CardCategory.EVENT:
        return e.event.name;
      case F.CardCategory.EMBEDDED_ACTIVITY:
        return (0, G.getUserNameString)(d, t);
      case F.CardCategory.GAMING:
        return (0, G.getUserNameString)(s, t);
      default:
        return null
    }
  }(n, s), ei = function(e) {
    var t, n, r, s;
    let {
      category: a
    } = e, o = (0, U.default)(e), l = function(e) {
      let t = (0, U.default)(e),
        {
          category: n
        } = e;
      return (null == t ? void 0 : t.isGuildStageVoice()) ? M.default : (n === F.CardCategory.GAMING || n === F.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === F.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? v.default : n === F.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? D.default : null != t && m.default.hasVideo(t.id) ? p.default : D.default
    }(e), {
      audienceCount: d
    } = (0, G.useGetEventCardUsers)(o);
    switch (a) {
      case F.CardCategory.GAMING:
        let {
          games: c, channelId: E
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(O.default, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: 1 === c.length ? c[0].name : j.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: c.length
            })
          }), "•", null != l && (0, i.jsx)(l, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: null === (t = S.default.getChannel(E)) || void 0 === t ? void 0 : t.name
          })]
        });
      case F.CardCategory.EVENT:
        let {
          event: I
        } = e, T = (0, G.getEventLocationData)(I), f = null == T ? void 0 : T.IconComponent, h = null == T ? void 0 : T.locationName;
        if (null != f && null != h) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(f, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: h
          }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(g.default, {
              className: W.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: d
            })]
          })]
        });
        return null;
      case F.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: A
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(L.default, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: 1 === A.length ? null === (n = _.default.getApplication(A[0].applicationId)) || void 0 === n ? void 0 : n.name : j.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: A.length
            })
          }), "•", null != l && (0, i.jsx)(l, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: null === (r = S.default.getChannel(A[0].channelId)) || void 0 === r ? void 0 : r.name
          })]
        });
      case F.CardCategory.HANGOUT: {
        let {
          channelId: t
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [null != l && (0, i.jsx)(l, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: null === (s = S.default.getChannel(t)) || void 0 === s ? void 0 : s.name
          }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(g.default, {
              className: W.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: d
            })]
          })]
        })
      }
      default:
        return null
    }
  }(n), er = function(e) {
    let {
      category: t
    } = e, n = (0, U.default)(e), {
      audienceCount: i
    } = (0, G.useGetEventCardUsers)(n);
    switch (t) {
      case F.CardCategory.EVENT:
        if (null != i) return [{
          icon: C.default,
          count: i
        }];
        return [];
      case F.CardCategory.HANGOUT:
        let {
          streamUserIds: r, userIds: s, channelId: a, isStage: o
        } = e;
        if (o) {
          var l;
          return [{
            icon: C.default,
            count: null !== (l = E.default.getParticipantCount(a, I.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
          }]
        }
        if (r.length > 0) return [{
          icon: g.default,
          count: s.length > 0 ? s.length : null
        }];
        return [];
      case F.CardCategory.EMBEDDED_ACTIVITY:
        return [{
          icon: g.default,
          count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
        }, {
          icon: v.default,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      case F.CardCategory.GAMING:
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
  }(n), es = (0, G.getClickHandler)(n, s, d), ea = function(e, t, n) {
    var r;
    let {
      category: s
    } = e, a = null, o = s === F.CardCategory.EVENT;
    if (null == (a = o ? e.event.channel_id : s === F.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
    let l = null != a && m.default.isInChannel(a),
      d = o && (e.event.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL || e.event.entity_type === Y.GuildScheduledEventEntityTypes.NONE) ? j.default.Messages.VIEW : l ? j.default.Messages.GUILD_POPOUT_JOINED : j.default.Messages.JOIN,
      _ = (null === (r = S.default.getChannel(a)) || void 0 === r ? void 0 : r.isGuildVocal()) && !h.default.can(H.Permissions.CONNECT, S.default.getChannel(a)),
      c = (0, G.getJoinHandler)(e, t),
      E = (0, i.jsxs)(u.Button, {
        size: u.Button.Sizes.MIN,
        innerClassName: W.joinButtonInner,
        color: u.Button.Colors.GREEN,
        disabled: l || _,
        onClick: i => {
          i.stopPropagation(), (0, G.trackClick)(e, t, n, G.CardClickSources.JOIN_BUTTON), null == c || c()
        },
        className: W.joinButton,
        children: [d, _ && (0, i.jsx)(R.default, {
          width: 14,
          height: 14
        })]
      });
    return (0, i.jsx)("div", {
      className: W.joinButtonWhatWrapper,
      children: E
    })
  }(n, s, d), eo = (null != q || !!(null == Q ? void 0 : Q.isGuildStageVoice())) && ee.length > 0, el = P === F.CardCategory.HANGOUT && (0 === n.streamUserIds.length || X) && !(null == Q ? void 0 : Q.isGuildStageVoice()), eu = P === F.CardCategory.EMBEDDED_ACTIVITY && n.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: W.pill,
    children: [(0, i.jsx)(v.default, {
      className: W.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: n.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == es ? void 0 : es(),
    tag: "div",
    className: W.container,
    onMouseEnter: () => V(!0),
    onMouseLeave: () => V(!1),
    children: [(0, i.jsx)("div", {
      className: a()(W.image, {
        [W.streamContainer]: x && !X && !(null == Q ? void 0 : Q.isGuildStageVoice())
      }),
      children: et
    }), (0, i.jsxs)("div", {
      className: W.content,
      children: [null != en && (0, i.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === er.length ? W.multiLineTitle : W.singleLineTitle,
        children: en
      }), null != ei && (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: W.subtitle,
        children: ei
      }), !(eo || el) && !(null == Q ? void 0 : Q.isGuildStageVoice()) && J.length > 0 && (0, i.jsx)(K, {
        users: J,
        othersCount: $,
        extraPill: eu
      })]
    }), k && ea]
  })
}
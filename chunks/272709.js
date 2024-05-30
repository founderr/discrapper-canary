"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
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
  E = n("217804"),
  I = n("565799"),
  T = n("501655"),
  f = n("427679"),
  S = n("543882"),
  h = n("592125"),
  A = n("496675"),
  m = n("594174"),
  N = n("979651"),
  p = n("366695"),
  O = n("119828"),
  C = n("737688"),
  R = n("242315"),
  g = n("630641"),
  L = n("158010"),
  v = n("944581"),
  D = n("645284"),
  M = n("632184"),
  y = n("170039"),
  P = n("26290"),
  U = n("806519"),
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

function z(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: K.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(d.default, {
        user: e,
        size: u.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: K.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(U.default, {
        width: 20,
        height: 20,
        mask: U.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: K.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(u.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: K.othersCount,
      children: ["+", n]
    }), r]
  })
}

function Z(e) {
  var t;
  let {
    cardData: n,
    guildId: s,
    cardIndex: d
  } = e, {
    category: U
  } = n, [B, x] = r.useState(!1), F = U === H.CardCategory.HANGOUT && n.streamUserIds.length > 0, Z = (0, l.useStateFromStores)([S.default], () => F ? S.default.getPreviewURL(s, n.channelId, n.streamUserIds[0]) : null), X = (0, l.useStateFromStores)([S.default], () => U === H.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(s, n.channelId, n.streamUserIds[0]) : null), Q = U === H.CardCategory.HANGOUT && n.streamUserIds.length > 0 && null == Z && !X, q = (0, l.useStateFromStores)([h.default], () => {
    let e = U === H.CardCategory.HANGOUT || U === H.CardCategory.GAMING ? n.channelId : U === H.CardCategory.EVENT ? n.event.channel_id : U === H.CardCategory.EMBEDDED_ACTIVITY ? n.embeddedActivities[0].channelId : null;
    return h.default.getChannel(e)
  }), J = (0, l.useStateFromStores)([c.default], () => c.default.getActiveEventByChannel(null == q ? void 0 : q.id)), {
    usersToShow: $,
    othersCount: ee
  } = (0, w.useVoiceChannelUsers)(null !== (t = null == q ? void 0 : q.id) && void 0 !== t ? t : "", s), {
    usersToShow: et
  } = (0, w.useGetEventCardUsers)(q), en = function(e, t, n) {
    let {
      category: r
    } = e, s = (0, b.default)(e), {
      usersToShow: a
    } = (0, w.useGetEventCardUsers)(s), d = (0, l.useStateFromStores)([S.default], () => r === H.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (r) {
      case H.CardCategory.GAMING:
        let {
          games: c
        } = e;
        if (null == c[0].application_id) return (0, i.jsx)(C.default, {});
        return (0, i.jsx)(p.default, {
          game: _.default.getApplication(c[0].application_id),
          size: "xl",
          className: K.gameIcon
        });
      case H.CardCategory.EVENT:
        if (a.length > 0) return (0, i.jsx)(G.default, {
          guildId: t,
          users: a
        });
        return e.isStage ? (0, i.jsx)(V.default, {
          className: K.imageIcon
        }) : (0, i.jsx)(k.default, {
          className: K.imageIcon
        });
      case H.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: E
        } = e;
        if (null == E[0].applicationId) return (0, i.jsx)(v.default, {});
        return (0, i.jsx)(p.default, {
          game: _.default.getApplication(E[0].applicationId),
          size: "xl",
          className: K.gameIcon
        });
      case H.CardCategory.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: l,
          isStage: _
        } = e, c = _ ? a : [];
        if (_) {
          if (0 === c.length) return (0, i.jsx)(V.default, {
            className: K.imageIcon
          });
          return (0, i.jsx)(G.default, {
            guildId: t,
            users: c
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(P.TextBadge, {
            text: W.default.Messages.LIVE,
            color: o.default.STATUS_DANGER,
            className: e
          });
          if (d) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Spinner, {
              className: K.streamPreview
            }), e(K.liveBadge)]
          });
          if (null != n) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              src: n,
              alt: "",
              className: K.streamPreview
            }), e(K.liveBadge)]
          });
          let s = r.map(e => m.default.getUser(e)).filter(e => null != e);
          return (0, i.jsx)(G.default, {
            guildId: t,
            users: s
          })
        }
        let E = s.map(e => m.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(G.default, {
          guildId: t,
          users: E
        })
      }
    }
  }(n, s, Z), ei = function(e, t) {
    let {
      category: n
    } = e, i = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), r = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), s = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), a = (0, b.default)(e), {
      usersToShow: o
    } = (0, w.useGetEventCardUsers)(a), l = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT && e.isStage ? o.map(e => e.id) : []), u = new Set;
    n === H.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      u = new Set([...u, ...e.userIds])
    });
    let d = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.EMBEDDED_ACTIVITY ? [...u] : []);
    switch (n) {
      case H.CardCategory.HANGOUT: {
        let n = (0, w.getUserNameString)(l.length > 0 ? l : r.length > 0 ? r : i, t);
        if (e.isStage) {
          var _, c;
          return null !== (c = null === (_ = f.default.getStageInstanceByChannel(e.channelId)) || void 0 === _ ? void 0 : _.topic) && void 0 !== c ? c : n
        }
        return n
      }
      case H.CardCategory.EVENT:
        return e.event.name;
      case H.CardCategory.EMBEDDED_ACTIVITY:
        return (0, w.getUserNameString)(d, t);
      case H.CardCategory.GAMING:
        return (0, w.getUserNameString)(s, t);
      default:
        return null
    }
  }(n, s), er = function(e) {
    var t, n, r, s;
    let {
      category: a
    } = e, o = (0, b.default)(e), l = function(e) {
      let t = (0, b.default)(e),
        {
          category: n
        } = e;
      return (null == t ? void 0 : t.isGuildStageVoice()) ? y.default : (n === H.CardCategory.GAMING || n === H.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === H.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? D.default : n === H.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? M.default : null != t && N.default.hasVideo(t.id) ? O.default : M.default
    }(e), {
      audienceCount: d
    } = (0, w.useGetEventCardUsers)(o);
    switch (a) {
      case H.CardCategory.GAMING:
        let {
          games: c, channelId: I
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(C.default, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: 1 === c.length ? c[0].name : W.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: c.length
            })
          }), "•", null != l && (0, i.jsx)(l, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: null === (t = h.default.getChannel(I)) || void 0 === t ? void 0 : t.name
          })]
        });
      case H.CardCategory.EVENT:
        let {
          event: T
        } = e, f = (0, E.getLocationDataForEvent)(T, h.default.getChannel(T.channel_id)), S = null == f ? void 0 : f.IconComponent, A = null == f ? void 0 : f.locationName;
        if (null != S && null != A) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(S, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: A
          }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(L.default, {
              className: K.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: d
            })]
          })]
        });
        return null;
      case H.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: m
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.default, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: 1 === m.length ? null === (n = _.default.getApplication(m[0].applicationId)) || void 0 === n ? void 0 : n.name : W.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: m.length
            })
          }), "•", null != l && (0, i.jsx)(l, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: null === (r = h.default.getChannel(m[0].channelId)) || void 0 === r ? void 0 : r.name
          })]
        });
      case H.CardCategory.HANGOUT: {
        let {
          channelId: t
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [null != l && (0, i.jsx)(l, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: null === (s = h.default.getChannel(t)) || void 0 === s ? void 0 : s.name
          }), null != d && d > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(L.default, {
              className: K.categoryIcon
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
  }(n), es = function(e) {
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
          streamUserIds: r, userIds: s, channelId: a, isStage: o
        } = e;
        if (o) {
          var l;
          return [{
            icon: R.default,
            count: null !== (l = I.default.getParticipantCount(a, T.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
          }]
        }
        if (r.length > 0) return [{
          icon: L.default,
          count: s.length > 0 ? s.length : null
        }];
        return [];
      case H.CardCategory.EMBEDDED_ACTIVITY:
        return [{
          icon: L.default,
          count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
        }, {
          icon: D.default,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      case H.CardCategory.GAMING:
        return [{
          icon: L.default,
          count: e.voiceStates.length > 0 ? e.voiceStates.length : null
        }, {
          icon: D.default,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      default:
        return []
    }
  }(n), ea = (0, w.getClickHandler)(n, s, d), eo = function(e, t, n) {
    var r;
    let {
      category: s
    } = e, a = null, o = s === H.CardCategory.EVENT;
    if (null == (a = o ? e.event.channel_id : s === H.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
    let l = null != a && N.default.isInChannel(a),
      d = o && (e.event.entity_type === j.GuildScheduledEventEntityTypes.EXTERNAL || e.event.entity_type === j.GuildScheduledEventEntityTypes.NONE) ? W.default.Messages.VIEW : l ? W.default.Messages.GUILD_POPOUT_JOINED : W.default.Messages.JOIN,
      _ = (null === (r = h.default.getChannel(a)) || void 0 === r ? void 0 : r.isGuildVocal()) && !A.default.can(Y.Permissions.CONNECT, h.default.getChannel(a)),
      c = (0, w.getJoinHandler)(e, t),
      E = (0, i.jsxs)(u.Button, {
        size: u.Button.Sizes.MIN,
        innerClassName: K.joinButtonInner,
        color: u.Button.Colors.GREEN,
        disabled: l || _,
        onClick: i => {
          i.stopPropagation(), (0, w.trackClick)(e, t, n, w.CardClickSources.JOIN_BUTTON), null == c || c()
        },
        className: K.joinButton,
        children: [d, _ && (0, i.jsx)(g.default, {
          width: 14,
          height: 14
        })]
      });
    return (0, i.jsx)("div", {
      className: K.joinButtonWhatWrapper,
      children: E
    })
  }(n, s, d), el = (null != J || !!(null == q ? void 0 : q.isGuildStageVoice())) && et.length > 0, eu = U === H.CardCategory.HANGOUT && (0 === n.streamUserIds.length || Q) && !(null == q ? void 0 : q.isGuildStageVoice()), ed = U === H.CardCategory.EMBEDDED_ACTIVITY && n.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: K.pill,
    children: [(0, i.jsx)(D.default, {
      className: K.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: n.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == ea ? void 0 : ea(),
    tag: "div",
    className: K.container,
    onMouseEnter: () => x(!0),
    onMouseLeave: () => x(!1),
    children: [(0, i.jsx)("div", {
      className: a()(K.image, {
        [K.streamContainer]: F && !Q && !(null == q ? void 0 : q.isGuildStageVoice())
      }),
      children: en
    }), (0, i.jsxs)("div", {
      className: K.content,
      children: [null != ei && (0, i.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === es.length ? K.multiLineTitle : K.singleLineTitle,
        children: ei
      }), null != er && (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: K.subtitle,
        children: er
      }), !(el || eu) && !(null == q ? void 0 : q.isGuildStageVoice()) && $.length > 0 && (0, i.jsx)(z, {
        users: $,
        othersCount: ee,
        extraPill: ed
      })]
    }), B && eo]
  })
}
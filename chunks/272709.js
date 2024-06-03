"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
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
  E = n("454585"),
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
  let t = (0, b.default)(e),
    {
      category: n
    } = e;
  return (null == t ? void 0 : t.isGuildStageVoice()) ? y.default : (n === H.CardCategory.GAMING || n === H.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === H.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? D.default : n === H.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? M.default : null != t && N.default.hasVideo(t.id) ? O.default : M.default
}

function Z(e) {
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

function X(e) {
  var t, n;
  let {
    cardData: s,
    guildId: d,
    cardIndex: O
  } = e, {
    category: M
  } = s, [y, U] = r.useState(!1), B = M === H.CardCategory.HANGOUT && s.streamUserIds.length > 0, x = (0, l.useStateFromStores)([S.default], () => B ? S.default.getPreviewURL(d, s.channelId, s.streamUserIds[0]) : null), F = (0, l.useStateFromStores)([S.default], () => M === H.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(d, s.channelId, s.streamUserIds[0]) : null), X = M === H.CardCategory.HANGOUT && s.streamUserIds.length > 0 && null == x && !F, Q = (0, l.useStateFromStores)([h.default], () => {
    let e = M === H.CardCategory.HANGOUT || M === H.CardCategory.GAMING ? s.channelId : M === H.CardCategory.EVENT ? s.event.channel_id : M === H.CardCategory.EMBEDDED_ACTIVITY ? s.embeddedActivities[0].channelId : null;
    return h.default.getChannel(e)
  }), q = (0, l.useStateFromStores)([c.default], () => c.default.getActiveEventByChannel(null == Q ? void 0 : Q.id)), {
    usersToShow: J,
    othersCount: $
  } = (0, w.useVoiceChannelUsers)(null !== (n = null == Q ? void 0 : Q.id) && void 0 !== n ? n : "", d), {
    usersToShow: ee
  } = (0, w.useGetEventCardUsers)(Q), et = (0, w.useGetOrFetchEmbeddedActivityApplication)(s), en = function(e, t, n, r) {
    let {
      category: s
    } = e, a = (0, b.default)(e), {
      usersToShow: d
    } = (0, w.useGetEventCardUsers)(a), c = (0, l.useStateFromStores)([S.default], () => s === H.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (s) {
      case H.CardCategory.GAMING:
        let {
          games: E
        } = e;
        if (null == E[0].application_id) return (0, i.jsx)(C.default, {});
        return (0, i.jsx)(p.default, {
          game: _.default.getApplication(E[0].application_id),
          size: "xl",
          className: K.gameIcon
        });
      case H.CardCategory.EVENT:
        if (d.length > 0) return (0, i.jsx)(G.default, {
          guildId: t,
          users: d
        });
        return e.isStage ? (0, i.jsx)(V.default, {
          className: K.imageIcon
        }) : (0, i.jsx)(k.default, {
          className: K.imageIcon
        });
      case H.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: I
        } = e;
        if (null == I[0].applicationId) return (0, i.jsx)(v.default, {});
        return (0, i.jsx)(p.default, {
          game: r,
          size: "xl",
          className: K.gameIcon
        });
      case H.CardCategory.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: a,
          isStage: l
        } = e, _ = l ? d : [];
        if (l) {
          if (0 === _.length) return (0, i.jsx)(V.default, {
            className: K.imageIcon
          });
          return (0, i.jsx)(G.default, {
            guildId: t,
            users: _
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(P.TextBadge, {
            text: W.default.Messages.LIVE,
            color: o.default.STATUS_DANGER,
            className: e
          });
          if (c) return (0, i.jsxs)(i.Fragment, {
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
  }(s, d, x, et), ei = function(e, t) {
    let {
      category: n
    } = e, r = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), s = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), o = (0, b.default)(e), {
      hasChannelStatus: l
    } = (0, w.useChannelStatus)(o), {
      usersToShow: d
    } = (0, w.useGetEventCardUsers)(o), _ = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.HANGOUT && e.isStage ? d.map(e => e.id) : []), c = new Set;
    n === H.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      c = new Set([...c, ...e.userIds])
    });
    let E = (0, w.useSortUserIdsByAffinity)(n === H.CardCategory.EMBEDDED_ACTIVITY ? [...c] : []);
    switch (n) {
      case H.CardCategory.HANGOUT: {
        if (l && 0 === s.length) {
          let e = (0, w.getUserNameString)(r, t, !0),
            n = r.length - 1;
          return (0, i.jsxs)("div", {
            className: K.hangoutStatusTitleContainer,
            children: [(0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: K.ellipsis,
              children: e
            }), n > 0 && (0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: K.hangoutStatusOthers,
              children: W.default.Messages.USER_SUMMARY_AND_OTHERS.format({
                count: n
              })
            })]
          })
        }
        let n = (0, w.getUserNameString)(_.length > 0 ? _ : s.length > 0 ? s : r, t);
        if (e.isStage) {
          var I, T;
          return null !== (T = null === (I = f.default.getStageInstanceByChannel(e.channelId)) || void 0 === I ? void 0 : I.topic) && void 0 !== T ? T : n
        }
        return n
      }
      case H.CardCategory.EVENT:
        return e.event.name;
      case H.CardCategory.EMBEDDED_ACTIVITY:
        return (0, w.getUserNameString)(E, t);
      case H.CardCategory.GAMING:
        return (0, w.getUserNameString)(a, t);
      default:
        return null
    }
  }(s, d), er = function(e, t, n) {
    var r, s, a;
    let {
      category: o
    } = e, l = (0, b.default)(e), d = z(e), {
      audienceCount: _
    } = (0, w.useGetEventCardUsers)(l), {
      channelStatus: c,
      hasChannelStatus: I
    } = (0, w.useChannelStatus)(l);
    switch (o) {
      case H.CardCategory.GAMING:
        let {
          games: T, channelId: f
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(C.default, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: 1 === T.length ? T[0].name : W.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: T.length
            })
          }), "•", null != d && (0, i.jsx)(d, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: null === (r = h.default.getChannel(f)) || void 0 === r ? void 0 : r.name
          })]
        });
      case H.CardCategory.EVENT:
        let {
          event: S
        } = e, A = (0, w.getEventLocationData)(S), m = null == A ? void 0 : A.IconComponent, N = null == A ? void 0 : A.locationName;
        if (null != m && null != N) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(m, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: N
          }), null != _ && _ > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(L.default, {
              className: K.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: _
            })]
          })]
        });
        return null;
      case H.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: p
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.default, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: 1 === p.length ? null == t ? void 0 : t.name : W.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: p.length
            })
          }), "•", null != d && (0, i.jsx)(d, {
            className: K.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: null === (s = h.default.getChannel(p[0].channelId)) || void 0 === s ? void 0 : s.name
          })]
        });
      case H.CardCategory.HANGOUT: {
        let {
          channelId: t
        } = e, r = I && null == n;
        return (0, i.jsx)(i.Fragment, {
          children: r ? (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: K.ellipsis,
            children: E.default.parseVoiceChannelStatus(c, !0, {
              channelId: t
            })
          }) : (0, i.jsxs)(i.Fragment, {
            children: [null != d && (0, i.jsx)(d, {
              className: K.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: K.ellipsis,
              children: null === (a = h.default.getChannel(t)) || void 0 === a ? void 0 : a.name
            }), I && null != n && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                className: K.ellipsis,
                children: E.default.parseVoiceChannelStatus(c, !0, {
                  channelId: t
                })
              })]
            }), null != _ && _ > 0 && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(L.default, {
                className: K.categoryIcon
              }), (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                children: _
              })]
            })]
          })
        })
      }
      default:
        return null
    }
  }(s, et, x), es = function(e) {
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
  }(s), ea = (0, w.getClickHandler)(s, d, O), eo = function(e, t, n) {
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
  }(s, d, O), {
    hasChannelStatus: el
  } = (0, w.useChannelStatus)(Q), eu = z(s), ed = M === H.CardCategory.HANGOUT && el && null == x, e_ = (null != q || !!(null == Q ? void 0 : Q.isGuildStageVoice())) && ee.length > 0, ec = M === H.CardCategory.HANGOUT && (0 === s.streamUserIds.length || X) && !(null == Q ? void 0 : Q.isGuildStageVoice()), eE = M === H.CardCategory.EMBEDDED_ACTIVITY && s.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: K.pill,
    children: [(0, i.jsx)(D.default, {
      className: K.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: s.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == ea ? void 0 : ea(),
    tag: "div",
    className: K.container,
    onMouseEnter: () => U(!0),
    onMouseLeave: () => U(!1),
    children: [(0, i.jsx)("div", {
      className: a()(K.image, {
        [K.streamContainer]: B && !X && !(null == Q ? void 0 : Q.isGuildStageVoice())
      }),
      children: en
    }), (0, i.jsxs)("div", {
      className: a()(K.content, ed && K.hangoutChannelStatusContent),
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
      }), !(e_ || ec) && !(null == Q ? void 0 : Q.isGuildStageVoice()) && J.length > 0 && (0, i.jsx)(Z, {
        users: J,
        othersCount: $,
        extraPill: eE
      }), ed && (0, i.jsxs)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: K.hangoutChannel,
        children: [null != eu && (0, i.jsx)(eu, {
          className: K.categoryIcon
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: K.ellipsis,
          children: null === (t = h.default.getChannel(s.channelId)) || void 0 === t ? void 0 : t.name
        })]
      })]
    }), y && eo]
  })
}
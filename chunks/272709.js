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
  P = n("806519"),
  U = n("912787"),
  b = n("623552"),
  G = n("718582"),
  w = n("177963"),
  k = n("835248"),
  B = n("437431"),
  x = n("874070"),
  V = n("185885"),
  F = n("126134"),
  H = n("981631"),
  Y = n("765305"),
  j = n("689938"),
  W = n("181096");

function K(e) {
  let t = (0, U.default)(e),
    {
      category: n
    } = e;
  return (null == t ? void 0 : t.isGuildStageVoice()) ? y.default : (n === F.CardCategory.GAMING || n === F.CardCategory.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === F.CardCategory.HANGOUT && e.streamUserIds.length > 0 ? D.default : n === F.CardCategory.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? M.default : null != t && N.default.hasVideo(t.id) ? O.default : M.default
}

function z(e) {
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

function Z(e) {
  var t, n;
  let {
    cardData: s,
    guildId: d,
    cardIndex: O
  } = e, {
    category: M
  } = s, [y, P] = r.useState(!1), k = M === F.CardCategory.HANGOUT && s.streamUserIds.length > 0, x = (0, l.useStateFromStores)([S.default], () => k ? S.default.getPreviewURL(d, s.channelId, s.streamUserIds[0]) : null), V = (0, l.useStateFromStores)([S.default], () => M === F.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(d, s.channelId, s.streamUserIds[0]) : null), Z = M === F.CardCategory.HANGOUT && s.streamUserIds.length > 0 && null == x && !V, Q = (0, l.useStateFromStores)([h.default], () => {
    let e = M === F.CardCategory.HANGOUT || M === F.CardCategory.GAMING ? s.channelId : M === F.CardCategory.EVENT ? s.event.channel_id : M === F.CardCategory.EMBEDDED_ACTIVITY ? s.embeddedActivities[0].channelId : null;
    return h.default.getChannel(e)
  }), X = (0, l.useStateFromStores)([c.default], () => c.default.getActiveEventByChannel(null == Q ? void 0 : Q.id)), {
    usersToShow: q,
    othersCount: J
  } = (0, G.useVoiceChannelUsers)(null !== (n = null == Q ? void 0 : Q.id) && void 0 !== n ? n : "", d), {
    usersToShow: $
  } = (0, G.useGetEventCardUsers)(Q), ee = (0, G.useGetOrFetchEmbeddedActivityApplication)(s), et = function(e, t, n, r) {
    let {
      category: s
    } = e, a = (0, U.default)(e), {
      usersToShow: d
    } = (0, G.useGetEventCardUsers)(a), c = (0, l.useStateFromStores)([S.default], () => s === F.CardCategory.HANGOUT ? S.default.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (s) {
      case F.CardCategory.GAMING:
        let {
          games: E
        } = e;
        if (null == E[0].application_id) return (0, i.jsx)(C.default, {});
        return (0, i.jsx)(p.default, {
          game: _.default.getApplication(E[0].application_id),
          size: "xl",
          className: W.gameIcon
        });
      case F.CardCategory.EVENT:
        if (d.length > 0) return (0, i.jsx)(b.default, {
          guildId: t,
          users: d
        });
        return e.isStage ? (0, i.jsx)(B.default, {
          className: W.imageIcon
        }) : (0, i.jsx)(w.default, {
          className: W.imageIcon
        });
      case F.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: I
        } = e;
        if (null == I[0].applicationId) return (0, i.jsx)(v.default, {});
        return (0, i.jsx)(p.default, {
          game: r,
          size: "xl",
          className: W.gameIcon
        });
      case F.CardCategory.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: a,
          isStage: l
        } = e, _ = l ? d : [];
        if (l) {
          if (0 === _.length) return (0, i.jsx)(B.default, {
            className: W.imageIcon
          });
          return (0, i.jsx)(b.default, {
            guildId: t,
            users: _
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(u.TextBadge, {
            text: j.default.Messages.LIVE,
            color: o.default.STATUS_DANGER,
            className: e
          });
          if (c) return (0, i.jsxs)(i.Fragment, {
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
          let s = r.map(e => m.default.getUser(e)).filter(e => null != e);
          return (0, i.jsx)(b.default, {
            guildId: t,
            users: s
          })
        }
        let E = s.map(e => m.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(b.default, {
          guildId: t,
          users: E
        })
      }
    }
  }(s, d, x, ee), en = function(e, t) {
    let {
      category: n
    } = e, r = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT ? null == e ? void 0 : e.userIds : []), s = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), o = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.GAMING ? null == e ? void 0 : e.gameUserIds : []), l = (0, U.default)(e), {
      hasChannelStatus: d
    } = (0, G.useChannelStatus)(l), {
      usersToShow: _
    } = (0, G.useGetEventCardUsers)(l), c = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.HANGOUT && e.isStage ? _.map(e => e.id) : []), E = new Set;
    n === F.CardCategory.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      E = new Set([...E, ...e.userIds])
    });
    let I = (0, G.useSortUserIdsByAffinity)(n === F.CardCategory.EMBEDDED_ACTIVITY ? [...E] : []);
    switch (n) {
      case F.CardCategory.HANGOUT: {
        if (d && 0 === s.length) {
          let e = (0, G.getUserNameString)(r, t, !0),
            n = r.length - 1;
          return (0, i.jsxs)("div", {
            className: W.hangoutStatusTitleContainer,
            children: [(0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: a()(W.hangoutStatusUsername, W.ellipsis),
              children: e
            }), n > 0 && (0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: W.hangoutStatusOthers,
              children: j.default.Messages.USER_SUMMARY_AND_OTHERS.format({
                count: n
              })
            })]
          })
        }
        let n = (0, G.getUserNameString)(c.length > 0 ? c : s.length > 0 ? s : r, t);
        if (e.isStage) {
          var T, S;
          return null !== (S = null === (T = f.default.getStageInstanceByChannel(e.channelId)) || void 0 === T ? void 0 : T.topic) && void 0 !== S ? S : n
        }
        return n
      }
      case F.CardCategory.EVENT:
        return e.event.name;
      case F.CardCategory.EMBEDDED_ACTIVITY:
        return (0, G.getUserNameString)(I, t);
      case F.CardCategory.GAMING:
        return (0, G.getUserNameString)(o, t);
      default:
        return null
    }
  }(s, d), ei = function(e, t, n) {
    var r, s, a;
    let {
      category: o
    } = e, l = (0, U.default)(e), d = K(e), {
      audienceCount: _
    } = (0, G.useGetEventCardUsers)(l), {
      channelStatus: c,
      hasChannelStatus: I
    } = (0, G.useChannelStatus)(l);
    switch (o) {
      case F.CardCategory.GAMING:
        let {
          games: T, channelId: f
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(C.default, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: 1 === T.length ? T[0].name : j.default.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: T.length
            })
          }), "•", null != d && (0, i.jsx)(d, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: null === (r = h.default.getChannel(f)) || void 0 === r ? void 0 : r.name
          })]
        });
      case F.CardCategory.EVENT:
        let {
          event: S
        } = e, A = (0, G.getEventLocationData)(S), m = null == A ? void 0 : A.IconComponent, N = null == A ? void 0 : A.locationName;
        if (null != m && null != N) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(m, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: N
          }), null != _ && _ > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(L.default, {
              className: W.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: _
            })]
          })]
        });
        return null;
      case F.CardCategory.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: p
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.default, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: 1 === p.length ? null == t ? void 0 : t.name : j.default.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: p.length
            })
          }), "•", null != d && (0, i.jsx)(d, {
            className: W.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: null === (s = h.default.getChannel(p[0].channelId)) || void 0 === s ? void 0 : s.name
          })]
        });
      case F.CardCategory.HANGOUT: {
        let {
          channelId: t
        } = e, r = I && null == n;
        return (0, i.jsx)(i.Fragment, {
          children: r ? (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: W.ellipsis,
            children: E.default.parseVoiceChannelStatus(c, !0, {
              channelId: t
            })
          }) : (0, i.jsxs)(i.Fragment, {
            children: [null != d && (0, i.jsx)(d, {
              className: W.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: W.ellipsis,
              children: null === (a = h.default.getChannel(t)) || void 0 === a ? void 0 : a.name
            }), I && null != n && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                className: W.ellipsis,
                children: E.default.parseVoiceChannelStatus(c, !0, {
                  channelId: t
                })
              })]
            }), null != _ && _ > 0 && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(L.default, {
                className: W.categoryIcon
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
  }(s, ee, x), er = function(e) {
    let {
      category: t
    } = e, n = (0, U.default)(e), {
      audienceCount: i
    } = (0, G.useGetEventCardUsers)(n);
    switch (t) {
      case F.CardCategory.EVENT:
        if (null != i) return [{
          icon: R.default,
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
            icon: R.default,
            count: null !== (l = I.default.getParticipantCount(a, T.StageChannelParticipantNamedIndex.AUDIENCE)) && void 0 !== l ? l : 0
          }]
        }
        if (r.length > 0) return [{
          icon: L.default,
          count: s.length > 0 ? s.length : null
        }];
        return [];
      case F.CardCategory.EMBEDDED_ACTIVITY:
        return [{
          icon: L.default,
          count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
        }, {
          icon: D.default,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      case F.CardCategory.GAMING:
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
  }(s), es = (0, G.getClickHandler)(s, d, O), ea = function(e, t, n) {
    var r;
    let {
      category: s
    } = e, a = null, o = s === F.CardCategory.EVENT;
    if (null == (a = o ? e.event.channel_id : s === F.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !o) return;
    let l = null != a && N.default.isInChannel(a),
      d = o && (e.event.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL || e.event.entity_type === Y.GuildScheduledEventEntityTypes.NONE) ? j.default.Messages.VIEW : l ? j.default.Messages.GUILD_POPOUT_JOINED : j.default.Messages.JOIN,
      _ = (null === (r = h.default.getChannel(a)) || void 0 === r ? void 0 : r.isGuildVocal()) && !A.default.can(H.Permissions.CONNECT, h.default.getChannel(a)),
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
        children: [d, _ && (0, i.jsx)(g.default, {
          width: 14,
          height: 14
        })]
      });
    return (0, i.jsx)("div", {
      className: W.joinButtonWhatWrapper,
      children: E
    })
  }(s, d, O), {
    hasChannelStatus: eo
  } = (0, G.useChannelStatus)(Q), el = K(s), eu = M === F.CardCategory.HANGOUT && eo && null == x, ed = (null != X || !!(null == Q ? void 0 : Q.isGuildStageVoice())) && $.length > 0, e_ = M === F.CardCategory.HANGOUT && (0 === s.streamUserIds.length || Z) && !(null == Q ? void 0 : Q.isGuildStageVoice()), ec = M === F.CardCategory.EMBEDDED_ACTIVITY && s.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: W.pill,
    children: [(0, i.jsx)(D.default, {
      className: W.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: s.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == es ? void 0 : es(),
    tag: "div",
    className: W.container,
    onMouseEnter: () => P(!0),
    onMouseLeave: () => P(!1),
    children: [(0, i.jsx)("div", {
      className: a()(W.image, {
        [W.streamContainer]: k && !Z && !(null == Q ? void 0 : Q.isGuildStageVoice())
      }),
      children: et
    }), (0, i.jsxs)("div", {
      className: a()(W.content, eu && W.hangoutChannelStatusContent),
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
      }), !(ed || e_) && !(null == Q ? void 0 : Q.isGuildStageVoice()) && q.length > 0 && (0, i.jsx)(z, {
        users: q,
        othersCount: J,
        extraPill: ec
      }), eu && (0, i.jsxs)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: W.hangoutChannel,
        children: [null != el && (0, i.jsx)(el, {
          className: W.categoryIcon
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: W.ellipsis,
          children: null === (t = h.default.getChannel(s.channelId)) || void 0 === t ? void 0 : t.name
        })]
      })]
    }), y && ea]
  })
}
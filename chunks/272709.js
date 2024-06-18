"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(831209),
  l = n(442837),
  u = n(481060),
  _ = n(700582),
  c = n(812206),
  d = n(924301),
  E = n(454585),
  I = n(565799),
  T = n(501655),
  h = n(427679),
  S = n(543882),
  f = n(592125),
  N = n(496675),
  A = n(594174),
  m = n(979651),
  O = n(366695),
  R = n(806519),
  p = n(912787),
  g = n(623552),
  C = n(718582),
  v = n(177963),
  L = n(835248),
  D = n(437431),
  M = n(874070),
  P = n(185885),
  y = n(126134),
  U = n(981631),
  b = n(765305),
  G = n(689938),
  w = n(181096);

function k(e) {
  let t = (0, p.Z)(e),
    {
      category: n
    } = e;
  return (null == t ? void 0 : t.isGuildStageVoice()) ? u.StageIcon : (n === y.L.GAMING || n === y.L.EMBEDDED_ACTIVITY) && e.streamersCount > 0 || n === y.L.HANGOUT && e.streamUserIds.length > 0 ? u.ScreenArrowIcon : n === y.L.EVENT && (null == t ? void 0 : t.isGuildVoice()) ? u.VoiceNormalIcon : null != t && m.Z.hasVideo(t.id) ? u.VideoIcon : u.VoiceNormalIcon
}

function B(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: w.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(_.Z, {
        user: e,
        size: u.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: w.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(R.ZP, {
        width: 20,
        height: 20,
        mask: R.ZP.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: w.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(u.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: w.othersCount,
      children: ["+", n]
    }), r]
  })
}

function x(e) {
  var t, n;
  let {
    cardData: s,
    guildId: _,
    cardIndex: R
  } = e, {
    category: L
  } = s, [M, P] = r.useState(!1), x = L === y.L.HANGOUT && s.streamUserIds.length > 0, V = (0, l.e7)([S.Z], () => x ? S.Z.getPreviewURL(_, s.channelId, s.streamUserIds[0]) : null), Z = (0, l.e7)([S.Z], () => L === y.L.HANGOUT ? S.Z.getIsPreviewLoading(_, s.channelId, s.streamUserIds[0]) : null), H = L === y.L.HANGOUT && s.streamUserIds.length > 0 && null == V && !Z, F = (0, l.e7)([f.Z], () => {
    let e = L === y.L.HANGOUT || L === y.L.GAMING ? s.channelId : L === y.L.EVENT ? s.event.channel_id : L === y.L.EMBEDDED_ACTIVITY ? s.embeddedActivities[0].channelId : null;
    return f.Z.getChannel(e)
  }), Y = (0, l.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(null == F ? void 0 : F.id)), {
    usersToShow: j,
    othersCount: W
  } = (0, C.QO)(null !== (n = null == F ? void 0 : F.id) && void 0 !== n ? n : "", _), {
    usersToShow: K
  } = (0, C.Es)(F), z = (0, C.ni)(s), q = function(e, t, n, r) {
    let {
      category: s
    } = e, o = (0, p.Z)(e), {
      usersToShow: _
    } = (0, C.Es)(o), d = (0, l.e7)([S.Z], () => s === y.L.HANGOUT ? S.Z.getIsPreviewLoading(t, e.channelId, e.streamUserIds[0]) : null);
    switch (s) {
      case y.L.GAMING:
        let {
          games: E
        } = e;
        if (null == E[0].application_id) return (0, i.jsx)(u.GameControllerIcon, {
          size: "md",
          color: "currentColor"
        });
        return (0, i.jsx)(O.Z, {
          game: c.Z.getApplication(E[0].application_id),
          size: "xl",
          className: w.gameIcon
        });
      case y.L.EVENT:
        if (_.length > 0) return (0, i.jsx)(g.Z, {
          guildId: t,
          users: _
        });
        return e.isStage ? (0, i.jsx)(D.Z, {
          className: w.imageIcon
        }) : (0, i.jsx)(v.Z, {
          className: w.imageIcon
        });
      case y.L.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: I
        } = e;
        if (null == I[0].applicationId) return (0, i.jsx)(u.ActivitiesIcon, {
          size: "md",
          color: "currentColor"
        });
        return (0, i.jsx)(O.Z, {
          game: r,
          size: "xl",
          className: w.gameIcon
        });
      case y.L.HANGOUT: {
        let {
          streamUserIds: r,
          userIds: s,
          channelHasVideo: o,
          isStage: l
        } = e, c = l ? _ : [];
        if (l) {
          if (0 === c.length) return (0, i.jsx)(D.Z, {
            className: w.imageIcon
          });
          return (0, i.jsx)(g.Z, {
            guildId: t,
            users: c
          })
        }
        if (r.length > 0) {
          let e = e => (0, i.jsx)(u.TextBadge, {
            text: G.Z.Messages.LIVE,
            color: a.Z.STATUS_DANGER,
            className: e
          });
          if (d) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Spinner, {
              className: w.streamPreview
            }), e(w.liveBadge)]
          });
          if (null != n) return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              src: n,
              alt: "",
              className: w.streamPreview
            }), e(w.liveBadge)]
          });
          let s = r.map(e => A.default.getUser(e)).filter(e => null != e);
          return (0, i.jsx)(g.Z, {
            guildId: t,
            users: s
          })
        }
        let E = s.map(e => A.default.getUser(e)).filter(e => null != e);
        return (0, i.jsx)(g.Z, {
          guildId: t,
          users: E
        })
      }
    }
  }(s, _, V, z), X = function(e, t) {
    let {
      category: n
    } = e, r = (0, C.FP)(n === y.L.HANGOUT ? null == e ? void 0 : e.userIds : []), s = (0, C.FP)(n === y.L.HANGOUT ? null == e ? void 0 : e.streamUserIds : []), a = (0, C.FP)(n === y.L.GAMING ? null == e ? void 0 : e.gameUserIds : []), l = (0, p.Z)(e), {
      hasChannelStatus: _
    } = (0, C.CE)(l), {
      usersToShow: c
    } = (0, C.Es)(l), d = (0, C.FP)(n === y.L.HANGOUT && e.isStage ? c.map(e => e.id) : []), E = new Set;
    n === y.L.EMBEDDED_ACTIVITY && e.embeddedActivities.forEach(e => {
      E = new Set([...E, ...e.userIds])
    });
    let I = (0, C.FP)(n === y.L.EMBEDDED_ACTIVITY ? [...E] : []);
    switch (n) {
      case y.L.HANGOUT: {
        if (_ && 0 === s.length) {
          let e = (0, C.K6)(r, t, !0),
            n = r.length - 1;
          return (0, i.jsxs)("div", {
            className: w.hangoutStatusTitleContainer,
            children: [(0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: o()(w.hangoutStatusUsername, w.ellipsis),
              children: e
            }), n > 0 && (0, i.jsx)(u.Heading, {
              color: "header-primary",
              variant: "heading-sm/semibold",
              className: w.hangoutStatusOthers,
              children: G.Z.Messages.USER_SUMMARY_AND_OTHERS.format({
                count: n
              })
            })]
          })
        }
        let n = (0, C.K6)(d.length > 0 ? d : s.length > 0 ? s : r, t);
        if (e.isStage) {
          var T, S;
          return null !== (S = null === (T = h.Z.getStageInstanceByChannel(e.channelId)) || void 0 === T ? void 0 : T.topic) && void 0 !== S ? S : n
        }
        return n
      }
      case y.L.EVENT:
        return e.event.name;
      case y.L.EMBEDDED_ACTIVITY:
        return (0, C.K6)(I, t);
      case y.L.GAMING:
        return (0, C.K6)(a, t);
      default:
        return null
    }
  }(s, _), Q = function(e, t, n) {
    var r, s, o;
    let {
      category: a
    } = e, l = (0, p.Z)(e), _ = k(e), {
      audienceCount: c
    } = (0, C.Es)(l), {
      channelStatus: d,
      hasChannelStatus: I
    } = (0, C.CE)(l);
    switch (a) {
      case y.L.GAMING:
        let {
          games: T, channelId: h
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.GameControllerIcon, {
            size: "md",
            color: "currentColor",
            className: w.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: 1 === T.length ? T[0].name : G.Z.Messages.MULTIPLE_GAMES_IN_CHANNEL.format({
              numGames: T.length
            })
          }), "•", null != _ && (0, i.jsx)(_, {
            className: w.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: null === (r = f.Z.getChannel(h)) || void 0 === r ? void 0 : r.name
          })]
        });
      case y.L.EVENT:
        let {
          event: S
        } = e, N = (0, C.NZ)(S), A = null == N ? void 0 : N.IconComponent, m = null == N ? void 0 : N.locationName;
        if (null != A && null != m) return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(A, {
            className: w.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: m
          }), null != c && c > 0 && (0, i.jsxs)(i.Fragment, {
            children: ["•", (0, i.jsx)(u.GroupIcon, {
              size: "md",
              color: "currentColor",
              className: w.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: c
            })]
          })]
        });
        return null;
      case y.L.EMBEDDED_ACTIVITY:
        let {
          embeddedActivities: O
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(u.ActivitiesIcon, {
            size: "md",
            color: "currentColor",
            className: w.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: 1 === O.length ? null == t ? void 0 : t.name : G.Z.Messages.MULTIPLE_ACTIVITIES_IN_CHANNEL.format({
              numActivities: O.length
            })
          }), "•", null != _ && (0, i.jsx)(_, {
            className: w.categoryIcon
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: null === (s = f.Z.getChannel(O[0].channelId)) || void 0 === s ? void 0 : s.name
          })]
        });
      case y.L.HANGOUT: {
        let {
          channelId: t
        } = e, r = I && null == n;
        return (0, i.jsx)(i.Fragment, {
          children: r ? (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: w.ellipsis,
            children: E.Z.parseVoiceChannelStatus(d, !0, {
              channelId: t
            })
          }) : (0, i.jsxs)(i.Fragment, {
            children: [null != _ && (0, i.jsx)(_, {
              className: w.categoryIcon
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: w.ellipsis,
              children: null === (o = f.Z.getChannel(t)) || void 0 === o ? void 0 : o.name
            }), I && null != n && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                className: w.ellipsis,
                children: E.Z.parseVoiceChannelStatus(d, !0, {
                  channelId: t
                })
              })]
            }), null != c && c > 0 && (0, i.jsxs)(i.Fragment, {
              children: ["•", (0, i.jsx)(u.GroupIcon, {
                size: "md",
                color: "currentColor",
                className: w.categoryIcon
              }), (0, i.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "text-secondary",
                children: c
              })]
            })]
          })
        })
      }
      default:
        return null
    }
  }(s, z, V), J = function(e) {
    let {
      category: t
    } = e, n = (0, p.Z)(e), {
      audienceCount: i
    } = (0, C.Es)(n);
    switch (t) {
      case y.L.EVENT:
        if (null != i) return [{
          icon: u.HeadphonesIcon,
          count: i
        }];
        return [];
      case y.L.HANGOUT:
        let {
          streamUserIds: r, userIds: s, channelId: o, isStage: a
        } = e;
        if (a) {
          var l;
          return [{
            icon: u.HeadphonesIcon,
            count: null !== (l = I.Z.getParticipantCount(o, T.pV.AUDIENCE)) && void 0 !== l ? l : 0
          }]
        }
        if (r.length > 0) return [{
          icon: u.GroupIcon,
          count: s.length > 0 ? s.length : null
        }];
        return [];
      case y.L.EMBEDDED_ACTIVITY:
        return [{
          icon: u.GroupIcon,
          count: e.voiceUsersCount > 0 ? e.voiceUsersCount : null
        }, {
          icon: u.ScreenArrowIcon,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      case y.L.GAMING:
        return [{
          icon: u.GroupIcon,
          count: e.voiceStates.length > 0 ? e.voiceStates.length : null
        }, {
          icon: u.ScreenArrowIcon,
          count: e.streamersCount > 0 ? e.streamersCount : null
        }];
      default:
        return []
    }
  }(s), $ = (0, C.$1)(s, _, R), ee = function(e, t, n) {
    var r;
    let {
      category: s
    } = e, o = null, a = s === y.L.EVENT;
    if (null == (o = a ? e.event.channel_id : s === y.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : e.channelId) && !a) return;
    let l = null != o && m.Z.isInChannel(o),
      _ = a && (e.event.entity_type === b.WX.EXTERNAL || e.event.entity_type === b.WX.NONE) ? G.Z.Messages.VIEW : l ? G.Z.Messages.GUILD_POPOUT_JOINED : G.Z.Messages.JOIN,
      c = (null === (r = f.Z.getChannel(o)) || void 0 === r ? void 0 : r.isGuildVocal()) && !N.Z.can(U.Plq.CONNECT, f.Z.getChannel(o)),
      d = (0, C.DE)(e, t),
      E = (0, i.jsxs)(u.Button, {
        size: u.Button.Sizes.MIN,
        innerClassName: w.joinButtonInner,
        color: u.Button.Colors.GREEN,
        disabled: l || c,
        onClick: i => {
          i.stopPropagation(), (0, C.ob)(e, t, n, C.pV.JOIN_BUTTON), null == d || d()
        },
        className: w.joinButton,
        children: [_, c && (0, i.jsx)(u.LockIcon, {
          size: "custom",
          color: "currentColor",
          width: 14,
          height: 14
        })]
      });
    return (0, i.jsx)("div", {
      className: w.joinButtonWhatWrapper,
      children: E
    })
  }(s, _, R), {
    hasChannelStatus: et
  } = (0, C.CE)(F), en = k(s), ei = L === y.L.HANGOUT && et && null == V, er = (null != Y || !!(null == F ? void 0 : F.isGuildStageVoice())) && K.length > 0, es = L === y.L.HANGOUT && (0 === s.streamUserIds.length || H) && !(null == F ? void 0 : F.isGuildStageVoice()), eo = L === y.L.EMBEDDED_ACTIVITY && s.streamersCount > 0 ? (0, i.jsxs)("div", {
    className: w.pill,
    children: [(0, i.jsx)(u.ScreenArrowIcon, {
      size: "md",
      color: "currentColor",
      className: w.pillIcon
    }), (0, i.jsx)(u.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: s.streamersCount
    })]
  }) : null;
  return (0, i.jsxs)(u.Clickable, {
    onClick: () => null == $ ? void 0 : $(),
    tag: "div",
    className: w.container,
    onMouseEnter: () => P(!0),
    onMouseLeave: () => P(!1),
    children: [(0, i.jsx)("div", {
      className: o()(w.image, {
        [w.streamContainer]: x && !H && !(null == F ? void 0 : F.isGuildStageVoice())
      }),
      children: q
    }), (0, i.jsxs)("div", {
      className: o()(w.content, ei && w.hangoutChannelStatusContent),
      children: [null != X && (0, i.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        className: 0 === J.length ? w.multiLineTitle : w.singleLineTitle,
        children: X
      }), null != Q && (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: w.subtitle,
        children: Q
      }), !(er || es) && !(null == F ? void 0 : F.isGuildStageVoice()) && j.length > 0 && (0, i.jsx)(B, {
        users: j,
        othersCount: W,
        extraPill: eo
      }), ei && (0, i.jsxs)(u.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        className: w.hangoutChannel,
        children: [null != en && (0, i.jsx)(en, {
          className: w.categoryIcon
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          className: w.ellipsis,
          children: null === (t = f.Z.getChannel(s.channelId)) || void 0 === t ? void 0 : t.name
        })]
      })]
    }), M && ee]
  })
}
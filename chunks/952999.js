"use strict";
n.r(t), n.d(t, {
  WelcomeMessageCTA: function() {
    return D
  },
  default: function() {
    return P
  }
}), n("222007"), n("424973");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("775560"),
  o = n("458960"),
  u = n("446674"),
  d = n("151426"),
  c = n("77078"),
  f = n("634634"),
  h = n("716241"),
  C = n("299285"),
  p = n("983444"),
  m = n("592407"),
  E = n("970700"),
  g = n("271938"),
  S = n("305961"),
  _ = n("697218"),
  T = n("461380"),
  A = n("36694"),
  M = n("659500"),
  I = n("701909"),
  N = n("773336"),
  v = n("299039"),
  L = n("172554"),
  R = n("49111"),
  x = n("188631"),
  y = n("782340"),
  O = n("658561");

function D(e) {
  let {
    className: t,
    iconUrl: n,
    icon: l,
    header: r,
    completed: o,
    onClick: u
  } = e, [d, h] = a.useState(!1), C = (0, f.default)(o);
  return a.useEffect(() => {
    null != C && o !== C && (h(!0), setTimeout(() => h(!1), 1e3))
  }, [o, C]), (0, s.jsxs)(c.Clickable, {
    className: i(t, O.card, {
      [O.completed]: o
    }),
    onClick: u,
    children: [null != l ? l : (0, s.jsx)("div", {
      className: O.icon,
      style: {
        backgroundImage: "url('".concat(n, "')")
      }
    }), (0, s.jsx)(c.Text, {
      color: "header-primary",
      className: i(O.cardTextContainer, O.cardHeader),
      variant: "text-sm/normal",
      children: r
    }), o ? (0, s.jsx)(A.default, {
      className: i(O.checkmark, {
        [O.animate]: d
      })
    }) : (0, s.jsx)(T.default, {
      className: O.arrow,
      direction: T.default.Directions.RIGHT
    })]
  })
}

function P(e) {
  let {
    channel: t
  } = e, l = (0, u.useStateFromStores)([S.default], () => null != t ? S.default.getGuild(t.getGuildId()) : null, [t]), f = null != l && v.default.extractTimestamp(l.id) < Date.now() - R.WELCOME_OLD_GUILD_AGE_THRESHOLD, T = (0, u.useStateFromStores)([g.default], () => (null == l ? void 0 : l.ownerId) === g.default.getId(), [l]), {
    canInvite: A,
    canManageGuild: P,
    canMessage: j
  } = (0, p.usePermissions)(t, l), b = (0, u.useStateFromStores)([_.default], () => {
    var e, t;
    return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
  }), {
    guildPopulated: F,
    guildMessaged: H,
    guildPersonalized: U
  } = (0, p.useCompletedStates)(l), {
    handleInvite: k,
    handleMessage: B,
    handlePersonalize: w,
    handleDownload: G,
    handleAddApplication: V
  } = function(e) {
    let t = a.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: x.AnalyticsActions.INVITE
        }), null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, s.jsx)(t, {
            ...n,
            guild: e,
            source: R.InstantInviteSources.CHANNEL_WELCOME,
            analyticsLocation: {
              section: R.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
          })
        })
      }, [e]),
      l = a.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: x.AnalyticsActions.SEND_MESSAGE
        }), M.ComponentDispatch.dispatch(R.ComponentActions.TEXTAREA_FOCUS, {
          highlight: !0,
          channelId: R.EMPTY_STRING_CHANNEL_ID
        })
      }, []),
      i = a.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: x.AnalyticsActions.PERSONALIZE_SERVER
        }), null != e && m.default.open(e.id, R.GuildSettingsSections.OVERVIEW, {
          section: R.AnalyticsSections.CHANNEL_WELCOME_CTA
        })
      }, [e]),
      r = a.useCallback(() => {
        h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: x.AnalyticsActions.DOWNLOAD
        }), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("649486").then(n.bind(n, "649486"));
          return t => (0, s.jsx)(e, {
            source: R.AnalyticsSections.CHANNEL_WELCOME_CTA,
            ...t
          })
        })
      }, []),
      o = a.useCallback(() => {
        null != e && (h.default.trackWithMetadata(R.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: x.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: x.AnalyticsActions.ADD_APP
        }), (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await n.el("881892").then(n.bind(n, "881892"));
          return n => {
            var a;
            return (0, s.jsx)(t, {
              guildId: null !== (a = e.id) && void 0 !== a ? a : "",
              ...n,
              analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            })
          }
        }))
      }, [e]);
    return {
      handleInvite: t,
      handleMessage: l,
      handlePersonalize: i,
      handleDownload: r,
      handleAddApplication: o
    }
  }(l), W = !(b || F || H || U), {
    titleAnimatedStyle: z,
    opacities: Z
  } = function(e) {
    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
      n = (0, r.useLazyValue)(() => new o.default.Value(0)),
      s = [];
    s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), s.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.useEffect(() => {
      o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
        toValue: 1,
        duration: 450
      }), o.default.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.default.stagger(100, [o.default.timing(s[0], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[1], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[2], {
        toValue: 1,
        duration: 300
      }), o.default.timing(s[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, s]);
    let l = e ? {
      transform: [{
        translateY: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["-20px", "0px"]
        })
      }],
      opacity: n
    } : {};
    return {
      titleAnimatedStyle: l,
      opacities: s
    }
  }(W), Y = (0, u.useStateFromStores)([C.default], () => C.default.getGuildApplicationIds(null == l ? void 0 : l.id)), K = Y.length > 0;
  if (a.useEffect(() => {
      var e;
      (0, E.fetchGuildIntegrationsApplications)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : R.EMPTY_STRING_GUILD_ID)
    }, [l]), null == l) return null;
  let q = [];
  !f && (A && q.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: Z[q.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("243826"),
      header: y.default.Messages.WELCOME_CTA_INVITE_TITLE,
      completed: F,
      onClick: k
    })
  }, "invite")), P && q.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: Z[q.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("215036"),
      header: y.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
      completed: U,
      onClick: w
    })
  }, "customize")), j && q.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: Z[q.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("505873"),
      header: y.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
      completed: H,
      onClick: B
    })
  }, "message")), (0, N.isWeb)() && q.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: Z[q.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("238032"),
      header: y.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
      completed: b,
      onClick: G
    })
  }, "download")), q.push((0, s.jsx)(o.default.div, {
    className: O.cardWrapper,
    style: W ? {
      opacity: Z[q.length]
    } : {},
    children: (0, s.jsx)(D, {
      iconUrl: n("356451"),
      header: y.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
      completed: K,
      onClick: V
    })
  }, "addapp")));
  let X = T ? y.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : y.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  f && (X = y.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let J = "".concat(I.default.getArticleURL(R.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, s.jsx)(L.default, {
    channelId: t.id,
    children: (0, s.jsx)("div", {
      className: O.container,
      children: (0, s.jsxs)("div", {
        className: O.inner,
        children: [(0, s.jsxs)(o.default.div, {
          style: z,
          children: [(0, s.jsx)(c.Heading, {
            className: O.titleName,
            variant: "heading-xxl/semibold",
            children: y.default.Messages.WELCOME_CTA_TITLE.format({
              guildName: l.name
            })
          }), (0, s.jsxs)(c.Text, {
            color: "header-secondary",
            className: i({
              [O.subtitle]: !0,
              [O.noChildren]: 0 === q.length
            }),
            variant: "text-sm/normal",
            children: [X, " ", q.length > 0 ? y.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
              guideURL: J
            }) : null]
          })]
        }), q]
      })
    })
  })
}
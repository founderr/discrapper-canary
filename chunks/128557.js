"use strict";
n.r(t), n.d(t, {
  WelcomeMessageCTA: function() {
    return O
  },
  default: function() {
    return P
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("207561"),
  o = n("748780"),
  u = n("442837"),
  d = n("704215"),
  c = n("481060"),
  f = n("699682"),
  h = n("367907"),
  m = n("812206"),
  p = n("644914"),
  E = n("434404"),
  C = n("330010"),
  g = n("314897"),
  S = n("430824"),
  _ = n("594174"),
  T = n("259580"),
  I = n("263704"),
  A = n("585483"),
  v = n("63063"),
  x = n("358085"),
  N = n("709054"),
  M = n("967128"),
  y = n("981631"),
  R = n("231873"),
  L = n("689938"),
  j = n("853540");

function O(e) {
  let {
    className: t,
    iconUrl: n,
    icon: s,
    header: r,
    completed: o,
    onClick: u
  } = e, [d, h] = l.useState(!1), m = (0, f.default)(o);
  return l.useEffect(() => {
    null != m && o !== m && (h(!0), setTimeout(() => h(!1), 1e3))
  }, [o, m]), (0, a.jsxs)(c.Clickable, {
    className: i()(t, j.card, {
      [j.completed]: o
    }),
    onClick: u,
    children: [null != s ? s : (0, a.jsx)("div", {
      className: j.icon,
      style: {
        backgroundImage: "url('".concat(n, "')")
      }
    }), (0, a.jsx)(c.Text, {
      color: "header-primary",
      className: i()(j.cardTextContainer, j.cardHeader),
      variant: "text-sm/normal",
      children: r
    }), o ? (0, a.jsx)(I.default, {
      className: i()(j.checkmark, {
        [j.animate]: d
      })
    }) : (0, a.jsx)(T.default, {
      className: j.arrow,
      direction: T.default.Directions.RIGHT
    })]
  })
}

function P(e) {
  let {
    channel: t
  } = e, s = (0, u.useStateFromStores)([S.default], () => null != t ? S.default.getGuild(t.getGuildId()) : null, [t]), f = null != s && N.default.extractTimestamp(s.id) < Date.now() - y.WELCOME_OLD_GUILD_AGE_THRESHOLD, T = (0, u.useStateFromStores)([g.default], () => (null == s ? void 0 : s.ownerId) === g.default.getId(), [s]), {
    canInvite: I,
    canManageGuild: P,
    canMessage: D
  } = (0, p.usePermissions)(t, s), b = (0, u.useStateFromStores)([_.default], () => {
    var e, t;
    return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0
  }), {
    guildPopulated: U,
    guildMessaged: F,
    guildPersonalized: w
  } = (0, p.useCompletedStates)(s), {
    handleInvite: k,
    handleMessage: H,
    handlePersonalize: G,
    handleDownload: B,
    handleAddApplication: V
  } = function(e) {
    let t = l.useCallback(() => {
        h.default.trackWithMetadata(y.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: R.AnalyticsActions.INVITE
        }), null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("7654"), n.e("1425")]).then(n.bind(n, "560114"));
          return n => (0, a.jsx)(t, {
            ...n,
            guild: e,
            source: y.InstantInviteSources.CHANNEL_WELCOME,
            analyticsLocation: {
              section: y.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
          })
        })
      }, [e]),
      s = l.useCallback(() => {
        h.default.trackWithMetadata(y.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: R.AnalyticsActions.SEND_MESSAGE
        }), A.ComponentDispatch.dispatch(y.ComponentActions.TEXTAREA_FOCUS, {
          highlight: !0,
          channelId: y.EMPTY_STRING_SNOWFLAKE_ID
        })
      }, []),
      i = l.useCallback(() => {
        h.default.trackWithMetadata(y.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: R.AnalyticsActions.PERSONALIZE_SERVER
        }), null != e && E.default.open(e.id, y.GuildSettingsSections.OVERVIEW, {
          section: y.AnalyticsSections.CHANNEL_WELCOME_CTA
        })
      }, [e]),
      r = l.useCallback(() => {
        h.default.trackWithMetadata(y.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: R.AnalyticsActions.DOWNLOAD
        }), (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, "431583"));
          return t => (0, a.jsx)(e, {
            source: y.AnalyticsSections.CHANNEL_WELCOME_CTA,
            ...t
          })
        })
      }, []);
    return {
      handleInvite: t,
      handleMessage: s,
      handlePersonalize: i,
      handleDownload: r,
      handleAddApplication: l.useCallback(() => {
        null != e && (h.default.trackWithMetadata(y.AnalyticEvents.SERVER_SETUP_CTA_CLICKED, {
          setup_type: R.AnalyticsSetupTypes.CHANNEL_WELCOME,
          action: R.AnalyticsActions.ADD_APP
        }), (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("77875")]).then(n.bind(n, "657300"));
          return n => {
            var l;
            return (0, a.jsx)(t, {
              guildId: null !== (l = e.id) && void 0 !== l ? l : "",
              ...n,
              analyticsType: d.DismissibleContent.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
            })
          }
        }))
      }, [e])
    }
  }(s), W = !(b || U || F || w), {
    titleAnimatedStyle: Y,
    opacities: z
  } = function(e) {
    let t = (0, r.useLazyValue)(() => new o.default.Value(0)),
      n = (0, r.useLazyValue)(() => new o.default.Value(0)),
      a = [];
    return a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), a.push((0, r.useLazyValue)(() => new o.default.Value(0))), l.useEffect(() => {
      o.default.stagger(300, [o.default.parallel([o.default.timing(n, {
        toValue: 1,
        duration: 450
      }), o.default.timing(t, {
        toValue: 1,
        duration: 450
      })]), o.default.stagger(100, [o.default.timing(a[0], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[1], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[2], {
        toValue: 1,
        duration: 300
      }), o.default.timing(a[3], {
        toValue: 1,
        duration: 300
      })])]).start()
    }, [n, t, a]), {
      titleAnimatedStyle: e ? {
        transform: [{
          translateY: t.interpolate({
            inputRange: [0, 1],
            outputRange: ["-20px", "0px"]
          })
        }],
        opacity: n
      } : {},
      opacities: a
    }
  }(W), K = (0, u.useStateFromStores)([m.default], () => m.default.getGuildApplicationIds(null == s ? void 0 : s.id)).length > 0;
  if (l.useEffect(() => {
      var e;
      (0, C.fetchGuildIntegrationsApplications)(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : y.EMPTY_STRING_SNOWFLAKE_ID)
    }, [s]), null == s) return null;
  let Z = [];
  !f && (I && Z.push((0, a.jsx)(o.default.div, {
    className: j.cardWrapper,
    style: W ? {
      opacity: z[Z.length]
    } : {},
    children: (0, a.jsx)(O, {
      iconUrl: n("538548"),
      header: L.default.Messages.WELCOME_CTA_INVITE_TITLE,
      completed: U,
      onClick: k
    })
  }, "invite")), P && Z.push((0, a.jsx)(o.default.div, {
    className: j.cardWrapper,
    style: W ? {
      opacity: z[Z.length]
    } : {},
    children: (0, a.jsx)(O, {
      iconUrl: n("753033"),
      header: L.default.Messages.WELCOME_CTA_PERSONALIZE_TITLE,
      completed: w,
      onClick: G
    })
  }, "customize")), D && Z.push((0, a.jsx)(o.default.div, {
    className: j.cardWrapper,
    style: W ? {
      opacity: z[Z.length]
    } : {},
    children: (0, a.jsx)(O, {
      iconUrl: n("15717"),
      header: L.default.Messages.WELCOME_CTA_MESSAGE_TITLE,
      completed: F,
      onClick: H
    })
  }, "message")), (0, x.isWeb)() && Z.push((0, a.jsx)(o.default.div, {
    className: j.cardWrapper,
    style: W ? {
      opacity: z[Z.length]
    } : {},
    children: (0, a.jsx)(O, {
      iconUrl: n("435921"),
      header: L.default.Messages.WELCOME_CTA_DOWNLOAD_TITLE,
      completed: b,
      onClick: B
    })
  }, "download")), Z.push((0, a.jsx)(o.default.div, {
    className: j.cardWrapper,
    style: W ? {
      opacity: z[Z.length]
    } : {},
    children: (0, a.jsx)(O, {
      iconUrl: n("881454"),
      header: L.default.Messages.WELCOME_CTA_APPS_RECOMMENDATION_TITLE,
      completed: K,
      onClick: V
    })
  }, "addapp")));
  let X = T ? L.default.Messages.WELCOME_CTA_SUBTITLE_OWNER : L.default.Messages.WELCOME_CTA_SUBTITLE_MEMBER;
  f && (X = L.default.Messages.WELCOME_CTA_SUBTITLE_EXISTING_SERVER);
  let q = "".concat(v.default.getArticleURL(y.HelpdeskArticles.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
  return (0, a.jsx)(M.default, {
    channelId: t.id,
    children: (0, a.jsx)("div", {
      className: j.container,
      children: (0, a.jsxs)("div", {
        className: j.inner,
        children: [(0, a.jsxs)(o.default.div, {
          style: Y,
          children: [(0, a.jsx)(c.Heading, {
            className: j.titleName,
            variant: "heading-xxl/semibold",
            children: L.default.Messages.WELCOME_CTA_TITLE.format({
              guildName: s.name
            })
          }), (0, a.jsxs)(c.Text, {
            color: "header-secondary",
            className: i()({
              [j.subtitle]: !0,
              [j.noChildren]: 0 === Z.length
            }),
            variant: "text-sm/normal",
            children: [X, " ", Z.length > 0 ? L.default.Messages.WELCOME_CTA_SUBTITLE_ACTION_WITH_GUIDE.format({
              guideURL: q
            }) : null]
          })]
        }), Z]
      })
    })
  })
}
"use strict";
t.r(l), t.d(l, {
  default: function() {
    return F
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  s = t("120356"),
  i = t.n(s),
  d = t("399606"),
  r = t("481060"),
  u = t("749210"),
  o = t("131388"),
  c = t("367907"),
  f = t("644080"),
  m = t("984370"),
  h = t("6025"),
  g = t("433355"),
  x = t("308570"),
  C = t("626135"),
  v = t("526120"),
  I = t("563534"),
  S = t("846121"),
  N = t("460347"),
  j = t("404488"),
  p = t("605276"),
  E = t("869764"),
  _ = t("919318"),
  M = t("150512"),
  b = t("981631"),
  A = t("176505"),
  T = t("689938"),
  H = t("253533"),
  R = t("19340");
let L = j.MIN_GUILD_HOME_PAGE_WIDTH + 300 + 64,
  D = n.memo(function(e) {
    let {
      guild: l
    } = e;
    return (0, a.jsxs)(m.default, {
      channelId: A.StaticChannelRoute.GUILD_HOME,
      guildId: l.id,
      className: i()(H.title, H.background),
      innerClassname: H.headerBarInner,
      children: [(0, a.jsx)(m.default.Icon, {
        icon: x.default,
        "aria-hidden": !0
      }), (0, a.jsxs)(m.default.Title, {
        children: [(0, a.jsx)(r.HiddenVisually, {
          children: l.name
        }), T.default.Messages.SERVER_GUIDE]
      })]
    })
  });

function F(e) {
  var l, t;
  let {
    guild: s,
    width: m
  } = e, x = (0, d.useStateFromStores)([g.default], () => g.default.getSection(A.StaticChannelRoute.GUILD_HOME)), [T, F] = n.useState(!1), [w, G] = n.useState(b.DEFAULT_CHAT_SIDEBAR_WIDTH), O = x === b.ChannelSections.SIDEBAR_CHAT, y = (0, r.useFocusJumpSection)(), U = (0, d.useStateFromStores)([I.default], () => I.default.getSettings(s.id)), k = null == U ? void 0 : U.welcomeMessage, B = (0, N.default)(s.id), P = !B && (null !== (t = null == U ? void 0 : null === (l = U.resourceChannels) || void 0 === l ? void 0 : l.length) && void 0 !== t ? t : 0) === 0, V = (0, o.default)("(max-width: 1300px)"), W = m - b.CHANNEL_SIDEBAR_WIDTH - w, z = O && W < L || V || P;
  return (n.useEffect(() => {
    if (U === I.NO_SETTINGS)(0, v.fetchGuildHomeSettings)(s.id);
    else if (null != U) {
      var e, l, t, a, n;
      C.default.track(b.AnalyticEvents.SERVER_GUIDE_VIEWED, {
        ...(0, c.collectGuildAnalyticsMetadata)(s.id),
        num_member_actions: null !== (t = null === (e = U.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0,
        num_member_actions_completed: Object.keys(null !== (a = S.default.getCompletedActions(s.id)) && void 0 !== a ? a : {}).length,
        num_resource_channels: null !== (n = null === (l = U.resourceChannels) || void 0 === l ? void 0 : l.length) && void 0 !== n ? n : 0
      })
    }
  }, [s.id, U]), n.useEffect(() => () => {
    h.default.closeChannelSidebar(A.StaticChannelRoute.GUILD_HOME)
  }, []), n.useEffect(() => {
    P && U !== I.NO_SETTINGS && u.default.escapeToDefaultChannel(s.id)
  }, [s.id, P, U]), P) ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(R.chat, H.background, {
        [R.threadSidebarOpen]: O,
        [R.threadSidebarFloating]: O && T
      }),
      children: [(0, a.jsx)(D, {
        guild: s
      }), (0, a.jsx)(r.AdvancedScrollerAuto, {
        ...y,
        children: (0, a.jsxs)("div", {
          className: i()(H.homeContainer, {
            [H.homeContainerCollapsed]: z
          }),
          children: [(0, a.jsx)("div", {
            className: H.maxWidthWrapper,
            children: (0, a.jsx)(f.default, {
              guild: s,
              titleClassName: V ? H.emptyHeaderTitle : void 0
            })
          }), (0, a.jsxs)("div", {
            className: i()(H.homeContent, H.maxWidthWrapper),
            children: [(0, a.jsxs)("div", {
              className: H.mainContent,
              children: [B && (0, a.jsx)(M.default, {
                guildId: s.id,
                welcomeMessage: k
              }), B && (0, a.jsx)(E.default, {
                guildId: s.id
              }), !B || z ? (0, a.jsx)(_.default, {
                guild: s,
                isNewMember: B
              }) : null]
            }), z ? null : (0, a.jsx)(p.default, {
              guild: s,
              isNewMember: B
            })]
          })]
        })
      })]
    }), O ? (0, a.jsx)(j.default, {
      pageWidth: m,
      onSidebarResize: (e, l) => {
        F(l), G(e)
      }
    }) : null]
  })
}
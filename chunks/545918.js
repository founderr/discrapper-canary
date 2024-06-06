"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  d = n("442837"),
  o = n("481060"),
  r = n("100527"),
  u = n("906732"),
  c = n("252618"),
  f = n("189432"),
  E = n("189357"),
  _ = n("473403"),
  h = n("984370"),
  I = n("703656"),
  S = n("171368"),
  T = n("433355"),
  A = n("592125"),
  N = n("984933"),
  x = n("430824"),
  m = n("944486"),
  g = n("514342"),
  C = n("158010"),
  R = n("241559"),
  M = n("575766"),
  D = n("305473"),
  L = n("937283"),
  v = n("440857"),
  p = n("707113"),
  b = n("981631"),
  j = n("176505"),
  G = n("50493"),
  O = n("689938"),
  k = n("94234"),
  B = n("19340");

function F(e) {
  let {
    guild: t,
    previousChannel: n
  } = e, s = O.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = O.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
  return (0, c.usePageTitle)({
    location: t.name,
    subsection: s
  }), (0, a.jsxs)(h.default, {
    className: k.header,
    innerClassname: k.__invalid_innerHeader,
    channelId: j.StaticChannelRoute.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: !0,
    toolbar: null != n ? (0, a.jsx)(o.Button, {
      className: k.returnButton,
      size: o.Button.Sizes.SMALL,
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      onClick: () => {
        null != n && (0, I.transitionToGuild)(t.id, n.id)
      },
      children: (0, a.jsx)(o.Text, {
        className: k.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: O.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == n ? null : (0, a.jsxs)(l.Fragment, {
            children: [(0, a.jsx)(_.ChannelItemIcon, {
              className: k.returnIcon,
              guild: t,
              channel: n
            }), (0, a.jsx)(g.default, {
              children: (0, a.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: n.name
              })
            })]
          }, n.id)
        })
      })
    }) : (0, a.jsx)("div", {}),
    children: [(0, a.jsx)(h.default.Icon, {
      icon: C.default,
      "aria-hidden": !0
    }), (0, a.jsx)(h.default.Title, {
      children: i
    })]
  })
}

function y(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(t)), {
    analyticsLocations: s
  } = (0, u.default)(r.default.MEMBER_SAFETY_PAGE), c = (0, R.useCanAccessMemberSafetyPage)(t), _ = (0, E.useCanAccessGuildMemberModView)(t, c), h = (0, d.useStateFromStores)([m.default], () => m.default.getLastSelectedChannelId(t)), g = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(h)), C = l.useRef(null);
  (0, M.useSubscribeToGuildMemberUpdates)(t), l.useEffect(() => {
    if (!c && null != n) {
      var e;
      let t = null === (e = N.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, I.transitionToGuild)(n.id, t)
    }
  }, [n, c]);
  let O = (0, d.useStateFromStores)([T.default], () => null != T.default.getGuildSidebarState(t), [t]),
    y = l.useCallback(e => {
      (0, E.canAccessGuildMemberModViewWithExperiment)(e.guildId, !0) ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, j.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: G.ModViewPanel.INFO
      }) : (0, S.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        sourceAnalyticsLocations: s,
        analyticsLocation: {
          section: b.AnalyticsSections.MEMBER_SAFETY_PAGE
        }
      })
    }, [s]);
  return null != n && c ? (0, a.jsxs)(u.AnalyticsLocationProvider, {
    value: s,
    children: [(0, a.jsxs)("div", {
      className: i()(B.chat, k.page, {
        [B.threadSidebarOpen]: O
      }),
      children: [(0, a.jsx)(F, {
        guild: n,
        previousChannel: g
      }), (0, a.jsx)(o.AdvancedScroller, {
        className: i()(k.scroller),
        ref: C,
        orientation: "vertical",
        children: (0, a.jsxs)("div", {
          className: i()(B.content, k.container),
          children: [(0, a.jsx)(D.default, {
            guild: n
          }), (0, a.jsx)(p.default, {
            guild: n,
            onMemberSelect: y
          })]
        })
      }), (0, a.jsx)(v.default, {
        guildId: n.id
      })]
    }), _ && (0, a.jsx)(L.default, {
      guildId: n.id
    })]
  }) : null
}
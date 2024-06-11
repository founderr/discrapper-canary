"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  d = n("442837"),
  o = n("481060"),
  u = n("100527"),
  r = n("906732"),
  c = n("252618"),
  E = n("189432"),
  _ = n("189357"),
  f = n("473403"),
  I = n("984370"),
  S = n("703656"),
  h = n("171368"),
  A = n("433355"),
  T = n("592125"),
  N = n("984933"),
  x = n("430824"),
  C = n("944486"),
  M = n("514342"),
  R = n("158010"),
  g = n("241559"),
  m = n("575766"),
  D = n("305473"),
  L = n("937283"),
  v = n("440857"),
  j = n("707113"),
  p = n("981631"),
  b = n("176505"),
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
  }), (0, l.jsxs)(I.default, {
    className: k.header,
    innerClassname: k.__invalid_innerHeader,
    channelId: b.StaticChannelRoute.MEMBER_SAFETY,
    guildId: t.id,
    hideSearch: !0,
    toolbar: null != n ? (0, l.jsx)(o.Button, {
      className: k.returnButton,
      size: o.Button.Sizes.SMALL,
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.PRIMARY,
      onClick: () => {
        null != n && (0, S.transitionToGuild)(t.id, n.id)
      },
      children: (0, l.jsx)(o.Text, {
        className: k.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: O.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)(f.ChannelItemIcon, {
              className: k.returnIcon,
              guild: t,
              channel: n
            }), (0, l.jsx)(M.default, {
              children: (0, l.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: n.name
              })
            })]
          }, n.id)
        })
      })
    }) : (0, l.jsx)("div", {}),
    children: [(0, l.jsx)(I.default.Icon, {
      icon: R.default,
      "aria-hidden": !0
    }), (0, l.jsx)(I.default.Title, {
      children: i
    })]
  })
}

function y(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([x.default], () => x.default.getGuild(t)), {
    analyticsLocations: s
  } = (0, r.default)(u.default.MEMBER_SAFETY_PAGE), c = (0, g.useCanAccessMemberSafetyPage)(t), f = (0, _.useCanAccessGuildMemberModView)(t, c), I = (0, d.useStateFromStores)([C.default], () => C.default.getLastSelectedChannelId(t)), M = (0, d.useStateFromStores)([T.default], () => T.default.getChannel(I)), R = a.useRef(null);
  (0, m.useSubscribeToGuildMemberUpdates)(t), a.useEffect(() => {
    if (!c && null != n) {
      var e;
      let t = null === (e = N.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
      (0, S.transitionToGuild)(n.id, t)
    }
  }, [n, c]);
  let O = (0, d.useStateFromStores)([A.default], () => null != A.default.getGuildSidebarState(t), [t]),
    y = a.useCallback(e => {
      (0, _.canAccessGuildMemberModViewWithExperiment)(e.guildId, !0) ? (0, E.openGuildMemberModViewSidebar)(e.guildId, e.userId, b.StaticChannelRoute.MEMBER_SAFETY, {
        modViewPanel: G.ModViewPanel.INFO
      }) : (0, h.openUserProfileModal)({
        userId: e.userId,
        guildId: e.guildId,
        sourceAnalyticsLocations: s,
        analyticsLocation: {
          section: p.AnalyticsSections.MEMBER_SAFETY_PAGE
        }
      })
    }, [s]);
  return null != n && c ? (0, l.jsxs)(r.AnalyticsLocationProvider, {
    value: s,
    children: [(0, l.jsxs)("div", {
      className: i()(B.chat, k.page, {
        [B.threadSidebarOpen]: O
      }),
      children: [(0, l.jsx)(F, {
        guild: n,
        previousChannel: M
      }), (0, l.jsx)(o.AdvancedScroller, {
        className: i()(k.scroller),
        ref: R,
        orientation: "vertical",
        children: (0, l.jsxs)("div", {
          className: i()(B.content, k.container),
          children: [(0, l.jsx)(D.default, {
            guild: n
          }), (0, l.jsx)(j.default, {
            guild: n,
            onMemberSelect: y
          })]
        })
      }), (0, l.jsx)(v.default, {
        guildId: n.id
      })]
    }), f && (0, l.jsx)(L.default, {
      guildId: n.id
    })]
  }) : null
}
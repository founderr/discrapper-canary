"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("873546"),
  i = a("442837"),
  r = a("481060"),
  o = a("355467"),
  u = a("270237"),
  d = a("252618"),
  c = a("423000"),
  f = a("200876"),
  E = a("674180"),
  h = a("38618"),
  _ = a("984370"),
  C = a("430824"),
  m = a("351402"),
  S = a("730647"),
  p = a("772021"),
  I = a("396828"),
  T = a("475413"),
  g = a("20967"),
  A = a("504762"),
  N = a("807152"),
  v = a("176505"),
  R = a("689938"),
  L = a("468653");

function O(e) {
  let {
    guildId: t
  } = e, a = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), O = (0, i.useStateFromStores)([h.default], () => h.default.isConnected()), M = (0, f.default)(t), P = (0, p.default)(t), x = (0, i.useStateFromStores)([m.default], () => m.default.isSubscriptionFetching), y = (0, S.useGroupListingsFetchContext)(), {
    shouldHideGuildPurchaseEntryPoints: D,
    restrictionsLoading: b
  } = (0, E.useShouldHideGuildPurchaseEntryPoints)(t), U = null == a || !y || x || b;
  (0, d.usePageTitle)({
    subsection: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == a ? void 0 : a.name
  }), (0, u.default)(l.isMobile ? "role-subscriptions-overview" : void 0);
  let j = O && (null == a || !(M || P) || D && !b);
  if (s.useEffect(() => {
      o.fetchSubscriptions()
    }, []), s.useEffect(() => {
      j && !l.isMobile && (0, c.handleInaccessiblePage)(t, v.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
    }, [t, j]), l.isMobile && j) {
    let e = null == a ? g.GuildRoleSubscriptionsOverviewErrorType.NOT_GUILD_MEMBER : g.GuildRoleSubscriptionsOverviewErrorType.GUILD_NOT_ELIGIBLE;
    return (0, n.jsx)(g.GuildRoleSubscriptionsOverviewErrorPage, {
      errorType: e
    })
  }
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsxs)(_.default, {
      toolbar: (0, n.jsx)(s.Fragment, {}),
      className: L.headerBar,
      children: [(0, n.jsx)(_.default.Icon, {
        icon: I.default,
        "aria-hidden": !0
      }), (0, n.jsx)(_.default.Title, {
        children: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, n.jsx)("div", {
      id: N.OVERVIEW_NOTICE_ROOT
    }), (0, n.jsx)("div", {
      className: L.content,
      children: M ? (0, n.jsx)(r.ScrollerNone, {
        className: L.scroller,
        children: (0, n.jsx)("div", {
          className: L.scrollerContent,
          children: U ? (0, n.jsx)(r.Spinner, {}) : (0, n.jsx)(T.default, {
            guild: a
          })
        })
      }) : (0, n.jsx)(A.default, {})
    })]
  })
}

function M(e) {
  let {
    guildId: t
  } = e;
  return (0, n.jsx)(S.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, n.jsx)(O, {
      guildId: t
    })
  })
}
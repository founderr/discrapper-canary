"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("394846"),
  i = n("446674"),
  r = n("77078"),
  o = n("850068"),
  u = n("516899"),
  d = n("69927"),
  c = n("657199"),
  f = n("250666"),
  E = n("465869"),
  h = n("619443"),
  _ = n("539938"),
  C = n("305961"),
  I = n("160299"),
  S = n("257869"),
  p = n("638779"),
  m = n("459736"),
  T = n("967251"),
  g = n("663831"),
  A = n("170185"),
  N = n("277860"),
  R = n("724210"),
  v = n("782340"),
  O = n("981239");

function L(e) {
  let {
    guildId: t
  } = e, n = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), L = (0, i.useStateFromStores)([h.default], () => h.default.isConnected()), M = (0, f.default)(t), P = (0, p.default)(t), D = (0, i.useStateFromStores)([I.default], () => I.default.isSubscriptionFetching), y = (0, S.useGroupListingsFetchContext)(), {
    shouldHideGuildPurchaseEntryPoints: x,
    restrictionsLoading: b
  } = (0, E.useShouldHideGuildPurchaseEntryPoints)(t), U = null == n || !y || D || b;
  (0, d.usePageTitle)({
    subsection: v.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    location: null == n ? void 0 : n.name
  }), (0, u.default)(l.isMobile ? "role-subscriptions-overview" : void 0);
  let G = L && (null == n || !(M || P) || x && !b);
  if (s.useEffect(() => {
      o.fetchSubscriptions()
    }, []), s.useEffect(() => {
      G && !l.isMobile && (0, c.handleInaccessiblePage)(t, R.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
    }, [t, G]), l.isMobile && G) {
    let e = null == n ? g.GuildRoleSubscriptionsOverviewErrorType.NOT_GUILD_MEMBER : g.GuildRoleSubscriptionsOverviewErrorType.GUILD_NOT_ELIGIBLE;
    return (0, a.jsx)(g.GuildRoleSubscriptionsOverviewErrorPage, {
      errorType: e
    })
  }
  return (0, a.jsxs)("div", {
    className: O.container,
    children: [(0, a.jsxs)(_.default, {
      toolbar: (0, a.jsx)(s.Fragment, {}),
      className: O.headerBar,
      children: [(0, a.jsx)(_.default.Icon, {
        icon: m.default,
        "aria-hidden": !0
      }), (0, a.jsx)(_.default.Title, {
        children: v.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })]
    }), (0, a.jsx)("div", {
      id: N.OVERVIEW_NOTICE_ROOT
    }), (0, a.jsx)("div", {
      className: O.content,
      children: M ? (0, a.jsx)(r.ScrollerNone, {
        className: O.scroller,
        children: (0, a.jsx)("div", {
          className: O.scrollerContent,
          children: U ? (0, a.jsx)(r.Spinner, {}) : (0, a.jsx)(T.default, {
            guild: n
          })
        })
      }) : (0, a.jsx)(A.default, {})
    })]
  })
}

function M(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(S.GroupListingsFetchContextProvider, {
    guildId: t,
    refetchOnMount: !0,
    children: (0, a.jsx)(L, {
      guildId: t
    })
  })
}
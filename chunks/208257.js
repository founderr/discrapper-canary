"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("616230"),
  u = s("430824"),
  o = s("693546"),
  d = s("246364"),
  c = s("98493"),
  E = s("985159"),
  I = s("328977"),
  f = s("412222"),
  T = s("223312"),
  R = s("571728"),
  _ = s("572940"),
  S = s("80487"),
  N = s("146463"),
  m = s("689938"),
  A = s("589247");

function M(e) {
  let {
    guildId: t
  } = e, s = l.useRef(null), [M, p] = l.useState((0, E.useSelectedApplicationTab)({
    guildId: t
  })), h = (0, f.useSelectedSortOrder)({
    guildId: t
  }), x = (0, I.useSelectedGuildJoinRequest)({
    guildId: t
  }), C = (0, R.useSubmittedGuildJoinRequestTotal)({
    guildId: t
  }), {
    guildJoinRequests: g
  } = (0, T.useSortedMemberApplications)({
    guildId: t,
    applicationStatus: "REVIEW_APPLICATION" === M ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : M,
    sortOrder: h
  }), {
    fetchNextPage: P
  } = (0, c.usePaginatedMemberApplications)({
    guildId: t,
    guildJoinRequests: g
  }), j = l.useRef(!1);
  !j.current && (j.current = !0, P(h, "REVIEW_APPLICATION" === M ? d.GuildJoinRequestApplicationStatuses.SUBMITTED : M));
  let G = l.useRef(!1);
  l.useEffect(() => {
    G.current = !0
  }, [h, M]), l.useEffect(() => {
    if (G.current && 0 !== g.length) {
      var e;
      G.current = !1, o.default.setSelectedGuildJoinRequest(t, g[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
    }
  }, [t, g, x]);
  let v = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== M) h !== e && (o.default.setSelectedSortOrder(t, e), await P(e, M))
    }, [M, h, t, P]),
    O = l.useCallback(async e => {
      if (M !== e) p(e), "REVIEW_APPLICATION" !== e && (o.default.setSelectedApplicationTab(t, e), o.default.setSelectedGuildJoinRequest(t, null), await P(h, e))
    }, [M, h, t, P]),
    D = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === M) return;
      let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await P(h, M)
    }, [M, h, P]),
    L = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t));
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      currentTab: M,
      onTabItemSelect: O,
      pendingGuildJoinRequestsTotal: C,
      showSetupTab: !0
    }), (0, a.jsx)("div", {
      className: A.content,
      children: "REVIEW_APPLICATION" === M ? null != L ? (0, a.jsx)(r.default, {
        guild: L
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: A.listControls,
          children: (0, a.jsx)(_.default, {
            className: A.sortSelect,
            sortOrder: h,
            onSortChange: v
          })
        }), (0, a.jsx)(n.Text, {
          className: A.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(N.default, {
          applicationStatus: M,
          guildJoinRequests: g,
          guildId: t,
          onScroll: D,
          listRef: s
        })]
      })
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(M, {
    guildId: t
  })
})
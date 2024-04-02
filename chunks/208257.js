"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  u = s("616230"),
  r = s("430824"),
  o = s("794358"),
  d = s("693546"),
  c = s("246364"),
  E = s("98493"),
  I = s("985159"),
  f = s("328977"),
  T = s("412222"),
  R = s("223312"),
  _ = s("571728"),
  S = s("572940"),
  N = s("80487"),
  A = s("146463"),
  m = s("981631"),
  M = s("689938"),
  h = s("589247");

function p(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsxs)("div", {
    className: h.previewContainer,
    children: [(0, a.jsx)(n.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      children: M.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
    }), (0, a.jsx)(n.Clickable, {
      onClick: () => {
        (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("49237"), s.e("99387"), s.e("52657")]).then(s.bind(s, "645264"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildId: t,
            isPreview: !0
          })
        })
      },
      children: (0, a.jsx)(n.Tooltip, {
        text: M.default.Messages.PREVIEW,
        children: e => (0, a.jsx)(o.default, {
          height: 24,
          width: 24,
          className: h.previewIcon,
          ...e
        })
      })
    })]
  })
}

function x(e) {
  var t;
  let {
    guildId: s
  } = e, o = l.useRef(null), [x, C] = l.useState((0, I.useSelectedApplicationTab)({
    guildId: s
  })), g = (0, T.useSelectedSortOrder)({
    guildId: s
  }), j = (0, f.useSelectedGuildJoinRequest)({
    guildId: s
  }), P = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: s
  }), {
    guildJoinRequests: G
  } = (0, R.useSortedMemberApplications)({
    guildId: s,
    applicationStatus: "REVIEW_APPLICATION" === x ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : x,
    sortOrder: g
  }), {
    fetchNextPage: v
  } = (0, E.usePaginatedMemberApplications)({
    guildId: s,
    guildJoinRequests: G
  }), O = l.useRef(!1);
  !O.current && (O.current = !0, v(g, "REVIEW_APPLICATION" === x ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : x));
  let L = l.useRef(!1);
  l.useEffect(() => {
    L.current = !0
  }, [g, x]), l.useEffect(() => {
    if (L.current && 0 !== G.length) {
      var e;
      L.current = !1, d.default.setSelectedGuildJoinRequest(s, G[0]), null === (e = o.current) || void 0 === e || e.scrollToTop()
    }
  }, [s, G, j]);
  let D = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== x) g !== e && (d.default.setSelectedSortOrder(s, e), await v(e, x))
    }, [x, g, s, v]),
    b = l.useCallback(async e => {
      if (x !== e) C(e), d.default.setSelectedGuildJoinRequest(s, null), "REVIEW_APPLICATION" !== e && (d.default.setSelectedApplicationTab(s, e), await v(g, e))
    }, [x, g, s, v]),
    B = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === x) return;
      let t = null === (e = o.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await v(g, x)
    }, [x, g, v]),
    J = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(s)),
    V = null !== (t = null == J ? void 0 : J.hasFeature(m.GuildFeatures.CLAN)) && void 0 !== t && t;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(N.default, {
      currentTab: x,
      onTabItemSelect: b,
      pendingGuildJoinRequestsTotal: P,
      showSetupTab: V
    }), (0, a.jsx)("div", {
      className: h.content,
      children: "REVIEW_APPLICATION" === x ? null != J ? (0, a.jsxs)(n.ScrollerThin, {
        children: [(0, a.jsx)(p, {
          guildId: s
        }), (0, a.jsx)(u.default, {
          guild: J,
          isInitiallyExpanded: !0,
          showHeader: !1,
          disableAnimation: !0
        })]
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: h.listControls,
          children: (0, a.jsx)(S.default, {
            className: h.sortSelect,
            sortOrder: g,
            onSortChange: D
          })
        }), (0, a.jsx)(n.Text, {
          className: h.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: M.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(A.default, {
          applicationStatus: x,
          guildJoinRequests: G,
          guildId: s,
          onScroll: B,
          listRef: o
        })]
      })
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(x, {
    guildId: t
  })
})
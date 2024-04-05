"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("616230"),
  u = s("430824"),
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
  m = s("146463"),
  A = s("981631"),
  M = s("689938"),
  h = s("589247");

function p(e) {
  let {
    guild: t
  } = e;
  return (0, a.jsxs)("div", {
    className: h.setupHeader,
    children: [(0, a.jsxs)("div", {
      className: h.previewContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        children: M.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
      }), (0, a.jsxs)(n.Button, {
        color: n.Button.Colors.TRANSPARENT,
        onClick: () => {
          (0, n.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("49237"), s.e("99387"), s.e("52657")]).then(s.bind(s, "645264"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: t.id,
              isPreview: !0
            })
          })
        },
        size: n.ButtonSizes.SMALL,
        "aria-label": M.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
        innerClassName: h.previewButton,
        children: [(0, a.jsx)(o.default, {}), M.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION]
      })]
    }), (0, a.jsx)(n.Text, {
      className: h.description,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: M.default.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
        guildName: t.name
      })
    })]
  })
}

function C(e) {
  var t;
  let {
    guildId: s
  } = e, o = l.useRef(null), [C, x] = l.useState((0, I.useSelectedApplicationTab)({
    guildId: s
  })), g = (0, T.useSelectedSortOrder)({
    guildId: s
  }), P = (0, f.useSelectedGuildJoinRequest)({
    guildId: s
  }), j = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: s
  }), {
    guildJoinRequests: v
  } = (0, R.useSortedMemberApplications)({
    guildId: s,
    applicationStatus: "REVIEW_APPLICATION" === C ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : C,
    sortOrder: g
  }), {
    fetchNextPage: G
  } = (0, E.usePaginatedMemberApplications)({
    guildId: s,
    guildJoinRequests: v
  }), O = l.useRef(!1);
  !O.current && (O.current = !0, G(g, "REVIEW_APPLICATION" === C ? c.GuildJoinRequestApplicationStatuses.SUBMITTED : C));
  let L = l.useRef(!1);
  l.useEffect(() => {
    L.current = !0
  }, [g, C]), l.useEffect(() => {
    if (L.current && 0 !== v.length && "REVIEW_APPLICATION" !== C) {
      var e;
      L.current = !1, d.default.setSelectedGuildJoinRequest(s, v[0]), null === (e = o.current) || void 0 === e || e.scrollToTop()
    }
  }, [s, v, P, C]);
  let D = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== C) g !== e && (d.default.setSelectedSortOrder(s, e), await G(e, C))
    }, [C, g, s, G]),
    b = l.useCallback(async e => {
      if (C !== e) x(e), d.default.setSelectedGuildJoinRequest(s, null), "REVIEW_APPLICATION" !== e && (d.default.setSelectedApplicationTab(s, e), await G(g, e))
    }, [C, g, s, G]),
    F = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === C) return;
      let t = null === (e = o.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await G(g, C)
    }, [C, g, G]),
    B = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(s)),
    V = null !== (t = null == B ? void 0 : B.hasFeature(A.GuildFeatures.CLAN)) && void 0 !== t && t;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(N.default, {
      currentTab: C,
      onTabItemSelect: b,
      pendingGuildJoinRequestsTotal: j,
      showSetupTab: V
    }), (0, a.jsx)("div", {
      className: h.content,
      children: "REVIEW_APPLICATION" === C ? null != B ? (0, a.jsx)(n.ScrollerThin, {
        children: (0, a.jsxs)("div", {
          className: h.scrollerContent,
          children: [(0, a.jsx)(p, {
            guild: B
          }), (0, a.jsx)(r.default, {
            guild: B,
            isInitiallyExpanded: !0,
            showHeader: !1,
            disableAnimation: !0
          })]
        })
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
        }), (0, a.jsx)(m.default, {
          applicationStatus: C,
          guildJoinRequests: v,
          guildId: s,
          onScroll: F,
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
  return (0, a.jsx)(C, {
    guildId: t
  })
})
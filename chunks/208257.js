"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("970606"),
  u = s("616230"),
  o = s("650774"),
  d = s("430824"),
  c = s("474333"),
  I = s("794358"),
  E = s("693546"),
  T = s("246364"),
  f = s("98493"),
  _ = s("985159"),
  R = s("328977"),
  S = s("412222"),
  N = s("223312"),
  m = s("571728"),
  M = s("572940"),
  A = s("80487"),
  C = s("146463"),
  h = s("981631"),
  x = s("689938"),
  p = s("134040");

function g(e) {
  let {
    guild: t
  } = e;
  return (0, a.jsxs)("div", {
    className: p.setupHeader,
    children: [(0, a.jsxs)("div", {
      className: p.previewContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        children: x.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
      }), (0, a.jsxs)(n.Button, {
        color: n.Button.Colors.TRANSPARENT,
        onClick: () => {
          (0, n.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("52657")]).then(s.bind(s, "645264"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: t.id,
              isPreview: !0
            })
          })
        },
        size: n.ButtonSizes.SMALL,
        "aria-label": x.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
        innerClassName: p.previewButton,
        children: [(0, a.jsx)(I.default, {}), x.default.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION]
      })]
    }), (0, a.jsx)(n.Text, {
      className: p.description,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: x.default.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
        guildName: t.name
      })
    })]
  })
}

function P(e) {
  var t, s;
  let {
    guildId: I
  } = e, P = l.useRef(null), [j, v] = l.useState((0, _.useSelectedApplicationTab)({
    guildId: I
  })), O = (0, S.useSelectedSortOrder)({
    guildId: I
  }), G = (0, R.useSelectedGuildJoinRequest)({
    guildId: I
  }), L = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: I
  })) && void 0 !== t ? t : 0, {
    guildJoinRequests: b
  } = (0, N.useSortedMemberApplications)({
    guildId: I,
    applicationStatus: "REVIEW_APPLICATION" === j ? T.GuildJoinRequestApplicationStatuses.SUBMITTED : j,
    sortOrder: O
  }), D = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(I), [I]), F = (0, i.useStateFromStores)([o.default], () => o.default.getMemberCount(I)), B = null != D && (null != F ? F : 0) >= D.maxMembers, {
    fetchNextPage: V
  } = (0, f.usePaginatedMemberApplications)({
    guildId: I,
    guildJoinRequests: b
  }), U = l.useRef(!1);
  !U.current && (U.current = !0, V(O, "REVIEW_APPLICATION" === j ? T.GuildJoinRequestApplicationStatuses.SUBMITTED : j));
  let J = l.useRef(!1);
  l.useEffect(() => {
    J.current = !0
  }, [O, j]), l.useEffect(() => {
    if (J.current && 0 !== b.length && "REVIEW_APPLICATION" !== j) {
      var e;
      J.current = !1, E.default.setSelectedGuildJoinRequest(I, b[0]), null === (e = P.current) || void 0 === e || e.scrollToTop()
    }
  }, [I, b, G, j]);
  let q = l.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== j) O !== e && (E.default.setSelectedSortOrder(I, e), await V(e, j))
    }, [j, O, I, V]),
    y = l.useCallback(async e => {
      if (j !== e) v(e), (0, r.trackClanApplicationNavigation)({
        guildId: I,
        source: h.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
        tab: e
      }), E.default.setSelectedGuildJoinRequest(I, null), "REVIEW_APPLICATION" !== e && (E.default.setSelectedApplicationTab(I, e), await V(O, e))
    }, [j, O, I, V]),
    w = l.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === j) return;
      let t = null === (e = P.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && await V(O, j)
    }, [j, O, V]),
    k = null !== (s = null == D ? void 0 : D.hasFeature(h.GuildFeatures.CLAN)) && void 0 !== s && s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      currentTab: j,
      onTabItemSelect: y,
      pendingGuildJoinRequestsTotal: L,
      showSetupTab: k
    }), (0, a.jsx)("div", {
      className: p.content,
      children: "REVIEW_APPLICATION" === j ? null != D ? (0, a.jsx)(n.ScrollerThin, {
        children: (0, a.jsxs)("div", {
          className: p.scrollerContent,
          children: [(0, a.jsx)(g, {
            guild: D
          }), (0, a.jsx)(u.default, {
            guild: D,
            isClanContext: !0
          })]
        })
      }) : null : (0, a.jsxs)(a.Fragment, {
        children: [B && (0, a.jsx)(c.default, {
          messageType: c.HelpMessageTypes.WARNING,
          textVariant: "text-sm/medium",
          className: p.headerWarning,
          children: x.default.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format({
            count: null == D ? void 0 : D.maxMembers
          })
        }), (0, a.jsx)("div", {
          className: p.listControls,
          children: (0, a.jsx)(M.default, {
            className: p.sortSelect,
            sortOrder: O,
            onSortChange: q
          })
        }), (0, a.jsx)(n.Text, {
          className: p.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: x.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, a.jsx)(C.default, {
          applicationStatus: j,
          guildJoinRequests: b,
          guildId: I,
          onScroll: w,
          listRef: P,
          atMaxMemberCapacity: B
        })]
      })
    })]
  })
}
t.default = l.memo(function(e) {
  let {
    guildId: t
  } = e;
  return (0, a.jsx)(P, {
    guildId: t
  })
})
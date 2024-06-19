a(47120);
var n = a(735250),
  t = a(470079),
  l = a(442837),
  r = a(481060),
  i = a(970606),
  o = a(616230),
  c = a(650774),
  I = a(430824),
  d = a(474333),
  u = a(693546),
  E = a(246364),
  T = a(98493),
  _ = a(985159),
  N = a(328977),
  R = a(412222),
  M = a(223312),
  C = a(571728),
  m = a(572940),
  A = a(80487),
  x = a(146463),
  h = a(981631),
  S = a(689938),
  P = a(467694);

function g(e) {
  let {
    guild: s
  } = e;
  return (0, n.jsxs)("div", {
    className: P.setupHeader,
    children: [(0, n.jsxs)("div", {
      className: P.previewContainer,
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-lg/bold",
        children: S.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
      }), (0, n.jsxs)(r.Button, {
        color: r.Button.Colors.TRANSPARENT,
        onClick: () => {
          (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("52657")]).then(a.bind(a, 645264));
            return a => (0, n.jsx)(e, {
              ...a,
              guildId: s.id,
              isPreview: !0
            })
          })
        },
        size: r.ButtonSizes.SMALL,
        "aria-label": S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION,
        innerClassName: P.previewButton,
        children: [(0, n.jsx)(r.EyeIcon, {
          size: "xs",
          color: "currentColor"
        }), S.Z.Messages.MEMBER_VERIFICATION_PREVIEW_APPLICATION]
      })]
    }), (0, n.jsx)(r.Text, {
      className: P.description,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: S.Z.Messages.CLAN_APPLICATION_SETUP_HEADER.format({
        guildName: s.name
      })
    })]
  })
}

function j(e) {
  var s, a;
  let {
    guildId: j
  } = e, Z = t.useRef(null), [v, f] = t.useState((0, _.z)({
    guildId: j
  })), O = (0, R.C)({
    guildId: j
  }), B = (0, N.L)({
    guildId: j
  }), L = null !== (s = (0, C.A)({
    guildId: j
  })) && void 0 !== s ? s : 0, {
    guildJoinRequests: D
  } = (0, M.j)({
    guildId: j,
    applicationStatus: "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v,
    sortOrder: O
  }), p = (0, l.e7)([I.Z], () => I.Z.getGuild(j), [j]), G = (0, l.e7)([c.Z], () => c.Z.getMemberCount(j)), b = null != p && (null != G ? G : 0) >= p.maxMembers, {
    fetchNextPage: U
  } = (0, T.m)({
    guildId: j,
    guildJoinRequests: D
  }), V = t.useRef(!1);
  !V.current && (V.current = !0, U(O, "REVIEW_APPLICATION" === v ? E.wB.SUBMITTED : v));
  let w = t.useRef(!1);
  t.useEffect(() => {
    w.current = !0
  }, [O, v]), t.useEffect(() => {
    if (w.current && 0 !== D.length && "REVIEW_APPLICATION" !== v) {
      var e;
      w.current = !1, u.Z.setSelectedGuildJoinRequest(j, D[0]), null === (e = Z.current) || void 0 === e || e.scrollToTop()
    }
  }, [j, D, B, v]);
  let F = t.useCallback(async e => {
      if ("REVIEW_APPLICATION" !== v) O !== e && (u.Z.setSelectedSortOrder(j, e), await U(e, v))
    }, [v, O, j, U]),
    k = t.useCallback(async e => {
      if (v !== e) {
        if (f(e), (0, i.Q2)({
            guildId: j,
            source: h.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            tab: e
          }), u.Z.setSelectedGuildJoinRequest(j, null), "REVIEW_APPLICATION" !== e) u.Z.setSelectedApplicationTab(j, e), await U(O, e)
      }
    }, [v, O, j, U]),
    y = t.useCallback(async () => {
      var e;
      if ("REVIEW_APPLICATION" === v) return;
      let s = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != s) s.scrollHeight - s.scrollTop - s.offsetHeight < 200 && await U(O, v)
    }, [v, O, U]),
    J = null !== (a = null == p ? void 0 : p.hasFeature(h.oNc.CLAN)) && void 0 !== a && a;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(A.Z, {
      currentTab: v,
      onTabItemSelect: k,
      pendingGuildJoinRequestsTotal: L,
      showSetupTab: J
    }), (0, n.jsx)("div", {
      className: P.content,
      children: "REVIEW_APPLICATION" === v ? null != p ? (0, n.jsx)(r.ScrollerThin, {
        children: (0, n.jsxs)("div", {
          className: P.scrollerContent,
          children: [(0, n.jsx)(g, {
            guild: p
          }), (0, n.jsx)(o.Z, {
            guild: p,
            isClanContext: !0
          })]
        })
      }) : null : (0, n.jsxs)(n.Fragment, {
        children: [b && (0, n.jsx)(d.Z, {
          messageType: d.Q.WARNING,
          textVariant: "text-sm/medium",
          className: P.headerWarning,
          children: S.Z.Messages.CLAN_MAX_MEMBER_LIMIT_WARNING.format({
            count: null == p ? void 0 : p.maxMembers
          })
        }), (0, n.jsx)("div", {
          className: P.listControls,
          children: (0, n.jsx)(m.Z, {
            className: P.sortSelect,
            sortOrder: O,
            onSortChange: F
          })
        }), (0, n.jsx)(r.Text, {
          className: P.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: S.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
        }), (0, n.jsx)(x.Z, {
          applicationStatus: v,
          guildJoinRequests: D,
          guildId: j,
          onScroll: y,
          listRef: Z,
          atMaxMemberCapacity: b
        })]
      })
    })]
  })
}
s.Z = t.memo(function(e) {
  let {
    guildId: s
  } = e;
  return (0, n.jsx)(j, {
    guildId: s
  })
})
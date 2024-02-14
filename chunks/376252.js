"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("70102"), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("316693"),
  o = s("446674"),
  d = s("77078"),
  u = s("900676"),
  c = s("957255"),
  E = s("697218"),
  _ = s("810567"),
  I = s("599110"),
  T = s("465305"),
  f = s("991170"),
  S = s("766419"),
  m = s("507453"),
  N = s("50693"),
  g = s("91816"),
  h = s("449804"),
  C = s("53948"),
  R = s("49111"),
  x = s("782340"),
  L = s("652789"),
  O = s("445494");

function p(e) {
  let {
    guild: t,
    role: s,
    locked: n
  } = e, i = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), u = l.useMemo(() => f.default.computePermissions({
    user: i,
    context: t
  }), [i, t]), c = l.useMemo(() => ({
    [s.id]: {
      ...s,
      permissions: f.default.NONE
    }
  }), [s]), _ = l.useMemo(() => f.default.computePermissions({
    user: i,
    context: t,
    roles: c
  }), [i, t, c]), I = !r.default.equals(u, _);
  return (0, a.jsx)("div", {
    className: L.clearButtonWrapper,
    children: (0, a.jsx)(d.Tooltip, {
      text: I ? x.default.Messages.HELP_CLEAR_PERMISSIONS : null,
      position: "top",
      color: d.Tooltip.Colors.RED,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(d.Button, {
          className: L.clearButton,
          size: d.Button.Sizes.TINY,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.LINK,
          onClick: () => (0, S.clearRolePermissions)(s.id),
          onMouseEnter: t,
          onMouseLeave: l,
          disabled: r.default.equals(s.permissions, f.default.NONE) || I || n,
          children: x.default.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
        })
      }
    })
  })
}

function A(e) {
  let {
    guild: t,
    role: s,
    specs: l,
    locked: n
  } = e;
  if (0 === l.length) return (0, a.jsxs)("div", {
    className: L.noResultsContainer,
    children: [(0, a.jsx)(m.default, {
      className: L.noResults
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: x.default.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
    })]
  });

  function i(e) {
    return c.default.can(e, t) ? !c.default.can(e, t, null, {
      [s.id]: {
        ...s,
        permissions: r.default.remove(s.permissions, e)
      }
    }) && x.default.Messages.HELP_SINGULAR_PERMISSION : x.default.Messages.HELP_MISSING_PERMISSION
  }
  return (0, a.jsxs)("div", {
    className: L.permissionsWrapper,
    children: [(0, a.jsx)(p, {
      guild: t,
      role: s,
      locked: n
    }), l.map((e, t) => (0, a.jsx)(u.default, {
      className: L.permissionsForm,
      spec: e,
      permissions: s.permissions,
      locked: n,
      onChange: (e, t) => {
        if ("string" == typeof t) throw Error("Unexpected string `allow`");
        (0, S.updateRolePermissions)(s.id, e, t)
      },
      permissionRender: i
    }, t))]
  })
}

function M(e) {
  let {
    guild: t,
    role: s,
    locked: n,
    setSelectedSection: r,
    initialSearchQuery: o
  } = e, [u, c] = l.useState(null != o ? o : ""), E = l.useMemo(() => T.default.generateGuildPermissionSpec(t), [t]), f = E.map(e => ({
    ...e,
    permissions: e.permissions.filter(e => {
      let t = u.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: S,
    headerRef: m
  } = (0, N.default)(0), {
    scrolledToTop: p,
    handleScroll: M
  } = (0, g.useScrolledToTop)(), D = l.useRef(!1);
  return l.useEffect(() => {
    !D.current && "" !== u.trimStart() && (I.default.track(R.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Permissions"
    }), D.current = !0)
  }, [u]), (0, a.jsx)(d.AdvancedScrollerAuto, {
    className: L.scroller,
    style: {
      scrollPaddingTop: S
    },
    onScroll: M,
    children: (0, a.jsxs)("div", {
      className: O.contentWidth,
      children: [(0, a.jsxs)("div", {
        className: i(O.header, O.stickyHeader, {
          [O.stickyHeaderElevated]: !p
        }),
        ref: m,
        children: [(0, a.jsx)(g.default, {
          guild: t,
          role: s,
          selectedSection: C.GuildSettingsRoleEditSections.PERMISSIONS,
          setSelectedSection: r
        }), (0, a.jsx)("div", {
          className: L.noticeContainer,
          children: (0, a.jsx)(h.default, {
            role: s
          })
        }), (0, a.jsx)("div", {
          className: L.searchContainer,
          children: (0, a.jsx)(_.default, {
            size: _.default.Sizes.MEDIUM,
            query: u,
            onChange: c,
            onClear: () => c(""),
            placeholder: x.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
            "aria-label": x.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
          })
        })]
      }), (0, a.jsx)(A, {
        guild: t,
        role: s,
        specs: f,
        locked: n
      })]
    })
  })
}
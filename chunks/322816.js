"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("411104"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("149765"),
  o = s("442837"),
  d = s("481060"),
  u = s("144991"),
  c = s("496675"),
  E = s("594174"),
  _ = s("626135"),
  I = s("233608"),
  T = s("700785"),
  S = s("764260"),
  f = s("631969"),
  m = s("95242"),
  N = s("420966"),
  g = s("275296"),
  h = s("203377"),
  C = s("981631"),
  R = s("689938"),
  x = s("318745"),
  L = s("585512");

function O(e) {
  let {
    guild: t,
    role: s,
    locked: n
  } = e, i = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), u = l.useMemo(() => T.computePermissions({
    user: i,
    context: t
  }), [i, t]), c = l.useMemo(() => ({
    [s.id]: {
      ...s,
      permissions: T.NONE
    }
  }), [s]), _ = l.useMemo(() => T.computePermissions({
    user: i,
    context: t,
    roles: c
  }), [i, t, c]), I = !r.equals(u, _);
  return (0, a.jsx)("div", {
    className: x.clearButtonWrapper,
    children: (0, a.jsx)(d.Tooltip, {
      text: I ? R.default.Messages.HELP_CLEAR_PERMISSIONS : null,
      position: "top",
      color: d.Tooltip.Colors.RED,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(d.Button, {
          className: x.clearButton,
          size: d.Button.Sizes.TINY,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.LINK,
          onClick: () => (0, S.clearRolePermissions)(s.id),
          onMouseEnter: t,
          onMouseLeave: l,
          disabled: r.equals(s.permissions, T.NONE) || I || n,
          children: R.default.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
        })
      }
    })
  })
}

function p(e) {
  let {
    guild: t,
    role: s,
    specs: l,
    locked: n
  } = e;
  if (0 === l.length) return (0, a.jsxs)("div", {
    className: x.noResultsContainer,
    children: [(0, a.jsx)(f.default, {
      className: x.noResults
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: R.default.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
    })]
  });

  function i(e) {
    return c.default.can(e, t) ? !c.default.can(e, t, null, {
      [s.id]: {
        ...s,
        permissions: r.remove(s.permissions, e)
      }
    }) && R.default.Messages.HELP_SINGULAR_PERMISSION : R.default.Messages.HELP_MISSING_PERMISSION
  }
  return (0, a.jsxs)("div", {
    className: x.permissionsWrapper,
    children: [(0, a.jsx)(O, {
      guild: t,
      role: s,
      locked: n
    }), l.map((e, t) => (0, a.jsx)(u.default, {
      className: x.permissionsForm,
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

function A(e) {
  let {
    guild: t,
    role: s,
    locked: n,
    setSelectedSection: r,
    initialSearchQuery: o
  } = e, [u, c] = l.useState(null != o ? o : ""), E = l.useMemo(() => I.default.generateGuildPermissionSpec(t), [t]).map(e => ({
    ...e,
    permissions: e.permissions.filter(e => {
      let t = u.trimStart().toLowerCase();
      return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
    })
  })).filter(e => e.permissions.length > 0), {
    headerHeight: T,
    headerRef: S
  } = (0, m.default)(0), {
    scrolledToTop: f,
    handleScroll: O
  } = (0, N.useScrolledToTop)(), A = l.useRef(!1);
  return l.useEffect(() => {
    !A.current && "" !== u.trimStart() && (_.default.track(C.AnalyticEvents.SEARCH_STARTED, {
      search_type: "Permissions"
    }), A.current = !0)
  }, [u]), (0, a.jsx)(d.AdvancedScrollerAuto, {
    className: x.scroller,
    style: {
      scrollPaddingTop: T
    },
    onScroll: O,
    children: (0, a.jsxs)("div", {
      className: L.contentWidth,
      children: [(0, a.jsxs)("div", {
        className: i()(L.header, L.stickyHeader, {
          [L.stickyHeaderElevated]: !f
        }),
        ref: S,
        children: [(0, a.jsx)(N.default, {
          guild: t,
          role: s,
          selectedSection: h.GuildSettingsRoleEditSections.PERMISSIONS,
          setSelectedSection: r
        }), (0, a.jsx)("div", {
          className: x.noticeContainer,
          children: (0, a.jsx)(g.default, {
            role: s
          })
        }), (0, a.jsx)("div", {
          className: x.searchContainer,
          children: (0, a.jsx)(d.SearchBar, {
            size: d.SearchBar.Sizes.MEDIUM,
            query: u,
            onChange: c,
            onClear: () => c(""),
            placeholder: R.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
            "aria-label": R.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
          })
        })]
      }), (0, a.jsx)(p, {
        guild: t,
        role: s,
        specs: E,
        locked: n
      })]
    })
  })
}
t.r(s), t.d(s, {
  default: function() {
    return p
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  n = t(120356),
  i = t.n(n),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  d = t(481060),
  u = t(749210),
  h = t(430824),
  C = t(285952),
  m = t(695464),
  M = t(399860),
  b = t(335049),
  x = t(689079),
  I = t(689938),
  g = t(977043);

function p(e) {
  let {
    editPermissions: s,
    guildId: t,
    hasMemberSearch: n,
    headerText: r,
    onClose: p,
    overwrittenKeys: N,
    search: k,
    searchPlaceholderText: S,
    selectedPermissionCount: j,
    transitionState: E
  } = e, _ = (0, c.e7)([h.Z], () => h.Z.getGuild(t), [t]);
  o()(null != _, "");
  let [A, T] = a.useState(null), {
    query: y,
    results: Z,
    setQuery: R
  } = k(t), [f, O] = a.useState({}), B = a.useMemo(() => Object.keys(f).length, [f]), D = B + j >= x._n, v = a.useMemo(() => Z.filter(e => {
    let s = (0, M.rE)(e.id, e.type);
    return !N.includes(s)
  }), [N, Z]), L = a.useCallback((e, s) => {
    O(t => {
      let l = (0, M.rE)(e, s),
        a = {
          ...t
        };
      return l in t ? delete a[l] : !D && (a[l] = {
        id: e,
        permission: !0,
        type: s
      }), a
    })
  }, [D, O]), P = a.useCallback(() => {
    s(f, []), p()
  }, [s, p, f]);
  a.useEffect(() => () => clearTimeout(A), [A]);
  let w = a.useCallback(e => {
      R(e), n && T(s => (clearTimeout(s), 0 === e.length) ? null : setTimeout(() => {
        u.Z.requestMembers(t, e, 200, !1)
      }, 500))
    }, [t, n, R, T]),
    H = a.useCallback(e => {
      let s = v[e],
        t = (0, M.rE)(s.id, s.type),
        a = t in f,
        n = D && !a;
      return (0, l.jsx)("div", {
        className: g.item,
        children: (0, l.jsx)(d.Checkbox, {
          type: d.Checkbox.Types.INVERTED,
          className: i()({
            [g.checkboxItemDisabled]: n
          }),
          disabled: n,
          value: a,
          onChange: () => L(s.id, s.type),
          children: (0, l.jsx)(b.Z, {
            guild: _,
            id: s.id,
            type: s.type,
            isLocked: !1
          })
        })
      }, t)
    }, [v, _, D, L, f]);
  return a.useEffect(() => {
    u.Z.requestMembers(t, void 0, 200, !1)
  }, [t]), (0, l.jsxs)(d.ModalRoot, {
    "aria-label": I.Z.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
    transitionState: E,
    children: [(0, l.jsxs)(d.ModalHeader, {
      separator: !1,
      direction: C.Z.Direction.VERTICAL,
      children: [(0, l.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: g.header,
        children: r
      }), D ? (0, l.jsx)(d.Heading, {
        variant: "heading-sm/medium",
        color: "text-danger",
        children: I.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX
      }) : null]
    }), (0, l.jsxs)(d.ModalContent, {
      className: g.modalContent,
      children: [(0, l.jsx)(d.SearchBar, {
        className: g.searchBar,
        query: y,
        placeholder: S,
        "aria-label": S,
        onChange: w,
        onClear: () => R(""),
        size: d.SearchBar.Sizes.MEDIUM
      }), (0, l.jsx)(m.Z, {
        role: "listbox",
        renderRow: H,
        rowCount: v.length,
        rowCountBySection: [v.length],
        rowHeight: 36,
        className: g.__invalid_list
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        type: "submit",
        onClick: P,
        disabled: 0 === B,
        children: I.Z.Messages.ADD
      }), (0, l.jsx)(d.Button, {
        onClick: p,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        children: I.Z.Messages.CANCEL
      })]
    })]
  })
}